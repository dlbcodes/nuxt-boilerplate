import { PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

export default defineEventHandler(async (event) => {
	const user = await requireAuthUser(event)

	const body = await readBody(event)
	const { type, contentType, fileSize } = body

	// Validate input
	if (!type || !["avatar", "cover"].includes(type)) {
		throw createError({
			statusCode: 400,
			message: "Invalid type. Must be 'avatar' or 'cover'"
		})
	}

	if (!contentType || !contentType.startsWith('image/')) {
		throw createError({
			statusCode: 400,
			message: "Invalid content type. Must be an image"
		})
	}

	if (fileSize && fileSize > 5 * 1024 * 1024) { // 5MB limit
		throw createError({
			statusCode: 400,
			message: "File too large. Maximum size is 5MB"
		})
	}

	// Generate unique filename
	const timestamp = Date.now()
	const randomId = Math.random().toString(36).substring(2, 15)
	const fileExtension = contentType.split('/')[1] || 'jpg'
	const fileName = `${type}-${user.id}-${timestamp}-${randomId}.${fileExtension}`
	const fileKey = `${user.id}/avatar/${fileName}`

	try {
		// Use shared S3 client
		const s3 = getS3Client()

		// Create S3 command for upload
		const command = new PutObjectCommand({
			Bucket: process.env.AWS_BUCKET_NAME,
			Key: fileKey,
			ContentType: contentType,
			CacheControl: "max-age=31536000", // 1 year
			Metadata: {
				userId: user.id,
				uploadType: type,
				timestamp: timestamp.toString()
			}
		})

		// Generate presigned URL (expires in 5 minutes)
		const presignedUrl = await getSignedUrl(s3, command, {
			expiresIn: 300
		})

		// CloudFront URL for serving
		const publicUrl = `${process.env.CLOUDFRONT_URL}/${fileKey}`

		return {
			success: true,
			data: {
				presignedUrl,
				fileKey,
				fileName,
				publicUrl,
				expiresIn: 300
			}
		}

	} catch (error) {
		console.error('Failed to generate presigned URL:', error)
		throw createError({
			statusCode: 500,
			message: "Failed to generate upload URL"
		})
	}
})
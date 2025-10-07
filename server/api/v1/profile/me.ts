import { prisma } from "~~/server/utils/prisma";
import { requireAuthUser } from "~~/server/utils/auth";
import { defineEventHandler, readBody, sendError, createError } from "h3";
import { z } from "zod";


// Validation schema for updates
const updateProfileSchema = z.object({
	name: z.string().min(1).optional(),
	avatar: z.string().nullable().optional(),
	notifications: z.record(z.string(), z.any()).nullable().optional(),
});

/**
 * Validate Profile Update Payload
 */
const validateUpdatePayload = async (event: any) => {
	const body = await readBody(event);
	const validatedData = updateProfileSchema.safeParse(body);
	if (!validatedData.success) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid data.",
			data: validatedData.error.format(),
		});
	}
	return validatedData.data;
};

/**
 * Fetch the Authenticated User's Profile
 */
const fetchMyProfile = async (userId: string) => {
	const profile = await prisma.profile.findUnique({
		where: { id: userId },
	});
	if (!profile) {
		throw createError({
			statusCode: 404,
			statusMessage: "Profile not found.",
		});
	}
	return profile;
};

/**
 * Update the Authenticated User's Profile.
 * If data.social is provided, update it partially.
 */
const updateMyProfile = async (userId: string, data: any) => {
	if (!data || Object.keys(data).length === 0) {
		console.log("No data provided for update. Exiting.");
		return null;
	}

	// Update the rest of the profile fields
	return await prisma.profile.update({
		where: { id: userId },
		data: {
			...data,
			updatedAt: new Date(),
		},
	});
};

/**
 * Main Handler for `/profile/me`
 */
export default defineEventHandler(async (event) => {
	console.log('aqui no me')

	const method = event.node.req.method;
	try {
		// const user = await authenticateUser(event);
		// Authenticate the user via Supabase
		const user = await requireAuthUser(event);

		if (method === "GET") {
			const profile = await fetchMyProfile(user.id);
			return profile;
		} else if (method === "PATCH") {
			console.log("in ptach me");
			const validatedData = await validateUpdatePayload(event);

			const updatedProfile = await updateMyProfile(
				user.id,
				validatedData
			);
			return updatedProfile;
		} else {
			throw createError({
				statusCode: 405,
				statusMessage: "Method not allowed.",
			});
		}
	} catch (error) {
		return sendError(event, error as Error);
	}
});

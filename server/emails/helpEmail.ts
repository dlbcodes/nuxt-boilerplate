export function helpEmail(name?: string) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 24px; background: #f9fafb; color: #111;">
      <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);">
        <div style="padding: 24px; text-align: center; border-bottom: 1px solid #eee;">
          <img
            src="https://d2czu5iz2w7c42.cloudfront.net/Graphiqo.png"
            alt="Graphiqo Logo"
            style="height: 28px; display: block; margin: 0 auto"
          />
        </div>

        <div style="padding: 24px">
          <h2 style="margin: 0 0 16px">Hi ${name},</h2>
          <p style="margin: 0 0 12px">Thanks for joining the waitlist! 🎉</p>
          <p style="margin: 0 0 12px">We’ll let you know as soon as we’re ready to onboard you.</p>
          <p style="margin: 0">Stay tuned!</p>
        </div>

        <div style="padding: 24px; text-align: center; border-top: 1px solid #eee; background: #f4f4f4;">
          <p style="font-size: 14px; margin: 0 0 12px">Follow us:</p>
          <div style="display: inline-flex; gap: 12px"></div>
          <p style="font-size: 12px; color: #999; margin-top: 16px">
            © ${new Date().getFullYear()} Graphiqo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  `
}

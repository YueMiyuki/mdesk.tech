import { NextResponse } from "next/server"

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const ipSubmissions: Record<string, number> = {} // Store IP -> timestamp

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip"

    // Check rate limit
    const now = Date.now()
    const lastSubmission = ipSubmissions[ip] || 0
    const timeElapsed = now - lastSubmission

    if (lastSubmission && timeElapsed < RATE_LIMIT_WINDOW) {
      const minutesRemaining = Math.ceil((RATE_LIMIT_WINDOW - timeElapsed) / (60 * 1000))
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: `Please wait ${minutesRemaining} minute${minutesRemaining > 1 ? "s" : ""} before submitting another message.`,
        },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("Discord webhook URL not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Format the message for Discord
    const discordMessage = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0x6366f1, // Indigo color
          fields: [
            {
              name: "Name",
              value: name,
            },
            {
              name: "Email",
              value: email,
            },
            {
              name: "Subject",
              value: subject || "No subject provided",
            },
            {
              name: "Message",
              value: message,
            },
            {
              name: "IP Address",
              value: ip,
            },
            {
              name: "Timestamp",
              value: new Date().toISOString(),
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "mdesk.tech Contact Form",
          },
        },
      ],
    }

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.statusText}`)
    }

    ipSubmissions[ip] = now

    if (Math.random() < 0.1) {
      const cutoff = now - RATE_LIMIT_WINDOW
      for (const storedIp in ipSubmissions) {
        if (ipSubmissions[storedIp] < cutoff) {
          delete ipSubmissions[storedIp]
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending message to Discord:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}


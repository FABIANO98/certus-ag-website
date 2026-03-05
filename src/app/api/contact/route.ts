import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter: max 5 submissions per IP per hour
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// Email format validation
// ---------------------------------------------------------------------------
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    // Determine caller IP (Vercel sets x-forwarded-for; fallback to
    // x-real-ip or a generic key for local development).
    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate-limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Zu viele Anfragen. Bitte versuchen Sie es in einer Stunde erneut.",
        },
        { status: 429 },
      );
    }

    // Parse body
    const body = await request.json();
    const { name, email, telefon, betreff, nachricht } = body as {
      name?: string;
      email?: string;
      telefon?: string;
      betreff?: string;
      nachricht?: string;
    };

    // Required-field validation
    if (!name?.trim() || !email?.trim() || !betreff?.trim() || !nachricht?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail, Betreff, Nachricht).",
        },
        { status: 400 },
      );
    }

    // Email format validation
    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        },
        { status: 400 },
      );
    }

    // ------------------------------------------------------------------
    // In production you would send a notification email here, e.g. via
    // Resend (https://resend.com) which integrates nicely with Vercel:
    //
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ ... });
    //
    // For now we simply log the submission and return success.
    // ------------------------------------------------------------------
    console.log("[Contact Form Submission]", {
      name: name.trim(),
      email: email.trim(),
      telefon: telefon?.trim() || "–",
      betreff: betreff.trim(),
      nachricht: nachricht.trim(),
      ip,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error:
          "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    );
  }
}

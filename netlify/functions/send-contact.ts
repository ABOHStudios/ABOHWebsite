const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  EMAILJS_PRIVATE_KEY,
  CONTACT_RECIPIENT_EMAIL = "hello@aboh.studio",
} = process.env;

const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sanitize = (value: string, max = 2000) => value?.toString().trim().slice(0, max) ?? "";

const jsonResponse = (statusCode: number, body: object) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
  body: JSON.stringify(body),
});

type NetlifyHandler = (event: {
  httpMethod: string;
  body: string | null;
}) => Promise<{
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}>;

export const handler: NetlifyHandler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
    return jsonResponse(500, { error: "Email service not configured" });
  }

  let payload: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
    honeypot?: string;
  };

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON payload" });
  }

  const honeypot = sanitize(payload.honeypot ?? "");
  if (honeypot) {
    // Silently accept bot submissions.
    return jsonResponse(202, { ok: true });
  }

  const name = sanitize(payload.name ?? "", 120);
  const email = sanitize(payload.email ?? "", 160);
  const company = sanitize(payload.company ?? "", 180);
  const message = sanitize(payload.message ?? "", 4000);

  if (!name || !email || !message) {
    return jsonResponse(400, { error: "Missing required fields" });
  }

  if (!validateEmail(email)) {
    return jsonResponse(400, { error: "Invalid email address" });
  }

  const templateParams = {
    name,
    from_name: name,
    email,
    from_email: email,
    company: company || "N/A",
    message,
    title: "Website contact",
    to_email: CONTACT_RECIPIENT_EMAIL,
  };

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      accessToken: EMAILJS_PRIVATE_KEY,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("EmailJS error", errorText);
    return jsonResponse(502, { error: "Unable to send message right now" });
  }

  return jsonResponse(200, { ok: true });
};

import { createServerFn } from "@tanstack/react-start";

export type EnquiryInput = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  address?: string;
  preferredTime?: string;
  preferredDate?: string;
  message?: string;
};

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: EnquiryInput) => {
    if (!data || typeof data !== "object") throw new Error("Invalid payload");
    if (!data.name || data.name.length < 2 || data.name.length > 120) throw new Error("Name required");
    if (!data.phone || data.phone.length < 6 || data.phone.length > 40) throw new Error("Phone required");
    if (data.email && data.email.length > 200) throw new Error("Email too long");
    if (data.message && data.message.length > 4000) throw new Error("Message too long");
    return data;
  })
  .handler(async ({ data }) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const rows: Array<[string, string | undefined]> = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Service", data.service],
      ["Address", data.address],
      ["Preferred Time", data.preferredTime],
      ["Preferred Date", data.preferredDate],
    ];
    const rowsHtml = rows
      .filter(([, v]) => v && String(v).trim().length > 0)
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#64748b;font:600 12px/1.4 Arial;text-transform:uppercase;letter-spacing:.06em">${esc(k)}</td><td style="padding:6px 0;color:#0f172a;font:400 14px/1.5 Arial">${esc(String(v))}</td></tr>`) 
      .join("");

    const messageHtml = data.message
      ? `<div style="margin-top:16px;padding:14px 16px;background:#f8fafc;border-radius:12px;color:#0f172a;font:400 14px/1.6 Arial;white-space:pre-wrap">${esc(data.message)}</div>`
      : "";

    const html = `<div style="background:#ffffff;padding:24px;font-family:Arial,sans-serif;color:#0f172a">
      <h2 style="margin:0 0 4px;font:800 20px/1.3 Arial;color:#0b1e3a">New enquiry — Shine Yeti</h2>
      <p style="margin:0 0 16px;color:#64748b;font:400 13px/1.5 Arial">Submitted from shineyeti.lovable.app</p>
      <table style="border-collapse:collapse">${rowsHtml}</table>
      ${messageHtml}
    </div>`;

    const text = rows
      .filter(([, v]) => v && String(v).trim().length > 0)
      .map(([k, v]) => `${k}: ${v}`)
      .concat(data.message ? ["", `Message:`, data.message] : [])
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Shine Yeti Website <onboarding@resend.dev>",
        to: ["shineyeticleaningservices@gmail.com"],
        reply_to: data.email || undefined,
        subject: `New enquiry from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend error [${res.status}]: ${body}`);
      throw new Error(`Email send failed (${res.status})`);
    }

    return { ok: true } as const;
  });
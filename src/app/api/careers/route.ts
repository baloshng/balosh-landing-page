import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BYTES = 1024 * 1024; // 1MB

function isPdfMagic(buf: ArrayBuffer): boolean {
  if (buf.byteLength < 5) return false;
  const u8 = new Uint8Array(buf);
  return u8[0] === 0x25 && u8[1] === 0x50 && u8[2] === 0x44 && u8[3] === 0x46 && u8[4] === 0x2d;
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form data." }, { status: 400 });
  }

  const honeypot = formData.get("company_website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim();
  const roleOther = String(formData.get("roleOther") ?? "").trim();
  const cv = formData.get("cv");

  if (!firstName || !lastName || !phone || !role) {
    return NextResponse.json({ ok: false, error: "Please fill in all required fields." }, { status: 400 });
  }

  if (role === "Others" && !roleOther) {
    return NextResponse.json({ ok: false, error: "Please specify the role you are applying for." }, { status: 400 });
  }

  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ ok: false, error: "Please upload your CV (PDF, max 1MB)." }, { status: 400 });
  }

  if (cv.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: "CV must be 1MB or smaller." }, { status: 400 });
  }

  const nameLower = cv.name.toLowerCase();
  if (!nameLower.endsWith(".pdf")) {
    return NextResponse.json({ ok: false, error: "CV must be a PDF file." }, { status: 400 });
  }

  const buf = await cv.arrayBuffer();
  if (!isPdfMagic(buf)) {
    return NextResponse.json({ ok: false, error: "The file does not appear to be a valid PDF." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your application has been received.",
  });
}

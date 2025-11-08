import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import FileModel from "@/models/File";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }   // note: params is a Promise
) {
  try {
    await connectDB();

    // Await the params Promise (new in Next.js 15+)
    const { id } = await context.params;

    const doc = await FileModel.findById(id);
    if (!doc) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return new Response(doc.data, {
      headers: {
        "Content-Type": doc.contentType,
        "Content-Length": String(doc.size),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": `inline; filename="${doc.filename}"`,
      },
    });
  } catch (err) {
    console.error("GET /api/upload/[id] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

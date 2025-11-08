import { NextResponse } from "next/server";
import { verifyRole } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import FileModel from "@/models/File";
import { Item } from "@/models";

export async function POST(req: Request) {
  const user = await verifyRole(req, ["admin", "vendor"]);
  if (user instanceof NextResponse) return user;

  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[]; // ← multiple files
    const itemId = formData.get("itemId") as string | null;

    if (!files.length) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    await connectDB();

    const uploadedIds: string[] = [];

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) continue;
      if (file.size > maxSize) continue;

      const buffer = Buffer.from(await file.arrayBuffer());
      const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");

      const doc = await FileModel.create({
        filename: `${Date.now()}_${safeName}`,
        contentType: file.type,
        size: file.size,
        data: buffer,
        uploadedBy: user.id,
      });

      uploadedIds.push(doc._id.toString());
    }

    // Attach uploaded files to Item if itemId provided
    if (itemId && uploadedIds.length > 0) {
      await Item.findByIdAndUpdate(itemId, { $push: { images: { $each: uploadedIds } } });
    }

    return NextResponse.json({
      message: "Uploaded successfully",
      totalUploaded: uploadedIds.length,
      fileIds: uploadedIds,
      linkedTo: itemId || null,
    });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}

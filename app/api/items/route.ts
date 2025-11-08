import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { verifyRole } from "@/lib/auth";
import { Item, User } from "@/models";

// CREATE
export async function POST(req: Request) {
  const user = await verifyRole(req, ["admin", "vendor"]);
  if (user instanceof NextResponse) return user;

  await connectDB();
  const data = await req.json();

  const exists = await Item.findOne({
    title: data.title,
    createdBy: user.id,
  });

  if (exists) {
    return NextResponse.json({ error: "Item already exists" }, { status: 409 });
  }

  const newItem = await Item.create({ ...data, createdBy: user.id });
  return NextResponse.json(newItem, { status: 201 });
}

// READ (GET)
export async function GET(req: Request) {
  await connectDB();

  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  try {
    if (id) {
      // Fetch a single property by ID
      const item = await Item.findById(id)
        .populate("createdBy", "name email role")
        .populate("images", "filename contentType size"); // image metadata only

      if (!item)
        return NextResponse.json({ error: "Item not found" }, { status: 404 });

      return NextResponse.json(item, { status: 200 });
    }

    // Fetch all properties
    const items = await Item.find()
      .populate("createdBy", "name email role")
      .populate("images", "filename contentType size");

    return NextResponse.json(items, { status: 200 });
  } catch (err) {
    console.error("GET /api/items error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// UPDATE
export async function PUT(req: Request) {
  const user = await verifyRole(req, ["admin", "vendor"]);
  if (user instanceof NextResponse) return user;

  await connectDB();
  const { id, ...updateData } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Item ID is required" }, { status: 400 });
  }

  const item = await Item.findById(id);
  if (!item)
    return NextResponse.json({ error: "Item not found" }, { status: 404 });

  // RBAC: vendors can only update their own items
  if (user.role === "vendor" && item.createdBy.toString() !== user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Optionally prevent title duplication for same user
  if (updateData.title) {
    const exists = await Item.findOne({
      title: updateData.title,
      createdBy: user.id,
      _id: { $ne: id }, // exclude current item
    });
    if (exists) {
      return NextResponse.json(
        { error: "Another item with same title exists" },
        { status: 409 }
      );
    }
  }

  const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  return NextResponse.json(updatedItem);
}

// DELETE
export async function DELETE(req: Request) {
  const user = await verifyRole(req, ["admin", "vendor"]);
  if (user instanceof NextResponse) return user;

  const { id } = await req.json();
  await connectDB();

  const item = await Item.findById(id);
  if (!item)
    return NextResponse.json({ error: "Item not found" }, { status: 404 });

  if (user.role === "vendor" && item.createdBy.toString() !== user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await item.deleteOne();
  return NextResponse.json({ message: "Deleted successfully" });
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/models";

export async function POST(req: Request) {
  await connectDB();
  const { name, email, password, role } = await req.json();
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role });
  return NextResponse.json({ message: "Registered", user });
}

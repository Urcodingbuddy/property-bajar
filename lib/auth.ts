import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const verifyRole = async (req: Request, allowed: string[]) => {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized - No token" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "Unauthorized - Invalid header" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;

    if (!allowed.includes(decoded.role)) {
      return NextResponse.json({ error: "Forbidden - Insufficient role" }, { status: 403 });
    }

    return decoded;
  } catch (err) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }
};


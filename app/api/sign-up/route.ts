import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { db } from "@/utils/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, username, password } = body;

    if (!name || !username || !password) {
      return NextResponse.json({
        message: "Please provide name, username and password",
        success: false,
      });
    }

    const users = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (users) {
      return NextResponse.json({
        message: "Username sudah digunakan!",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    const newUser = await db.user.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "Akun berhasil dibuat!",
      success: true,
      newUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}

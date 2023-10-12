import { NextResponse, NextRequest } from "next/server";
import { db } from "@/utils/db";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  try {
    const auth = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!auth) {
      return NextResponse.json({
        message: "Unauthorized",
        success: false,
      });
    }

    const id = auth?.id;

    const users = await db.user.findMany({
      where: {
        id: {
          not: id as string,
        },
      },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
      },
    });

    return NextResponse.json({
      message: "Success",
      success: true,
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}

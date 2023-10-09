import { NextResponse, NextRequest } from "next/server";
import { db } from "@/utils/db";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      const users = await db.user.findMany({
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
    }

    const user = await db.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        idImage: true
      },
    });

    return NextResponse.json({
      message: "Success",
      success: true,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}

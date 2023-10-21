import { NextResponse, NextRequest } from "next/server";
import { db } from "@/utils/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json({
        message: "Please provide id",
        success: false,
      });
    }

    const users = await db.user.findMany({
      where: {
        id: {
          not: id as string,
        },
        OR: [
          {
            followers: {
              none: {
                id: id as string,
              },
            },
          },
          {
            following: {
              none: {
                id: id as string,
              },
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        _count: {
          select: {
            followers: true,
            following: true,
          },
        },
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

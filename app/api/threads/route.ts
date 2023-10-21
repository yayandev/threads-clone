import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { uploadOnePhoto } from "@/utils/cloudinary";

export async function GET(req: NextRequest) {
  try {
    const auth = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!auth) {
      return NextResponse.json({
        message: "Unauthorized",
        success: false,
      });
    }

    const threads = await db.thread.findMany({
      include: {
        author: {
          select: {
            id: true,
            image: true,
            name: true,
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      message: "Success",
      success: true,
      data: threads,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!auth) {
      return NextResponse.json({
        message: "Unauthorized",
        success: false,
      });
    }

    const formdata = await req.formData();

    const description = formdata.get("description");
    const file = formdata.get("file");

    if (!description) {
      return NextResponse.json({
        message: "Please provide title, description and file",
        success: false,
      });
    }

    if (file) {
      const result = await uploadOnePhoto(formdata);

      if (result.error) {
        return NextResponse.json({
          message: result.error,
          success: false,
        });
      }

      const newThreads = await db.thread.create({
        data: {
          description: description as string,
          images: result?.photo?.secure_url as string,
          idImage: result?.photo?.public_id as string,
          authorId: auth?.id as string,
        },
      });

      return NextResponse.json({
        message: "Success",
        success: true,
        data: newThreads,
      });
    }

    const newThreads = await db.thread.create({
      data: {
        description: description as string,
        authorId: auth?.id as string,
      },
    });

    return NextResponse.json({
      message: "Success",
      success: true,
      data: newThreads,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}

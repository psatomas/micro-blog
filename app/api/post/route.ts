import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const posts = await prisma.post.findMany({
        where:{
            published: true,
        },
        include: {
            author: true,
        },
    });
    return NextResponse.json(posts)
}
import prisma from "@/lib/prisma";
interface User{
    name: string;
    email: string;
}
export async function POST(request: Request) {
    const user: User = await request.json()
    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email
        }
    })
    return new Response("success", { status: 201})
}
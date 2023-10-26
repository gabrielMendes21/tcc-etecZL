import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const classId = Number(searchParams.get('classId'))

    const classData = await prisma.turma.findFirst({
        where: {
            id: classId
        },
        include: {
            escola: true,
            Usuario: {
                include: {
                    turma: true
                }
            },
        },
    })

    return NextResponse.json(classData)
}

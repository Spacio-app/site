import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function PUT (request: Request, { params }: { params: { id: string } }) {
  const data = await request.json()
  let result
  try {
    result = await prisma.user.update({
      where: {
        id: params.id
      },
      data
    })
  } catch (error: any) {
    const { meta } = error
    const { message } = meta
    return NextResponse.json({ message })
  }

  return NextResponse.json({ result })
}

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { type NextApiRequest } from 'next'

const prisma = new PrismaClient()
export async function GET (request: NextApiRequest, response: NextResponse, params: any) {
  console.log('GET USER', request)

  console.log(request.body)
  const result = await prisma.user.findMany()

  return NextResponse.json({ result })
}

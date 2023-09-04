import prisma from './prisma'

export const getUserByEmail = async (email: any) => {
  const user = prisma.user.findUnique({
    where: {
      email
    }
  })
  return await user
}

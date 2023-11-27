'use server'

// import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const CourseSchema = z.object({
  title: z.string(),
  description: z.string(),
  contenttype: z.string(),
  author: z.string(),
  videosurl: z.any()
})

export const addCourse = async (course: FormData) => {
  const newCourse = {
    title: course.get('title'),
    description: course.get('description'),
    contenttype: 'course',
    author: 'test',
    videosurl: course.get('videosurl')
  }

  const result = CourseSchema.safeParse(newCourse)

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  if (!result.success) {
    console.log('ERROR', result.error.issues)
    return
  }

  console.log('RESULT', result.data)
  try {
    const response = await fetch(`${apiBaseUrl}/contentCourse`, {
      method: 'POST',
      body: JSON.stringify(result.data),
      headers: {
        'Content-Type': 'multipart/form-data'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    // const data = await response.json()
    // const data = await response?.body?.getReader().read()
    // revalidatePath('/')
    console.log('RESPONSE', response)
    return JSON.stringify(response)
  } catch (error: any) {
    console.log('ERROR', error)
  }
}

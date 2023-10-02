'use client'
import { useRouter } from 'next/navigation'

const CardCourse = ({ id }: { id: string }) => {
  const router = useRouter()
  function handleClick () {
    router.push(`/courses/${id}`)
  }

  return (<>
    {/* <div>CardCourse</div> */}
    <button onClick={handleClick}>Ver curso</button>
  </>
  )
}

export default CardCourse

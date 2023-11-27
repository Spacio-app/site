import { FormCompleteProfile } from '@/components/forms/FormCompleteProfile'
import { auth } from 'auth'
import { permanentRedirect } from 'next/navigation'
import { useForm } from 'react-hook-form'

const page = async () => {
  const session = await auth()

  console.log(session?.user.career)
  if (!session) {
    permanentRedirect('/')
  }
  if (session?.user.career !== '') {
    // Redirect in SSR
    permanentRedirect('/home')
  }

  return (
    <>
      <section className="flex flex-col mx-3 xl:mx-[10%] my-[40px]">
        <div className="w-full">
          <h1 className="font-semibold text-2xl">Completar Perfil</h1>
        </div>
        <FormCompleteProfile session={session} />
      </section>
    </>
  )
}

export default page

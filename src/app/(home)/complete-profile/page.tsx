import { auth } from 'auth'

const page = async () => {
  const session = await auth()
  return (<>
        {
            session ? <p>{JSON.stringify(session)}</p> : <p>no hay sesion</p>
        }
        <div>page</div>
  </>
  )
}

export default page

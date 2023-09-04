import GoogleLoginButton from '@/app/components/GoogleSignInButton'

const SignIn = async () => {
  return (
      <section>
        <div className='center py-4'>
          <h1 className='text-2xl font-semibold tracking-tight'>Inicio de sesion</h1>
        </div>
        <GoogleLoginButton />
      </section>
  )
}
export default SignIn

import LoginForm from '@/components/LoginForm/LoginForm'
import Link from 'next/link'

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <Link href={'/signup'}>Sign Up</Link>
    </div>
  )
}

export default Login

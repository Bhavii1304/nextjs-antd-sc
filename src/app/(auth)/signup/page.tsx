import LoginForm from '@/components/LoginForm/LoginForm'
import Link from 'next/link'

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <LoginForm />
      <Link href="/login">Login</Link>
    </div>
  )
}

export default SignUp

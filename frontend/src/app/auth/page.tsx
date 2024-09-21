import AuthForm from "@/components/AuthForm";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  )
}

export default Login;
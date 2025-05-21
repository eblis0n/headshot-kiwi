import GoogleLoginButton from '@/components/auth/GoogleLoginButton';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">登录</h1>
        <GoogleLoginButton />
      </div>
    </div>
  );
} 
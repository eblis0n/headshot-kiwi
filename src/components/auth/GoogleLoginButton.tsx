"use client";
import { auth, provider } from '@/lib/utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

export default function GoogleLoginButton() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert('登录失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      disabled={loading}
    >
      <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <g>
          <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.45 2.36 30.68 0 24 0 14.82 0 6.73 5.48 2.69 13.44l7.98 6.2C12.13 13.13 17.57 9.5 24 9.5z"/>
          <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.59C43.99 37.13 46.1 31.3 46.1 24.55z"/>
          <path fill="#FBBC05" d="M10.67 28.09c-1.13-3.36-1.13-6.97 0-10.33l-7.98-6.2C.99 16.09 0 19.94 0 24c0 4.06.99 7.91 2.69 11.44l7.98-6.2z"/>
          <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.9-5.85l-7.19-5.59c-2.01 1.35-4.59 2.15-8.71 2.15-6.43 0-11.87-3.63-14.33-8.94l-7.98 6.2C6.73 42.52 14.82 48 24 48z"/>
          <path fill="none" d="M0 0h48v48H0z"/>
        </g>
      </svg>
      {loading ? '登录中...' : '使用 Google 登录'}
    </button>
  );
} 
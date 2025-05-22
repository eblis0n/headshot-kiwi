/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-17 16:45:14
 * @LastEditTime: 2025-05-21 13:34:40
 */
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth'
import { auth } from '@/lib/utils/firebase'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/store/useStore'

interface AuthContextType {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  checkAuth: () => Promise<boolean>
  requireAuth: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// 登录状态校验的公共方法
export const checkAuth = async (): Promise<boolean> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(!!user)
    })
  })
}

// 需要登录才能访问的页面保护方法
export const requireAuth = async (): Promise<void> => {
  const isAuthenticated = await checkAuth()
  if (!isAuthenticated) {
    // 使用 window.location 而不是 router 来确保在服务器端也能正常工作
    window.location.href = '/login'
    return Promise.reject('需要登录')
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
      authType: 'signInWithRedirect'
    })
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Google 登录失败:', error)
      throw error
    }
  }

  const signOut = async () => {
    try {
      // 1. 清除 Firebase 认证状态
      await firebaseSignOut(auth)
      
      // 2. 清除本地存储
      localStorage.removeItem('user')
      sessionStorage.clear()
      
      // 3. 清除所有 cookies
      document.cookie.split(';').forEach(cookie => {
        const [name] = cookie.trim().split('=')
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      })
      
      // 4. 清除 WebSocket 连接（如果存在）
      if (global.wss) {
        const clients = Array.from(global.wss.clients)
        clients.forEach(client => {
          if (client.readyState === client.OPEN) {
            client.close()
          }
        })
      }
      
      // 5. 重置用户状态
      setUser(null)
      
      // 6. 重置 store 状态
      useStore.getState().resetStore()
      
      // 7. 重定向到首页
      router.push('/')
    } catch (error) {
      console.error('退出登录失败:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      signInWithGoogle, 
      signOut,
      checkAuth,
      requireAuth 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
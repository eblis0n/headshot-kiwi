/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-16 14:11:14
 * @LastEditTime: 2025-05-21 18:45:09
 */
'use client'

import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { useAuth } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { TopBanner } from '@/components/public/top/topbanner'
import { maccms } from '@/extra/maccms'

export function Navigation() {
  const { user, signOut } = maccms.islogin ? useAuth() : { user: null, signOut: () => {} }
  



  return (
    <div className="w-full sticky top-0 z-50 transition duration-300 ease-in-out bg-white">
      <TopBanner />
    <nav className="sticky top-0 z-50 flex w-full flex-col items-center justify-between bg-gray-700 transition-all duration-200 ease-out">
      <div className="container-home flex h-16 w-full items-center justify-around">
        <div className="flex items-center gap-8 md:pl-8">
          <Link 
            href="/" 
            className="transition-opacity hover:opacity-75"
          >
            <Logo />
          </Link>
          <div className="flex items-center gap-6 hidden md:flex font-bold text-green-900 hover:underline hover:text-green-700 focus:ring-0">
            {maccms.menu?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:pr-8">
          {maccms.islogin && user ? (
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.photoURL || ""} alt={user.displayName || "用户头像"} />
                <AvatarFallback>{user.displayName?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="flex items-center gap-2 text-green-700 hover:text-green-800"
              >
                <LogOut className="h-4 w-4" />
                LogOut
              </Button>
            </div>
          ) : maccms.islogin ? (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-100 border border-green-700 text-green-700 px-4 py-2 text-sm font-medium shadow-sm transition-colors duration-100 ease-in-out hover:bg-green-200 hover:text-green-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-100 ease-in-out hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
              >
                Sign up
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      </nav>
      </div>
  )
}

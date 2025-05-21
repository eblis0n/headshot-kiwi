/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 14:30:00
 * @LastEditTime: 2025-05-21 16:44:48
 */
'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Banner() {
  return (
    <section className="relative overflow-visible bg-white">
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 sm:py-24 lg:px-8">
      {/* 左侧小图组 */}
      <div className="absolute top-20 left-24 hidden lg:flex flex-col items-start">
        <div className="flex gap-2 relative">
          {[1, 2, 3].map((i) => (
            <div key={`left-${i}`} className="w-16 h-16 rounded-lg bg-gray-100 shadow-sm overflow-hidden relative">
              <Image
                alt="HeadshotKiwi AI generated headshot example"
                src={`https://assets.headshotkiwi.com/hero/left-${i}.webp`}
                width={64}
                height={64}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
          <div className="absolute -right-14 bottom-4 transform translate-y-4">
            <svg fill="#347659" height="32" width="32" viewBox="0 0 200.013 200.013" transform="rotate(90)" stroke="#347659">
              <path d="M197.007,48.479L139.348,0v28.623C63.505,32.538,3.006,95.472,3.006,172.271v27.741h40.099v-27.741 c0-54.682,42.527-99.614,96.243-103.47v28.156L197.007,48.479z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 右侧小图组 */}
      <div className="absolute top-20 right-24 hidden lg:flex gap-2">
        <div className="absolute -left-14 bottom-4 transform translate-y-4">
          <svg fill="#347659" height="32" width="32" viewBox="0 0 200.013 200.013" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(90)" stroke="#347659">
            <path d="M197.007,48.479L139.348,0v28.623C63.505,32.538,3.006,95.472,3.006,172.271v27.741h40.099v-27.741 c0-54.682,42.527-99.614,96.243-103.47v28.156L197.007,48.479z" />
          </svg>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={`right-${i}`} className="w-16 h-16 rounded-lg bg-gray-100 shadow-sm overflow-hidden relative">
            <Image
              alt={`Short image ${i}`}
              src={`https://assets.headshotkiwi.com/hero/right-${i}.webp`}
              width={64}
              height={64}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* 主要内容区 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 lg:mt-16">
        {/* 左侧大图 */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-green-50/50 rounded-2xl" />
              <div className="relative aspect-[4/5] rounded-2xl bg-gray-100 shadow-lg overflow-hidden">
                <Image
                  alt="Headshot Kiwi AI generated headshot"
                  src="https://assets.headshotkiwi.com/hero/left.webp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="text-sm text-gray-400 absolute bottom-4 left-4">100% AI generated</div>
              </div>
            </div>
          </div>
        </div>

        {/* 中间内容 */}
        <div className="col-span-1 lg:col-span-6 lg:col-start-4 text-center px-4 lg:px-6">
          <div className="inline-flex items-center rounded-full bg-green-50 px-3 sm:px-4 py-1.5 mb-4">
            <span className="text-[10px] sm:text-sm font-medium text-green-700 whitespace-nowrap">
              The Most Advanced AI Headshot Generator for Professionals
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-green-950 mb-4 max-w-3xl mx-auto">
            Studio-quality professional headshots, no photographer needed
          </h1>
          <h2 className="text-base sm:text-lg text-green-900/80 leading-relaxed max-w-2xl mx-auto mb-6">
            Generate professional-grade headshots in 60 minutes with our AI platform. Upload your selfies, select your clothes and style and get your headshots.
          </h2>
          
          {/* 按钮 */}
          <div className="mb-8 flex sm:justify-center">
            <Link href="/app/account" className="w-full sm:w-auto">
              <button className="font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 w-full sm:w-auto bg-green-500 hover:bg-green-700 text-white px-4 sm:px-10 py-3 sm:py-5 text-sm sm:text-base rounded-xl whitespace-nowrap flex items-center justify-center">
                Generate your headshots now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          {/* 移动端图片 */}
          <div className="lg:hidden relative w-full pb-6 overflow-hidden bg-white">
            <div className="max-w-md mx-auto px-4">
              <div className="relative h-48 flex gap-3">
                <div className="relative w-1/2 h-full">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      alt="AI Generated Professional Headshot HeadshotKiwi"
                      src="https://assets.headshotkiwi.com/hero/left.webp"
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-green-600/90 text-white text-[10px] px-1.5 py-0.5 rounded-md">AI GENERATED</span>
                    </div>
                  </div>
                </div>
                <div className="relative w-1/2 h-full">
                  <div className="relative h-full w-full overflow-hidden rounded-xl">
                    <Image
                      alt="AI Generated Professional Headshot Headshot Kiwi"
                      src="https://assets.headshotkiwi.com/hero/right.webp"
                      fill
                      className="object-cover object-center"
                      sizes="100vw"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-green-600/90 text-white text-[10px] px-1.5 py-0.5 rounded-md">AI GENERATED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 评分和客户数 */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-center items-center gap-2">
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <Link href="/reviews" className="text-green-900/60 text-sm hover:text-green-900/80 hover:underline">
                4.9 (1000+ reviews)
              </Link>
            </div>
            <div className="text-green-900/60 text-sm">12,677+ happy customers</div>
          </div>

          {/* 合作媒体 */}
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <span className="text-green-700 text-xs">As seen on:</span>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                <div className="h-5">
                  <Image alt="Der Spiegel logo" src="/image/banner/der-spiegel.58495e90.svg" width={238} height={33} className="h-full w-auto text-green-400 opacity-60" />
                </div>
                <div className="h-5">
                  <Image alt="Financial Times logo" src="/image/banner/financial-times.79a1f8bf.svg" width={24} height={32} className="h-full w-auto text-green-400 opacity-60" />
                </div>
                <div className="h-5">
                  <Image alt="Business Insider logo" src="/image/banner/business-insider-logo.b4e7ea4d.svg" width={103} height={32} className="h-full w-auto text-green-400 opacity-60" />
                </div>
                <div className="h-5">
                  <Image alt="The Washington Post logo" src="/image/banner/washington-post.47ad1cfa.svg" width={206} height={32} className="h-full w-auto text-green-400 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧大图 */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-50/50 rounded-2xl" />
              <div className="relative aspect-[4/5] rounded-2xl bg-gray-100 shadow-lg overflow-hidden">
                <Image
                  alt="AI Generated headshot HeadshotKiwi"
                  src="https://assets.headshotkiwi.com/hero/right.webp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="text-sm text-gray-400 absolute bottom-4 left-4">100% AI generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
       </section>
  )
} 
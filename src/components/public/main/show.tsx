/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 14:55:00
 * @LastEditTime: 2025-05-21 17:00:54
 */

import Image from 'next/image';
import Link from 'next/link';
import { Collaborative } from './collaborative';
const testimonials = [
  {
    image: '1L',
    text: '"Generated my team\'s headshots in under an hour. Incredible quality."'
  },
  {
    image: '52L',
    text: '"Perfect for my speaking engagements and LinkedIn profile."'
  },
  {
    image: '36L',
    text: '"Updated my professional headshots without leaving my desk."'
  },
  {
    image: '10L',
    text: '"Consistent branding across our entire leadership team."'
  },
  {
    image: '12L',
    text: '"The quality exceeded my expectations. So natural looking."'
  },
  {
    image: '50L',
    text: '"Professional results for our entire sales team."'
  },
  {
    image: '49L',
    text: '"Perfect for our company website refresh."'
  },
  {
    image: '42L',
    text: '"Transformed our team page in minutes."'
  }
];


export function Show() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题和数字统计 */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-green-950 font-medium text-lg sm:text-xl mb-8">
            Join the world's fastest-growing professional headshot platform
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-2 sm:gap-4 mb-4">
            <span className="text-4xl sm:text-4xl lg:text-5xl font-bold text-green-500">523,000+</span>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-950 text-center sm:text-left">
              professional<br className="sm:hidden" /> headshots
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-2 sm:gap-4">
            <span className="text-3xl sm:text-3xl lg:text-4xl font-bold text-green-400">12,677</span>
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-950 text-center sm:text-left">
              satisfied<br className="sm:hidden" /> professionals
            </span>
          </div>
        </div>

        {/* 合作公司 */}
        <Collaborative />

        {/* 提示文本 */}
        <p className="text-center text-green-700 italic text-xs sm:text-sm mb-8 sm:mb-12">
          These photos are not real. They were all created using our AI headshot generator.
        </p>

        {/* 展示图片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.image} className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer">
              <div className="relative w-full h-full">
                <Image
                  alt="AI Generated Professional Headshot"
                  src={`https://assets.headshotkiwi.com/landing/${testimonial.image}.webp`}
                  fill
                  className="rounded-xl transition duration-500 ease-out group-hover:scale-[1.02] object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                <span className="bg-green-600/90 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                  AI GENERATED
                </span>
              </div>
              <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/30 transition-all duration-500 ease-out flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <Link href="/signin/signup">
                    <button className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-4 py-2 rounded-xl transition-colors duration-300">
                      Create yours
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-white text-xs sm:text-sm italic mb-1">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 16:23:17
 */

import { Star } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { testimonials } from '@/data/carousel';

// 生成近一年内的随机日期
const getRandomDate = () => {
  const now = new Date();
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const randomTime = oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime());
  const date = new Date(randomTime);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const StarRating = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className="fill-green-500 text-green-500"
        width={14}
        height={14}
      />
    ))}
  </div>
);

export function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollSpeed = 0.5;
  const [dates, setDates] = useState<string[]>([]);

  // 在客户端生成随机日期
  useEffect(() => {
    const newDates = testimonials.map(() => getRandomDate());
    setDates(newDates);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    let scrollLeft = 0;
    const containerWidth = container.offsetWidth;
    const scrollWidth = scrollContainer.offsetWidth;

    const animate = () => {
      scrollLeft += scrollSpeed;
      if (scrollLeft >= scrollWidth / 2) {
        scrollLeft = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollLeft}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto bg-white pb-8 sm:pb-12 lg:pb-16 overflow-hidden relative">
      {/* 渐变遮罩 */}
      <div className="absolute left-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 w-16 sm:w-24 lg:w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

      {/* 标题 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          What our <span className="text-green-500">customers</span> are saying
        </h2>
      </div>

      {/* 轮播容器 */}
      <div className="flex flex-col gap-4 sm:gap-6 overflow-hidden" ref={containerRef}>
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 transition-transform duration-0"
          style={{ willChange: 'transform' }}
        >
          {/* 重复两次评价卡片以实现无缝滚动效果 */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-[280px] sm:w-[300px] bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 flex-shrink-0"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium text-sm sm:text-base">
                      {testimonial.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </span>
                  </div>
                  <StarRating />
                </div>
                <time className="text-xs sm:text-sm text-gray-500">
                  {dates[index % testimonials.length] || ''}
                </time>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

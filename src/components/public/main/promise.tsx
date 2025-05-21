/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 17:17:26
 */

import { promises } from '@/data/promise';

export function Promise() {
  return (
    <section className="bg-green-100/20 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 mb-6 text-green-900/70">
          <span className="inline-block">
            <span className="inline-flex items-center">We respect your privacy.</span>
          </span>
        </div>

        <h2 className="text-4xl font-bold text-center text-green-950 mb-16">
          Making AI Headshots Human. That's Our Promise.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="group bg-white rounded-2xl p-8 shadow-[0_1px_3px_0_rgb(0,0,0,0.07)] border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-[0_3px_8px_0_rgb(0,0,0,0.06)] hover:border-gray-200"
            >
              <div className="relative w-fit mb-6">
                {promise.icon}
                <div className="absolute -right-1 -top-1 bg-green-500 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-950 mb-3 transition-colors duration-300 group-hover:text-green-900">
                {promise.title}
              </h3>
              <p className="text-green-900/70 leading-relaxed">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

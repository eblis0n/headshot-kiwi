/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 17:03:00
 */

import { Check, Gift } from 'lucide-react';
import Link from 'next/link';
import { Collaborative } from '@/components/public/main/collaborative';
import { plans } from '@/data/subscribe';


export function Subscribe() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional headshots at<br />
            a <span className="text-green-500">fraction</span> of the cost
          </h2>
          <p className="text-lg text-green-900/80 max-w-4xl mx-auto">
            Get studio-quality headshots at a fraction of the cost. Our AI-powered service starts at just $29, compared to the several hundreds of dollars average for traditional photo shoots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto items-center">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative ${
                plan.cheapest
                  ? 'md:scale-[1.05] z-10 border-green-300'
                  : 'border-gray-200'
              } border bg-white rounded-[32px]`}
            >
              {plan.cheapest && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-green-400 text-white px-6 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    100% MONEY BACK GUARANTEE
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-950 mb-4">
                  {plan.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-900">
                    {plan.offFor}{' '}
                    <span className="text-red-500">( {plan.left} left)</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`text-4xl font-bold text-green-950 ${plan.isPopular ? 'md:text-5xl' : ''}`}>
                    ${plan.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${plan.originalPrice}
                  </span>
                </div>
                <p className="text-green-700/70 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-1 text-green-400" />
                      <span className="text-green-700/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/app/account"
                  className={`block w-full py-4 px-4 rounded-full text-center font-medium transition-colors duration-200 ${
                    plan.cheapest
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-white text-green-500 border border-green-500 hover:bg-green-50'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Collaborative />
      </div>
    </section>
  );
}

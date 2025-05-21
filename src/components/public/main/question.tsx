/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 17:08:01
 */

import { faqs } from '@/data/question';

export function Question() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 text-green-900/80 text-sm md:text-base">
            <span role="img" aria-label="thumbs-up" className="text-xl">👍</span>
            <span>You have full commercial rights and ownership of your photos</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-green-900/80 max-w-3xl mx-auto">
            Answers to common questions about our professional AI generated headshot service for individuals and remote teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.question} className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="text-green-900/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 14:40:00
 * @LastEditTime: 2025-05-21 14:51:11
 */

export function Preferential() {
  return (
    <section className="bg-white pt-12 md:pt-48 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold text-green-950 mb-6">All photoshoots include:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-green-800">Done in one hour or less</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-green-800">8x cheaper than a photographer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-green-800">Hundreds of results to choose from</span>
              </li>
            </ul>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-bold text-green-950 mb-2">$29</span>
            <span className="text-lg text-green-700">Done in one hour.</span>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-bold text-green-950 mb-6">Every package includes:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-green-800">Indistinguishable from real photos</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-green-800">Business expense-ready invoice</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-1 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-green-800">50% Discounts for new users</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

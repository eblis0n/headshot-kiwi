/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 14:35:00
 * @LastEditTime: 2025-05-21 14:39:13
 */

export function Sequence() {
  return (
    <section className="relative md:-mt-24 z-20">
      <div className="mx-auto max-w-4xl px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:transform md:translate-y-1/2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-green-950">Step 1:</div>
                    <div className="text-sm text-green-700">Upload 10 images of yourself</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-8">
                <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-green-950">Step 2:</div>
                    <div className="text-sm text-green-700">AI model generates headshots</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-8">
                <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="flex-1 flex justify-center">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-green-950">Step 3:</div>
                    <div className="text-sm text-green-700">Download your headshots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

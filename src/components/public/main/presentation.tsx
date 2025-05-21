/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 16:16:30
 */

import { Logo } from '@/components/ui/Logo'

export function Presentation() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-green-100/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3 px-4 text-gray-900">
          Turn your Selfies into{' '}
          <span className="text-green-500">Professional Headshots</span>
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg mb-8 sm:mb-12 lg:mb-16 px-4">
          Why spend $500+ and endless hours on a photoshoot? Get professional headshots instantly for just $29.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* 左侧：我们的服务 */}
          <div className="bg-gray-200 rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">With</h3>
              <Logo />
            </div>
            <div className="space-y-6 sm:space-y-8">
              {/* 步骤 1 */}
              <div className="relative">
                <div className="flex gap-3 sm:gap-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-900">
                        1. Upload your selfies
                      </span>
                      <span className="text-gray-500 text-sm">(2 minutes)</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Share your favorite photos or snap some new ones on the spot.
                    </p>
                  </div>
                </div>
              </div>
              {/* 步骤 2 */}
              <div className="relative">
                <div className="flex gap-3 sm:gap-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-900">
                        2. Our AI generates the photos
                      </span>
                      <span className="text-gray-500 text-sm">(1 hour)</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Our AI technology brings out your best features from the uploaded photos.
                    </p>
                  </div>
                </div>
              </div>
              {/* 步骤 3 */}
              <div className="relative">
                <div className="flex gap-3 sm:gap-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-900">
                        3. Choose your new headshots
                      </span>
                      <span className="text-gray-500 text-sm">(2 minutes)</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      Just like that! Pick the ones you love and enjoy your professional photos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：传统拍摄 */}
          <div className="bg-gray-200 rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900">
              Physical photoshoot
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                'Research and select a photographer',
                'Coordinate schedules and book an appointment',
                'Choose and prepare appropriate attire',
                'Travel to the photography studio',
                'Spend time posing for multiple shots',
                'Wait for photo processing and editing',
                'Review and select final images',
                'Update various online profiles with new photos'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 flex-shrink-0">
                    ×
                  </div>
                  <span className="text-gray-600 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

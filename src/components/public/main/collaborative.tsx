/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 17:00:27
 */
import Image from 'next/image';


const companies = [
  { name: 'IKEA', logo: '/image/media/ikea-logo.d4a86226.svg' },
  { name: 'Coca-Cola', logo: '/image/media/coca-cola-logo.f64d055a.svg' },
  { name: 'PWC', logo: '/image/media/pwc-logo.6497ec29.svg' },
  { name: 'Netflix', logo: '/image/media/netflix-logo.11f3e3d8.svg' },
  { name: 'Boeing', logo: '/image/media/boeing-logo.7188334c.svg' },
  { name: 'Spotify', logo: '/image/media/spotify-logo.91f5ff56.svg' },
  { name: 'Toyota', logo: '/image/media/toyota-logo.f7bd5854.svg' }
];


export function Collaborative() {
  return (
    <div className="mb-12 sm:mb-16">
          <p className="text-center text-sm text-green-900 mb-6 sm:mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7 sm:gap-8 items-center justify-items-center opacity-60">
            {companies.map((company, index) => (
              <div key={company.name} className={`h-4 sm:h-5 lg:h-6 ${index === companies.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <Image
                  alt={`${company.name} logo`}
                  src={company.logo}
                  width={index === companies.length - 1 ? 950 : 80}
                  height={index === companies.length - 1 ? 157 : 32}
                  className="h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
  );
}

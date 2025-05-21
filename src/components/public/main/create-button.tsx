/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 15:00:00
 * @LastEditTime: 2025-05-21 16:09:43
 */

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CreateButton() {
  return (
    <div className="relative group flex flex-col items-center bg-green-50/20 py-6">
      <Link href="/app/account" className="block">
        <button className="relative px-6 sm:px-8 py-4 bg-green-950 rounded-2xl text-white font-medium text-base sm:text-lg shadow-[0_4px_12px_rgba(30,58,138,0.15)] hover:shadow-[0_6px_20px_rgba(30,58,138,0.25)] transition-all duration-300 ease-out hover:translate-y-[-1px]">
          <div className="flex items-center gap-3">
            Create your headshots now!
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </button>
      </Link>
      <div className="absolute inset-0 -z-10 bg-green-500/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-70" />
      <div className="mt-4 flex items-center gap-2 text-center opacity-100 sm:opacity-0 transform translate-y-0 sm:translate-y-[-8px] sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out px-4 sm:px-0 max-w-[250px] sm:max-w-none mx-auto">
        <Sparkles className="hidden sm:block w-4 h-4 text-green-400" />
        <span className="text-xs sm:text-sm text-green-950/60 font-light tracking-wide">
          If you're not happy, we will refund your full purchase
        </span>
        <Sparkles className="hidden sm:block w-4 h-4 text-green-400" />
      </div>
    </div>
  );
}

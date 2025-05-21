/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 11:08:59
 * @LastEditTime: 2025-05-21 17:26:02
 */
"use client";

import { Navigation } from '@/components/public/top/navigation';
import { Banner } from '@/components/public/main/banner';
import { Sequence } from '@/components/public/main/sequence';
import { Preferential } from '@/components/public/main/preferential';
import { Show } from '@/components/public/main/show';
import { Carousel } from '@/components/public/main/carousel'; 
import { Presentation } from '@/components/public/main/presentation';
import { CreateButton } from '@/components/public/main/create-button';
import { Subscribe } from '@/components/public/main/subscribe';
import { Question } from '@/components/public/main/question';
import { Promise } from '@/components/public/main/promise';
import { Footer } from '@/components/public/footer/footer';
export default function Home() {

  return (
    <>
      <Navigation />
      <main id="skip" className="min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] bg-white">
        <main className="min-h-screen relative bg-white">
          <Banner />
          <Sequence />
          <Preferential />
          <Show />
          <Carousel />
          <Presentation />
          <CreateButton />
          <Subscribe />
          <Question />
          <Promise />
          <CreateButton />
          <Footer />
        </main>
      </main>
    </>
  );
}

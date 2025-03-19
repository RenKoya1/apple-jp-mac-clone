'use client';

import Image from 'next/image';
import Link from 'next/link';
import ClientOnly from '@/components/client-only';

export default function MacHero() {
  return (
    <section className="relative w-full">
      <ClientOnly fallback={<div className="h-[800px] bg-gray-50"></div>}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center text-center pt-12 pb-6">
            <h1 className="text-5xl lg:text-6xl font-semibold text-apple-dark mb-4">Mac</h1>

            <h2 className="text-2xl lg:text-3xl font-normal text-apple-dark mb-12">
              <span className="inline-block">魔法のようなパワー。</span>
            </h2>

            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/3184071768/2943697259.png"
                alt="Mac"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Student Section */}
          <div className="bg-[#f5f5f7] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Link href="/jp/mac/gakusei/" className="inline-block">
                <div className="flex items-center gap-2 mb-6 hover:underline">
                  <Image
                    src="https://ext.same-assets.com/3535898147/638430483.png"
                    alt="学生にはMacがおすすめです。"
                    width={160}
                    height={45}
                  />
                </div>
              </Link>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                学生にはMacがおすすめです。
              </h3>
              <p className="text-lg mb-6">
                iPhoneとの連携、Apple Intelligenceの機能、ビデオ通話に最適なカメラなど、Macはさまざまなメリットを提供します。
              </p>
              <Link
                href="/jp/mac/gakusei/"
                className="text-[#06c] text-lg hover:underline flex items-center"
              >
                詳しくはこちら
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://ext.same-assets.com/1210427827/1703302154.jpeg"
                alt="学生とMacBook"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </ClientOnly>
    </section>
  );
}

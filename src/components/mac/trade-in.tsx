'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MacTradeIn() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-white py-16 h-[400px]" suppressHydrationWarning></section>;
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-10 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Apple Trade In
            </h2>
            <p className="text-lg mb-6">
              あなたのデバイスには下取り額があります。Mac を購入する際にその金額分を割引いたします。対象のコンピュータに新しい命を吹き込むことで、地球にも優しいことです。
            </p>
            <Link
              href="/jp/shop/goto/trade_in"
              className="text-[#06c] text-lg hover:underline flex items-center"
            >
              詳しくはこちら
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://ext.same-assets.com/3101948930/4012885837.jpeg"
                alt="Apple Trade In"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

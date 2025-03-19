'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const accessories = [
  {
    title: 'アクセサリ',
    image: 'https://ext.same-assets.com/3054588554/1950529190.jpeg',
    description: 'Macアクセサリは、Macの能力をさらに引き出します。',
    link: '/jp/shop/goto/mac/accessories'
  },
  {
    title: 'ディスプレイ',
    image: 'https://ext.same-assets.com/2427565577/2134245959.jpeg',
    description: 'Studio DisplayとPro Display XDRは、最高のビジュアル体験を提供します。',
    link: '/jp/displays/'
  }
];

export default function MacAccessories() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-[#f5f5f7] py-16 h-[400px]" suppressHydrationWarning></section>;
  }

  return (
    <section className="bg-[#f5f5f7] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accessories.map((item) => (
            <Card key={item.title} className="border-none shadow-none overflow-hidden bg-transparent">
              <CardContent className="p-0">
                <Link href={item.link} className="block group">
                  <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/40 to-transparent text-white">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="mb-3">{item.description}</p>
                      <span className="text-white flex items-center hover:underline">
                        詳しくはこちら
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

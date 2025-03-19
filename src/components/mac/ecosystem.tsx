'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const devices = [
  {
    title: 'Mac と iPhone',
    image: 'https://ext.same-assets.com/2864883857/3425701014.jpeg',
    description: 'MacとiPhoneの連携で、写真や動画をシームレスに共有できます。',
    link: '/jp/mac/'
  },
  {
    title: 'Mac と iPad',
    image: 'https://ext.same-assets.com/1187879290/1312782013.jpeg',
    description: 'SidecarでiPadをMacのサブディスプレイとして使用できます。',
    link: '/jp/mac/'
  },
  {
    title: 'Mac と Apple Watch',
    image: 'https://ext.same-assets.com/138842256/4041320767.jpeg',
    description: 'Apple Watchを近づけるだけで、MacのロックをすばやくSK解除できます。',
    link: '/jp/mac/'
  }
];

export default function MacEcosystem() {
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
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Apple製品とともに。
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {devices.map((device) => (
            <Card key={device.title} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <Link href={device.link} className="block">
                  <div className="relative w-full h-[220px] mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={device.image}
                      alt={device.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{device.title}</h3>
                  <p className="text-gray-700 mb-4">{device.description}</p>
                  <span className="text-[#06c] flex items-center hover:underline">
                    詳しくはこちら
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

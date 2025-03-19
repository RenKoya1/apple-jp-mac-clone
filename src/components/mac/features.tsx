'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: 'Apple Intelligenceとともに、macOS',
    image: 'https://ext.same-assets.com/2692059832/884866792.jpeg',
    description: 'Apple Intelligenceが、作業効率を高め、創造力を刺激するまったく新しい体験を提供します。',
    link: '/jp/apple-intelligence/'
  },
  {
    title: 'パフォーマンス',
    image: 'https://ext.same-assets.com/2985872552/3889157428.jpeg',
    description: 'Appleシリコンのパワーで、何をするにも速く、効率的に。バッテリー持続時間も長くなります。',
    link: '/jp/mac/'
  },
  {
    title: 'セキュリティ',
    image: 'https://ext.same-assets.com/526840865/1542467864.jpeg',
    description: 'ハードウェアとソフトウェアの両方で、多層セキュリティを実現します。',
    link: '/jp/mac/'
  },
  {
    title: '互換性',
    image: 'https://ext.same-assets.com/1882584713/4007348193.jpeg',
    description: '多くのアプリが、Macで完璧に動作します。',
    link: '/jp/mac/'
  },
  {
    title: 'iPhoneとの連携',
    image: 'https://ext.same-assets.com/837473474/869773689.jpeg',
    description: 'MacとiPhoneを一緒に使えば、その組み合わせはさらにパワフルに。',
    link: '/jp/mac/'
  },
  {
    title: 'Apple製品の価値',
    image: 'https://ext.same-assets.com/3202748622/2297987212.jpeg',
    description: 'Appleは製品を作る際、すべての人のプライバシー、アクセシビリティ、環境に対する責任を考慮しています。',
    link: '/jp/mac/'
  }
];

export default function MacFeatures() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-white py-16 h-[500px]" suppressHydrationWarning></section>;
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Macの魅力を紹介します。
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-4">
                <Link href={feature.link} className="block">
                  <div className="relative w-full h-[220px] mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
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

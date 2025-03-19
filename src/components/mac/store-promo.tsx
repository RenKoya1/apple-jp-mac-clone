'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const benefits = [
  {
    icon: 'https://ext.same-assets.com/905479186/3536958036.png',
    title: 'Apple Trade In',
    description: '下取りに出すと、お得に購入できます。',
    link: '/jp/shop/goto/trade_in'
  },
  {
    icon: 'https://ext.same-assets.com/452734388/1550144030.png',
    title: 'スペシャリスト',
    description: 'あなたがMacを選ぶお手伝いをします。',
    link: '/jp/shop/goto/buy_mac'
  },
  {
    icon: 'https://ext.same-assets.com/1313553846/525474615.png',
    title: 'パーソナライズ',
    description: '名前や絵文字の刻印や「こんにちは」を追加。',
    link: '/jp/shop/goto/buy_mac'
  },
  {
    icon: 'https://ext.same-assets.com/1546901032/3136001648.png',
    title: 'Apple at Work',
    description: 'ビジネスのための特別なプログラム。',
    link: '/jp/business/'
  },
  {
    icon: 'https://ext.same-assets.com/3757137452/2432851738.png',
    title: 'カスタマイズ',
    description: 'お好みの構成にアップグレード。',
    link: '/jp/shop/goto/buy_mac'
  },
  {
    icon: 'https://ext.same-assets.com/128384109/3659895774.png',
    title: '無料配送',
    description: 'お買い物に送料はかかりません。',
    link: '/jp/shop/goto/help/sales_refunds'
  }
];

export default function MacStorePromo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-[#f5f5f7] py-20 h-[400px]" suppressHydrationWarning></section>;
  }

  return (
    <section className="bg-[#f5f5f7] py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            新しいMacを購入するなら Apple Store で。理由を紹介します。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((benefit) => (
            <Link key={benefit.title} href={benefit.link} className="group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                <p className="text-gray-700 mb-3">{benefit.description}</p>
                <span className="text-[#06c] flex items-center group-hover:underline">
                  詳しくはこちら
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

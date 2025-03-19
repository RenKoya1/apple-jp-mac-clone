'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    title: '13インチ15インチMacBook Air',
    subtitle: 'M4',
    image: 'https://ext.same-assets.com/2747164397/2799013219.png',
    startingPrice: '164,800',
    monthlyPrice: '6,866/24',
    link: '/jp/macbook-air/',
    buyLink: '/jp/shop/goto/buy_mac/macbook_air',
    features: [
      '13.6または15.3インチLiquid Retinaディスプレイ',
      'Apple M4チップ',
      'Apple Intelligence',
      '最大18時間バッテリー駆動時間',
      '4つのポート：Thunderbolt 4 (USB-C) x 2、MagSafe',
      '1.24kg（13インチ）または1.51kg（15インチ）'
    ],
    badge: 'New',
    colors: ['#505050', '#e3d9d3', '#e3e4e5', '#74c6e5']
  },
  {
    title: '14インチ16インチMacBook Pro',
    subtitle: 'M4、M4 Pro、M4 Max',
    image: 'https://ext.same-assets.com/2665524156/806422559.png',
    startingPrice: '248,800',
    monthlyPrice: '10,366/24',
    link: '/jp/macbook-pro/',
    buyLink: '/jp/shop/goto/buy_mac/macbook_pro',
    features: [
      '14.2または16.2インチLiquid Retina XDRディスプレイ',
      'Apple M4、M4 Pro、M4 Maxチップ',
      'Apple Intelligence',
      '最大24時間バッテリー駆動時間',
      '7つのポート：Thunderbolt 4/USB-C（数量はモデルによって異なります）、HDMI、SDXC、MagSafe',
      '1.55kg（14インチ）または2.14kg（16インチ）'
    ],
    colors: ['#505050', '#e3e4e5']
  },
  {
    title: 'iMac',
    subtitle: 'M4',
    image: 'https://ext.same-assets.com/1949010949/3039651819.png',
    startingPrice: '198,800',
    monthlyPrice: '8,283/24',
    link: '/jp/imac/',
    buyLink: '/jp/shop/goto/buy_mac/imac',
    features: [
      '24インチ4.5K Retinaディスプレイ',
      'Apple M4チップ',
      'Apple Intelligence',
      '6つのポート：Thunderbolt / USB 4 x 2またはThunderbolt 4 x 4、Ethernet（モデルによって異なります）'
    ],
    colors: ['#74c6e5', '#e3d9d3', '#f9d4c8', '#e4c6a2', '#7ddabd', '#c9aae3', '#ffd484']
  },
  {
    title: 'Mac mini',
    subtitle: 'M4、M4 Pro',
    image: 'https://ext.same-assets.com/3141469562/759155619.png',
    startingPrice: '94,800',
    monthlyPrice: '3,950/24',
    link: '/jp/mac-mini/',
    buyLink: '/jp/shop/goto/buy_mac/mac_mini',
    features: [
      'Apple M4またはM4 Proチップ',
      'Apple Intelligence',
      '8つのポート：Thunderbolt 4 x 3またはThunderbolt 5 x 3、USB-C x 2、HDMI、Ethernet'
    ]
  },
  {
    title: 'Mac Studio',
    subtitle: 'M4 Max、M3 Ultra',
    image: 'https://ext.same-assets.com/11870398/1636809859.png',
    startingPrice: '328,800',
    monthlyPrice: '13,700/24',
    link: '/jp/mac-studio/',
    buyLink: '/jp/shop/goto/buy_mac/mac_studio',
    features: [
      'Apple M4 MaxまたはM3 Ultraチップ',
      'Apple Intelligence',
      '12のポート：Thunderbolt 5/USB-C（数量はモデルによって異なります）、USB-A x 2、USB-C x 2、HDMI、10Gb Ethernet、SDXC'
    ],
    badge: 'New'
  },
  {
    title: 'Mac Pro',
    subtitle: 'M2 Ultra',
    image: 'https://ext.same-assets.com/2019937162/2295642252.png',
    startingPrice: '1,048,800',
    monthlyPrice: '43,700/24',
    link: '/jp/mac-pro/',
    buyLink: '/jp/shop/goto/buy_mac/mac_pro',
    features: [
      'Apple M2 Ultraチップ',
      'PCIe拡張スロット',
      'Apple Intelligence'
    ]
  }
];

export default function MacProducts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section className="bg-[#f5f5f7] py-16 h-[600px]" suppressHydrationWarning></section>;
  }

  return (
    <section className="bg-[#f5f5f7] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          ラインナップはこちら。
        </h2>
        <p className="text-center mb-8">
          <Link href="/jp/mac/compare/" className="text-[#06c] hover:underline">
            すべてのモデルを比較する
          </Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                {product.badge && (
                  <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mb-3">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
                <p className="text-lg text-gray-500 mb-4">{product.subtitle}</p>

                <div className="relative w-full h-[180px] mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {product.colors && (
                  <div className="flex justify-center space-x-2 mb-4">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="block w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-lg">
                    ¥{product.startingPrice}から
                  </p>
                  <p className="text-sm text-gray-500">
                    ¥{product.monthlyPrice}*
                  </p>
                </div>

                <div className="flex space-x-4 mb-6">
                  <Link
                    href={product.link}
                    className="text-[#06c] hover:underline"
                  >
                    詳しくはこちら
                  </Link>
                  <Link
                    href={product.buyLink}
                    className="apple-button"
                  >
                    購入する
                  </Link>
                </div>

                <ul className="space-y-2 text-sm">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

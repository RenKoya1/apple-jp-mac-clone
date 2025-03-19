'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ClientOnly from '@/components/client-only';

const navItems = [
  {
    label: 'MacBook Air',
    href: '/jp/macbook-air/',
    image: 'https://ext.same-assets.com/3107776658/3633548287.svg+xml'
  },
  {
    label: 'MacBook Pro',
    href: '/jp/macbook-pro/',
    image: 'https://ext.same-assets.com/1244399734/1766810377.svg+xml'
  },
  {
    label: 'iMac',
    href: '/jp/imac/',
    image: 'https://ext.same-assets.com/700225045/1671055905.svg+xml'
  },
  {
    label: 'Mac mini',
    href: '/jp/mac-mini/',
    image: 'https://ext.same-assets.com/4177901365/1422825460.svg+xml'
  },
  {
    label: 'Mac Studio',
    href: '/jp/mac-studio/',
    image: 'https://ext.same-assets.com/4140556238/1808502086.svg+xml',
    badge: 'New'
  },
  {
    label: 'Mac Pro',
    href: '/jp/mac-pro/',
    image: 'https://ext.same-assets.com/25905151/2919770603.svg+xml'
  },
  {
    label: 'ディスプレイ',
    href: '/jp/displays/',
    image: 'https://ext.same-assets.com/3263919548/3544500291.svg+xml'
  },
  {
    label: 'Mac を比較する',
    href: '/jp/mac/compare/',
    image: 'https://ext.same-assets.com/2265662352/1908463394.svg+xml'
  },
  {
    label: 'Mac でできること',
    href: '/jp/mac/mac-does-that/',
    image: 'https://ext.same-assets.com/3131520837/1236883226.svg+xml'
  },
  {
    label: 'Mac を購入する',
    href: '/jp/shop/goto/buy_mac',
    image: 'https://ext.same-assets.com/4169167855/2401119994.svg+xml'
  },
  {
    label: 'Mac アクセサリ',
    href: '/jp/shop/goto/mac/accessories',
    image: 'https://ext.same-assets.com/2549372401/825432794.svg+xml'
  },
  {
    label: 'Sequoia',
    href: '/jp/macos/macos-sequoia/',
    image: 'https://ext.same-assets.com/3131520837/1236883226.svg+xml'
  }
];

export default function MacNavigation() {
  return (
    <nav className="py-3 border-b border-[#d2d2d7] bg-white">
      <ClientOnly fallback={<div className="py-3 h-16 border-b border-[#d2d2d7] bg-white"></div>}>
        <div className="container mx-auto overflow-x-auto">
          <ul className="flex space-x-5 md:space-x-7 min-w-max px-4">
            {navItems.map((item) => (
              <li key={item.label} className="flex flex-col items-center justify-center">
                <Link
                  href={item.href}
                  className="flex flex-col items-center text-[#1d1d1f] hover:text-[#06c] transition-colors duration-300"
                >
                  <div className="relative h-10 w-10 mb-1">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-contain"
                    />
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs whitespace-nowrap">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ClientOnly>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import React from 'react';
import ClientOnly from '@/components/client-only';

const footerSections = [
  {
    title: 'ショッピングとサービス',
    links: [
      { label: 'Apple Store', href: '/jp/retail/' },
      { label: 'Mac', href: '/jp/mac/' },
      { label: 'iPad', href: '/jp/ipad/' },
      { label: 'iPhone', href: '/jp/iphone/' },
      { label: 'Watch', href: '/jp/watch/' },
      { label: 'AirPods', href: '/jp/airpods/' },
      { label: 'TV & Home', href: '/jp/tv-home/' },
      { label: 'AirTag', href: '/jp/airtag/' },
      { label: 'アクセサリ', href: '/jp/shop/goto/buy_accessories' }
    ]
  },
  {
    title: 'サービス',
    links: [
      { label: 'Apple Music', href: '/jp/apple-music/' },
      { label: 'Apple TV+', href: '/jp/apple-tv-plus/' },
      { label: 'Apple Arcade', href: '/jp/apple-arcade/' },
      { label: 'iCloud', href: '/jp/icloud/' },
      { label: 'Apple Books', href: '/jp/apple-books/' },
      { label: 'Apple Podcast', href: '/jp/apple-podcasts/' },
      { label: 'App Store', href: '/jp/app-store/' }
    ]
  },
  {
    title: 'Apple Store',
    links: [
      { label: '店舗検索', href: '/jp/retail/storelist/' },
      { label: 'Genius Bar', href: '/jp/retail/geniusbar/' },
      { label: 'Today at Apple', href: '/jp/today/' },
      { label: 'Apple サマーキャンプ', href: '/jp/today/camp/' },
      { label: 'Apple Store アプリ', href: '/jp/apple-store-app/' },
      { label: '認定整備済製品', href: '/jp/shop/goto/special_deals' },
      { label: 'ファイナンス', href: '/jp/shop/goto/ww/financing' },
      { label: 'Apple Trade In', href: '/jp/shop/goto/trade_in' },
      { label: '注文状況', href: '/jp/shop/goto/order/list' },
      { label: 'サポート', href: '/jp/retail/help/' }
    ]
  },
  {
    title: 'ビジネス',
    links: [
      { label: 'Apple と企業', href: '/jp/business/' },
      { label: 'ビジネス向け製品を購入する', href: '/jp/retail/business/' }
    ]
  },
  {
    title: '教育機関',
    links: [
      { label: 'Apple と教育機関', href: '/jp/education/' },
      { label: '教育機関向け製品を購入する', href: 'https://www.apple.com/jp-edu/store' }
    ]
  },
  {
    title: 'Apple の価値',
    links: [
      { label: 'アクセシビリティ', href: '/jp/accessibility/' },
      { label: '環境', href: '/jp/environment/' },
      { label: 'プライバシー', href: '/jp/privacy/' },
      { label: 'サプライヤーの責任', href: '/jp/supplier-responsibility/' }
    ]
  },
  {
    title: 'Apple について',
    links: [
      { label: 'Newsroom', href: '/jp/newsroom/' },
      { label: 'Apple のリーダーシップ', href: '/jp/leadership/' },
      { label: 'イベント', href: '/jp/apple-events/' },
      { label: 'お問い合わせ', href: '/jp/contact/' },
      { label: '採用情報', href: '/jp/careers/' }
    ]
  }
];

const footerBottom = [
  { label: 'プライバシーポリシー', href: '/jp/privacy/policy/' },
  { label: 'サイトマップ', href: '/jp/sitemap/' },
  { label: '販売条件', href: '/jp/shop/goto/help/sales_refunds' },
  { label: '法的情報', href: '/jp/legal/' },
  { label: 'Cookie ポリシー', href: '/jp/legal/privacy/cookies/' }
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-xs">
      <ClientOnly fallback={<div className="bg-[#f5f5f7] min-h-[300px]"></div>}>
        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="border-b border-[#d2d2d7] pb-5 mb-5">
            <p className="text-xs leading-5">
              1. Trade In: Apple Trade In でお下取りに出すと、新しい Apple 製品の購入時に下取り額分の割引を受けられます。下取り価格は状態、製造年と構成によって異なります。
              一部の製品とお支払い方法についてはご利用いただけない場合があります。Apple Trade In プログラムの全額クレジットを受けるには、お下取りの製品が電源が入り、すべてのボタンが機能し、
              ディスプレイに欠陥がない状態である必要があります。一部の製品では他の条件も適用される場合があります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[#d2d2d7] pt-5">
            <p className="mb-3">他の国や地域のApple Storeを探す &gt;</p>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="mb-3">Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {footerBottom.map((link, index) => (
                  <React.Fragment key={link.label}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                    {index < footerBottom.length - 1 && (
                      <span className="text-[#d2d2d7]">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p>日本</p>
            </div>
          </div>
        </div>
      </ClientOnly>
    </footer>
  );
}

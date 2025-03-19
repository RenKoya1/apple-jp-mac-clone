'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import ClientOnly from '@/components/client-only';

const macNavItems = [
  { label: 'MacBook Air', href: '/jp/macbook-air/' },
  { label: 'MacBook Pro', href: '/jp/macbook-pro/' },
  { label: 'iMac', href: '/jp/imac/' },
  { label: 'Mac mini', href: '/jp/mac-mini/' },
  { label: 'Mac Studio', href: '/jp/mac-studio/' },
  { label: 'Mac Pro', href: '/jp/mac-pro/' },
  { label: 'ディスプレイ', href: '/jp/displays/' },
  { label: 'Mac を比較する', href: '/jp/mac/compare/' },
  { label: 'Mac でできること', href: '/jp/mac/mac-does-that/' }
];

const shopNavItems = [
  { label: 'Mac を購入する', href: '/jp/shop/goto/buy_mac' },
  { label: 'Mac アクセサリ', href: '/jp/shop/goto/mac/accessories' },
  { label: 'Apple Trade In', href: '/jp/shop/goto/trade_in' },
  { label: 'ファイナンス', href: '/jp/shop/goto/ww/financing' },
  { label: '学生/教職員向け', href: 'https://www.apple.com/jp-edu/shop/goto/edu_store' }
];

const supportNavItems = [
  { label: 'Mac サポート', href: 'https://support.apple.com/ja-jp/mac' },
  { label: 'AppleCare+ for Mac', href: '/jp/support/products/mac/' },
  { label: 'macOS Sequoia', href: '/jp/macos/macos-sequoia/' },
  { label: 'Apple Intelligence', href: '/jp/apple-intelligence/' },
  { label: 'Apple の各種アプリ', href: '/jp/apps/' },
  { label: '連携機能', href: '/jp/macos/continuity/' },
  { label: 'iCloud+', href: '/jp/icloud/' },
  { label: 'ビジネス向け Mac', href: '/jp/business/mac/' },
  { label: '教育機関', href: '/jp/education/' }
];

const mainNav = [
  { label: 'Mac', href: '/jp/mac/', submenu: [...macNavItems] },
  { label: 'iPad', href: '/jp/ipad/', submenu: [] },
  { label: 'iPhone', href: '/jp/iphone/', submenu: [] },
  { label: 'Watch', href: '/jp/watch/', submenu: [] },
  { label: 'Vision', href: '/jp/apple-vision-pro/', submenu: [] },
  { label: 'AirPods', href: '/jp/airpods/', submenu: [] },
  { label: 'TV & Home', href: '/jp/tv-home/', submenu: [] },
  { label: 'エンターテインメント', href: '/jp/entertainment/', submenu: [] },
  { label: 'アクセサリ', href: '/jp/shop/goto/buy_accessories', submenu: [] },
  { label: 'サポート', href: 'https://support.apple.com/ja-jp/', submenu: [] }
];

const NavMenuItem = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
  return (
    <Link href={href} className={cn("px-3 py-2 text-sm font-medium text-apple-dark opacity-80 hover:opacity-100 transition-opacity duration-200", className)}>
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="top-navbar sticky top-0 z-50 w-full">
      <ClientOnly fallback={<div className="h-12 w-full"></div>}>
        <div className="container mx-auto flex items-center justify-between h-12">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {mainNav.map((item) => (
                    <Link key={item.label} href={item.href} className="text-base font-medium text-apple-dark">
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Apple Logo */}
          <Link href="/jp/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/2091940237/40380140.svg+xml"
              alt="Apple"
              width={18}
              height={18}
              className="dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNav.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu.length > 0 ? (
                      <>
                        <NavigationMenuTrigger className="text-xs text-apple-dark hover:text-black bg-transparent hover:bg-transparent">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 w-[400px] lg:w-[600px]">
                            <div className="col-span-1">
                              <h3 className="text-sm font-medium mb-2">Mac</h3>
                              <ul className="space-y-2">
                                {macNavItems.map((navItem) => (
                                  <li key={navItem.label}>
                                    <Link
                                      href={navItem.href}
                                      className="text-xs text-apple-dark hover:underline"
                                    >
                                      {navItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-span-1">
                              <h3 className="text-sm font-medium mb-2">ショッピング</h3>
                              <ul className="space-y-2">
                                {shopNavItems.map((navItem) => (
                                  <li key={navItem.label}>
                                    <Link
                                      href={navItem.href}
                                      className="text-xs text-apple-dark hover:underline"
                                    >
                                      {navItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-span-1">
                              <h3 className="text-sm font-medium mb-2">サポート</h3>
                              <ul className="space-y-2">
                                {supportNavItems.map((navItem) => (
                                  <li key={navItem.label}>
                                    <Link
                                      href={navItem.href}
                                      className="text-xs text-apple-dark hover:underline"
                                    >
                                      {navItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="text-xs text-apple-dark hover:text-black">
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Search and Bag */}
          <div className="flex items-center gap-4">
            <Link href="/jp/search" className="opacity-80 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Link>
            <Link href="/jp/shop/goto/bag" className="opacity-80 hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </Link>
          </div>
        </div>
      </ClientOnly>
    </header>
  );
}

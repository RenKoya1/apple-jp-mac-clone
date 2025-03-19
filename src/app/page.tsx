'use client';

import MacNavigation from '@/components/mac/navigation';
import MacHero from '@/components/mac/hero';
import MacFeatures from '@/components/mac/features';
import MacProducts from '@/components/mac/products';
import MacTradeIn from '@/components/mac/trade-in';
import MacAccessories from '@/components/mac/accessories';
import MacEcosystem from '@/components/mac/ecosystem';
import MacStorePromo from '@/components/mac/store-promo';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MacNavigation />
      <MacHero />
      <MacFeatures />
      <MacProducts />
      <MacTradeIn />
      <MacAccessories />
      <MacEcosystem />
      <MacStorePromo />
    </div>
  );
}

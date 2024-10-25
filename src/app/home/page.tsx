// pages/Home.tsx
import React from 'react';

import ConnectWallet from '../connect-wallet/page';
import TopCollections from '../components/TopCollections';
import Footer from '../components/Footer';
import AuctionItem from '../components/AuctionItem';

export default function Home() {
  return (
    <div>
      <ConnectWallet />
      <TopCollections />
      <AuctionItem />
      <Footer />
    </div>

  );
}

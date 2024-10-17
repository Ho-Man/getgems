// pages/Home.tsx
import React from 'react';
import ConnectWallet from '../connect-wallet/page'; 
import TopCollections from '../components/TopCollections'; 
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'white', color:'black' }}> 
      <ConnectWallet /> 
      <TopCollections /> 
      <Footer />
    </div>
  );
}

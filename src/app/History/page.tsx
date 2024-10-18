// pages/Home.tsx
import React from 'react';
import ConnectWallet from '../connect-wallet/page'; 
import History from '../components/History'; 
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'white', color:'black' }}> 
      <ConnectWallet /> 
        <History></History>
      <Footer />
    </div>
  );
}

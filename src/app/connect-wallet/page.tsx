'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Navbar from '../components/Navbar'; // Đảm bảo đường dẫn đúng


const ConnectWallet = () => {
  return (
    <TonConnectUIProvider manifestUrl='https://ton-dapp-pi.vercel.app/tonconnect-manifest.json'>
      <Navbar />
      <div style={{ padding: '10px' }}>
       
      </div>
    </TonConnectUIProvider>
  );
};

export default ConnectWallet;

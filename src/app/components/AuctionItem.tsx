'use client'
import React, { useState } from 'react';
import styles from '../styles/AuctionItem.module.css';

const auctions = [
  {
    id: 1,
    title: 'TON Chaos Orc #842',
    imageUrl: '/path/to/ton_chaos_orc.png',
    price: '6.62',
    time: '01:34',
  },
  {
    id: 2,
    title: 'Telegram Usernames',
    imageUrl: '/path/to/telegram_username.png',
    price: '4.88',
    time: '3 hours',
  },
  // Thêm các mục đấu giá khác ở đây...
];

const AuctionList = () => {
  return (
    <div className={styles.auctionList}>
        \
      {auctions.map((auction) => (
        <AuctionItem key={auction.id} auction={auction} />
      ))}
    </div>
  );
};

const AuctionItem = ({ auction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.auctionItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={auction.imageUrl} alt={auction.title} className={styles.auctionImage} />
      <div className={styles.auctionInfo}>
        <h3>{auction.title}</h3>
        <p>Price: {auction.price}</p>
        <p>Time left: {auction.time}</p>
      </div>
      {isHovered && (
        <button className={styles.buyButton}>Buy Now</button>
      )}
    </div>
  );
};

export default AuctionList;

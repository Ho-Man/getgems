'use client';

import React, { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import BalanceUI from './balance/page';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../styles/Navbar.module.css'; // Import CSS module
import SearchIcon from '@mui/icons-material/Search'; // Thêm import SearchIcon
import Image from 'next/image'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      console.log("menuOpen before toggle:", prev);
      return !prev;
    });
  };

  return (
    <div className={styles.navbar}>
    {/* Logo và nút tìm kiếm */}
    <div className={styles.leftContainer}>
      <div className={styles.logoImage}>
        <Image 
          src="/images/logo.png" 
          alt="Logo" 
          width={40} 
          height={40} 
        />
      </div>
      <div className={styles.logo}>Getton</div>
      
      {/* Phần tìm kiếm */}
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} /> {/* Tách SearchIcon ra */}
        <input 
          type="text" 
          placeholder="Name or description" 
          className={styles.searchInput} 
        /> {/* Input tách riêng */}
        <button className={styles.pearlsButton}>Pearls</button>
      </div>
    </div>
  

      {/* Nút kết nối, số dư, và HamburgerIcon */}
      <div className={styles.connectContainer}>
        <TonConnectButton className={styles.connectButton} />
        <div className={styles.balanceContainer}>
          <BalanceUI />
        </div>
        <div onClick={toggleMenu} className={styles.iconContainer}>
          {menuOpen ? <CloseIcon className={styles.icon} /> : <MenuOpenIcon className={styles.icon} />}
        </div>
      </div>

      {/* Menu hiện khi mở */}
      {menuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem}>FAQ</div>
          <div className={styles.menuItem}>Appearance</div>
          <div className={styles.communityContainer}>
            <button className={styles.communityButton}>Channel</button>
            <button className={styles.communityButton}>Twitter</button>
            <button className={styles.communityButton}>GitHub</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

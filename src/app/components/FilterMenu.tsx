import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/FilterMenu.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Icon mũi tên xuống
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'; // Icon mũi tên lên

const FilterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the dropdown

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={menuRef}>
      <button className={styles.filterButton} onClick={toggleMenu}>
        Filters
        {isOpen ? <ArrowDropUpIcon className={styles.arrowIcon} /> : <ArrowDropDownIcon className={styles.arrowIcon} />}
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.item}>
            <input type="checkbox" id="sale" />
            <label htmlFor="sale">
              <span className={styles.icon}>🛒</span> Sale
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="putForSale" />
            <label htmlFor="putForSale">
              <span className={styles.icon}>➕</span> Put up for sale
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="saleCancel" />
            <label htmlFor="saleCancel">
              <span className={styles.icon}>❌</span> Sale cancellation
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="transfer" />
            <label htmlFor="transfer">
              <span className={styles.icon}>🔁</span> Transfer
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="mint" />
            <label htmlFor="mint">
              <span className={styles.icon}>✏️</span> Mint
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="auction" />
            <label htmlFor="auction">
              <span className={styles.icon}>🔨</span> Put on auction
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="endOfAuction" />
            <label htmlFor="endOfAuction">
              <span className={styles.icon}>🛑</span> End of auction
            </label>
          </div>
          <div className={styles.item}>
            <input type="checkbox" id="burn" />
            <label htmlFor="burn">
              <span className={styles.icon}>🔥</span> Burn
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;

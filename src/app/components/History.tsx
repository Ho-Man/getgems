'use client';
import React, { useState } from 'react';
import styles from '../styles/History.module.css'; 
import FilterMenu from './FilterMenu';

// Định nghĩa kiểu dữ liệu cho hàng
interface DataRow {
  type: string;
  price: string;
  form: string;
  to: string;
  time: string;
}

// Hàm tạo dữ liệu
function createData(type: string, price: string, form: string, to: string, time: string): DataRow {
  return { type, price, form, to, time };
}

// Dữ liệu ban đầu
const initialRows: DataRow[] = [
  createData('➕ Put up for sale', '1 Ton', 'Item A', 'User1', '10:00 AM'),
  createData('🛑 End of auction', '1 Ton', 'Item B', 'User2', '11:00 AM'),
  createData('🔨 Put on auction', '1 Ton', 'Item C', 'User3', '12:00 PM'),
  createData('🛒 Sale', '1 Ton', 'Item D', 'User4', '1:00 PM'),
  createData('🔨 Put on auction', '1 Ton', 'Item E', 'User5', '2:00 PM'),
  createData('✏️ Mint', '1 Ton', 'Item F', 'User6', '3:00 PM'),
];

export default function BasicTable() {
  const [filter, setFilter] = useState<DataRow[]>(initialRows);

  // Hàm xử lý thay đổi bộ lọc
  const handleFilterChange = (criteria: string) => {
    const filteredRows = initialRows.filter(row => row.type.includes(criteria));
    setFilter(filteredRows);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <p className={styles.histitle}>History</p>
        <FilterMenu onFilterChange={handleFilterChange} />
      </div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>

        
          <tr>
            <th className={styles.tableCell}>Type</th>
            <th className={styles.tableCell}>Price</th>
            <th className={styles.tableCell}>Form</th>
            <th className={styles.tableCell}>To</th>
            <th className={styles.tableCell}>Time</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((row) => (
            <tr key={row.type} className={styles.tableRow}>
              <td className={styles.tableCell}>{row.type}</td>
              <td className={styles.tableCell}>{row.price}</td>
              <td className={styles.tableCell}>{row.form}</td>
              <td className={styles.tableCell}>{row.to}</td>
              <td className={styles.tableCell}>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

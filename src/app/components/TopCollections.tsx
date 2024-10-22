"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/TopCollections.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ITEMS_PER_PAGE = 5; // Số sản phẩm mỗi trang
const TITLE_MAX_LENGTH = 20; // Độ dài tối đa của tên sản phẩm

export default function TopCollections() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.products.length / ITEMS_PER_PAGE)); // Tính số trang
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = async (product: Product) => {
    const purchaseUrl = 'https://api.paymentgateway.com/v1/transactions'; // Địa chỉ API của bạn

    try {
      const response = await fetch(purchaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          amount: product.price,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Bạn đã mua ${product.title} thành công!`);
      } else {
        throw new Error('Failed to purchase product');
      }
    } catch (error) {
      console.error('Error purchasing product:', error);
      alert('Đã xảy ra lỗi trong quá trình mua hàng.');
    }
  };

  const truncateTitle = (title: string) => {
    if (title.length > TITLE_MAX_LENGTH) {
      return title.slice(0, TITLE_MAX_LENGTH) + '...';
    }
    return title;
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.topCollections}>
      <h2>Top Collections</h2>
      <div className={styles.productList}>
        {paginatedProducts.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h3>{truncateTitle(product.title)}</h3> {/* Gọi hàm rút ngắn tên ở đây */}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleBuyNow(product)} className={styles.buyButton}>
              Mua hàng
            </button>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

"use client";
import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import icon

// Component cho Content Box
const ContentBox = ({ title, content }: { title: string; content: string }) => {
    return (
        <div className={styles.contentBox}>
            <h4>{title}</h4>
            <p>{content.slice(0, 100)}...</p>
        </div>
    );
};

// Component chính của Footer
const Footer = () => {
    const contentData = [
        {
            title: "What is Getgems?",
            content: "Getgems is an NFT marketplace built on The Open Network blockchain..."
        },
        {
            title: "What is Ton?",
            content: "TON is a blockchain ecosystem created from the ground up to make digital life easier..."
        },
        {
            title: "What is an NFT?",
            content: "In general, an NFT, or nonfungible token, is a digital contract..."
        },
        {
            title: "What is a crypto wallet?",
            content: "Crypto wallets play the same role as regular wallets where you keep cards and cash..."
        },
        {
            title: "How to buy Toncoins?",
            content: "You can buy Toncoin with a credit or debit card in the Tonkeeper app..."
        },
        {
            title: "Any other questions?",
            content: "How can you buy NFTs on Getgems? How to mint a collection or NFT on Getgems?..."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // Index của ô ContentBox hiện tại

    // Hàm xử lý khi nhấn nút Next
    const handleNext = () => {
        if (currentIndex < contentData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Hàm xử lý khi nhấn nút Previous
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <p className={styles.aboutTitle}>About TON & NFT</p>

                    {/* Thêm nút Previous và Next lên trên các ô ContentBox */}
                    <div className={styles.contentNavigation}>
                        <button onClick={handlePrev} disabled={currentIndex === 0} className={styles.navigationButton}>
                            <ArrowForwardIosIcon style={{ transform: 'rotate(180deg)' }} /> {/* Icon quay ngược cho Previous */}
                        </button>

                        <div className={styles.contentBoxes}>
                            {/* Hiển thị 5 ô liên tục bắt đầu từ currentIndex */}
                            {contentData.slice(currentIndex, currentIndex + 5).map((data, index) => (
                                <ContentBox key={index} title={data.title} content={data.content} />
                            ))}
                        </div>

                        <button onClick={handleNext} disabled={currentIndex >= contentData.length - 5} className={styles.navigationButton}>
                            <ArrowForwardIosIcon /> {/* Icon mặc định cho Next */}
                        </button>
                    </div>
                </div>

                <div className={styles.footerContainer}>
                    <div className={styles.footerContent2}>
                        <div className={styles.logoSection2}>
                            <p className={styles.aboutTitle}>getgems</p>
                        </div>
                        <p>Welcome to the largest NFT marketplace based on The Open Network.</p>
                        <p>Make yourself at home among other NFT enthusiasts.</p>

                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>
                                <TelegramIcon /> Channel
                            </button>
                            <button className={styles.button}>
                                <XIcon /> Twitter
                            </button>
                            <button className={styles.button}>
                                <GitHubIcon /> GitHub
                            </button>
                        </div>
                    </div>

                    {/* Các cột thông tin */}
                    <div className={styles.footerColumns}>
                        <div className={styles.column}>
                            <h4>Marketplace</h4>
                            <ul>
                                <li><a href="#">Brand</a></li>
                                <li><a href="#">For NFT Creators</a></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Support Bot</a></li>
                                <li>Email: support@getgems.io</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

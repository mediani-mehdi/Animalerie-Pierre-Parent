"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { totalItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                    </svg>
                </button>

                <Link href="/" className={styles.logo}>
                    <span>🐾</span>
                    Animalerie Pierre Parent
                </Link>

                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="#categories" className={styles.navLink}>Categories</Link>
                    <Link href="#services" className={styles.navLink}>Services</Link>
                    <Link href="#about" className={styles.navLink}>About</Link>
                    <Link href="#contact" className={styles.navLink}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button className={styles.iconBtn} aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
                    </button>
                    <Link href="#contact" className="btn btn-primary" style={{ marginLeft: '0.5rem', display: 'none', '@media (min-width: 768px)': { display: 'inline-flex' } } as any}>
                        Book Now
                    </Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="#categories" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Categories</Link>
                    <Link href="#services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="#about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="#contact" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
}


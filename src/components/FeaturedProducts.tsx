"use client";

import Link from 'next/link';
import styles from './FeaturedProducts.module.css';
import { useCart } from '@/context/CartContext';

const products = [
    {
        id: 1,
        name: 'Premium Puppy Food',
        category: 'Dog Food',
        price: 450,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        name: 'Interactive Cat Toy',
        category: 'Toys',
        price: 120,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        name: 'Comfort Pet Bed',
        category: 'Accessories',
        price: 350,
        rating: 5,
        image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        name: 'Organic Cat Treats',
        category: 'Cat Food',
        price: 85,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

export default function FeaturedProducts() {
    const { addToCart } = useCart();

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Best Sellers</h2>
                    <Link href="#shop" className={styles.viewAll}>
                        View All Products &rarr;
                    </Link>
                </div>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* Placeholder for image */}
                                <div
                                    className={styles.placeholder}
                                    style={{ background: `url(${product.image}) center/cover no-repeat` }}
                                />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.category}>{product.category}</span>
                                <h3 className={styles.productName}>{product.name}</h3>
                                <div className={styles.rating}>
                                    {'★'.repeat(Math.floor(product.rating))}
                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                    <span style={{ color: '#999', fontSize: '0.75rem' }}>({product.rating})</span>
                                </div>
                                <div className={styles.footer}>
                                    <span className={styles.price}>{product.price} MAD</span>
                                    <button
                                        className={styles.addToCart}
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

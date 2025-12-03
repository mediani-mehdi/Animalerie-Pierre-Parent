import Link from 'next/link';
import styles from './Categories.module.css';

const categories = [
    { id: 1, name: 'Kittens & Cats', icon: '🐱', href: '#cats' },
    { id: 2, name: 'Dogs & Puppies', icon: '🐶', href: '#dogs' },
    { id: 3, name: 'Pet Food', icon: '🍖', href: '#food' },
    { id: 4, name: 'Care & Hygiene', icon: '✨', href: '#care' },
    { id: 5, name: 'Accessories', icon: '🎀', href: '#accessories' },
    { id: 6, name: 'Boutique', icon: '🛍️', href: '#boutique' },
];

export default function Categories() {
    return (
        <section id="categories" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Shop by Category</h2>
                    <p className={styles.subtitle}>Find everything you need for your beloved pets</p>
                </div>

                <div className={styles.grid}>
                    {categories.map((cat) => (
                        <Link key={cat.id} href={cat.href} className={styles.card}>
                            <div className={styles.icon}>{cat.icon}</div>
                            <h3 className={styles.cardTitle}>{cat.name}</h3>
                            <span className={styles.cardLink}>Browse Products &rarr;</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

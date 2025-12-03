import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>Animalerie Pierre Parent</h3>
                        <p>Your trusted partner for all pet needs in Casablanca. Quality products, expert advice, and a love for animals.</p>
                        <p>📍 49 Rue Pierre Parent, Casablanca 20250</p>
                        <p>📞 0625-132727</p>
                    </div>

                    <div className={styles.column}>
                        <h3>Shop</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="#categories">Cats & Kittens</Link></li>
                            <li><Link href="#categories">Dogs</Link></li>
                            <li><Link href="#categories">Pet Food</Link></li>
                            <li><Link href="#categories">Accessories</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Services</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="#services">In-store Shopping</Link></li>
                            <li><Link href="#services">Home Delivery</Link></li>
                            <li><Link href="#services">Grooming Advice</Link></li>
                            <li><Link href="#contact">Consultations</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Hours</h3>
                        <p>Monday - Sunday</p>
                        <p>Open Daily - Closes 8 PM</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Animalerie Pierre Parent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

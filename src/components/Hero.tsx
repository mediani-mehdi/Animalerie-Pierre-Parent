import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.badge}>Casablanca's Favorite Pet Store</span>
                    <h1 className={styles.title}>
                        Your Pet's <br />
                        <span>Complete Care Solution</span>
                    </h1>
                    <p className={styles.description}>
                        From premium food to expert advice, we have everything your furry friends need to stay happy and healthy. Visit us at Rue Pierre Parent.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="#categories" className="btn btn-primary">
                            Shop Now
                        </Link>
                        <Link href="#contact" className="btn btn-outline">
                            Visit Store
                        </Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Using a placeholder div with background image for now */}
                    <div className={styles.imagePlaceholder} aria-label="Happy dog in store"></div>
                </div>
            </div>
        </section>
    );
}

import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.imageWrapper}>
                    <div className={styles.placeholder} aria-label="Store interior"></div>
                </div>
                <div className={styles.content}>
                    <h2>About Animalerie Pierre Parent</h2>
                    <p>
                        Located in the heart of Casablanca, Animalerie Pierre Parent has been serving the local community with passion and dedication. We are more than just a pet store; we are a team of animal lovers committed to providing the best care for your furry family members.
                    </p>
                    <p>
                        Whether you're looking for premium nutrition, fun toys, or expert advice on pet care, our doors are always open. We pride ourselves on our curated selection of high-quality products and our warm, welcoming atmosphere.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h4>90+</h4>
                            <span>5-Star Reviews</span>
                        </div>
                        <div className={styles.statItem}>
                            <h4>1000+</h4>
                            <span>Happy Pets</span>
                        </div>
                        <div className={styles.statItem}>
                            <h4>24/7</h4>
                            <span>Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

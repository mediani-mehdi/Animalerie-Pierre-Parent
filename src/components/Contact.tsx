import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.infoCard}>
                    <h2>Visit Us</h2>

                    <div className={styles.detail}>
                        <div className={styles.icon}>📍</div>
                        <div className={styles.text}>
                            <h4>Address</h4>
                            <p>49 Rue Pierre Parent<br />Casablanca 20250, Morocco</p>
                        </div>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.icon}>📞</div>
                        <div className={styles.text}>
                            <h4>Phone</h4>
                            <p>0625-132727</p>
                        </div>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.icon}>🕒</div>
                        <div className={styles.text}>
                            <h4>Hours</h4>
                            <p>Open Daily<br />Closes 8 PM</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <a href="tel:0625132727" className="btn btn-primary" style={{ marginRight: '1rem' }}>Call Now</a>
                        <a href="https://maps.google.com/?q=Animalerie+Pierre+Parent+Casablanca" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Get Directions</a>
                    </div>
                </div>

                <div className={styles.mapWrapper}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846433664567!2d-7.6192!3d33.5898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzIzLjMiTiA3wrAzNycwOS4xIlc!5e0!3m2!1sen!2sma!4v1625000000000!5m2!1sen!2sma"
                        className={styles.mapFrame}
                        allowFullScreen
                        loading="lazy"
                        title="Animalerie Pierre Parent Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

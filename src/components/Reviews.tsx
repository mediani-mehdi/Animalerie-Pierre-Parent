import styles from './Reviews.module.css';

const reviews = [
    {
        id: 1,
        name: 'Sarah M.',
        rating: 5,
        text: "Absolutely love this store! The staff cares so much about the well-being of kittens and cats. They gave me great advice for my new kitten.",
        date: '2 weeks ago',
    },
    {
        id: 2,
        name: 'Youssef B.',
        rating: 5,
        text: "Best pet shop in Casablanca. Wide variety of products and the delivery was super fast. Highly recommend!",
        date: '1 month ago',
    },
    {
        id: 3,
        name: 'Amine K.',
        rating: 4,
        text: "Great selection of dog food. The owner is very friendly and knowledgeable. Will definitely come back.",
        date: '3 weeks ago',
    },
];

export default function Reviews() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Happy Customers</h2>
                    <p>Rated 4.5/5 stars by over 90 pet owners</p>
                </div>

                <div className={styles.grid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.rating}>{'★'.repeat(review.rating)}</div>
                            <p className={styles.text}>"{review.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar} style={{ background: `hsl(${Math.random() * 360}, 70%, 80%)` }} />
                                <div className={styles.info}>
                                    <span className={styles.name}>{review.name}</span>
                                    <span className={styles.date}>{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

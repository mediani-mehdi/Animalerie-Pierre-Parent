import styles from './Services.module.css';

const services = [
    {
        icon: '🚚',
        title: 'Fast Delivery',
        description: 'We deliver your pet supplies directly to your doorstep in Casablanca.',
    },
    {
        icon: '🏪',
        title: 'In-Store Pickup',
        description: 'Order online and pick up at our store at your convenience.',
    },
    {
        icon: '👨‍⚕️',
        title: 'Expert Advice',
        description: 'Our knowledgeable staff is here to help you choose the best for your pet.',
    },
    {
        icon: '🛁',
        title: 'Grooming Tips',
        description: 'Get professional advice on how to keep your pet looking their best.',
    },
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.icon}>{service.icon}</span>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

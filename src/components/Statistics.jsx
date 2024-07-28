
import styles from './Statistics.module.css';

const Statistics = () => {
    return (
        <section className={styles.statistics}>
            <div className={styles.stat}>
                <h3>23,454</h3>
                <p>Properties Sold</p>
            </div>
            <div className={styles.stat}>
                <h3>1,500+</h3>
                <p>Happy Customers</p>
            </div>
            <div className={styles.stat}>
                <h3>99%</h3>
                <p>Market Reach</p>
            </div>
            <div className={styles.stat}>
                <h3>10,000+</h3>
                <p>Property Listings</p>
            </div>
        </section>
    );
};

export default Statistics;

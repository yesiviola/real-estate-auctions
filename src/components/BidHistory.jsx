/* eslint-disable react/no-unescaped-entities */
import styles from './BidHistory.module.css'
const BidHistory = () => {
    return (
        <section className={styles.bidHistory}>
            <h2>Bid History</h2>
            <div className={styles.myBid}>
                <h3>My Bid:</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Bid Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>28/07/2024</td>
                            <td>$800.000.00</td>
                            <td><span className={styles.edit}>Edit</span> | <span className={styles.retract}>Retract</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.otherBids}>
                <h3>Other Bids: 40</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Bid Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>28/07/2024</td>
                            <td>$800.000.00</td>
                        </tr>
                        <tr>
                            <td>28/07/2024</td>
                            <td>$800.000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.description}>
                <h2>Description</h2>
                <p>Welcome to our exclusive real estate auction platform in the beautiful state of California. Nestled in the heart of San Francisco, this modern villa offers a luxurious lifestyle with stunning architectural design and state-of-the-art amenities. Perfectly located for those who value both tranquility and convenience, our properties provide an unparalleled living experience in one of the most sought-after regions in the United States.</p>
                <p>Whether you're looking to invest in a new home or expand your real estate portfolio, our auctions present a unique opportunity to acquire premium properties at competitive prices. Join us and discover the exceptional benefits of owning real estate in California, a state renowned for its vibrant culture, economic opportunities, and breathtaking landscapes.</p>
            </div>
        </section>
    );
};

export default BidHistory;

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
            <div className={styles.quickLook}>
                <h2>Quick Look</h2>
                <table className={styles.table}>
                    <tbody>
                        
                            <tr>
                                <td>Ad Id</td>
                                <td>100</td>
                                <td>Title Deed Type</td>
                                <td>Turkish Title Deed</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>San Francisco</td>
                                <td>Square Meters</td>
                                <td>150 sqm.</td>
                            </tr>
                            <tr>
                                <td>Property Type</td>
                                <td>Housing/Apartment</td>
                                <td>Swap</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>For Sale</td>
                                <td>Listing Date</td>
                                <td>25/07/2024</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>$900.000.00</td>
                                <td>Last Updated</td>
                                <td>26/07/2024</td>
                            </tr>
                    
                    </tbody>

                </table>

            </div>
            <div className={styles.housingDetails}>
                <h2>Housing Details</h2>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>No. of Rooms</td>
                            <td>8</td>
                            <td>Floor Location</td>
                            <td>Within the site</td>
                        </tr>
                        <tr>
                            <td>No. of Bathrooms</td>
                            <td>2</td>
                            <td>Item Status</td>
                            <td>Unfurnished</td>
                        </tr>
                        <tr>
                            <td>Building Age</td>
                            <td>16-20</td>
                            <td>No. of floor</td>
                            <td>2</td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </section>
    );
};

export default BidHistory;

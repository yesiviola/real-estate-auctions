import styles from './About.module.css';
import  { useState } from 'react';

const About = ()  => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };



    return (
        <div className={styles.about}>
            <h1>Who are we?</h1>
            <p><stron>Real estate auctions</stron></p>
            {expanded && (
                <div className={styles.details}>
                    <p>Our application focuses on real estate auctions, providing a platform for buying, selling, and renting properties across the United States. We offer detailed information about each property, including location, features, and pricing, to help you make informed decisions.</p>
                    <p>With our platform, users can:
                        <u>
                            <li>Browse a wide range of properties available for auction, rent, or sale.</li>
                            <li>View detailed information about each property, including location, features, and pricing.</li>
                            <li>Filter properties based on location, price range, and other criteria.</li>
                            <li>Compare properties for sale or rent to find the perfect match.</li>
                            <li>Get alerts when new properties become available.</li>
                            <li>Access exclusive offers and promotions.</li>
                        </u>
                    </p>
                    <p>Our mission is to simplify the real estate process, making it accessible and efficient for everyone. Whether you are a first-time buyer or an experienced investor, our platform provides the tools and resources you need to succed in the real estate market.</p>
                </div>
            )}
            <button onClick={toggleExpand} className={styles.readMoreButton}>
                {expanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default About;
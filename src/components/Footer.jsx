
import styles from './Footer.module.css';
import logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="Your Brand Name" />
            </div>
            <div className={styles.links}>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-use">Terms of Use</a></li>
                        <li><a href="/sitemap">Sitemap</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/buying-guide">Buying Guide</a></li>
                        <li><a href="/selling-guide">Selling Guide</a></li>
                        <li><a href="/market-trends">Market Trends</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>New York: +1 212-123-1234</li>
                        <li>Los Angeles: +1 213-123-1234</li>
                        <li>Chicago: +1 312-123-1234</li>
                        <li>Houston: +1 713-123-1234</li>
                        <li>San Francisco: +1 415-123-1234</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2024 Website Name. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;

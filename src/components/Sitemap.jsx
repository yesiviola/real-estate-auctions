import styles from './Sitemap.module.css';

const Sitemap = () => {
  return (
    <div className={styles.sitemap}>
      <h1>Sitemap</h1>
      <p>This page provides an overview of all the main sections of our website. Navigate through the links below to explore our content.</p>

      <div className={styles.section}>
        <h2>Main Sections</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sale">Sale</a></li>
          <li><a href="/rent">Rent</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/calculator-value">Value Calculator</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/auctions">Auctions</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Legal Information</h2>
        <ul>
          <li><a href="/terms-of-use">Terms of Use</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Account Management</h2>
        <ul>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Other Resources</h2>
        <ul>
          <li><a href="/request-information">Request Information</a></li>
          <li><a href="/live-walkthrough">Live Walkthrough</a></li>
          <li><a href="/participate-auction">Participate in Auction</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sitemap;

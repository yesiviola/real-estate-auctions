
import styles from './Support.module.css';

const Support = () => {
  return (
    <div className={styles.support}>
      <h1>Customer Support</h1>
      <p>We are here to assist you with any questions or issues you may have. Choose one of the options below to get the support you need.</p>
      
      <section className={styles.supportSection}>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to the most common questions about our platform and services.</p>
        <a href="/faqs" className={styles.supportLink}>Go to FAQs</a>
      </section>

      <section className={styles.supportSection}>
        <h2>Live Chat</h2>
        <p>Need immediate assistance? Our support team is available 24/7 to help you via live chat.</p>
        <button className={styles.chatButton}>Start Live Chat</button>
      </section>

      <section className={styles.supportSection}>
        <h2>Contact Us</h2>
        <p>If you prefer to reach out to us directly, you can email our support team at:</p>
        <p><strong>Email:</strong> <a href="mailto:support@realestateauctions.com">support@realestateauctions.com</a></p>
      </section>

      <section className={styles.supportSection}>
        <h2>Phone Support</h2>
        <p>You can also contact our support team via phone. We are available Monday to Friday from 9 AM to 6 PM.</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </section>

      <section className={styles.supportSection}>
        <h2>Submit a Ticket</h2>
        <p>If your issue requires detailed assistance, submit a ticket and we will respond within 24 hours.</p>
        <button className={styles.ticketButton}>Submit a Ticket</button>
      </section>
    </div>
  );
};

export default Support;

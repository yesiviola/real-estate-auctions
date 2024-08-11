import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      
      <div className={styles.officeInfo}>
        <h2>Our Office</h2>
        <p>1234 Real Estate Ave, Suite 100<br/>San Francisco, CA 94111</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@realestate.com</p>
      </div>

      <div className={styles.socialMedia}>
        <h2>Follow Us</h2>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.jpeg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h2>Send Us a Message</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

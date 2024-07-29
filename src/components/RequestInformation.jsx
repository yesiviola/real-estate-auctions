
import styles from './RequestInformation.module.css';

const RequestInformation = () => {
  return (
    <div className={styles.requestInformation}>
      <h1>Request Information</h1>
      <p>Here you can request a visit or get more information about the property.</p>
      
      <div className={styles.infoSection}>
        <h2>Contact Details</h2>
        <p>Fill out the form below to request more information or to schedule a visit.</p>
        
        <form className={styles.form}>
          <label>
            Full Name
            <input type="text" required />
          </label>
          <label>
            Email
            <input type="email" required />
          </label>
          <label>
            Telephone
            <input type="tel" required />
          </label>
          <label>
            Preferred Visit Date
            <input type="date" required />
          </label>
          <label>
            Additional Information
            <textarea rows="4" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className={styles.imageSection}>
        <h2>Property Images</h2>
        <div className={styles.images}>
          <img src="/image1.webp" alt="Property 1" />
          <img src="/mansion1.webp" alt="Property 2" />
          <img src="/mansion4.jpg" alt="Property 3" />
        </div>
      </div>
    </div>
  );
};

export default RequestInformation;

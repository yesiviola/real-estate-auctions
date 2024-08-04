import { useNavigate } from 'react-router-dom';
import styles from './Sale.module.css';

const Sale = () => {
  const navigate = useNavigate();

  const handleSaleYourHome = () => {
    navigate('/register?redirect=/calculator-value');
  };

  return (
    <div className={styles.sale}>
      <h1>Sell Your Home within 60 Days</h1>
      <article className={styles.article}>
        <p>Selling your home quickly and for the best price is possible with the right approach. Our expert team provides you with the tools and knowledge needed to achieve this goal within 60 days.</p>
        <p>Our proven strategies include:</p>
        <ul>
          <li>Professional home staging to attract more buyers.</li>
          <li>High-quality photography and virtual tours.</li>
          <li>Effective online and offline marketing campaigns.</li>
          <li>Expert negotiation skills to get you the best price.</li>
        </ul>
        <p>By following these steps, many homeowners in San Francisco and other areas of the United States have successfully sold their homes within a short period.</p>
        <p>We understand that selling a home can be a stressful experience, which is why we offer comprehensive support throughout the entire process. Our goal is to make the sale of your home as smooth and profitable as possible.</p>
        <p>Contact us today to start your journey towards selling your home quickly and efficiently.</p>
      </article>
      <button className={styles.sellButton} onClick={handleSaleYourHome}>Sell Your Home</button>
    </div>
  );
};

export default Sale;

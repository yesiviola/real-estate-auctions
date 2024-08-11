import { useLocation } from 'react-router-dom';
import styles from './ResultCalculate.module.css';

const ResultCalculate = () => {
  const location = useLocation();
  const { propertyValue } = location.state || { propertyValue: 0 };

  return (
    <div className={styles.result}>
      <h1>Your Property Value</h1>
      <p>The estimated value of your property is: <strong>${propertyValue}</strong></p>
    </div>
  );
};

export default ResultCalculate;

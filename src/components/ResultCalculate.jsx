import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CalculationResult.module.css';

const ResultCalculate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Verificar si location.state es nulo o indefinido antes de desestructurar
  const state = location.state;

  if (!state || (state.area === 0 && state.value === 0)) {
    return (
      <div className={styles.result}>
        <h1>No Data Available</h1>
        <p>No calculation data available. Please go back and enter the details again.</p>
        <button className={styles.goBackButton} onClick={() => navigate('/')}>
          Go Back to Home
        </button>
      </div>
    );
  }

  const { area, value } = state; // Desestructurar solo si state no es null

  return (
    <div className={styles.result}>
      <h1>Your Calculation Result</h1>
      <p>The calculated area is: <strong>{area} sq meters</strong></p>
      <p>The estimated value of your property is: <strong>${value}</strong></p>
      <button className={styles.goBackButton} onClick={() => navigate('/')}>
        Go Back to Home
      </button>
    </div>
  );
};

export default ResultCalculate;

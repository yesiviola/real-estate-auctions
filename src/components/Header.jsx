import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
   const navigate = useNavigate();

   const handleLoginClick = () => {
      navigate('/login');
   };
   const handleRegisterClick = () => {
      navigate('/register');
   };
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/Logo.png" className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/sale">Sale</a>
        <a href="/rent">Rent</a>
        <a href="/resources">Resources</a>
        <a href="/calculator-value">Value Calculator</a>
        <a href="/projects">Projects</a>
        <a href="/auctions">Auctions</a>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginButton} onClick={handleLoginClick}>Login</button>
        <button className={styles.registerButton} onClick={handleRegisterClick}>Register</button>
      </div>
    </header>
  )
}

export default Header

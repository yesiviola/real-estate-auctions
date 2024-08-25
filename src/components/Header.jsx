import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { FaHome, FaShoppingCart, FaBuilding, FaCalculator, FaProjectDiagram, FaGavel, FaBook } from 'react-icons/fa';

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
      <a href="/" className={styles.navLink}><FaHome/><span className={styles.navText}>Home</span></a>
      <a href="/sale" className={styles.navLink}><FaShoppingCart /><span className={styles.navText}>Sale</span></a>
      <a href="/rent" className={styles.navLink}><FaBuilding /><span className={styles.navText}>Rent</span></a>
      <a href="/resources" className={styles.navLink}><FaBook /><span className={styles.navText}>Resources</span></a>
      <a href="/calculator-value" className={styles.navLink}><FaCalculator /><span className={styles.navText}>Value Calculator</span></a>
      <a href="/projects" className={styles.navLink}><FaProjectDiagram /><span className={styles.navText}>Projects</span></a>
      <a href="/auctions" className={styles.navLink}><FaGavel /><span className={styles.navText}>Auctions</span></a>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginButton} onClick={handleLoginClick}>Login</button>
        <button className={styles.registerButton} onClick={handleRegisterClick}>Register</button>
      </div>
    </header>
  )
}

export default Header

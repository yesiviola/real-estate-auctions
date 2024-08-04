import styles from './Header.module.css';

const Header = () => {
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
        <button className={styles.loginButton}>Login</button>
        <button className={styles.registerButton}>Register</button>
      </div>
    </header>
  )
}

export default Header

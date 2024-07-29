import  { useState } from 'react';
import styles from './LoginPopup.module.css';

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se realizar la autenticación real, pero por simplicidad, se arcodea solo llamamos a onLogin por ahora modo prueba
    onLogin();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;

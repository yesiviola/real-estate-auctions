import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log('Logging in with credentials:', credentials);
    localStorage.setItem('isAuthenticated', 'true');
    const redirectPath = new URLSearchParams(location.search).get('redirect') || '/calculator-value';
    navigate(redirectPath);
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button className={styles.loginButton} onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';

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
    
    // Simular inicio de sesión y guardar estado de autenticación en localStorage
    localStorage.setItem('isAuthenticated', 'true');
    
    // Redirigir al destino previsto después de iniciar sesión
    const redirectTo = new URLSearchParams(location.search).get('redirect') || '/';
    navigate(redirectTo);
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

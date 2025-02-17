import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegister = () => {
    console.log('Registering user with data:', formData);
    
    // Simular registro y guardar estado de autenticación en localStorage
    localStorage.setItem('isAuthenticated', 'true');
    
    // Redirigir al login con el parámetro de redirección al cálculo
    navigate('/login?redirect=/calculator-value');
  };

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button className={styles.registerButton} onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;

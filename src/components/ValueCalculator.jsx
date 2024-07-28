
import { useState } from 'react';
import styles from './ValueCalculator.module.css';
import { useNavigate } from 'react-router-dom';

const ValueCalculator = () => {
    const [formData, setFormData] = useState({
        area: '',
        rooms: '',
        bathrooms: '',
        parking: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/calculation-result', { state: formData });
    };

    return (
        <section className={styles.valueCalculator}>
            <h2>Know The Value Of Your Home</h2>
            <p>Enter the details of your home to get an estimate of its value 
                and the price of its auction,
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Area (in sq. meters):
                    <input type="number" name="area" value={formData.area} onChange={handleChange} required />
                </label>
                <label>
                    Number of Rooms:
                    <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} required />
                </label>
                <label>
                    Number of Bathrooms:
                    <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} required />
                </label>
                <label>
                    Parking Spaces:
                    <input type="number" name="parking" value={formData.parking} onChange={handleChange} required />
                </label>
                <button type="submit">Calculate</button>
            </form>
        </section>
    );
};

export default ValueCalculator;

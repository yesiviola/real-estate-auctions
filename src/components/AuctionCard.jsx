import { useNavigate } from 'react-router-dom';
import styles from './AuctionCard.module.css';

// eslint-disable-next-line react/prop-types
const AuctionCard = ({ image, title, location, price, link }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(link);
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.details}>
                <h3>{title}</h3>
                <p>{location}</p>
                <p>{price}</p>
                <button onClick={handleViewDetails}>View Details</button>
            </div>
        </div>
    );
}

export default AuctionCard;

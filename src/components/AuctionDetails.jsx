import {  useNavigate, useParams } from 'react-router-dom';
import styles from './AuctionDetails.module.css';




const AuctionDetails = () => {

    const { id } = useParams();

    const Navigate = useNavigate();

    const propertyDetails = {
        1: { image: '/image1.webp', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$1,200,000', description: 'A beautiful modern villa with all amenities.' },
        2: { image: '/mansion1.webp', title: 'Luxury Mansion', location: 'San Francisco', price: '$2,000,000', description: 'A luxury mansion with stunning views.' },
        3: { image: '/mansion2.jpeg', title: 'Elegant Villa', location: 'San Francisco', price: '$1,700,000', description: 'An elegant villa with modern design.' },
        4: { image: '/mansion3.jpeg', title: 'Spacious Villa', location: 'San Francisco', price: '$600,000', description: 'A spacious villa perfect for families.' },
        5: { image: '/mansion4.jpg', title: 'Grand Mansion', location: 'San Francisco', price: '$2,500,000', description: 'A grand mansion with luxurious features.' },
        6: { image: '/mansion5.jpg', title: 'Exclusive Villa', location: 'San Francisco', price: '$3,000,000', description: 'An exclusive villa with private amenities.' }
    }

    const property = propertyDetails[id];

    if (!property) {
        return <div>Property not found</div>
    }
    return (
     <div className={styles.auctionDetails}>
        <img src={property.image} alt={property.title} className={styles.image} />
        <div className={styles.details}>
            <h2>{property.title}</h2>
            <p><strong>Location:</strong>{property.location}</p>
            <p><strong>Price:</strong>{property.price}</p>
            <p>{property.description}</p>
            <button onClick={() => Navigate('/')}>Back to Home</button>
        </div>
    </div>
    )
}


export default AuctionDetails;
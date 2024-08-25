import { useState } from 'react';
import AdvancedSearch from './AdvancedSearch';
import styles from './Rent.module.css';

const Rent = () => {
  // eslint-disable-next-line no-unused-vars
  const [properties, setProperties] = useState([
    {
      id: 1,
      image: '/assets/apartment.jpg',
      title: 'Luxury Apartment',
      location: 'San Francisco, CA',
      price: '$3,500/month',
      type: 'Apartment',
      features: ['2 Bedrooms', '2 Bathrooms', 'City View', 'Balcony', '2nd Floor']
    },
    {
      id: 2,
      image: '/assets/apartmento.jpeg',
      title: 'Modern Apartment',
      location: 'Los Angeles, CA',
      price: '$4,200/month',
      type: 'Apartment',
      features: ['3 Bedrooms', '2 Bathrooms', 'Pool Access', '1st Floor']
    },
    {
      id: 3,
      image: '/assets/casalujo.avif',
      title: 'Luxury House',
      location: 'Miami, FL',
      price: '$6,000/month',
      type: 'House',
      features: ['6 Bedrooms', '3 Bathrooms', 'Ocean View', 'Garden']
    },
    {
      id: 4,
      image: '/assets/house.jpg',
      title: 'Luxury House',
      location: 'San Francisco',
      price: '$3,000/month',
      type: 'House',
      features: ['4 Bedrooms', '3 Bathrooms', 'Garden']
    },
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [likes, setLikes] = useState([]);

  const applyFilters = (filters) => {
    let filtered = properties;

    if (filters.propertyType) {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    if (filters.rooms.length > 0) {
      filtered = filtered.filter(property => 
        filters.rooms.every(room => property.features.includes(room))
      );
    }

    if (filters.floors.length > 0) {
      filtered = filtered.filter(property =>
        filters.floors.every(floor => property.features.includes(floor))
      );
    }

    if (filters.externalFeatures.length > 0) {
      filtered = filtered.filter(property =>
        filters.externalFeatures.every(feature => property.features.includes(feature))
      );
    }
  
    setFilteredProperties(filtered);
  };

  const toggleLike = (propertyId) => {
    setLikes(prevLikes => {
      if (prevLikes.includes(propertyId)) {
        return prevLikes.filter(id => id !== propertyId);
      } else {
        return [...prevLikes, propertyId];
      }
    });
  };

  return (
    <div className={styles.rent}>
      <h1>Luxury Apartments and Houses for Rent</h1>
      <p>Explore our collection of luxury apartments and houses available for rent.</p>
      <AdvancedSearch onApplyFilters={applyFilters} />
      <div className={styles.properties}>
        {filteredProperties.map((property) => (
          <div key={property.id} className={styles.property}>
            <img src={property.image} alt={property.title} className={styles.image} />
            <div className={styles.details}>
              <h2>{property.title}</h2>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Price:</strong> {property.price}</p>
              <ul>
                {property.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button 
                className={styles.likeButton} 
                onClick={() => toggleLike(property.id)}
              >
                {likes.includes(property.id) ? '❤️' : '♡'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;

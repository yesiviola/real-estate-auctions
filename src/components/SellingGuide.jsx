import { useState } from 'react';
import styles from './SellingGuide.module.css';

const SellingGuide = () => {
  // eslint-disable-next-line no-unused-vars
  const [properties, setProperties] = useState([
    {
      id: 1,
      image: '/selling/image1.avif',
      title: 'Luxury house',
      location: 'San Francisco, CA',
      price: '$3,500/month',
      type: 'House',
      features: ['5 Bedrooms', '3 Bathrooms', 'San Francisco', 'Garden', '3nd Floor']
    },
    {
      id: 2,
      image: '/selling/image2.webp',
      title: 'House',
      location: 'Los Angeles, CA',
      price: '$2,200/month',
      type: 'House',
      features: ['3 Bedrooms', '2 Bathrooms', 'Garage', '2st Floor']
    },
    {
      id: 3,
      image: '/selling/images3.jpeg',
      title: 'House',
      location: 'Miami, FL',
      price: '$3,000/month',
      type: 'House',
      features: ['3 Bedrooms', '3 Bathrooms', 'Ocean View', 'Garden']
    },
    {
      id: 4,
      image: '/selling/images4.jpg',
      title: 'Luxury House',
      location: 'San Francisco',
      price: '$3,000/month',
      type: 'House',
      features: ['4 Bedrooms', '3 Bathrooms', 'Garden']
    },
    {
      id: 5,
      image: '/selling/images5.webp',
      title: 'Modern Apartment',
      location: 'New York, NY',
      price: '$5,000/month',
      type: 'Apartment',
      features: ['4 Bedrooms', '3 Bathrooms', 'City View', 'Balcony']
    },
    {
      id: 6,
      image: '/selling/images6.webp',
      title: 'Luxury Apartment',
      location: 'Los Angeles, CA',
      price: '$6,000/month',
      type: 'Apartment',
      features: ['5 Bedrooms', '4 Bathrooms', 'Pool', 'Balcony','Bar']
    },
    {
      id: 7,
      image: '/selling/images7.webp',
      title: 'Modern Apartment',
      location: 'San Francisco, CA',
      price: '$4,000/month',
      type: 'Apartment',
      features: ['3 Bedrooms', '2 Bathrooms', 'City View', 'Balcony']
    },
    {
      id: 8,
      image: '/selling/images8.jpg',
      title: 'Modern Apartment',
      location: 'New York, NY',
      price: '$5,000/month',
      type: 'Apartment',
      features: ['4 Bedrooms', '3 Bathrooms', 'City View', 'Balcony']
    }
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [selectedType, setSelectedType] = useState('sell');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    let filtered = properties;
    
    if (selectedPropertyType) {
      filtered = filtered.filter(property => property.type === selectedPropertyType);
    }

    if (selectedLocation) {
      filtered = filtered.filter(property => property.location.toLowerCase().includes(selectedLocation.toLowerCase()));
    }

    setFilteredProperties(filtered);
    setNoResults(filtered.length === 0);
  };

  const handleLike = (id) => {
    setProperties(prevLikedProperties =>
      prevLikedProperties.includes(id)
        ? prevLikedProperties.filter(likeId => likeId !== id)
        : [...prevLikedProperties, id]
    );
  };

  return (
    <div className={styles.sellingGuide}>
      <h1>Find The Best Properties In United States</h1>
      <div className={styles.searchBar}>
        <button 
          className={`${styles.searchButton} ${selectedType === 'buy' ? styles.active : ''}`}
          onClick={() => setSelectedType('buy')}
        >
          Buy
        </button>
        <button 
          className={`${styles.searchButton} ${selectedType === 'rent' ? styles.active : ''}`}
          onClick={() => setSelectedType('rent')}
        >
          Rent
        </button>
        <button 
          className={`${styles.searchButton} ${selectedType === 'auction' ? styles.active : ''}`}
          onClick={() => setSelectedType('auction')}
        >
          Auction
        </button>
        <div className={styles.filters}>
          <select 
            value={selectedPropertyType} 
            onChange={(e) => setSelectedPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
          </select>
          <input 
            type="text" 
            placeholder="Location..." 
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {noResults && <p className={styles.noResults}>No properties found in the specified location.</p>}
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
                className={`${styles.heartButton} ${properties.includes(property.id) ? styles.liked : ''}`} 
                onClick={() => handleLike(property.id)}
              >
                &hearts;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingGuide;

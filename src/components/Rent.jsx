import styles from './Rent.module.css';

const Rent = () => {
  const properties = [
    {
      image: '/src/assets/apartment.jpg',
      title: 'Luxury Apartment',
      location: 'San Francisco, CA',
      price: '$3,500/month',
      features: ['3 Bedrooms', '2 Bathrooms', 'City View']
    },
    {
      image: '/src/assets/apartmento.jpeg',
      title: 'Modern Apartment',
      location: 'Los Angeles, CA',
      price: '$4,200/month',
      features: ['2 Bedrooms', '2 Bathrooms', 'Pool Access']
    },
    {
      image: '/src/assets/casalujo.avif',
      title: 'Luxury House',
      location: 'Miami, FL',
      price: '$6,000/month',
      features: ['6 Bedrooms', '3 Bathrooms', 'Ocean View']
    },
    {
    image: '/src/assets/house.jpg',
    title: 'Luxury House',
    location: 'San Francisco',
    price: '$3,000/month',
    features: ['4 Bedrooms', '3 Bathrooms', 'city']
  },
  ];

  return (
    <div className={styles.rent}>
      <h1>Luxury Apartments and Houses for Rent</h1>
      <p>Explore our collection of luxury apartments and houses available for rent.</p>
      <div className={styles.properties}>
        {properties.map((property, index) => (
          <div key={index} className={styles.property}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rent;

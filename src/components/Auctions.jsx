import  { useState } from 'react';
import styles from './Auctions.module.css';

const Auctions = () => {
  const [currentView, setCurrentView] = useState('auctions');
  // eslint-disable-next-line no-unused-vars
  const [credits, setCredits] = useState(2); // Simulando créditos disponibles
  const [auctions] = useState([
    {
      id: 1,
      title: '2 Bedroom Apartment',
      location: 'San Francisco, CA',
      price: '$1,200,000',
      status: 'approved',
      image: '/src/assets/apartment.jpg'
    },
    {
      id: 2,
      title: '3 Bedroom House',
      location: 'Los Angeles, CA',
      price: '$2,50,000',
      status: 'pending',
      image: '/src/assets/apartment2.jpg'
    },
  ]);


  const [favorites] = useState([
    {
      id: 1,
      title: 'House for rent',
      location: 'San Francisco, CA',
      price: '$1,200/month',
      image: '/selling/image1.webp'
    },
    {
      id: 2,
      title:'2 Bedroom Apartment',
      location: 'Los Angeles, CA',
      price: '$2,500/month',
      image: '/selling/image2.webp'

    },
  ]);


  const renderContent = () => {
    if (currentView === 'auctions')  {
      return (
        <>
        <h1>Auctions</h1>
        <div className={styles.credits}>
          <span>Total Credits - {credits}</span>
          <button className={styles.createButton}>Create</button>
        </div>
        <div className={styles.auctionList}>
          {auctions.map((auction) => (
            <div  key={auction.id} className={styles.auctionCard}>
              <img src={auction.image} alt={auction.title} className={styles.image} />
              <div className={styles.details}>
                <h2>{auction.title}</h2>
                <p>{auction.location}</p>
                <p>{auction.price}</p>
                <span className={styles[auction.status]}>{auction.status === 'approved' ? 'Approved' : 'Pending'}</span>
                <div className={styles.actions}>
                  <button>Payments</button>
                  <button>Manage Bids</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
      );
    } else if (currentView === 'favorites')  {
      return (
        <>
        <h1>Favourites</h1>
        <div className={styles.favoritesList}>
          {favorites.map((favorite) => (
            <div key={favorite.id} className={styles.favoriteCard}>
              <img src={favorite.image} alt={favorite.title} className={styles.image} />
              <div className={styles.details}>
                <h2>{favorite.title}</h2>
                <p>{favorite.location}</p>
                <p>{favorite.price}</p>
                <button className={styles.detailsButton}>More Details</button>
              </div>
            </div>
          ))}
        </div>
        </>
      );
    }
  };

  return (
    <div className={styles.Auctions}>
      <div className={styles.sidebar}>
        <div className={styles.menu}>
          <button onClick={() => setCurrentView('listing')}>Listings</button>
          <button onClick={() => setCurrentView('auctions')}>Auctions</button>
          <button onClick={() => setCurrentView('bids')}>Bids</button>
          <button onClick={() => setCurrentView('favorites')}>Favourites</button>
          <button>Logout</button>
        </div>
      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Auctions;

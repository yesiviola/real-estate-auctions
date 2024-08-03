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
      image: '/selling/image1.avif'
    },
    {
      id: 2,
      title:'2 Bedroom Apartment',
      location: 'Los Angeles, CA',
      price: '$2,500/month',
      image: '/selling/image2.webp'

    },
  ]);


  const [listings] = useState([
    {
      id:1,
      title: 'Luxury Apartment',
      location:'New York, NY',
      price: '$1,500,000',
      type:'Apartment',
      status: 'approved',
      image: '/src/assets/apartment.jpg'
    },
    {
      id:2,
      title: 'Modern House',
      location: 'Miami, FL',
      price: '$2,500,000',
      type: 'House',
      status:'pending',
      image: '/src/assets/apartment2.jpg',
    },
  ]);


  const [listingDetails, setListingDetails] = useState({
    title: '',
    propertyType: '',
    location: {
      district: '',
      city: ''
    },
    price: '',
    coverImage: '',
    listingType: '',
    sticker: '',
    description: '',
    status: '',
    deedType: '',
    titleDeed: '',
    squareMeters: '',
    swap: '',
    adLocation: '',
    pricingFrequency: '',
    exteriorFeatures: [],
    interiorFeatures: [],
    locationFeatures: [],
    planningZone: {
      description: '',
      coverage: '',
      density: '',
      height: '',
      allowedStories: '',
      developmentDesc: ''
    },
    nearbyZones: {
      commercial: '',
      tourist: '',
      industrial: '',
      agricultural: '',
      farm: ''
    },
    housingDetails: {
      bathrooms: '',
      rooms: '',
      buildingAge: '',
      floorLocation: '',
      withinSite: '',
      itemStatus: '',
      numberOfFloors: ''
    },
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleNestedChange = (e, category, field) => {
    const { value } = e.target;
    setListingDetails((prevDetails) => ({
      ...prevDetails,
      [category]: {
        ...prevDetails[category],
        [field]: value
      }
    }));
  };

  // eslint-disable-next-line no-unused-vars
  const handleArrayChange = (e, category, ) => {
    const { name, checked } = e.target;
    setListingDetails((prevDetails) => ({
      ...prevDetails,
      [category]: checked
        ? [...prevDetails[category], name]
        : prevDetails[category].filter((item) => item !== name)
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setListingDetails((prevDetails) => ({
      ...prevDetails,
      images: files
    }));
  };

  const handleCreateListing = () => {
    console.log('Creating listing with details:', listingDetails);
    // Aquí dejo el espacio para  manejar la lógica para enviar los detalles al backend
  };





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
    } else if (currentView === 'listing') {
      return (
        <>
        <h1>Listings</h1>
        <div className={styles.listingList}>
          {listings.map((listing) => (
            <div key={listing.id} className={styles.listingCard}>
              <img src={listing.image} alt={listing.title} className={styles.image} />
              <div className={styles.details}>
                <h2>{listing.title}</h2>
                <p>{listing.location}</p>
                <p>{listing.price}</p>
                <span className={styles[listing.status]}>{listing.status === 'approved' ? 'Approved' : 'Pending'}</span>
                <button className={styles.detailsButton}>More Details</button>
              </div>
            </div>
          ))}

        </div>

        <div className={styles.createListing}>
            <h2>Create A Listing</h2>
            <div className={styles.basicDetails}>
              <input
                type="text"
                placeholder="Enter Title..."
                name="title"
                value={listingDetails.title}
                onChange={handleChange}
              />
              <select
                name="propertyType"
                value={listingDetails.propertyType}
                onChange={handleChange}
              >
                 <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
              <div>
                <select
                  name="district"
                  value={listingDetails.location.district}
                  onChange={(e) => handleNestedChange(e, 'location', 'district')}
                >
                  <option value="">District</option>
                  <option value="District 1">District 1</option>
                  <option value="District 2">District 2</option>
                </select>
                <select
                  name="city"
                  value={listingDetails.location.city}
                  onChange={(e) => handleNestedChange(e, 'location', 'city')}
                >
                  <option value="">City</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Los Angeles">Los Angeles</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter Price..."
                name="price"
                value={listingDetails.price}
                onChange={handleChange}
              />
              <input
                type="file"
                name="coverImage"
                onChange={handleImageUpload}
                multiple
              />
              <select
                name="listingType"
                value={listingDetails.listingType}
                onChange={handleChange}
              >
                <option value="">Listing Type</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
              <select
                name="sticker"
                value={listingDetails.sticker}
                onChange={handleChange}
              >
                <option value="">Sticker</option>
                <option value="New">New</option>
                <option value="Featured">Featured
                </option>
              </select>
            </div>
            <button onClick={handleCreateListing}>Create</button>
        </div>

        </>
      )
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

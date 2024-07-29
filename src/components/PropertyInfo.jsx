import  { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./PropertyInfo.module.css";
import LoginPopup from './LoginPopup'; 

const PropertyInfo = () => {
  const navigate = useNavigate();
  const synthRef = useRef(window.speechSynthesis);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleRequestClick = () => {
    if (isAuthenticated) {
      navigate("/request-information");
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLoginPopup(false);
    navigate("/request-information");
  };

  const handleAuctioneerClick = () => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    const message = `Number of bids: 40
        Current highest bid: $700,000
        Time left for auction to end: 2d 20h 49m 50s
        Guide price: $700,000.000`;
    const speech = new SpeechSynthesisUtterance(message);
    synthRef.current.speak(speech);
  };

  const handleParticipateClick = () => {
    navigate("/participate-auction");
  };

  return (
    <section className={styles.propertyInfo}>
      <h2>Freshly Built Modern Villa</h2>
      <p>
        <strong>San Francisco, California</strong>
      </p>
      <div className={styles.buttons}>
        <button onClick={handleRequestClick} className={styles.requestButton}>
          Request A Visit / Information
        </button>
        <button onClick={handleRequestClick} className={styles.videoButton}>
          Live Walkthrough
        </button>
      </div>
      <div className={styles.auctionDetails}>
        <div>
          <p>Auction Date</p>
          <p>27/07/2024</p>
        </div>
        <div>
          <p>Auction Time</p>
          <p>4:00PM - 5:00PM</p>
        </div>
        <div>
          <p>Lot No.</p>
          <p>457</p>
        </div>
      </div>
      <div className={styles.auctioneer} onClick={handleAuctioneerClick}>
        <p>
          <span role="img" aria-label="auctioneer">
            🔊
          </span>{" "}
          Auctioneer
        </p>
      </div>
      <div className={styles.bidInfo}>
        <div>
          <p>
            Guide Price: <span className={styles.price}>$700,000.00</span>
          </p>
        </div>
        <div>
          <p>End Date: 27/07/2024</p>
        </div>
        <div>
          <p>Time Left: 2d 20h 49m 50s</p>
        </div>
        <div className={styles.bidInput}>
          <input type="text" value="$700,000.00" readOnly />
          <button
            onClick={handleParticipateClick}
            className={styles.participateButton}
          >
            Participate In Auction
          </button>
        </div>
      </div>
      {showLoginPopup && <LoginPopup onLogin={handleLogin} />}
    </section>
  );
};

export default PropertyInfo;

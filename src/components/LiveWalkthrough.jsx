import styles from './LiveWalkthrough.module.css';

const LiveWalkthrough = () => {
  return (
    <div className={styles.liveWalkthrough}>
      <h1>Live Video Walkthrough</h1>
      <p>Experience a live video walkthrough of the property to see all its features and amenities in real-time.</p>
      
      <div className={styles.videoSection}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/U8Cd_McCdow"
          title="Live Walkthrough Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.infoSection}>
        <h2>Property Details</h2>
        <p>This modern villa offers a luxurious lifestyle with stunning architectural design and state-of-the-art amenities. Perfectly located in San Francisco, this property provides an unparalleled living experience.</p>
      </div>
    </div>
  );
};

export default LiveWalkthrough;

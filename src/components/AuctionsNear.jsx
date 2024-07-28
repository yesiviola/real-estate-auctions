import AuctionCard from './AuctionCard';
import styles from './AuctionsNear.module.css';

const AuctionsNear = () =>  {
    const auctions = [
        { image: '/image1.webp', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$1,200,000', link: '/details/1' },
        { image: '/mansion1.webp', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$2,000,000', link: '/details/2' },
        { image: '/mansion2.jpeg', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$1700,000,000', link: '/details/3' },
        { image: '/mansion3.jpeg', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$600,000.00', link: '/details/4' },
        { image: '/mansion4.jpg', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$2,500,000', link: '/details/5' },
        { image: '/mansion5.jpg', title: 'Freshly Built Modern Villa', location: 'San Francisco', price: '$3,000,000', link: '/details/6' }
    ];

    return (
        <section className={styles.auctionsNear}>
            <h2>Auctions Near San Francisco</h2>
            <div className={styles.carousel}>
                {auctions.map((auction, index) => (
                    <AuctionCard key={index} {...auction} />
                ))}
            </div>
        </section>
    )
}

export default AuctionsNear;

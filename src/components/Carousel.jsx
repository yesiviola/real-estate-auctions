
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Carousel.module.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.carouselContainer}>
        <Slider {...settings}>
            <div>
                <img src='/image1.webp' alt="Slide 1" className={styles.image}/>
            </div>
            <div>
                <img src='/real-estate-auction2.jpg' alt="Slide 2" className={styles.image} />
            </div>
            <div>
                <img src='/real-state-auction3.jpeg' alt="Slide 3" className={styles.image} />
            </div>
            <div>
                <img src='/real-estate-auctions4.jpg' alt="Slide 4"  className={styles.image}/>
            </div>
            <div>
                <img src='/real-estate-auctions5.jpg' alt="Slide 5" className={styles.image}/>
            </div>
            <div>
                <img src='/real-state-auction6.jpg' alt="Slide 6" className={styles.image}/>
            </div>
            <div>
                <img src='/real-state-autions7.png' alt="Slide 7" className={styles.image} />
            </div>

        </Slider>

    </div>
    )
}




export default Carousel;
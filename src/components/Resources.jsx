import { useState } from 'react';
import styles from './Resources.module.css';



const Resources = () => {

    const [resources ] = useState([
        {
            title: "See What Locals Think your Time Is Worth",
            summary: "Discover how much your time is valued in San Francisco. Learn from locals and get insights.",
            details: "In San Francisco, the cost of living is high, and understanding the value of your time can help you make better decisions. From commuting to job opportunities, every minute counts. Read more to find out what locals think and how you can maximize your time.",
            link:"https://www.mansionglobal.com/es/buy/united-states/california/san-francisco"
        },
        {
            title: "Free Access To North California Real Estate Guides",
             summary: "Get free access to comprehensive real estate guides covering the North California area.",
             details: "These guides offer in-depth information about the real estate market in North California, including San Francisco. Learn about market trends, property values, and investment opportunities. Click to read more and get your free guide today.",
             link:"https://www.sothebysrealty.com/sanfrancisco/spu/venta/san-francisco-ca-usa/?lat=37.714439239858876&lng=-122.51245746013481&z=10"
        },
        {
            title: "California Transfer Fees and Stamp Duties Calculator",
            summary: "Calculate your transfer fees and stamp duties easily with our tool.",
            details: "When buying property in California, it's important to understand all the costs involved. Our calculator helps you estimate the transfer fees and stamp duties, so you can plan your budget effectively. Read more to access the calculator.",
            link:"https://www.properstar.es/estados-unidos/san-francisco/comprar/lujo?p=2"
        },
        {
            title: "How To Sell Your Home Fast For The Highest Price",
      summary: "Learn the best strategies to sell your home quickly and for the highest possible price.",
      details: "Selling your home in a competitive market like San Francisco can be challenging. Our guide provides tips and strategies to prepare your home, market it effectively, and negotiate the best price. Click to read more and get started on selling your home fast.",
      link: "https://www.nomadasexperience.com/estados-unidos/mejores-barrios-en-san-francisco/"
        }
    ]);

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };


    return (
        <div className={styles.resources}>
            <h1>Important Resources</h1>
            <div className={styles.resourceList}>
                {resources.map((resource, index) => (
                    <div key={index} className={styles.resourceCard}>
                        <h2>{resource.title}</h2>
                        <p>{resource.summary}</p>
                        {expanded === index && <p>{resource.details}</p>}
                        <button onClick={() => toggleExpand(index)} className={styles.readMoreButton}>
                            {expanded === index ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                ))}

            </div>
        </div>
    )
}



export default Resources;
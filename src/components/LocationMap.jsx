import styles from './LocationMap.module.css';



const LocationMap = () =>   {


    return  (
        <section className={styles.locationMap}>
            
            <h2>Location</h2>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1181629633735!2d-122.43919428468103!3d37.79144557975767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e5e4b75e4d%3A0x8b2b7e5a6a5efbd2!2sPacific%20Heights%2C%20San%20Francisco%2C%20CA%2094109%2C%20USA!5e0!3m2!1sen!2sau!4v1640663629135!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Property Location"

            ></iframe>


            <div className={styles.adFeatures}>
                <h2>Ad Features</h2>
                <div className={styles.featureSection}>
                    <h3>Exterior Features</h3>

                    <ul>
                        <li><input type="checkbox" checked /> Car Park</li>
                        <li><input type="checkbox" checked  /> Parking Garage</li>
                        <li><input type="checkbox" checked /> Water Tank</li>
                        <li><input type="checkbox" checked /> Thermal Insulation</li>
                    </ul>
                </div>

                <div className={styles.featureSection}>
                    <h3>Interior Features</h3>
                    <ul>
                        <li><input type="checkbox" checked /> Balcony</li>
                        <li><input  type="checkbox" checked /> Built-in kitchen</li>
                        <li><input type="checkbox"  checked /> Blinds</li>

                    </ul>
                </div>

                <div className={styles.featuresSection}>
                    <h3>Location Features</h3>
                    <ul>
                        <li><input type="checkbox" checked />Local</li>
                        <li><input type="checkbox" checked />Eastern Front</li>
                        <li><input type="checkbox" checked />Mountain View</li>
                    </ul>
                </div>
            </div>
            <div className={styles.planningZone}>
                <h2>Planning Zone</h2>
                <div className={styles.zoneSection}>
                    <h3>Residential (KA8)</h3>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>Description</td>
                                <td>Areas With Dominant Use The Residence</td>
                            </tr>
                            <tr>
                                <td>Coverage</td>
                                <td>0.35</td>
                            </tr>
                            <tr>
                                <td>Density</td>
                                <td>0.7</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>8.3 metres</td>
                            </tr>
                            <tr>
                                <td>Allowed Stories</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Development Desc.</td>
                                <td>Special Policy Statement</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.zoneSection}>
                    <h3>Near By Planning Zones</h3>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>Commercial</td>
                                <td>1 KM</td>
                            </tr>
                            <tr>
                                <td>Tourist</td>
                                <td>0.35 KM</td>
                            </tr>
                            <tr>
                                <td>Industrial</td>
                                <td>0.7 KM</td>
                            </tr>
                            <tr>
                                <td>Agricultural</td>
                                <td>8.3 KM</td>
                            </tr>
                            <tr>
                                <td>Farm</td>
                                <td>2 KM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}




export default LocationMap;
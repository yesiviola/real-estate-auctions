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
        </section>
    )
}




export default LocationMap;
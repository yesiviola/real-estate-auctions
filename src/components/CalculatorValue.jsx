import { useState } from 'react';
import styles from './CalculatorValue.module.css';

const CalculatorValue = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    type: '',
    squareMeters: '',
    constructionMeters: '',
    rooms: '',
    bathrooms: '',
    garden: false,
    garage: '',
    services: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPropertyDetails((prevDetails) => ({ ...prevDetails, [name]: checked }));
  };

  const handleArrayChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value, checked } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      services: checked
        ? [...prevDetails.services, value]
        : prevDetails.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Property Details:', propertyDetails);
  };

  return (
    <div className={styles.calculator}>
      <h1>Property Value Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Property Type:
          <select name="type" value={propertyDetails.type} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
          </select>
        </label>
        <label>
          Square Meters:
          <input type="number" name="squareMeters" value={propertyDetails.squareMeters} onChange={handleChange} />
        </label>
        <label>
          Construction Meters:
          <input type="number" name="constructionMeters" value={propertyDetails.constructionMeters} onChange={handleChange} />
        </label>
        <label>
          Rooms:
          <input type="number" name="rooms" value={propertyDetails.rooms} onChange={handleChange} />
        </label>
        <label>
          Bathrooms:
          <input type="number" name="bathrooms" value={propertyDetails.bathrooms} onChange={handleChange} />
        </label>
        <label>
          Garden:
          <input type="checkbox" name="garden" checked={propertyDetails.garden} onChange={handleCheckboxChange} />
        </label>
        <label>
          Garage (Number of Cars):
          <input type="number" name="garage" value={propertyDetails.garage} onChange={handleChange} />
        </label>
        <label>
          Services:
          <div>
            <input type="checkbox" name="services" value="Balcony" onChange={handleArrayChange} /> Balcony
            <input type="checkbox" name="services" value="Pool" onChange={handleArrayChange} /> Pool
            <input type="checkbox" name="services" value="Elevator" onChange={handleArrayChange} /> Elevator
          </div>
        </label>
        <button type="submit">Calculate Value</button>
      </form>
    </div>
  );
};

export default CalculatorValue;

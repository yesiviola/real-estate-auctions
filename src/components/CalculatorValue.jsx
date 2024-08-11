import { useState } from 'react';
import styles from './CalculatorValue.module.css';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPropertyDetails((prevDetails) => ({ ...prevDetails, [name]: checked }));
  };

  const handleArrayChange = (e) => {
    const { value, checked } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      services: checked
        ? [...prevDetails.services, value]
        : prevDetails.services.filter((service) => service !== value),
    }));
  };

  const calculatePropertyValue = () => {
    const basePricePerSquareMeter = 1000;
    const constructionMultiplier = 1.5;
    const roomValue = 1800;
    const bathroomValue = 2000;
    const gardenValue = propertyDetails.garden ? 10000 : 0;
    const garageValue = 2500 * parseInt(propertyDetails.garage || 0);

    let servicesValue = 0;
    if (propertyDetails.services.includes("Balcony")) servicesValue += 3000;
    if (propertyDetails.services.includes("Pool")) servicesValue += 8000;
    if (propertyDetails.services.includes("Elevator")) servicesValue += 4000;

    const propertyValue = 
    (parseInt(propertyDetails.squareMeters || 0) * basePricePerSquareMeter) +
    (parseInt(propertyDetails.constructionMeters || 0) * basePricePerSquareMeter * constructionMultiplier) +
    (parseInt(propertyDetails.rooms || 0) * roomValue) +
    (parseInt(propertyDetails.bathrooms || 0) * bathroomValue) +
    gardenValue +
    garageValue +
    servicesValue;

    return propertyValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = calculatePropertyValue();
    const area = parseInt(propertyDetails.squareMeters || 0);
    console.log('Property Value:', value);
    navigate('/result-calculate', { state: { area, value } });
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

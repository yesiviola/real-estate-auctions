import { useState } from 'react';
import styles from './AdvancedSearch.module.css';

// eslint-disable-next-line react/prop-types
const AdvancedSearch = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    propertyType: '',
    rooms: [],
    floors: [],
    externalFeatures: [],
    internalFeatures: [],
    locationFeatures: []
  });

  const handleCheckboxChange = (event, category) => {
    const { name, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: checked
        ? [...prevFilters[category], name]
        : prevFilters[category].filter(item => item !== name)
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className={styles.advancedSearch}>
      <h3>Property Type</h3>
      <div className={styles.checkboxGroup}>
        <label>
          <input
            type="radio"
            name="propertyType"
            value="Apartment"
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          /> Apartment
        </label>
        <label>
          <input
            type="radio"
            name="propertyType"
            value="House"
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          /> House
        </label>
      </div>
      
      <div className={styles.filterSection}>
        <h3>Number of Rooms</h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="2 Bedrooms"
              onChange={(e) => handleCheckboxChange(e, 'rooms')}
            /> 2 Bedrooms
          </label>
          <label>
            <input
              type="checkbox"
              name="3 Bedrooms"
              onChange={(e) => handleCheckboxChange(e, 'rooms')}
            /> 3 Bedrooms
          </label>
          <label>
            <input
              type="checkbox"
              name="4 Bedrooms"
              onChange={(e) => handleCheckboxChange(e, 'rooms')}
            /> 4 Bedrooms
          </label>
          <label>
            <input
              type="checkbox"
              name="6 Bedrooms"
              onChange={(e) => handleCheckboxChange(e, 'rooms')}
            /> 6 Bedrooms
          </label>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3>Floors</h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="1st Floor"
              onChange={(e) => handleCheckboxChange(e, 'floors')}
            /> 1st Floor
          </label>
          <label>
            <input
              type="checkbox"
              name="2nd Floor"
              onChange={(e) => handleCheckboxChange(e, 'floors')}
            /> 2nd Floor
          </label>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3>External Features</h3>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="Balcony"
              onChange={(e) => handleCheckboxChange(e, 'externalFeatures')}
            /> Balcony
          </label>
          <label>
            <input
              type="checkbox"
              name="Garden"
              onChange={(e) => handleCheckboxChange(e, 'externalFeatures')}
            /> Garden
          </label>
          <label>
            <input
              type="checkbox"
              name="Pool Access"
              onChange={(e) => handleCheckboxChange(e, 'externalFeatures')}
            /> Pool Access
          </label>
          <label>
            <input
              type="checkbox"
              name="Ocean View"
              onChange={(e) => handleCheckboxChange(e, 'externalFeatures')}
            /> Ocean View
          </label>
          <label>
            <input
              type="checkbox"
              name="City View"
              onChange={(e) => handleCheckboxChange(e, 'externalFeatures')}
            /> City View
          </label>
        </div>
      </div>

      <button className={styles.applyButton} onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default AdvancedSearch;

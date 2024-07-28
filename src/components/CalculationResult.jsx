import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CalculationResult.module.css';



const CalculationResult = () =>   {

    const location = useLocation();

    const navigate = useNavigate();

    const { area, rooms, bathrooms, parking } = location.state;



    const costPerSquareMeter = 1000;
    const costPerRoom = 20000;
    const costPerBathroom = 15000;
    const costPerParking = 10000;


    const totalCost = (area * costPerSquareMeter) + (rooms * costPerRoom) + (bathrooms * costPerBathroom) + (parking * costPerParking);


    return (
        <div className={styles.calculationResult}>

            <h2>Calculate Result</h2>

            <table className={styles.table}>

                <tbody>
                    <tr>
                        <td>Area (in sq. meters):</td>
                        <td>{area}</td>
                    </tr>
                    <tr>
                        <td>Number of Rooms:</td>
                        <td>{rooms}</td>
                    </tr>
                    <tr>
                        <td>Number of Bathrooms:</td>
                        <td>{bathrooms}</td>
                    </tr>
                    <tr>
                        <td>Parking Space:</td>
                        <td>{parking}</td>
                    </tr>
                    <tr>
                        <td><strong>Total Cost:</strong></td>
                        <td><strong>${totalCost.toLocaleString()}</strong></td>
                    </tr>
                </tbody>

            </table>


            <button onClick={() => navigate('/')}>Back to Home</button>

        </div>
    )
}


export default CalculationResult;
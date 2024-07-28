import  { useState } from 'react';
import styles from './ParticipateAuction.module.css';

const ParticipateAuction = () => {
    const [step, setStep] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [credits, setCredits] = useState(0);
    const [bidAmount, setBidAmount] = useState('');

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleBidSubmit = () => {
        if (credits < 1) {
            alert("You do not have enough credits to bid.");
        } else {
            alert("You have successfully placed bid.");
        }
    };

    return (
        <div className={styles.participateAuction}>
            {step === 1 && (
                <div className={styles.popup}>
                    <h1>Participate In Auction</h1>
                    <form>
                        <label>Full Name
                            <input type="text" required />
                        </label>
                        <label>Full Address
                            <input type="text" required />
                        </label>
                        <label>Email
                            <input type="email" required />
                        </label>
                        <label>Telephone
                            <input type="tel" required />
                        </label>
                        <label>Country
                            <select required>
                                <option value="">Select Country</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <button type="button" onClick={handleNextStep}>Next Step</button>
                    </form>
                </div>
            )}
            {step === 2 && (
                <div className={styles.popup}>
                    <h1>Place Bid</h1>
                    <p>Available credits: {credits}</p>
                    <form>
                        <label>Bid Amount
                            <input type="number" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} required />
                        </label>
                        <button type="button" onClick={handleBidSubmit}>Submit</button>
                    </form>
                    <button type="button" onClick={() => setStep(1)}>Buy Credits</button>
                    <button type="button" onClick={() => setStep(1)}>Cancel</button>
                    
                </div>

            )}
        </div>
    );
};

export default ParticipateAuction;

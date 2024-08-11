/* eslint-disable react/no-unescaped-entities */
import styles from './BuyingGuide.module.css';

const BuyingGuide = () => {
  return (
    <div className={styles.buyingGuide}>
      <h1>Real Estate Auction Buying Guide</h1>
      <section className={styles.introduction}>
        <h2>Introduction to Real Estate Auctions</h2>
        <p>
          Buying a property through a real estate auction can be an exciting and rewarding experience, but it's essential to be well-prepared and informed. This guide will walk you through the entire process, from understanding how auctions work to tips for making successful bids and finalizing your purchase.
        </p>
      </section>

      <section className={styles.steps}>
        <h2>Steps to Buying a Property at Auction</h2>
        <ol>
          <li>
            <strong>Research Available Properties:</strong> Start by researching properties listed for auction. Use our platform to explore detailed property listings, including images, descriptions, and important documents.
          </li>
          <li>
            <strong>Inspect the Property:</strong> Schedule a visit to inspect the property in person. This will help you assess its condition and determine whether it meets your needs.
          </li>
          <li>
            <strong>Set Your Budget:</strong> Establish a budget before the auction, considering your financing options. Ensure that you have a pre-approval letter from a lender if you plan to finance the purchase.
          </li>
          <li>
            <strong>Understand the Auction Process:</strong> Familiarize yourself with the auction process, including how bids are placed, the role of the auctioneer, and what happens if you win the auction.
          </li>
          <li>
            <strong>Register for the Auction:</strong> Register for the auction through our platform. Make sure you meet any requirements, such as providing identification or proof of funds.
          </li>
          <li>
            <strong>Participate in the Auction:</strong> On the day of the auction, be ready to place your bids. Stay within your budget, and don't be afraid to step away if the bidding exceeds your limit.
          </li>
          <li>
            <strong>Winning the Auction:</strong> If you win the auction, you'll need to make a deposit immediately. Then, follow the post-auction procedures, which include finalizing financing and transferring ownership.
          </li>
        </ol>
      </section>

      <section className={styles.tips}>
        <h2>Tips for Success</h2>
        <ul>
          <li>Attend several auctions as an observer before participating to understand how they work.</li>
          <li>Have your financing pre-approved and know your maximum bid before the auction.</li>
          <li>Thoroughly review all property documents and disclosures before bidding.</li>
          <li>Consider hiring a real estate agent or attorney to assist you with the process.</li>
          <li>Stay calm during the auction and avoid bidding beyond your budget.</li>
        </ul>
      </section>

      <section className={styles.resources}>
        <h2>Additional Resources</h2>
        <p>For more information and resources, check out the following:</p>
        <ul>
          <li><a href="/resources">Property Inspection Checklist</a></li>
          <li><a href="/auctions">Financing Options for Auction Purchases</a></li>
          <li><a href="/terms-of-use">Understanding Auction Terminology</a></li>
          <li><a href="/privacy-policy">Legal Considerations in Real Estate Auctions</a></li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2>Need Help?</h2>
        <p>If you have any questions or need further assistance, don't hesitate to <a href="/contact">contact us</a>. Our team of experts is here to help you navigate the auction process with confidence.</p>
      </section>
    </div>
  );
};

export default BuyingGuide;

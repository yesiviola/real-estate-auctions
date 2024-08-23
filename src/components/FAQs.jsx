import  { useState } from 'react';
import styles from './FAQs.module.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a real estate auction?",
      answer: "A real estate auction is a public sale of a property, where the highest bidder wins the property. Auctions can be conducted online or in person, and they offer a fast and transparent way to buy or sell property."
    },
    {
      question: "How do I participate in an auction?",
      answer: "To participate in an auction, you must first register for the auction event. Once registered, you can place bids on the properties you're interested in. Make sure to read the auction terms and conditions carefully before participating."
    },
    {
      question: "What are the payment terms for auctioned properties?",
      answer: "Payment terms vary depending on the auction. Typically, a deposit is required immediately after winning the bid, with the remaining balance due within a specified timeframe. Be sure to review the payment terms before bidding."
    },
    {
      question: "Can I inspect the property before the auction?",
      answer: "Yes, most auctions allow potential buyers to inspect the property before the auction. It is highly recommended to attend an open house or schedule a visit to thoroughly inspect the property."
    },
    {
      question: "What happens if I win the auction but fail to complete the purchase?",
      answer: "If you win an auction but fail to complete the purchase, you may forfeit your deposit and could be subject to additional penalties. It's important to ensure you have the necessary funds and are fully committed before bidding."
    },
    {
      question: "Are there any hidden fees in the auction process?",
      answer: "While most fees are disclosed upfront, there may be additional costs such as buyer's premiums, taxes, or transfer fees. It's important to review all auction details and consult with the auctioneer or your legal advisor."
    },
    {
      question: "How do I know if an auction is legitimate?",
      answer: "Legitimate auctions are usually conducted by licensed and reputable auctioneers. Always verify the auction company's credentials, read reviews, and check for any complaints before participating."
    }
  ];

  return (
    <div className={styles.faqs}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div 
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

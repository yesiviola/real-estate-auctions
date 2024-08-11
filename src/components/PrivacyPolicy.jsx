import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Real Estate Auctions. Your privacy is of utmost importance to us. This privacy policy outlines the types of personal information we collect, how we use and protect it, and your rights regarding your data.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided during registration.</li>
          <li><strong>Property Information:</strong> Details about properties you wish to buy, sell, or auction, including property location, size, and value.</li>
          <li><strong>Financial Information:</strong> Payment details such as credit card information, though this is processed through secure third-party payment processors.</li>
          <li><strong>Usage Data:</strong> Information about how you use our site, such as pages visited, time spent on the site, and links clicked.</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>Your information may be used for the following purposes:</p>
        <ul>
          <li><strong>Providing Services:</strong> To facilitate the buying, selling, and auctioning of properties on our platform.</li>
          <li><strong>Customer Support:</strong> To provide assistance and respond to inquiries.</li>
          <li><strong>Marketing:</strong> To send promotional emails and updates about new listings, auctions, and other services. You can opt-out of these communications at any time.</li>
          <li><strong>Improving Our Services:</strong> To analyze usage data and improve our website, services, and user experience.</li>
          <li><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
        </ul>
      </section>

      <section>
        <h2>How We Protect Your Information</h2>
        <p>
          We implement a variety of security measures to protect your personal information, including encryption, secure servers, and access controls. However, please be aware that no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Sharing Your Information</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our website and providing our services.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request that we correct any inaccuracies in your information.</li>
          <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
          <li><strong>Objection:</strong> You can object to the processing of your personal information in certain circumstances.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:privacy@realestate.com">privacy@realestate.com</a>.
        </p>
      </section>

      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@realestate.com">privacy@realestate.com</a> or by mail at 1234 Real Estate Ave, Suite 100, San Francisco, CA 94111.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

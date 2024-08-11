/* eslint-disable react/no-unescaped-entities */
import styles from './TermsOfUse.module.css';

const TermsOfUse = () => {
  return (
    <div className={styles.termsOfUse}>
      <h1>Terms of Use</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Real Estate Auctions. These terms of use govern your access to and use of our website and services. By accessing or using our site, you agree to comply with these terms.
        </p>
      </section>

      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By using our website, you agree to these terms of use and our privacy policy. If you do not agree with any part of these terms, you must not use our services.
        </p>
      </section>

      <section>
        <h2>Eligibility</h2>
        <p>
          You must be at least 18 years old to use our services. By using our site, you confirm that you meet this age requirement.
        </p>
      </section>

      <section>
        <h2>Account Registration</h2>
        <p>
          To access certain features of our website, you may need to register an account. You agree to provide accurate and complete information during the registration process and to update this information as necessary.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us immediately.
        </p>
      </section>

      <section>
        <h2>Use of the Website</h2>
        <p>
          You agree to use our website only for lawful purposes and in accordance with these terms. You agree not to:
        </p>
        <ul>
          <li>Use the website in any way that violates applicable laws or regulations.</li>
          <li>Engage in any conduct that restricts or inhibits anyone's use of the site, or which may harm us or other users.</li>
          <li>Attempt to gain unauthorized access to any part of the website or its related systems or networks.</li>
          <li>Use the website to transmit any harmful or malicious code.</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          The content on this website, including text, graphics, images, and logos, is our property or the property of our licensors and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our express written permission.
        </p>
      </section>

      <section>
        <h2>Listing and Auction Rules</h2>
        <p>
          If you list a property for sale or auction on our website, you agree to provide accurate and truthful information about the property. We reserve the right to remove any listing that violates these terms or is deemed inappropriate.
        </p>
        <p>
          By participating in an auction, you agree to comply with our auction rules and procedures. All bids are binding, and you agree to complete any transaction resulting from a successful bid.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our website at any time, without notice, if you violate these terms or engage in any conduct that we deem harmful to our interests or to other users.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any damages arising out of or in connection with your use of our website or services. This includes, but is not limited to, direct, indirect, incidental, and consequential damages.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms of use from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of the website after any changes indicates your acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these terms of use, please contact us at <a href="mailto:info@realestate.com">info@realestate.com</a> or by mail at 1234 Real Estate Ave, Suite 100, San Francisco, CA 94111.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;

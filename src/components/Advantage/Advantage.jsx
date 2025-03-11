import React from 'react';
import styles from './Advantage.module.css';

const Advantage = () => {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantageTop}>
        <div className={styles.textSection}>
          <p>
            Throughout your customer's entire buying journey, Razor AI allows you to delight them at every step of the way, from their first visit to the final purchase.
          </p>
          <button >
            Get Started
            <div className={styles.arrowIcon}></div>
          </button></div>

        <div className={styles.title}>

          <div className={styles.highlightText}></div>

          <h1>
            Redefining Conversations and Enhancing User experience
          </h1>
        </div>
      </div>


      {/* Background */}
      <div className={styles.background}>

        {/* Accordions */}
        <div className={styles.containerAccordion}>
          <div className={styles.accordion}>
            <h3>Engage</h3>
            <p>
              Reach out to visitors proactively using personalized chatbot greetings. Turn website visits into sales opportunities.
            </p>
          </div>
          <div className={styles.accordion}>
            <h3>Nurture</h3>
            <p>
              Lead customers to a sale through recommended purchases and tailored offerings.
            </p>
          </div>
          <div className={styles.accordion}>
            <h3>Qualify</h3>
            <p>
              Generate and qualify prospects automatically. Transfer high-intent leads to your sales reps in real time to shorten the sales cycle.
            </p>
          </div>
        </div>
        {/* Images */}
        <div className={styles.illustrations}>
          <img src="" alt="Illustration" className={styles.illustrationImage} />
        </div>

      </div>
    </div>
  );
};

export { Advantage };

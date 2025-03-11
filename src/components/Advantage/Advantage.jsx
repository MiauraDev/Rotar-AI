import React from 'react';
import styles from './Advantage.module.css';
import highlight from '../../assets/shapes/highlight3.svg';
import arrow from '../../assets/icons/arrow-up-right-white.svg';
import decoration3 from '../../assets/shapes/decoration3.svg';
import chat1 from '../../assets/images/chatmode1.png';


const Advantage = () => {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantageTop}>
        <div className={styles.textSection}>
          <p>
            Throughout your customer's entire buying
            journey, Rotar Al allow you to delight them
            at every step of the way, from their first
            visit to the final purchase.          </p>
          <button className={styles.getStartedButton}>
            Get Started
            <img src={arrow} alt="Arrow Icon" className={styles.arrowIcon} />
          </button>


        </div>

        <div className={styles.title}>

          <img src={highlight} alt="highlight" className={styles.highlightText} />
          <img src={decoration3} alt="decoration3" className={styles.decoration3} />

          <h1>
            Redefining Conversations and Enhancing User experience
          </h1>
        </div>
      </div>


      {/* Background */}
      <div className={styles.background}>
        <div className={styles.contentWrapper}>
          {/* Accordions */}
          <div className={styles.containerAccordion}>
            <div className={`${styles.accordion} ${styles.active}`}>
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

          {/* Chat Image */}
          <div className={styles.illustrations}>
            <img src={chat1} alt="Chatbot Illustration" className={styles.illustrationImage} />
          </div>
        </div>
      </div>

    </div>
  );
};

export { Advantage };

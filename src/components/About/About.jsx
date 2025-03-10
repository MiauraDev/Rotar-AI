import React from 'react';
import styles from './About.module.css';
import highlight from '../../assets/shapes/highlight2.svg';
import decoration2 from '../../assets/shapes/decoration2.svg';
import OurIntegrations from './ourIntegrations';
import GridAbout from './GridAbout';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutcontainerright}>
        <div className={styles.aboutleft}>
          <div className={styles.titleWrapper}>
            <img src={highlight} alt="highlight" className={styles.highlight2} />
            <img src={decoration2} alt="decoration2" className={styles.decoration2} />
            <h1 className={styles.textpresent}>Deliver a high-<br />quality customer experience</h1>
          </div>
          <p className={styles.aboutDescription}>
            Embrace AI chatbot technology in a GPT-4-supported <br />
            communication tool to help your customers, empower your <br />
            team, and reduce your workload.
          </p>
        </div>
        <OurIntegrations/>
      </div>

      <div className={styles.containerGridAbout}>
      <GridAbout/>
      </div>
    </section>
  );
};

export { About };

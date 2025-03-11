import React from 'react';
import aboutStyles from './About.module.css';
import highlight from '../../assets/shapes/highlight2.svg';
import decoration2 from '../../assets/shapes/decoration2.svg';
import OurIntegrations from './ourIntegrations';
import GridAbout from './gridAbout';

const About = () => {
  return (
    <section className={aboutStyles.about}>
      <div className={aboutStyles.aboutcontainerright}>
        <div className={aboutStyles.aboutleft}>
          <div className={aboutStyles.titleWrapper}>
            <img src={highlight} alt="highlight" className={aboutStyles.highlight2} />
            <img src={decoration2} alt="decoration2" className={aboutStyles.decoration2} />
            <h1 className={aboutStyles.textpresent}>Deliver a high-<br />quality customer experience</h1>
          </div>
          <p className={aboutStyles.aboutDescription}>
            Embrace AI chatbot technology in a GPT-4-supported <br />
            communication tool to help your customers, empower your <br />
            team, and reduce your workload.
          </p>
        </div>
        <OurIntegrations/>
      </div>

      <div className={aboutStyles.containerGridAbout}>
      <GridAbout/>
      </div>
    </section>
  );
};

export { About };

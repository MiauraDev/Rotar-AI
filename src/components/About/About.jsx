import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutStyles from './About.module.css';

import highlight from '../../assets/shapes/highlight2.svg';
import decoration2 from '../../assets/shapes/decoration2.svg';

import OurIntegrations from './ourIntegrations';
import GridAbout from './gridAbout';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={aboutStyles.about}>
      <div className={aboutStyles.aboutcontainerright}>
        <div className={aboutStyles.aboutleft}>
          <div className={aboutStyles.titleWrapper}>
            <img src={highlight} alt="highlight" className={aboutStyles.highlight2} />
            <img src={decoration2} alt="decoration2" className={aboutStyles.decoration2} />
            <h1 className={aboutStyles.textpresent}>
              {t('about.title').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}<br />
                </React.Fragment>
              ))}
            </h1>
            <p className={aboutStyles.aboutDescription}>
              {t('about.description')}
            </p>
          </div>
        </div>
        <OurIntegrations />
      </div>

      <div className={aboutStyles.containerGridAbout}>
        <GridAbout />
      </div>
    </section>
  );
};

export { About };

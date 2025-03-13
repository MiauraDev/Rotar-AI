import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Advantage.module.css';
import highlight from '../../assets/shapes/highlight3.svg';
import arrow from '../../assets/icons/arrow-up-right-white.svg';
import decoration3 from '../../assets/shapes/decoration3.svg';
import chat1 from '../../assets/images/chatmode1.svg';
import chat2 from '../../assets/images/chatmode2.svg';
import chat3 from '../../assets/images/chatmode3.svg';
import AOS from 'aos';

const Advantage = () => {
  const { t } = useTranslation();
  const [activeAccordion, setActiveAccordion] = useState('engage');

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const handleAccordionClick = (section) => {
    setActiveAccordion(section);
  };

  const getImageBySection = () => {
    if (activeAccordion === 'nurture') return chat2;
    if (activeAccordion === 'qualify') return chat3;
    return chat1;
  };

  return (
    <div className={styles.advantage}>
      <div className={styles.advantageTop}>
        <div className={styles.textSection}>
          <p>{t('advantage.description')}</p>
          <button className={styles.getStartedButton}>
            {t('advantage.button')}
            <img src={arrow} alt="Arrow Icon" className={styles.arrowIcon} />
          </button>
        </div>

        <div className={styles.title}>
          <img src={highlight} alt="highlight" className={styles.highlightText} />
          <img src={decoration3} alt="decoration3" className={styles.decoration3} />
          <h1>{t('advantage.title').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>))}</h1>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.contentWrapper}>
          <div className={styles.containerAccordion}>
            <div
              className={`${styles.accordion} ${activeAccordion === 'engage' ? styles.active : ''}`}
              onClick={() => handleAccordionClick('engage')}
            >
              <h3>{t('advantage.accordion.engage.title')}</h3>
              <p>{t('advantage.accordion.engage.description')}</p>
            </div>

            <div
              className={`${styles.accordion} ${activeAccordion === 'nurture' ? styles.active : ''}`}
              onClick={() => handleAccordionClick('nurture')}
            >
              <h3>{t('advantage.accordion.nurture.title')}</h3>
              <p>{t('advantage.accordion.nurture.description')}</p>
            </div>

            <div
              className={`${styles.accordion} ${activeAccordion === 'qualify' ? styles.active : ''}`}
              onClick={() => handleAccordionClick('qualify')}
            >
              <h3>{t('advantage.accordion.qualify.title')}</h3>
              <p>{t('advantage.accordion.qualify.description')}</p>
            </div>
          </div>

          <div className={styles.illustrations}>
            <img
              src={getImageBySection()}
              alt="Chatbot Illustration"
              className={styles.illustrationImage}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Advantage };

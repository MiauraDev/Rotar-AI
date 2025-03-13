import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';


import styles from './Present.module.css';
import woman from '../../assets/images/woman.svg';
import highlight from '../../assets/shapes/highlight.svg';
import decoration1 from '../../assets/shapes/decoration1.svg';
import arrow from '../../assets/icons/arrow-right.svg';
import play from '../../assets/icons/play.svg';
import star from '../../assets/icons/star.png';
import cube1 from '../../assets/icons/cube1.svg';
import cube2 from '../../assets/icons/cube2.svg';
import AOS from 'aos';

const Present = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className={styles.hero}>
      <div className={styles.heroRight}>
        <img src={highlight} alt="highlight" className={styles.highlightText} />
        <img src={decoration1} alt="decoration1" className={styles.decoration1} />
        <div className={styles.textHero}>
          <h1>
            {t('present.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}<br />
              </React.Fragment>
            ))}
          </h1>


          <p className={styles.heroDescription}>
            {t('present.description')}
          </p>
          <div className={styles.containerGuide}>
            <div className={styles.textGuide}>
              <h2 className={styles.titleGuide}>{t('present.guideTitle')}</h2>
              <p>{t('present.guideDescription')}</p>
            </div>
            <div className={styles.buttonGuide}>
              <span className={styles.buttonTextGuide}>{t('present.readArticle')}</span>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroLeft}>
        <div className={styles.containerFoto}>
          <img src={woman} alt="woman" className={styles.svgWoman} />
          <button className={styles.heroButton} onClick={openModal}>
            <span>{t('present.watchTutorial')}</span>
            <img src={play} alt="play" />
          </button>

          {isOpen && (
            <div className={styles.modalOverlay} onClick={closeModal}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <iframe
                  src={i18n.language === 'es'
                    ? 'https://www.youtube.com/embed/v6tk0CxaVU8?si=vnHiJ-TvIAwKS1Ps&autoplay=1'
                    : 'https://www.youtube.com/embed/rxKFcTRQ_bM?autoplay=1'}
                  title="YouTube Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
 <button className={styles.closeButton} onClick={closeModal}>×</button>
              </div>
            </div>
          )}

          <div className={styles.containerCubes}>
            <div className={styles.chatbot} data-aos="fade-right">
              <img src={cube2} alt="cube2" />
              <span>{t('present.chatbot')}</span>
            </div>
            <div className={styles.chatgpt} data-aos="fade-right" data-aos-offset="500">
              <img src={cube1} alt="cube1" />
              <span>{t('present.chatgpt')}</span>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card1} data-aos="fade-up">
            <div className={styles.cardContent1}>
              <h1>+ 500</h1>
              <p className={styles.cardSubtitle1}>{t('present.cardSubtitle')}</p>
            </div>
          </div>

          <div className={styles.card2} data-aos="fade-up">
            <div className={styles.conteinerStars}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className={styles.cardContent2}>
              <span className={styles.cardtitle2}>{t('present.cardTitle')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Present };

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import gridAboutStyles from './GridAbout.module.css';
import user1 from '../../assets/images/user.jpg';
import user2 from '../../assets/images/user1.jpg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import messenger from '../../assets/icons/messenger.svg';
import instagram from '../../assets/icons/instagram.svg';
import x from '../../assets/icons/x.svg';
import rotar from '../../assets/icons/rotar.svg';
import AOS from 'aos';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GridAbout = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className={gridAboutStyles.gridAbout}>
      <div className={gridAboutStyles.groupCard}>

        {/* Card 1 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card1}`}>
          <div className={gridAboutStyles.userprofile}>
            <div className={gridAboutStyles.user} data-aos="fade-left" data-aos-delay="100">
              <div className={gridAboutStyles.ellipse}></div>
              <span className={gridAboutStyles.profileName}>{t('gridAbout.card1.user')}</span>
            </div>
            <div className={gridAboutStyles.message} data-aos="fade-left" data-aos-delay="200">
              {t('gridAbout.card1.message')}
            </div>
          </div>

          <div className={gridAboutStyles.userprofile}>
            <div className={gridAboutStyles.rotar} data-aos="fade-right" data-aos-delay="100">
              <div className={gridAboutStyles.ellipse}></div>
              <span className={gridAboutStyles.profileName}>Rotar Robot</span>
            </div>
            <div className={gridAboutStyles.robotMessage} data-aos="fade-right" data-aos-delay="200">
              {t('gridAbout.card1.response')}
            </div>
          </div>

          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}> {t('gridAbout.card1.title').split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                              {line}<br />
                            </React.Fragment>          ))}</h3>
            <p className={gridAboutStyles.description}>{t('gridAbout.card1.description')}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card2}`}>
          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>{t('gridAbout.card2.title')}</h3>
            <p className={gridAboutStyles.description}>{t('gridAbout.card2.description')}</p>
          </div>

          <div className={gridAboutStyles.chatWrapper}>
            <div className={gridAboutStyles.chatPreview} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="150">
              <div className={gridAboutStyles.chatTop}>
                <div className={gridAboutStyles.ellipse}>
                  <img src={user1} alt="avatar" />
                </div>
                <div className={gridAboutStyles.chatLineShort}></div>
              </div>
              <div className={gridAboutStyles.chatLineFull}></div>
            </div>

            <div className={gridAboutStyles.chatPreviewWrapper} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="200">
              <div className={gridAboutStyles.chatPreview}>
                <div className={gridAboutStyles.chatTop}>
                  <div className={gridAboutStyles.ellipse}>
                    <img src={user2} alt="avatar" />
                  </div>
                  <div className={gridAboutStyles.chatLineShort}></div>
                </div>
                <div className={gridAboutStyles.chatLineFull}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card3}`}>
          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>{t('gridAbout.card3.title')}</h3>
            <p className={gridAboutStyles.description}>{t('gridAbout.card3.description')}</p>
          </div>

          <div className={gridAboutStyles.illustrations}>
            <div className={`${gridAboutStyles.iconWrapper} ${gridAboutStyles.iconTopLeft} ${gridAboutStyles.floatWrapper}`}>
              <div className={gridAboutStyles.icon}>
                <img src={whatsapp} alt="WhatsApp" />
              </div>
            </div>
            <div className={`${gridAboutStyles.iconWrapper} ${gridAboutStyles.iconTopRight} ${gridAboutStyles.floatWrapper}`}>
              <div className={gridAboutStyles.icon}>
                <img src={instagram} alt="Instagram" />
              </div>
            </div>
            <div className={`${gridAboutStyles.iconWrapper} ${gridAboutStyles.iconCenter}`}>
              <div className={gridAboutStyles.icon}>
                <img src={rotar} alt="Main Icon" />
              </div>
            </div>
            <div className={`${gridAboutStyles.iconWrapper} ${gridAboutStyles.iconBottomLeft} ${gridAboutStyles.floatWrapper}`}>
              <div className={gridAboutStyles.icon}>
                <img src={messenger} alt="Messenger" />
              </div>
            </div>
            <div className={`${gridAboutStyles.iconWrapper} ${gridAboutStyles.iconBottomRight} ${gridAboutStyles.floatWrapper}`}>
              <div className={gridAboutStyles.icon}>
                <img src={x} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card4}`}>
          <div className={gridAboutStyles.chartContainer}>
            <div className={gridAboutStyles.chartCircle}>
              <CircularProgressbar
                value={12.5}
                text={`12,5%`}
                strokeWidth={8.5}
                styles={{
                  path: { stroke: '#101010', strokeLinecap: 'butt' },
                  trail: { stroke: '#ffffff' },
                  text: { fill: '#101010', fontSize: '21.5px', fontWeight: 700, fontFamily: 'IBM Plex Sans, sans-serif' }
                }}
              />
              <div className={gridAboutStyles.chartLabel}>
                {t('gridAbout.card4.label')}
              </div>
            </div>
          </div>

          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>{t('gridAbout.card4.title')}</h3>
            <p className={gridAboutStyles.description}>{t('gridAbout.card4.description')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GridAbout;

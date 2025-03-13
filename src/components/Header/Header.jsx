import React from 'react';
import styles from './Header.module.css';
import arrow from '../../assets/icons/arrow-up-right.svg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || 'es';

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/rotar.svg" alt="Logo" />
        <span className={styles.logoText}>Rotar AI</span>
      </div>

      <div className={styles.menu}>
        <span>{t('navbar.product')}</span>
        <span>{t('navbar.solutions')}</span>
        <span>{t('navbar.resources')}</span>
        <span>{t('navbar.pricing')}</span>
      </div>

      <div className={styles.groupButton}>
        <div className={styles.languageSwitcher}>
          <span
            onClick={() => changeLanguage('es')}
            style={{ color: currentLang === 'es' ? '#00FF7F' : '#383838', cursor: 'pointer' }}
          >
            ES
          </span>
          {' | '}
          <span
            onClick={() => changeLanguage('en')}
            style={{ color: currentLang === 'en' ? '#00FF7F' : '#383838', cursor: 'pointer' }}
          >
            EN
          </span>
        </div>

        <button className={styles.demoButton}>
          {t('navbar.demo')}
          <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </nav>
  );
};

export { Header };

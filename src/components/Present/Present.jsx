import { useState } from "react";

import React from 'react';
import styles from './Present.module.css';
import woman from '../../assets/images/woman.svg';
import highlight from '../../assets/shapes/highlight.svg';
import decoration1 from '../../assets/shapes/decoration1.svg';
import arrow from '../../assets/icons/arrow-right.svg';
import play from '../../assets/icons/play.svg';
import star from '../../assets/icons/star.png';
import cube1 from '../../assets/icons/cube1.svg';
import cube2 from '../../assets/icons/cube2.svg';


const Present = () => {
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
            The Ultimate AI Customer Service Companion
          </h1>
          <p className={styles.heroDescription}>
            Embrace AI chatbot technology in a GPT-4-supported communication tool to help your customers, empower your <br /> team, and reduce your workload.
          </p>
          <div className={styles.containerGuide}>
            <div className={styles.textGuide}>
              <h2 className={styles.titleGuide}>Guide: The Rotar AI Tutorial Hand Book</h2>
              <p>
                Everything you need to know about the first steps in chatbots.
              </p>
            </div>
            <div className={styles.buttonGuide}>
              <span className={styles.buttonTextGuide}>Read Article</span>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroLeft}>
        <div className={styles.containerFoto} >
          <img src={woman} alt="woman" className={styles.svgWoman} />
          <button className={styles.heroButton} onClick={openModal}>
        <span> Watch Tutorial</span>
        <img src={play} alt="play" />
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://www.youtube.com/embed/rxKFcTRQ_bM?autoplay=1"
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
          </div>
        </div>
      )}

          <div className={styles.containerCubes}>
            <div className={styles.chatbot}>
              <img src={cube2} alt="cube2" />
              <span> Chatbot</span>
            </div>
            <div className={styles.chatgpt}>
              <img src={cube1} alt="cube1" />
              <span> Chat GPT 4</span>
            </div>
          </div>

        </div  >

        <div className={styles.cards}>
          <div className={styles.card1}>
            <div className={styles.cardContent1}>
              <h1>+ 500</h1>
              <p className={styles.cardSubtitle1}>Big companies use Rotar AI for <br />their services</p>
            </div>
          </div>

          <div className={styles.card2}>
            <div className={styles.conteinerStars}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className={styles.cardContent2}>
              <span className={styles.cardtitle2}>AI-driven customer service</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export { Present };

import React from 'react';
import styles from './About.module.css';

const GridAbout = () => {
  return (
    <div className={styles.gridAbout}>
      <div className={styles.groupCard}>
        
        {/* Card 1 */}
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Boost conversations 96% with AI</h3>
            <p className={styles.description}>
              Our AI-powered chatbots and automation tools are here to help.
            </p>
          </div>
          <div>
            <div className={styles.profile}>
              <div className={styles.ellipse}></div>
              <span className={styles.profileName}>James Kokolomel</span>
            </div>
            <div className={styles.message}>I’ve forgotten my password</div>

            <div className={styles.profile} style={{ marginTop: '24px' }}>
              <div className={styles.ellipse}></div>
              <span className={styles.profileName}>Rotar Robot</span>
            </div>
            <div className={styles.robotMessage}>
              No worries, we’ve all been in a melancholy situation like that.
              To reset your password, go to the login page and click on Forgot
              Password? Then, enter the email address and follow it.
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Centralize Your Communication</h3>
            <p className={styles.description}>
              Easily respond to chats from all of your channels in one overview.
            </p>
          </div>
          <div className={styles.illustrations}>
            <div className={styles.illustrationIcon}><div className={styles.iconPlaceholder}></div></div>
            <div className={styles.illustrationIcon}><div className={styles.iconPlaceholder}></div></div>
            <div className={styles.illustrationIcon}><div className={styles.iconPlaceholder}></div></div>
            <div className={styles.illustrationIcon}><div className={styles.iconPlaceholder}></div></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Always accessible with our live chat.</h3>
            <p className={styles.description}>
              Enhance Communication with Real-Time Live Chat.
            </p>
          </div>
          <div className={styles.chatPreview}>
            <div className={styles.chatPreviewLine + ' ' + styles.full}></div>
            <div className={styles.chatPreviewLine + ' ' + styles.short}></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Gain valuable insights from your audience</h3>
            <p className={styles.description}>
              Statistics provide valuable insights into how customers interact with Rotar AI.
            </p>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartCircle}>
              12,5%<br />
              <span style={{ fontSize: '12px', fontWeight: 500 }}>Conversation<br />Employee</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GridAbout;

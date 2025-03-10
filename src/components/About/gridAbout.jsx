import React from 'react';
import gridAboutStyles from './GridAbout.module.css';

const GridAbout = () => {
  return (
    <div className={gridAboutStyles.gridAbout}>
      <div className={gridAboutStyles.groupCard}>

        {/* Card 1 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card1}`}>

            <div className={gridAboutStyles.userprofile}>
              <div className={gridAboutStyles.user}>
                <div className={gridAboutStyles.ellipse}></div>
                <span className={gridAboutStyles.profileName}>James Kokolomel</span>
              </div>
              <div className={gridAboutStyles.message}>I’ve forgotten my password</div>
            </div>

            <div className={gridAboutStyles.userprofile}>
              <div className={gridAboutStyles.rotar}>
                <div className={gridAboutStyles.ellipse}></div>
                <span className={gridAboutStyles.profileName}>Rotar Robot</span>
              </div>
              <div className={gridAboutStyles.robotMessage}>
                No worries, we’ve all been in a melancholy situation like that.
                To reset your password, go to the login page and click on Forgot
                Password? Then, enter the email address and follow it.
              </div>
            </div>


          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>Boost conversations 96% with AI</h3>
            <p className={gridAboutStyles.description}>
              Our AI-powered chatbots and automation tools are here to help.
            </p>
          </div>

        </div>

        {/* Card 2 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card2}`}>
          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>Centralize Your Communication</h3>
            <p className={gridAboutStyles.description}>
              Easily respond to chats from all of your channels in one overview.
            </p>
          </div>
          <div className={gridAboutStyles.illustrations}>
            <div className={gridAboutStyles.illustrationIcon}><div className={gridAboutStyles.iconPlaceholder}></div></div>
            <div className={gridAboutStyles.illustrationIcon}><div className={gridAboutStyles.iconPlaceholder}></div></div>
            <div className={gridAboutStyles.illustrationIcon}><div className={gridAboutStyles.iconPlaceholder}></div></div>
            <div className={gridAboutStyles.illustrationIcon}><div className={gridAboutStyles.iconPlaceholder}></div></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card3}`}>
          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>Always accessible with our live chat.</h3>
            <p className={gridAboutStyles.description}>
              Enhance Communication with Real-Time Live Chat.
            </p>
          </div>
          <div className={gridAboutStyles.chatPreview}>
            <div className={gridAboutStyles.chatPreviewLine + ' ' + gridAboutStyles.full}></div>
            <div className={gridAboutStyles.chatPreviewLine + ' ' + gridAboutStyles.short}></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className={`${gridAboutStyles.card} ${gridAboutStyles.card4}`}>
          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>Gain valuable insights from your audience</h3>
            <p className={gridAboutStyles.description}>
              Statistics provide valuable insights into how customers interact with Rotar AI.
            </p>
          </div>
          <div className={gridAboutStyles.chartContainer}>
            <div className={gridAboutStyles.chartCircle}>
              12,5%<br />
              <span >Conversation<br />Employee</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GridAbout;

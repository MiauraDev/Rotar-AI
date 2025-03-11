

import React from 'react';
import gridAboutStyles from './GridAbout.module.css';
import user1 from '../../assets/images/user.jpg';
import user2 from '../../assets/images/user1.jpg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import messenger from '../../assets/icons/messenger.svg';
import instagram from '../../assets/icons/instagram.svg';
import x from '../../assets/icons/x.svg';
import rotar from '../../assets/icons/rotar.svg';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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
            <h3 className={gridAboutStyles.title}>Always accessible with our live chat.</h3>
            <p className={gridAboutStyles.description}>
              Enhance Communication with Real-Time Live Chat.
            </p>
          </div>

          <div className={gridAboutStyles.chatWrapper}>
            <div className={gridAboutStyles.chatPreview}>
              <div className={gridAboutStyles.chatTop}>
                <div className={gridAboutStyles.ellipse}>
                  <img src={user1} alt="avatar" />
                </div>
                <div className={gridAboutStyles.chatLineShort}></div>
              </div>
              <div className={gridAboutStyles.chatLineFull}></div>
            </div>

            <div className={gridAboutStyles.chatPreviewWrapper}>
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
            <h3 className={gridAboutStyles.title}>Centralize Your Communication</h3>
            <p className={gridAboutStyles.description}>
              Easily respond to chats from all of your channels in one overview.
            </p>
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
                  path: {
                    stroke: '#101010',
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: '#ffffff',
                  },
                  text: {
                    fill: '#101010',
                    fontSize: '21.5px',
                    fontWeight: 700,
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    dominantBaseline: 'auto',
                  },
                }}
              />

              <div className={gridAboutStyles.chartLabel}>
                Conversation<br />Employee
              </div>
            </div>
          </div>

          <div className={gridAboutStyles.textContainer}>
            <h3 className={gridAboutStyles.title}>Gain valuable insights from your audience</h3>
            <p className={gridAboutStyles.description}>
              Statistics provide valuable insights into how customers interact with Rotar AI.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default GridAbout;

import React from 'react';
import styles from './About.module.css';
import fondo from '../../assets/images/backgroundOurintegrations.svg';
import teams from '../../assets/icons/microsoft-teams.svg';
import meet from '../../assets/icons/google-meet.svg';
import envernote from '../../assets/icons/evernote.svg';
import notion from '../../assets/icons/notion.svg';

const OurIntegrations = () => {
    return (
        <div className={styles.cardOurIntegrations}>
            <img src={fondo} alt="fondo" className={styles.backgroundImage} />
            <div className={styles.contentOurIntegrations}>

                <div className={styles.illustrationContainer}>
                    <div className={`${styles.floatWrapper} ${styles.float1}`}>
                        <div className={`${styles.illustration} ${styles.illustration1}`}>
                            <img src={notion} alt="notion" />
                        </div>
                    </div>
                    <div className={`${styles.floatWrapper} ${styles.float2}`}>
                        <div className={`${styles.illustration} ${styles.illustration2}`}>
                            <img src={meet} alt="meet" />
                        </div>
                    </div>
                    <div className={`${styles.floatWrapper} ${styles.float3}`}>
                        <div className={`${styles.illustration} ${styles.illustration3}`}>
                            <img src={envernote} alt="evernote" />
                        </div>
                    </div>
                    <div className={`${styles.floatWrapper} ${styles.float4}`}>
                        <div className={`${styles.illustration} ${styles.illustration4}`}>
                            <img src={teams} alt="teams" />
                        </div>
                    </div>
                </div>


                <div className={styles.textContainer}>
                    <h2 className={styles.tittleOurIntegrations}>Automate your workflow with our integrations</h2>
                    <p className={styles.descriptionOurIntegrations}>
                        Connect Rotar AI with your customer service, sales, marketing, and recruitment tools using our user-friendly API, webhooks, or Zapier integration.        </p>
                </div>
            </div>
        </div>
    );
};

export default OurIntegrations;

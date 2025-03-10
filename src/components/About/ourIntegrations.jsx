import React from 'react';
import integrationsStyles from './ourIntegrations.module.css';
import fondo from '../../assets/images/backgroundOurintegrations.svg';
import teams from '../../assets/icons/microsoft-teams.svg';
import meet from '../../assets/icons/google-meet.svg';
import envernote from '../../assets/icons/evernote.svg';
import notion from '../../assets/icons/notion.svg';

const OurIntegrations = () => {
    return (
        <div className={integrationsStyles.cardOurIntegrations}>
            <img src={fondo} alt="fondo" className={integrationsStyles.backgroundImage} />
            <div className={integrationsStyles.contentOurIntegrations}>

                <div className={integrationsStyles.illustrationContainer}>
                    <div className={`${integrationsStyles.floatWrapper} ${integrationsStyles.float1}`}>
                        <div className={`${integrationsStyles.illustration} ${integrationsStyles.illustration1}`}>
                            <img src={notion} alt="notion" />
                        </div>
                    </div>
                    <div className={`${integrationsStyles.floatWrapper} ${integrationsStyles.float2}`}>
                        <div className={`${integrationsStyles.illustration} ${integrationsStyles.illustration2}`}>
                            <img src={meet} alt="meet" />
                        </div>
                    </div>
                    <div className={`${integrationsStyles.floatWrapper} ${integrationsStyles.float3}`}>
                        <div className={`${integrationsStyles.illustration} ${integrationsStyles.illustration3}`}>
                            <img src={envernote} alt="evernote" />
                        </div>
                    </div>
                    <div className={`${integrationsStyles.floatWrapper} ${integrationsStyles.float4}`}>
                        <div className={`${integrationsStyles.illustration} ${integrationsStyles.illustration4}`}>
                            <img src={teams} alt="teams" />
                        </div>
                    </div>
                </div>


                <div className={integrationsStyles.textContainer}>
                    <h2 className={integrationsStyles.tittleOurIntegrations}>Automate your workflow with our integrations</h2>
                    <p className={integrationsStyles.descriptionOurIntegrations}>
                        Connect Rotar AI with your customer service, sales, marketing, and recruitment tools using our user-friendly API, webhooks, or Zapier integration.        </p>
                </div>
            </div>
        </div>
    );
};

export default OurIntegrations;

"use client"
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
// import mixpanel from 'mixpanel-browser';
 
const PrivacyPolicy = () => {
    useEffect(() => {
        // mixpanel.track('privacyPolicyViewed');
    }, []);
    const { t } = useTranslation();
    return (
        <div className='wrapper1'>
 
            <div className="container-fluid SanatanHomeStyles ">
                <div className='container'>
 
                    <div className="row">
                        <div className="col-sm-12 mt-5 mb-5">
                            <div class="card cardBg ">
                                <div class="card-header tableHeadBirth">
                                    <center>
                                        <h2>{t('Privacy Policy')}</h2>
                                    </center>
 
                                </div>
                                <div class="card-body">
                                    <h5>{t('This Privacy Policy')}
 
                                    </h5>
                                    <h4>{t('Our privacy policy and practices are detailed below. Please read them thoroughly.')} </h4>
                                    <p>{t('Welcome to Sanatanjyoti.com, our commitment is')}</p>
                                    <h4>{t('The Information We Collect and Registration ')}</h4>
                                    <p>
                                    {t('Personally identifiable information (further referred as PII) is information')} <br />
                                    {t('Anonymous information is not')}  <br />
                                    {t('Anonymous information is information that is not tied')}
 
 
                                    </p>
                                    <h6>{t('Your information is used for the following purposes')}: </h6>
                                    <ul>
                                        <li>{t('Manage and facilitate the requests')}.  </li>
                                        <li>{t('Address customer service inquiries related to our products and services Engagement and Communication ')}</li>
                                        <li>{t('Send updates about Sanatanjyoti.com activities and events, website Enhancement.')}</li>
                                        <li>{t('Improve user experience on our website, analyse functionality and usage pattern.')} </li>
                                    </ul>
                                    <h4>{t('Sharing Personally Identifiable Information with Third Parties ')}</h4>
                                    <p>{t('We will not share your PII unless you have authorized')}     </p>
 
                                    <h3>{t('Cookie Policy')} </h3>
                                    <ol type='1'>
                                        <li><h4>{t('What are Cookies? ')}</h4>
                                            <p>{t('Cookies are small text files stored on your device ')} </p></li>
                                        <li><h4>{t('Types of Cookies We Use')} </h4>
                                            <ol type='A'>
                                                <li><h5>{t('Essential Cookies')}: </h5><p>{t('These cookies are necessary for the basic functionality of our website.')} </p></li>
                                                <li><h5>{t('Analytical/Performance Cookies')}:</h5><p>{t('These cookies allow us to analyze how visitors')}</p></li>
                                                <li><h5>{t('Functionality Cookies')}:</h5><p>{t('Functionality cookies enable')} </p></li>
                                                <li><h5>{t('Advertising')}</h5>{t('These cookies are used')}</li>
                                            </ol>
                                        </li>
                                        <li><h4>{t('Third-Party Cookies')} </h4><p>{t('We may also use third-party cookies')}</p></li>
                                        <li><h4>{t('Managing Cookies')}</h4><p>{t('You can control and manage')}</p></li>
                                        <li><h4>{t('Your Consent')}</h4><p>{t('By continuing to use')}</p></li>
                                        <li><h4>{t('Updates to this Policy')}</h4><p>{t('We may update this Cookie Policy')}</p></li>
 
                                    </ol>{t('By using our website, you acknowledge')}
                                    <h3>{t('Data Security')}</h3>
                                    <p>{t('We are committed to protecting')}</p>
                                    <h3>{t('Your Privacy Choices ')}</h3>
                                    <h4>{t('You have the right to:-')}</h4><p>{t('Access and Update Information')}</p>
                                    <h4>{t('Changes to this Policy:')}</h4> <p>{t('We may update this policy')}</p>
                                    <h3>{t('Contact Us')}</h3>
                                    <p>{t('If you have any questions')}</p>
                                    <p>{t('Thank you for trusting')} <br />{t('Join us on a journey')}</p>
                                    <h5>{t('Version: 1.1')} </h5>
                                    <h5>{t('Last updated 14th March 2024')} </h5>
                                    <h5>{t('Effective from 14th March 2024')} </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>
    )
}
 
export default PrivacyPolicy
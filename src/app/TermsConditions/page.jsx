"use client"
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
// import mixpanel from 'mixpanel-browser';

const TermsConditions = () => {
    const { t } = useTranslation();
    useEffect(() => {
        // mixpanel.track('termsAndConditionsViewed');
    }, []);
    return (
        <div className='wrapper1'>

            <div className="container-fluid SanatanHomeStyles">
                <div className='container'>

                    <div className="row">
                        <div className="col-sm-12 mt-5 mb-5">
                            <div class="card cardBg ">
                                <div class="card-header tableHeadBirth">
                                    <center>
                                        <h2>{t('Terms & Conditions')}</h2>
                                    </center>

                                </div>
                                <div class="card-body">
                                    
                                    <div>

                                        <h2><center>
                                            <b>{t('Welcome to Sanatan Jyoti! While')}:</b>
                                        </center></h2>

                                        <p>{t('These Terms and Conditions')}</p>

                                        <p>{t('Your access to and use of the Service')}</p>

                                        <h2>{t('Acceptance of Terms')}:</h2>
                                        <p>{t('Users must agree to the terms and conditions before using')}</p>

                                        <h2>{t('Contents')}</h2>

                                        <h3>1. {t('Description of Service')}</h3>
                                        <p>{t('Explanation of the services provided')}</p>

                                        <h3>2. {t('General Content')}</h3>

                                        <h4>{t('Modification of the website and the Services')}</h4>
                                        <p>{t('We reserve the right, in our sole')}</p>

                                        <h4>{t('Content')}</h4>
                                        <p>{t('Our Service allows you to access and')}</p>

                                        <h4>{t('Content Errors')}</h4>
                                        <p>{t('This website may contain typographical')}</p>

                                        <h4>{t('Contents Clause')}</h4>
                                        <p>{t('The contents of the website')}</p>

                                        <h4>{t('User Generated Content')}</h4>
                                        <p>{t('In these terms and')} </p>

                                        <h4>{t('User Comments')}</h4>
                                        <p>{t('The Service may')} <br />
                                        {t('By posting or submitting User')} <br />
                                        {t('You agree that User Comments')} 
                                            <br />
                                            {t('We do not endorse')} 
                                            <br />
                                            {t('You acknowledge')} 
                                            <br />
                                            {t('By participating in')} 
                                            <br />
                                            {t('If you have any question')} 
                                            <br />
                                            {t('By posting or')}  

                                        </p>

                                        <h4>{t('Free Content Policy')}</h4>
                                        <p>{t('Sanatanjyoti may offer certain content')}:</p>
                                        <ol>
                                            <li>
                                                <strong>{t('Use of Free Content')}:</strong> {t('Free Content provided on')}
                                            </li>
                                            <li>
                                                <strong>{t('Accuracy and Reliability')}:</strong>{t('While we strive to provide accurate')} 
                                            </li>
                                            <li>
                                                <strong>{t('No Guarantees or Endorsements')}:</strong> {t('The availability of')}
                                            </li>
                                            <li>
                                                <strong>{t('Intellectual Property Rights')}:</strong>{t('All Free Content provided')} 
                                            </li>
                                            <li>
                                                <strong>{t('Modification or Discontinuation')}:</strong> {t('We reserve the right to modify')}
                                            </li>
                                            <li>
                                                <strong>{t('Feedback and Contributions')}:</strong>{t('If you provide feedback or contribute ')} 
                                            </li>
                                            <li>
                                                <strong>{t('No Commercial Use')}:</strong> {t('You may not use Free')}
                                            </li>
                                        </ol>
                                        <p>{t('By accessing or using Free Content')} <br />

                                        {t('If you have')} </p>

                                        <h4>{t('Beta Testing')}</h4>
                                        <p>{t('Pages marked with')} </p>

                                        <h3>3. {t('Copyright and Ownership of Materials')}</h3>
                                        <p>{t('Copyright © Sanatan Jyoti')} <br />
                                        {t('You shall not reproduce such content')}  <br />
                                        {t('No part of the website shall')}  <br />
                                        {t('Pictures and videos')}  
                                        </p>
                                        <ol>
                                            <li>
                                                <strong>{t('Data Mining')}:</strong>{t('You may not')} 
                                            </li>
                                            <li>
                                                <strong>{t('Use of Email Addresses')}:</strong>{t('Individual or organizational')} 
                                            </li>
                                            <li>
                                                <strong>{t('Mass Downloading')}:</strong>{t('You shall not engage')} 
                                            </li>
                                        </ol>

                                        <h3>4. {t('Disclaimer of Warranties and Liability')}</h3>

                                        <p>{t('The website, and any content and materials')}:</p>
                                        <ul>
                                            <li><strong>{t('All content is provided “as is” and without warranties of any kind, either express or implied.')}</strong></li>
                                            <li><strong>{t('All users shall rely upon any content, at his/her own risk, as to costs and consequences thereof')}.</strong></li>
                                            <li><strong>{t('If you respond to any')}</strong></li>
                                            <li><strong>{t('Sanatanjyoti.com does not warrant')}</strong></li>
                                            <li><strong>{t('Sanatanjyoti.com does not warrant or make ')}</strong></li>
                                            <li><strong>{t('You and not Sanatanjyoti.com')}</strong></li>
                                            <li><strong>{t('To the fullest extent permitted')}</strong></li>
                                        </ul>
                                        <p>{t('From time to time, the website')}</p>
                                        <h2>{t('External Links')}</h2>
                                        <p>{t('We may provide links to other websites')}</p>


                                        <h3>5. {t('Limitation of Liability')}</h3>

                                        <p>
                                        {t('Under no circumstances, including')}
                                        </p>
                                        <p>
                                        {t('Under no circumstances shall we')}
                                        </p>
                                        <p>
                                        {t('Without prejudice to the rights')}
                                        </p>
                                        <p>
                                        {t('You specifically acknowledge and')}
                                        </p>
                                        <p>
                                        {t('If any court of law')}
                                        </p>


                                        <h3>6. {t('Amendment of the Terms')}</h3>
                                        <p>{t('We reserve the right to amend')}</p>

                                        <h3>7. {t('Applicable Law')}</h3>
                                        <p>{t('These Terms of Use are governed')}</p>

                                        <h3>8. {t('Termination')}</h3>
                                        <p>{t('This agreement is effective until')} </p>
                                        <h2>{t('Cookie Acceptance Policy')}</h2>
                                        <p>{t('cookie policy')}</p>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </div>







                </div>
            </div>

        </div>
    )
}

export default TermsConditions
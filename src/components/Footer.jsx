"use client"
import React from 'react'
// import './landing.css';
import { Link} from 'next/link'
import { useTranslation } from "react-i18next";
import Feedback from './Feedback';
// import mixpanel from 'mixpanel-browser';
import sanatanLogo from '../../public/Headerlogo35kb.png'
import avenue from '../../public/CC Avenue.png'
import masterCard from '../../public/MasterCard.png'
import visa from '../../public/Visa.png'
import upi from '../../public/UPI.png'
import youtube from '../../public/youtube 1.svg'
import instagram from '../../public/instagram 1.svg'
import facebook from '../../public/facebook 1.svg'
import Image from 'next/image';


const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className="footerSec centeredLp">
      
      <div className="leftLp">

        <div className="contact">
        <h3 className='headingLp' >{t('Contact')}</h3>
        <div className="mail">
            <a href="mailto:sanatanjyoti@gmail.com">care@gauritechtrade.com</a>
        </div>
        <Feedback />
        </div>
        <h3 className='headingLp' >{t('100% Secure Payments')}</h3>
        <ul className="payment ulLp">
            <li><a href="/Home"><Image src={avenue} alt="" /></a></li>
            <li><a href="/Home"><Image src={masterCard} alt="" /></a></li>
            <li><a href="/Home"><Image src={visa} alt="" /></a></li>
            <li><a href="/Home"><Image src={upi} alt="" /></a></li>
          </ul>
      </div>
      <div className="center align">
          <a href="/Home" className="logo"><Image src={sanatanLogo} alt="" /></a>

          <ul className="social ulLp">
            <li>
                <a href="http://www.youtube.com/@sanatanjyoti2895" target="_blank" rel="noreferrer" onClick={() => handleMixPanelClick("youtubeLinkClicked")}><Image src={youtube} alt="" /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/sanatan.jyoti?igsh=aWpvMW02dHpqc2xl" target="_blank" rel="noreferrer" onClick={() => handleMixPanelClick("instagramLinkClicked")}><Image src={instagram} alt="" /></a>
            </li>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100080094303765&mibextid=ZbWKwL" target="_blank" rel="noreferrer" onClick={() => handleMixPanelClick("facebookLinkClicked")}><Image src={facebook} alt="" /></a>
            </li>

          </ul>
        </div>
        <div className="rightLp">
          <h3 className='headingLp' >{t('Legal')}</h3>

          <ul className="link ulLp">
            <li> 
               {/* <Link href="/TermsConditions"> */}
               <h5 className='' onClick={() => handleMixPanelClick("termsAndConditionsClicked")}>{t('Terms and Conditions')}</h5>
               {/* </Link> */}
            </li>
            <li>
                {/* <Link href="/PrivacyPolicy"> */}
                <h5 className='' onClick={() => handleMixPanelClick("privacyPolicyClicked")}>{t('Privacy Policy')}</h5>
                {/* </Link> */}
            </li>
            <li>  
                {/* <Link href="/PaymentPolicies"> */}
                <h5 className='' onClick={() => handleMixPanelClick("paymentPolicyClicked")}>{t('Payment Policy')}</h5>
                {/* </Link> */}
            </li>


          </ul>
        </div>
        <div className="copyright">{t('Copyright')}  &#169; {t('2024 GAURITECHTRADE CONSULTING LLP. All Rights Reserved')}</div>
      
    </footer>
  );
};

export default Footer;

"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OtpTimer from 'otp-timer';
import OtpInput from 'react-otp-input';
// import mixpanel from 'mixpanel-browser';
import Link from 'next/link';
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
 import SanatanLogo from '../../public/Headerlogo35kb.png'
import Image from 'next/image';

const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  width: "auto"
};

const LoginNew = () => {
  const { t } = useTranslation();
//   useEffect(() => {
//     mixpanel.track('loginPageViewed');
//   }, []);
  // State variables
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');
  const [show, setShow] = useState(0);
  const [mobileNo, setMobileNo] = useState('');
  const [open, setOpen] = useState(0);
  const [mobileError, setMobileError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  // Functions to handle opening and closing of modal
  const handleOpen = () => {
    // mixpanel.track('loginClicked', { buttonName: 'loginClicked' });
    setOpen(1);
  }
  const handleClose = () => {
    setOpen(0);
  }

  // Validate mobile number
  const validateMobile = () => {
    if (!mobileNo) {
      setMobileError('Mobile number is required');
      return false;
    }
    if (mobileNo.length !== 12 || isNaN(mobileNo)) {
      setMobileError('Mobile number should be 10 digits long');
      return false;
    }
    setMobileError('');
    return true;
  };

  // Validate OTP
  const validateOTP = () => {
    if (!otp) {
      setOtpError('Please enter OTP');
      return false;
    }
    if (otp.length !== 6 || isNaN(otp)) {
      setOtpError('OTP should be 6 digits long');
      return false;
    }
    setOtpError('');
    return true;
  };

  // Submit mobile number
  const submitMobile = () => {
    if (!validateMobile()) return;
    // mixpanel.track('getOtpToLoginClicked', { buttonName: 'getOtpToLoginClicked' });
    setLoading(true); // Set loading state before API call

    const content = {
      mobile: mobileNo,
    };
    let OPTIONS = {
      url: `https://apis.sanatanjyoti.com/api/customerOnboarding`,
      method: 'Post',
      headers: {
        'content-type': 'application/json',
      },
      data: content,
    };
    axios(OPTIONS)
      .then((res) => {
        // mixpanel.track('getOtpToLoginSuccess');

        setLoading(false); // Reset loading state after API call
        setShow(1);
      })
      .catch((error) => {
        // mixpanel.track('getOtpToLoginFailed');

        setLoading(false); // Reset loading state if API call fails
        toast.error(error.response.data.status.message);
      });
  };

  // Submit OTP
  const submitOTP = () => {
    if (!validateOTP()) return;
    // mixpanel.track('submitOtpClicked', { buttonName: 'submitOtpClicked' });

    setLoading(true); // Set loading state before API call

    const content = {
      mobile: mobileNo,
      otp: otp,
    };
    let OPTIONS = {
      url: `https://apis.sanatanjyoti.com/api/customerVerify`,
      method: 'Post',
      headers: {
        'content-type': 'application/json',
      },
      data: content,
    };
    axios(OPTIONS)
      .then((res) => {
        // mixpanel.track('submitOtpSuccess');

        setLoading(false); // Reset loading state after API call
        toast.success(res?.data?.status?.message);
        var IdStore = res?.data.data.userId;
        var fullName = res?.data.data.firstName;
        localStorage.setItem('id', IdStore);
        localStorage.setItem('FullName', fullName);
        localStorage.setItem('token', res?.data.data.token);
        window.location.reload();
      })
      .catch((error) => {
        // mixpanel.track('submitOtpFailed');
        setLoading(false); // Reset loading state if API call fails
        setOtpError(error?.response?.data?.status?.message);
        toast.error(error?.response?.data?.status?.message);
      });
  };

  // Handle form submission for mobile number
  const handleSubmitMobile = (event) => {

    if (event) {
      event.preventDefault();
    }
    submitMobile();
  };

  // Handle form submission for OTP
  const handleSubmitOTP = (event) => {
    if (event) {
      event.preventDefault();
    }
    submitOTP();
  };



  // Function to go back to mobile input screen
  const backButton = () => {
    setOtp("");
    setShow(0);
  };

  return (
    <div>
      <button onClick={handleOpen} className="btn  logoutButton">
        {t('Login')}
      </button>
      <Modal scrollable open={open} onClose={handleClose}>
        <Box className="modal_bg_color modalbody responsiveModalBox " sx={style_modal}>
          {show === 0 ? (
            <Typography id="modal-modal-title" variant="h6" component="h1">
              <span>
                <i className="fa-sharp fa-solid fa-xmark cross" onClick={handleClose}></i>
              </span>
              <center>
                <Image
                  className="sanatan_logo_signin"
                  src={SanatanLogo}
                  alt="hii"
                  width="100px"
                ></Image>
              </center>
              <div className="mt-2">
                <h5>
                  <center>{t('You will receive a 6 digit code for verification')}</center>
                </h5>
              </div>

              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                  <form onSubmit={handleSubmitMobile}>
                    <label className="label_form ">{t('Enter your mobile number')}</label>
                    <br />
                    <PhoneInput
                      country={'in'}
                      className={mobileError ? "error-input" : ""}
                      countryCodeEditable={false}
                      enableSearch={true}
                      value={mobileNo}
                      onChange={(mobileNo) => setMobileNo(mobileNo)}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                      }}
                    />
                    <span className="error">{mobileError}</span> {/* Show mobile number error */}
                    <center>
                      <button className="SignUPButton" type="submit" disabled={loading}>
                        {loading ? 'Loading...' : t('Get OTP')}
                      </button>
                    </center>
                  </form>
                  <div className='mt-2'>
                    <h5>
                      <center>
                        {t('By Signing up, you agree to our')} <Link href="/TermsConditions" target="_blank">{t('Terms and Conditions')}</Link> {t('and')} <a href="/privacyPolicy" target="_blank">{t('Payment Policy')}</a>
                      </center>
                    </h5>
                  </div>

                </div>
                <div className="col-sm-1"></div>

              </div>


            </Typography>
          ) : show === 1 ? (
            <Typography id="modal-modal-title" variant="h6" component="h1">
              <span>
                <i className="fa fa-arrow-left backArrow" aria-hidden="true" onClick={backButton}></i>
              </span>
              <span>
                <i className="fa-sharp fa-solid fa-xmark cross" onClick={handleClose}></i>
              </span>
              <center>
                <Image
                  className="sanatan_logo_signin"
                  src={SanatanLogo}
                  alt="hii"
                  width="100px"
                ></Image>
              </center>
              <div className='mt-2'>
                <h5>
                  <center> {t('OTP sent to')} +{mobileNo}</center>
                </h5>
              </div>

              <form onSubmit={handleSubmitOTP}>

                <div className="d-grid justify-content-center" style={{ gap: '10px', textAlign: 'center' }}>
                  <label className="label_form">{t('Enter OTP received on your mobile number')}</label>
                  <div className='mx-5'>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      shouldAutoFocus={true}
                      inputType="tel"
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} className={`big-otp-input ${otpError ? 'error-input' : ''}`} />}
                    />
                  </div>
                  <span className="error">{otpError}</span> {/* Show OTP error */}
                  <OtpTimer
                    minutes={1}
                    seconds={1}
                    text={t('Time')}
                    ButtonText={t('Resend OTP')}
                    background="#8e2e0f"
                    buttonColor="white"
                    resend={(event) => handleSubmitMobile(event)}
                  />
                </div>

                <center>
                  <button className="SignUPButton" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : t('Submit')}
                  </button>
                </center>
              </form>
            </Typography>
          ) : (
            ''
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginNew;

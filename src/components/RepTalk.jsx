"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OtpTimer from "otp-timer";

import { toast } from "react-toastify";
import OtpInput from 'react-otp-input';
// import mixpanel from 'mixpanel-browser';
import sanatanLogo from '../../public/Headerlogo35kb.png'

const style_modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'hidden',
    p: 4,
}
const RepTalk = () => {
    const { t } = useTranslation();
    // const navigate = useNavigate();

    const [otp, setOtp] = useState('');
    const userId = localStorage.getItem("id")
    const [open, setOpen] = React.useState(0);
    const [show, setShow] = React.useState(0)
    const [phoneNo, setPhoneNo] = useState("");
    const [errors, setErrors] = useState({});
    const [queryId, setQueryId] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const firstName = localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName")
    const location = localStorage.getItem("location")
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        // mixpanel.track('talkToRepresentativeClicked', { buttonName: 'talkToRepresentativeClicked' });
        setOpen(1);
    }
    const handleCloses = () => {
        setOpen(0)
        setShow(0)
    }

    // ----------------------Call Representative Form---------------------------------------
    const optns = [
        { value: "Select", label: t('Select') },
        { value: "Female", label: t('female') },
        { value: "Male", label: t('male') },
    ];
    const optnsTime = [
        { value: "Select", label: t('Select') },
        { value: "9AM-12PM", label: t('9AM-12PM') },
        { value: "12PM-3PM", label: t('12PM-3PM') },
        { value: "3PM-6PM", label: t('3PM-6PM') },

    ];
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        time: "",
        message: "",


    });
    useEffect(() => {
        // dispatch(getUserByID(id))
        if (userId) {
            let OPTIONS = {
                url: `/api/get_User_By_Id?userId=${userId}`,
                method: "get",
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {
                    setFormValues({
                        firstName: res.data.data?.firstName,
                        mobile: res.data.data?.mobileNo,
                        email: res.data.data?.email,
                        gender: "gender",
                        lastName: res.data.data?.lastName
                    })
                    setMobileNo(res.data.data?.mobileNo)
                    setPhoneNo(res.data.data?.mobileNo)

                })
        }



    }, [])

    const validateForm = () => {
        const errors = {};

        if (!formValues.firstName) {
            errors.firstName = "First name is required";
        }
        if (!formValues.lastName) {
            errors.lastName = "Last name is required";
        }
        if (!formValues.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Email is invalid";
        }
        if (!formValues.gender) {
            errors.gender = "Gender is required";
        }
        if (!formValues.time) {
            errors.time = "Time is required";
        }
        if (!formValues.message) {
            errors.message = "Message is required";
        }
        if (!phoneNo) {
            errors.phoneNo = "Mobile Number is required";
        }
        
        return errors;

    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handlePaste = (event) => {
        const data = event.clipboardData.getData('text');

    };
    const handleSubmit = (event) => {
        // mixpanel.track('sendQueryToRepresentativeClicked', { buttonName: 'sendQueryToRepresentativeClicked' });
        event.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Submit form to server
            const queryData = {
                email: formValues.email,
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                gender: formValues.gender,
                preferredTiming: formValues.time,
                message: formValues.message,
                mobileNo: phoneNo,
                "queryStatus": "PENDING",
                "queryInterestStatus": "NOT_INTERESTED",
                "userIdentity": "AnushthanUser",
            }
            let OPTIONS = {
                url: `/api/addAnushthanQuery`,
                method: "Post",
                data: queryData,
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {
                    // mixpanel.track('sendQueryToRepresentativeSuccess', { buttonName: 'sendQueryToRepresentativeSuccess' });
                    setQueryId(res.data.data.id)
                    setMobileNo(res.data.data.mobileNo)
                    if (res.data.status.httpCode == 200) {
                        setShow(1)
                    }

                })
                .then((error) => {
                    // mixpanel.track('sendQueryToRepresentativeFailed', { buttonName: 'sendQueryToRepresentativeFailed' });

                })
        }
    };
    const submitVerifyEmail = (e) => {
        e.preventDefault();

        if (otp) {

            let OPTIONS = {
                url: `/api/verifyOtpForAnushthan`,
                method: "Post",
                headers: {
                    "content-type": "application/json",
                },
                data: {
                    "queryId": queryId,
                    "anushthanMobileOtp": otp,
                    "mobileNo": mobileNo
                }
            };
            axios(OPTIONS)
                .then((res) => {
                    if (res.data.status.httpCode == 200) {
                        setShow(2)
                        setTimeout(() => {
                            handleClose()
                            setShow(0)
                            setOtp(null)
                        }, [10000])
                    }
                })
                .catch((error) => {
                    toast.error("OTP Incorrect");


                });
        } else {
            toast.error("Please Enter the OTP")

        }
    }
    const phoneNumber = mobileNo;

    // Define the number of digits to hide at the beginning and end
    const hiddenDigits = {
        start: 3, // Number of digits to hide at the beginning
        end: 2,   // Number of digits to hide at the end
    };

    // Create a hidden phone number by combining visible and hidden parts
    const hiddenPart = 'x'.repeat(hiddenDigits.start + hiddenDigits.end);
    const visiblePart = phoneNumber.slice(hiddenDigits.start, -hiddenDigits.end);
    // ------------------------------Resend OTP after expiry---------------------
    const testFunction = (e) => {
        let OPTIONS = {
            url: `/api/resendOtp?queryId=${queryId}`,
            method: "get",
            headers: {
                "content-type": "application/json",
                "X-User-Mobile": mobileNo
            },
        };
        axios(OPTIONS)
            .then((res) => {
            })
    }
    return (
        <div>
            <button className='btn homeButtonsHeader' onClick={handleOpen}>{t('Talk to representative')}</button>
            {/* <div onClick={handleOpen}>{t('Talk to representative')}</div> */}
            <Modal
                open={open}
                onClose={handleCloses}
            >
                <Box className='modal_bg_color modalbody responsiveModalBox' sx={style_modal}>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        <i className="fa-solid fa-x xIcon xButton" onClick={handleClose}></i>

                    </Typography>
                    {show === 0 ?
                        <Typography id="modal-modal-description " sx={{ mt: 2 }}>
                            <div className='row mt-2'>
                                <center >
                                    <img src={sanatanLogo} alt="homeIcon" width="20%" />
                                    <h4 className='mt-2'><b>{t('Fill Details to talk')}</b></h4>
                                </center>
                                <div className="col-sm-12 mt-2">
                                    <div className="">
                                        <form onSubmit={handleSubmit} >
                                            {userId ?
                                                <>

                                                </>
                                                :
                                                <>
                                                    <div>
                                                        <div className="row name_margin">
                                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                                <label htmlFor="firstName" className='label_form' >{t('First Name')}</label>
                                                                <input
                                                                    type="text"
                                                                    class="form-control control"
                                                                    placeholder={t('First Name')}
                                                                    name='firstName'
                                                                    id="firstName"
                                                                    value={formValues.firstName}
                                                                    onChange={handleInputChange}

                                                                />
                                                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                                <div>
                                                                    <label htmlFor="lastName" className='label_form' >{t('Last Name')}</label>
                                                                    <input
                                                                        type="text"
                                                                        class="form-control control"
                                                                        placeholder={t('Last Name')}
                                                                        name='lastName'
                                                                        id="lastName"
                                                                        value={formValues.lastName}
                                                                        onChange={handleInputChange}
                                                                    />
                                                                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                                            <div>
                                                                <label htmlFor="email" className='label_form' >{t('Email')}</label>
                                                                <input
                                                                    class="form-control control"
                                                                    type="email"
                                                                    placeholder={t('Email')}
                                                                    name='email'
                                                                    id="email"
                                                                    value={formValues.email}
                                                                    onChange={handleInputChange}
                                                                ></input>
                                                                {errors.email && <p className="error">{errors.email}</p>}
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                                            <div>
                                                                <label htmlFor="Gender" className='label_form' >{t('Gender')}</label>
                                                                <select class="form-select control" name='gender' value={formValues.gender} id="gender" onChange={handleInputChange} >
                                                                    {optns.map((option) => (
                                                                        <option key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                                {errors.gender && <p className="error">{errors.gender}</p>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }

                                            <div className="row">
                                                {userId ?
                                                    <>

                                                    </>
                                                    :
                                                    <>
                                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                                            <div>
                                                                <label htmlFor="phoneNo" className='label_form' >{t('Mobile')}</label>
                                                                <PhoneInput
                                                                    countryCodeEditable={false}
                                                                    country={"in"}
                                                                    className=""
                                                                    enableSearch={true}
                                                                    value={phoneNo}
                                                                    onChange={(phoneNo) => setPhoneNo(phoneNo)}
                                                                />
                                                                {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
                                                            </div>
                                                        </div>
                                                    </>}

                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <div>
                                                        <label htmlFor="Gender" className='label_form' >{t('Preferred Time')}</label>
                                                        <select class="form-select control" name='time' value={formValues.time} id="time" onChange={handleInputChange} >
                                                            {optnsTime.map((option) => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {errors.time && <p className="error">{errors.time}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <label htmlFor="message" className='label_form' >{t('Message')}</label>
                                                    <textarea className='form-control control' id="msg"
                                                        placeholder={t('Message')}
                                                        name="message" value={formValues.message}
                                                        onChange={handleInputChange} rows="2" cols="20">
                                                    </textarea>
                                                    {errors.message && <p className="error">{errors.message}</p>}
                                                </div>
                                            </div>
                                            <center>

                                            </center>
                                            <div className="row mt-1">
                                                
                                                <center>
                                               
                                                    <button className='  btn anushthanSubmitButton' type="submit">{t('Send Query')}</button>

                                                </center>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </Typography> : ""}
                    {
                        show === 1 ?
                            <Typography>
                                <center>
                                    <h4><b>{t('Enter OTP')}</b></h4>
                                    <p className='text_signin'>{t('SanatanText')}</p>
                                    <p>{t('An OTP (One Time Password) has been sent to your mobile number')} ( +{phoneNumber.slice(0, hiddenDigits.start) + hiddenPart + phoneNumber.slice(-hiddenDigits.end)}).</p>
                                </center>
                                <span>
                                    {/* <i class="fa fa-arrow-left backArrow" aria-hidden="true" onClick={backButton1}></i> */}
                                </span>

                                <div className="row">
                                    <div className="d-flex justify-content-center" >
                                        <center>
                                           
                                            {/* <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                shouldAutoFocus={true}
                                                onPaste={handlePaste}
                                                numInputs={6}
                                                renderSeparator={<span>-</span>}
                                                renderInput={(props) => (
                                                    <input
                                                        {...props}
                                                        className="big-otp-input" 
                                                    />
                                                )}
                                            /> */}
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                shouldAutoFocus={true}
                                                inputType="tel"
                                                numInputs={6}
                                                renderSeparator={<span>-</span>}
                                                renderInput={(props) => (
                                                    <input
                                                        {...props}
                                                        className="big-otp-input"
                                                    />
                                                )}
                                            />
                                        </center>


                                    </div>
                                </div>


                                <center>
                                    <button className='btn otpVerifyButton' onClick={submitVerifyEmail}>{t('VERIFY OTP')}</button>
                                </center>
                                <br />
                                <center>
                                    <OtpTimer
                                        minutes={5}
                                        seconds={1}
                                        text="Time:"
                                        ButtonText="Resend OTP"
                                        resend={testFunction}
                                    />
                                </center>
                            </Typography> : <></>
                    }

                    {show === 2 ? <Typography>
                        <div class="">
                            <div class="">
                                <center>
                                    <img className='sanatan_logo_signin' src={sanatanLogo} alt='hii' width="130px"></img>
                                </center>
                                <div className="row mt-4">
                                    <center>
                                        <h4>
                                            Thanks For reaching out to Sanatan Jyoti. Our team will respond to you within 24 hours.
                                        </h4>

                                    </center>
                                    <center>
                                        <OtpTimer
                                            minutes={0}
                                            seconds={10}
                                            text="Redirecting In:"

                                        />
                                    </center>
                                </div>
                            </div>
                        </div>
                    </Typography> : ""}

                </Box>
            </Modal>
        </div>
    )
}

export default RepTalk
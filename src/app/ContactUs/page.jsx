"use client"
import React, { useEffect } from 'react'
// import './Contact.css'
// import Common from '../Common/Common';

import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ContactUser } from '../../Redux/Action/ContactAction';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
 import ReactReadMoreReadLess from "react-read-more-read-less";
// import mixpanel from 'mixpanel-browser';

const Contact = () => {
  
    // const Contact_us = useSelector((state) => state.ContactReducer);
    // const [input, setInput] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState(" ")
    const [msg, setMsg] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})
    const form = { name, email, phoneNo, msg }
    // const dispatch = useDispatch();
    const handlePhoneChange = (value) => {
        setPhoneNo(value);

    };
    const validate = () => {
        console.log(form.phoneNo.length)
        let errors = {}
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!form.name) {
            errors.name = 'Name is required!'
        }
        if (regEx.test(form.email)) {
        } else if (!regEx.test(form.email)) {
            errors.email = "Invalid email!"
        } else {
            errors.email = "Invalid email"
        }
        if (form.phoneNo.length !== 12 || isNaN(form.phoneNo)) {
           
            errors.phoneNo = "Invalid Phone number!"
        }
        if (!form.msg) {
            errors.msg = " Message is Required!"
        }
        return errors
    }
    const submit = (e) => {

        e.preventDefault();
        setErrors(validate(form));
        setIsSubmitting(true);
    };
    useEffect(() => {
        const data = { name, email, phoneNo, msg, status: 'NEW' }
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // mixpanel.track('contactUsMessageSendClicked', { buttonName: 'contactUsMessageSendClicked' });
            // dispatch(ContactUser(data));
        }
    }, [errors]);
    return (
        <div className='container-fluid contactUsBg'>
            {/* <ToastContainer /> */}
            <div className="container">
                <div className="row">
                    <div className="card contactBg mt-2 mb-2 border">
                        {/* <Common contact='a' show='a' /> */}
                        <h1 className="heading-desc">CONTACT US</h1>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
                                    <div className=''>
                                        <span>
                                            <p className='for_paragraph textAlignment resText'>
                                                {/* <ReactReadMoreReadLess
                                                    charLimit={200}
                                                    readMoreText='Read more ▼'
                                                    readLessText='Read less ▼'
                                                >
                                                    'Sanaatan Jyoti' aims to present the systems created for the welfare of humans and beings in the eternal tradition in a new way that can be beneficial in this era. To learn more about the objectives of 'Sanaatan Jyoti' or to connect with it, you can contact us at the email provided below or fill out our form. We will try to respond to your message promptly. Your presence is important to us, and we want to stay in touch with you.
                                                </ReactReadMoreReadLess> */}
                                            </p>
                                            <p className='for_paragraph textAlignment fullText'>
                                            'Sanaatan Jyoti' aims to present the systems created for the welfare of humans and beings in the eternal tradition in a new way that can be beneficial in this era. To learn more about the objectives of 'Sanaatan Jyoti' or to connect with it, you can contact us at the email provided below or fill out our form. We will try to respond to your message promptly. Your presence is important to us, and we want to stay in touch with you.
                                            </p>

                                        </span>
                                    </div>
                                    <div className=''>
                                        <div className="row mb-1 flexx">
                                            <div className="col-sm-6 col-md-2">
                                                <img src='https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/ContactMail.png ' alt='swast' width="40px"></img>
                                            </div>
                                            <div className="col-sm-6 col-md-6"><h6 className='mailId'>care@gauritechtrade.com</h6></div>
                                            <div className="col-sm-0 col-md-4"></div>
                                        </div>
                                        <div className="row flexx">
                                            <div className="col-sm-6 col-md-2">
                                                <img src='https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/ContactLocation.png ' alt='swast' width="40px"></img>
                                            </div>
                                            <div className="col-sm-6 col-md-8"><h6 className='locationId'>GAURITECHTRADE CONSULTING LLP, <br /> Company Address</h6></div>
                                            <div className="col-sm-0 col-md-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-6 mt-4 border'>
                                    <form className='mb-3'>
                                        <center>
                                            <h5 className='messageHeading mb-2 mt-2'><b>Send a Message</b></h5>
                                        </center>
                                        <input type='text' className='form-control contect_us_form_control ' placeholder="EnterName" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                                        {errors.name && (<p className='errors'>{errors.name}</p>)}
                                        <input type='text' className='form-control contect_us_form_control' placeholder='Enter Your Email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                                        {errors.email && (<p className='errors'>{errors.email}</p>)}

                                        <PhoneInput
                                            country={"in"}
                                            countryCodeEditable={false}
                                            className=" contect_us_form_control"
                                            enableSearch={true}
                                            name='phoneNo'
                                            value={phoneNo}
                                            onChange={handlePhoneChange}
                                        />
                                        {errors.phoneNo && (<p className='errors'>{errors.phoneNo}</p>)}
                                        <textarea className='form-control contect_us_form_control' id="msg" placeholder='Message' name="msg" value={msg} onChange={(e) => setMsg(e.target.value)}
                                            rows="2" cols="20">
                                        </textarea>
                                        {errors.msg && (<p className='errors'>{errors.msg}</p>)}
                                        <center>
                                            <button className='btn contect_us_submit_btn' onClick={submit}>Send</button>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Contact
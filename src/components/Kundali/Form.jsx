// "use client"; 

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useTranslation } from 'react-i18next';

// import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import DatePicker from "react-datepicker";
// import { ToastContainer, toast } from 'react-toastify';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import 'react-toastify/dist/ReactToastify.css';

// function CommonKundli(props) {
   
//     const router = useRouter();
//     const { t } = useTranslation();
//     const [show, setShow] = useState(false);
//     const [phoneNo, setPhoneNo] = useState("");
//     const [dateToday, setDateToday] = useState(new Date());
//     const [name, setName] = useState(JSON.parse(sessionStorage.getItem('Form'))?.name || '');
//     const [date, setDate] = useState(new Date());
//     const [time, setTime] = useState(JSON.parse(sessionStorage.getItem('Form'))?.hour + ':' + JSON.parse(sessionStorage.getItem('Form'))?.min || moment().format('HH:mm'));
//     const [gender, setGender] = useState(JSON.parse(sessionStorage.getItem('Gender')) || 'female');
//     const [latitude, setLatitude] = useState(26.449923);
//     const [longitude, setLongitude] = useState(80.3318736);
//     const [timezone, setTimezone] = useState("");
//     const [place, setPlace] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSaveSubmitting, setIsSaveSubmitting] = useState(false);
//     const [errors, setErrors] = useState({});
    
//     const [hour, min] = time.split(':');
//     const dayOfWeek = moment(date).format('dddd');
//     const formData = {
//         name,
//         day: moment(date).format('DD'),
//         month: moment(date).format('M'),
//         year: moment(date).format('yy'),
//         date: date ? moment(date).format('DD/MM/YYYY') : "",
//         place,
//         hour,
//         min,
//         lat: latitude,
//         lon: longitude,
//         tzone: timezone,
//         gender,
//         dayOfWeek,
//         mobileNo: phoneNo,
//     };

//     const dataKundliProfile = {
//         userId: localStorage.getItem("id"),
//         name,
//         gender,
//         day: moment(date).format('DD'),
//         month: moment(date).format('M'),
//         year: moment(date).format('yy'),
//         hour,
//         min,
//         lat: latitude,
//         lon: longitude,
//         tzone: timezone,
//         mobileNo: phoneNo,
//         place,
//         kundaliStatus: "",
//         createdDate: moment(dateToday).format('DD/MM/YYYY'),
//         modifiedDate: "",
//         day_of_birth: dayOfWeek
//     };

//     const callbackFunction = (latitude, longitude, timezone, place) => {
//         if (latitude && longitude && timezone && place) {
//             setLatitude(latitude);
//             setLongitude(longitude);
//             setTimezone(timezone);
//             setPlace(place);
//         }
//     };

//     const validate = () => {
//         let errors = {};
//         if (!formData.name) {
//             errors.name = 'Name is required!';
//         }
//         const rule = /^[a-zA-Z\s]*$/;
//         if (!rule.test(formData.name)) {
//             errors.name = 'Name is Invalid!';
//         }
//         if (!place) {
//             errors.place = 'Select Place!';
//         }
//         return errors;
//     };

//     useEffect(() => {
//         if (Object.keys(errors).length === 0 && isSubmitting) {
//             if (place) {
//                 // dispatch(formUser(formData));
//                 if (props.name === 'kundli') {
//                     router.push('/Kundali/BasicDetails');
//                 } else if (props.name === "indianZodiac") {
//                     setShow(true);
//                 } else {
//                     router.push('/Kundali/DailyPrediction');
//                 }
//                 sessionStorage.setItem('Form', JSON.stringify(formData));
//                 sessionStorage.setItem('Gender', JSON.stringify(gender));
//             }
//         }
//     }, [errors, isSubmitting, place, router,  props.name, formData, gender]);

//     useEffect(() => {
//         if (Object.keys(errors).length === 0 && isSaveSubmitting) {
//             if (place) {
//                 // dispatch(KundliProfileAction(dataKundliProfile));
//                 // dispatch(formUser(formData));
//                 router.push('/Kundali/BasicDetails');
//                 sessionStorage.setItem('Form', JSON.stringify(formData));
//                 sessionStorage.setItem('Gender', JSON.stringify(gender));
//             } else {
//                 mixpanel.track('getYourFreeKundliNowFailed');
//             }
//         }
//     }, [errors, isSaveSubmitting, place, router, dataKundliProfile, formData, gender]);

//     const onSubmit = (e) => {
//         e.preventDefault();
//         setErrors(validate());
//         setIsSubmitting(true);
//         mixpanel.track('getYourFreeKundliNowClicked', { buttonName: 'getYourFreeKundliNowClicked' });
//     };

//     const onSaveAndContinue = (e) => {
//         e.preventDefault();
//         if (localStorage.getItem("token")) {
//             setErrors(validate());
//             setIsSaveSubmitting(true);
//             mixpanel.track('kundliSaveAndContinueClicked', { buttonName: 'kundliSaveAndContinueClicked' });
//         } else {
//             toast.error("Login first to save");
//         }
//     };

//     useEffect(() => {
//         const formSession = JSON.parse(sessionStorage.getItem('Form'));
//         if (formSession) {
//             const [day, month, year] = formSession.date.split('/');
//             setDate(new Date(year, month - 1, day));
//         }
//     }, []);

//     const optns = [
//         { value: "", label: t('Select') },
//         { value: "Female", label: t('female') },
//         { value: "Male", label: t('male') },
//     ];

//     const handleChange = (event) => {
//         setGender(event.target.value);
//     };
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';

function CommonKundli(props) {
    const router = useRouter();
    const { t } = useTranslation();
    const [phoneNo, setPhoneNo] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(JSON.parse(sessionStorage.getItem('Form'))?.hour + ':' + JSON.parse(sessionStorage.getItem('Form'))?.min || moment().format('HH:mm'));
    const [name, setName] = useState(JSON.parse(sessionStorage.getItem('Form'))?.name || '');
    const [gender, setGender] = useState(JSON.parse(sessionStorage.getItem('Gender')) || 'female');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaveSubmitting, setIsSaveSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Hardcoded latitude, longitude, and timezone values
    const latitude = 26.449923;
    const longitude = 80.3318736;
    const timezone = 5.5;

    const [hour, min] = time.split(':');
    const dayOfWeek = moment(date).format('dddd');
    const formData = {
        name,
        day: moment(date).format('DD'),
        month: moment(date).format('M'),
        year: moment(date).format('yy'),
        date: date ? moment(date).format('DD/MM/YYYY') : "",
        hour,
        min,
        lat: latitude,
        lon: longitude,
        tzone: timezone,
        gender,
        dayOfWeek,
        mobileNo: phoneNo,
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = 'Name is required!';
        }
        const rule = /^[a-zA-Z\s]*$/;
        if (!rule.test(formData.name)) {
            errors.name = 'Name is Invalid!';
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            router.push('/Kundali/BasicDetails');
            sessionStorage.setItem('Form', JSON.stringify(formData));
            sessionStorage.setItem('Gender', JSON.stringify(gender));
        }
    }, [errors, isSubmitting, router, formData, gender]);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSaveSubmitting) {

            dispatch(callAPI(options))

            router.push('/Kundali/BasicDetails');
            sessionStorage.setItem('Form', JSON.stringify(formData));
            sessionStorage.setItem('Gender', JSON.stringify(gender));
        }
    }, [errors, isSaveSubmitting, router, formData, gender]);

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(validate());
        setIsSubmitting(true);
    };

    const onSaveAndContinue = (e) => {
        e.preventDefault();
        if (localStorage.getItem("token")) {
            setErrors(validate());
            setIsSaveSubmitting(true);
        } else {
            toast.error("Login first to save");
        }
    };

    useEffect(() => {
        const formSession = JSON.parse(sessionStorage.getItem('Form'));
        if (formSession) {
            const [day, month, year] = formSession.date.split('/');
            setDate(new Date(year, month - 1, day));
        }
    }, []);

    const optns = [
        { value: "", label: t('Select') },
        { value: "Female", label: t('female') },
        { value: "Male", label: t('male') },
    ];

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    return (
        <div>
            <ToastContainer autoClose={1500} />
            <div className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="col-md-12 shadow">
                            <div className="card">
                                <div className="card-header formHeader">
                                    <center>{t('Enter Your Birth Details')}</center>
                                </div>
                                <div className="card-body">
                                    <div className='form-bg p-3'>
                                        <form onSubmit={onSubmit}>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="form-group name_margin">
                                                        <label className='label_form'>{t('Name')}</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control control"
                                                            placeholder={t('EnterName')}
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            required
                                                        />
                                                        {errors.name && (<p className='error'>{errors.name}</p>)}
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div>
                                                        <label htmlFor="Gender" className='label_form'>{t('Gender')}</label>
                                                        <select className="form-select control" name='gender' value={gender} id="gender" onChange={handleChange}>
                                                            {optns.map((option) => (
                                                                <option key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="error">{errors.gender}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <label className='label_form'>{t('Date of birth')}</label>
                                                    <div className="form-group">
                                                        <DatePicker
                                                            peekNextMonth
                                                            showMonthDropdown
                                                            showYearDropdown
                                                            dropdownMode="select"
                                                            className="form-control control"
                                                            selected={date}
                                                            dateFormat="dd/MM/yyyy"
                                                            onChange={(e) => setDate(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="form-group">
                                                        <label className='label_form'>{t('TimeSelect')}</label>
                                                        <input
                                                            type="time"
                                                            className="form-control control"
                                                            value={time}
                                                            onChange={(e) => setTime(e.currentTarget.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <div className="form-group name_margin">
                                                        <label className='label_form'>{t('Select Birth Place')}</label>
                                                        <GoogleSearchPlace type="submit" parentCallback={callbackFunction} required />
                                                        {errors.place && (<p className='error'>{errors.place}</p>)}
                                                    </div>
                                                </div> */}
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className='label_form'>{t('Mobile')}</label>
                                                        <div className="row">
                                                            <PhoneInput
                                                                country={"in"}
                                                                countryCodeEditable={false}
                                                                className=""
                                                                enableSearch={true}
                                                                value={phoneNo}
                                                                onChange={(phoneNo) => setPhoneNo(phoneNo)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    {props.datas && (
                                                        <center>
                                                            <button type="button" onClick={onSubmit} className="btn mb-4 kundliSubmitButton1 mx-auto text-white">
                                                                {t('kundliNowPrediction')}
                                                            </button>
                                                        </center>
                                                    )}
                                                    {props.data && (
                                                        <center>
                                                            <button type="button" onClick={onSubmit} className="btn kundliSubmitButton1 text-white">
                                                                {t('Get Kundli')}
                                                            </button>
                                                        </center>
                                                    )}
                                                    {props.datas1 && (
                                                        <center>
                                                            <button type="button" onClick={onSubmit} className="btn mb-4 kundliSubmitButton1 mx-auto text-white">
                                                                {t('GetZodiac')}
                                                            </button>
                                                        </center>
                                                    )}
                                                    {props.dataMain && (
                                                        <div>
                                                            <div className="row">
                                                                <div className="col sm-12">
                                                                    <center>
                                                                        <button type="button" onClick={onSubmit} className="btn mb-4 kundliSubmitButton1 w-80 mx-auto text-white px-5">
                                                                            {t('kundliNow')}
                                                                        </button>
                                                                    </center>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col sm-12">
                                                                    <center>
                                                                        <button type="button" onClick={onSaveAndContinue} className="btn mb-4 kundliSubmitButton1 w-80 mx-auto text-white px-5">
                                                                            {t('Save and continue')}
                                                                        </button>
                                                                    </center>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommonKundli;

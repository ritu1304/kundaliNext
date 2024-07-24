"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useTranslation } from "react-i18next";
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { IndianUser } from "../../Redux/Action/IndianZodiacAction"
// import { WeternUser } from "../../Redux/Action/IndianZodiacAction"
import { useNavigate, NavLink } from "react-router-dom";
// import GoogleSearchPlace from '../SearchPlace/GoogleSearchPlace';
// import {
//     formUser, geoLocation
// } from "../../Redux/Action/kundliDetails"
// import mixpanel from 'mixpanel-browser';
import aries from '../../public/Aries.png'
import taurus from '../../public/Taurus.png'
import gemini from '../../public/Gemini.png'
import cancer from '../../public/Cancer.png'
import leo from '../../public/Leo.png'
import virgo from '../../public/Virgo.png'
import libra from '../../public/Libra.png'
import scropio from '../../public/Scorpio.png'
import saggitarius from '../../public/Sagittarius.png'
import capricorn from '../../public/Capricorn.png'
import aquarius from '../../public/Aquarius.png'
import pisces from '../../public/Pisces.png'
import sanatanLogo from '../../public/Headerlogo35kb.png'



export const IndianZodiac = (props) => {
    useEffect(() => {
        // mixpanel.track('getIndianHoroscopeClicked', { buttonName: 'getIndianHoroscopeClicked' });
    }, []);

    const { t } = useTranslation();
    const [isShown, setIsShown] = useState(false);

    // const navigate = useNavigate();
    // ------------------------------indian-----------------------------
    const [open, setOpen] = React.useState(0);

    // -------------------------western--------------
    const [open2, setOpen2] = React.useState(0);

    const [show, setShow] = React.useState(0)
    const [show2, setShow2] = React.useState(0)
    const [date, setDate] = useState(new Date());
    const [dateWestern, setDateWestern] = useState(new Date());
    const [time, setTime] = useState('10:10');
    const [name, setName] = useState("")
    const [place, setPlace] = useState('')
    // const Western = useSelector((state) => state.IndianReducer);
    const [hour, min] = time.split(':');
    const [latitute, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [timezone, setTimezone] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmittingw, setIsSubmittingw] = useState(false)
    const [errors, setErrors] = useState({})
    const [errorsw, setErrorsw] = useState({})
    const [gender, setGender] = useState('female');
    // const localDataWestern = Western?.result?.sign;

    // localStorage.setItem('localDataWestern', (localDataWestern));
    // const dispatch = useDispatch();
    // const kundliForm = useSelector((state) => state.kundliDetails.kAstro
    // );
    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;


    const validate = () => {
        let errors = {}
        if (!formData.place) {
            errors.place = 'Select Place!'
        }
        return errors
    }
    const validateWestern = () => {
        let errorsw = {}
        // 
        if (!dateWestern.date) {
            errorsw.date = 'Date is required!'
        }
        if (!dateWestern.month) {
            errorsw.month = 'Month is required!'
        }
        return errorsw
    }

    const dayOfWeek = moment(date).format('dddd');
    // const formData = { name, day, month, year, place, hour, min,date,dayOfWeek:moment(date).format('dddd'),gender}
    const formData = { name, day: moment(date).format('DD'), month: moment(date).format('M'), year: moment(date).format('yy'), date: date ? date.toLocaleDateString() : "", "place": place, hour, min, "lat": latitute, "lon": longitude, "tzone": timezone, gender, dayOfWeek }

    var westernDate = {
        date: moment(dateWestern).format('DD'),
        month: moment(dateWestern).format('M'),
    }
    const postData = {
        day: formData.day,
        month: formData.month,
        year: formData.year,
        hour: formData.hour,
        min: formData.min,
        lat: latitute,
        lon: longitude,
        tzone: timezone
    }

    const callbackFunction = (latitude, longitude, timezone, place,) => {
        if ((latitude, longitude, timezone, place)) {
            setLatitude(latitude);
            setLongitude(longitude);
            setTimezone(timezone);
            setPlace(place)
        }

    };
    const OPTIONS = {
        method: "POST",
        body: JSON.stringify({
            day: moment(date).format('DD'),
            month: moment(date).format('M'),
            year: moment(date).format('yy'),
            hour: formData.hour,
            min: formData.min,
            place: place,
            "lat": latitute,
            "lon": longitude,
            "tzone": timezone,
            "maxRows": "6",
            "planetColor": "#8E2E0F",
            "signColor": "#ff4500",
            "lineColor": "#F29726"
        }),

        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        },
    };

    //   --------------------------------IndianUser------------------------
    const SubmitIndian = (e) => {
        mixpanel.track('getIndianHoroscopeSuccess', { success: true });
        e.preventDefault();
        setErrors(validate(formData));
        setIsSubmitting(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            dispatch(IndianUser(postData));
            dispatch(formUser(formData));
            dispatch(geoLocation(OPTIONS));

            setShow(2)
        }
    }, [errors]);


    const optns = [
        { value: "", label: t('Select') },
        { value: "female", label: t('female') },
        { value: "male", label: t('male') },

    ];
    const handleChange = (event) => {
        setGender(event.target.value);
    };

    var indianImage;
    if (kundliForm.sign === "Aries") {
        indianImage = <img src={aries} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Cancer") {
        indianImage = <img src={cancer} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Libra") {
        indianImage = <img src={libra} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Capricorn") {
        indianImage = <img src={capricorn} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Taurus") {

        indianImage = <img src={taurus} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Leo") {
        indianImage = <img src={leo} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Scorpio") {
        indianImage = <img src={scropio} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Aquarius") {
        indianImage = <img src={aquarius} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Gemini") {
        indianImage = <img src={gemini} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Virgo") {
        indianImage = <img src={virgo} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Sagittarius") {
        indianImage = <img src={saggitarius} alt="" width='30%' />
    }
    else if (kundliForm.sign === "Pisces") {
        indianImage = <img src={pisces} alt="" width='30%' />
    }


    var hindiData;
    if (Western.result.sign === "Aries" && LocalStore === "hi") {
        hindiData = "मेष"
    }

    else if (Western.result.sign === "Cancer" && LocalStore === "hi") {
        hindiData = "कर्क"
    }
    else if (Western.result.sign === "Libra" && LocalStore === "hi") {
        hindiData = "तुला"
    }
    else if (Western.result.sign === "Capricorn" && LocalStore === "hi") {
        hindiData = "मकर"
    }
    else if (Western.result.sign === "Taurus" && LocalStore === "hi") {
        hindiData = "वृषभ"
    }
    else if (Western.result.sign === "Leo" && LocalStore === "hi") {
        hindiData = "सिंह"
    }
    else if (Western.result.sign === "Scorpio" && LocalStore === "hi") {
        hindiData = "वृश्चिक"
    }
    else if (Western.result.sign === "Aquarius" && LocalStore === "hi") {
        hindiData = "कुंभ"
    }
    else if (Western.result.sign === "Gemini" && LocalStore === "hi") {
        hindiData = "मिथुन"
    }
    else if (Western.result.sign === "Virgo" && LocalStore === "hi") {
        hindiData = "कन्या"
    }
    else if (Western.result.sign === "Sagittarius" && LocalStore === "hi") {
        hindiData = "धनु"
    }
    else if (Western.result.sign === "Pisces" && LocalStore === "hi") {
        hindiData = "मीन"
    }
    else {
        hindiData = Western.result.sign
    }
    return (
        <div className='container'>
            <div className="row">
                <p className='text-center'>{t('SanatanText')}</p>
            </div>
            <div className="row ">
                <center>
                    <img className='sanatan_logo_signin' src={sanatanLogo} alt='hii' width="10%"></img>

                </center>
            </div>
            <div className="row mt-2">
                <div className="col-sm-12">
                    {show === 0 ?
                        <div>
                            <div class="card">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text-start">
                                            <label className='label_form'>{t('Name')}</label>
                                            <input
                                                placeholder={t('EnterName')}
                                                className="form-control control"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text-start">
                                            <label className='label_form '>{t('Date of birth')}</label><br />
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
                                    <div className='row '>
                                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text-start">
                                            <label className='label_form ' >{t('Gender')}</label>
                                            <select class="form-select control" id="validationDefault04" value={gender} onChange={handleChange} required>
                                                {optns.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text-start">
                                            <label className='label_form '>{t('TimeSelect')}</label>
                                            <input
                                                type="time"
                                                value={time}
                                                className="form-control control"
                                                onChange={(e) => {
                                                    setTime(e.currentTarget.value)
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text-start">
                                            <label className='label_form ' >{t('Select Birth Place')}</label>
                                            {/* <GoogleSearchPlace parentCallback={callbackFunction} /> */}
                                            {errors.place && (<p className='error'>{errors.place}</p>)}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <center>
                                            <div className="col-sm-4">
                                                <button type="button" onClick={SubmitIndian} className="btn btn-danger mb-4 kundliSubmitButton  mx-auto  " >
                                                    {t('GetZodiac')}
                                                </button>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : show === 2 ?
                            <>
                                <div class="card">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <center>
                                                    <h4>{t('Here is Your Sign')} </h4>
                                                    <h1 className='result_sign'>~{kundliForm.sign}~</h1>
                                                    {indianImage}
                                                    {/* <NavLink exact to={`/Kundali/DailyPrediction`} onMouseEnter={() => setIsShown(true)}
                                                        onMouseLeave={() => setIsShown(false)}>  <h6 className="linkToHoro" >{t('CheckPrediction')}</h6>
                                                        {isShown && (
                                                            <div className='clickPredict'></div>
                                                        )}
                                                    </NavLink> */}
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : null}
                </div>
            </div>
        </div >
    )
}

export default IndianZodiac
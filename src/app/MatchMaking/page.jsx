"use client"
import React, { Fragment, useEffect } from 'react'
// import './MatchMaking.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import {
//     matchFormData
// } from "../../Redux/Action/matchDetails"
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
// import GoogleSearchPlace from '../SearchPlace/GoogleSearchPlace';
import moment from 'moment';
// import { MatchProfileAction } from '../../Redux/Action/matchProfileAction'
import { ToastContainer, toast } from 'react-toastify';
// import MatchList from '../Profiles/MatchList';
import 'react-toastify/dist/ReactToastify.css';
import Common from '@/components/Common';
import ReactReadMoreReadLess from "react-read-more-read-less";
// import mixpanel from 'mixpanel-browser';
import matchGroup from '../../../public/Match-Making small 200kb.png'
import Image from 'next/image';
const MatchMaking = (props) => {
    useEffect(() => {
        // mixpanel.track('matchMakingPageViewed');
    }, []);
    var IdStore = localStorage.getItem("id")
    const token_v = localStorage.getItem("token");
    const [dateToday, setDateToday] = useState(new Date());
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    // const dispatch = useDispatch()
    const [open, setOpen] = React.useState(true);
    const [login, setLogin] = React.useState(false);
    // const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [dateFemale, setDateFemale] = useState(new Date());
    const [time, setTime] = useState('10:10');
    const [timeFemale, setTimeFemale] = useState('10:10');
    const [hour, min] = time.split(':');
    const [hourFemale, minFemale] = timeFemale.split(':');
    // const [formData, setFormData] = useState({});
    const [mName, setMName] = useState('')
    const [fName, setFName] = useState('')
    // ---------------male lat long----------------
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [timezone, setTimezone] = useState("")
    const [place, setPlace] = useState("");
    const [latitudeFemale, setLatitudeFemale] = useState("")
    const [longitudeFemale, setLongitudeFemale] = useState("")
    const [timezoneFemale, setTimezoneFemale] = useState("")
    const [placeFemale, setPlaceFemale] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSaveSubmitting, setIsSaveSubmitting] = useState(false)
    const [errors, setErrors] = useState({})
    let LocalStore = localStorage.getItem('lng');

    const callbackFunction = (latitude, longitude, timezone, place) => {
        if ((latitude, longitude, timezone, place)) {
            setLatitude(latitude);
            setLongitude(longitude);
            setTimezone(timezone);
            setPlace(place)
        }
    }
    // ---------------end of male lat long----------------
    const validate = () => {
        let errors = {}

        if (!formData.name) {
            errors.name = 'Name is required!'
        }
        var rule = /^[a-zA-Z\s]*$/;
        if (!rule.test(formData.name)) {
            errors.name = 'Name is Invalid!'
        }
        if (!place) {
            errors.place = 'Select Place!'
        }
        if (!placeFemale) {
            errors.placeFemale = 'Select Place!'
        }
        return errors
    }

    const formData = { f_name: fName, m_name: mName }
    // -----------------------------female lat long------------------------
    const callbackFunctionFemale = (latitude, longitude, timezone, place) => {
        if (latitude, longitude, timezone, place) {
            setLatitudeFemale(latitude);
            setLongitudeFemale(longitude);
            setTimezoneFemale(timezone);
            setPlaceFemale(place)
        }
    }
    // -----------------------------end of female lat long------------------------


    const { t } = useTranslation();

    const maleDayOfWeek = moment(date).format('dddd');
    const femaleDayOfWeek = moment(dateFemale).format('dddd');

    const matchmakingData = {
        latitude, longitude, timezone, latitudeFemale, longitudeFemale, place, placeFemale, formData, maleDayOfWeek, femaleDayOfWeek,
        "m_name": formData.m_name,
        "m_day": moment(date).format('DD'),
        "m_month": moment(date).format('M'),
        "m_year": moment(date).format('yy'),
        "m_hour": hour,
        "m_min": min,
        "m_lat": latitude,
        "m_lon": longitude,
        "m_tzone": timezone,
        "f_name": formData.f_name,
        "f_day": moment(dateFemale).format('DD'),
        "f_month": moment(dateFemale).format('M'),
        "f_year": moment(dateFemale).format('yy'),
        "f_hour": hourFemale,
        "f_min": minFemale,
        "f_lat": latitudeFemale,
        "f_lon": longitudeFemale,
        "f_tzone": timezoneFemale
    }


    let form = { m_name: mName, f_name: fName, m_date: moment(date).format('DD/MM/YYYY'), f_date: moment(dateFemale).format('DD/MM/YYYY'), m_time: time, timeFemale, place, placeFemale }
    var dataMatchProfile = {
        "m_name": formData.m_name,
        "m_day": moment(date).format('DD'),
        "m_month": moment(date).format('M'),
        "m_year": moment(date).format('yy'),
        "m_hour": hour,
        "m_min": min,
        "m_lat": latitude,
        "m_lon": longitude,
        "m_tzone": timezone,
        "f_name": formData.f_name,
        "f_day": moment(dateFemale).format('DD'),
        "f_month": moment(dateFemale).format('M'),
        "f_year": moment(dateFemale).format('yy'),
        "f_hour": hourFemale,
        "f_min": minFemale,
        "f_lat": latitudeFemale,
        "f_lon": longitudeFemale,
        "f_tzone": timezoneFemale,
        "userId": IdStore,
        "createdDate": moment(dateToday).format('dd/MM/yyyy'),
        "modifiedDate": "",
        "m_dayOfBirth": maleDayOfWeek,
        "f_dayOfBirth": femaleDayOfWeek,
        "m_place": place,
        "f_place": placeFemale
    }
    useEffect(() => {
        if (place && placeFemale && isSubmitting) {
            // dispatch(matchFormData(matchmakingData))
            // navigate('/MatchMaking/MatchMakingHome')
            sessionStorage.setItem('form', JSON.stringify(form));
        }
    }, [errors])

    const onSubmit = (e) => {
        // mixpanel.track('getYourFreeMatchingDetailsNowClicked', { buttonName: 'getYourFreeMatchingDetailsNowClicked' });
        e.preventDefault()
        setErrors(validate(formData));
        setIsSubmitting(true);
    };
    useEffect(() => {
        if (place && placeFemale && isSaveSubmitting) {
            // dispatch(MatchProfileAction(dataMatchProfile))
            // dispatch(matchFormData(matchmakingData))
            // navigate('/MatchMaking/MatchMakingHome')
            sessionStorage.setItem('form', JSON.stringify(form));
        }
    }, [errors])

    const onSaveAndContinue = (e) => {
        e.preventDefault()
        if (token_v) {
            setErrors(validate(formData));
            setIsSaveSubmitting(true);
            // mixpanel.track('matchMakingSaveAndContinueClicked', { buttonName: 'matchMakingSaveAndContinueClicked' });
        }
        else {
            toast.error("Login first to save");
            // mixpanel.track('matchMakingiSaveAndContinueFailed', { buttonName: 'matchMakingiSaveAndContinueFailed' });

        }
    };
    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('form'))) {
            let mDate = (JSON.parse(sessionStorage.getItem('form')))
            setMName(mDate.m_name)
            setFName(mDate.f_name)
            const parts = `${mDate.m_date}`.split('/');
            setDate(new Date(parts[2], parts[1] - 1, parts[0]))
            const parts2 = `${mDate.f_date}`.split('/');
            setDateFemale(new Date(parts2[2], parts2[1] - 1, parts2[0]))
            setTime(mDate.m_time)
            setTimeFemale(mDate.timeFemale)
        }
        else {
            setDate(new Date())
        }
    }, [])

    return (
        <div className='wrapper1'>
            <Fragment>
                <div div className="for_backgrounds">
                    <div className={open ? "open" : null}>
                        <div className='matchingkundli'>
                            <div className='container '>
                                <div className="row">
                                    <Common Match_Making='a' show='a' />
                                    
                                </div>


                                <div className='row mt-1'>
                                    <span>
                                        <p className='for_paragraph textAlignment resText'>
                                            <ReactReadMoreReadLess
                                                charLimit={200}
                                                readMoreText={t('Read more ▼')}
                                                readLessText={t('Read less ▼')}
                                            >
                                                {t('MatchDesc')}
                                            </ReactReadMoreReadLess>
                                        </p>
                                        <p className='for_paragraph textAlignment fullText'>
                                            {t('MatchDesc')}
                                        </p>

                                    </span>
                                </div>
                                {/* ---------------------------------New match form------------------------- */}
                                <div className="row mt-3">
                                    <div className="col-sm-1 col-md-1"></div>
                                    <div className="col-sm-10 col-md-10 matchMakingImage">
                                        <Image className='' src={matchGroup} alt="" width="80%" />

                                    </div>
                                    <div className="col-sm-1 col-md-1"></div>
                                </div>
                                <div className="row matchMakingForms">
                                    <div className="col-sm-1 col-md-1"></div>
                                    <div className="col-sm-4 col-md-4 matchMakingMaleForm ">
                                        <div className="card matchMakingFormTextBox" >
                                            <div className="boxFormHeadingMale">
                                                <h4 className='text-center boxHeadingText'>{t('Enter Male Birth Details')}</h4>
                                            </div>
                                            <div className="card-body box_manage_margins_MatchForm">
                                                {/* ---------------------------Enter Male Details------------------------- */}
                                                <form action="" className="">
                                                    <label className='label_form' >{t('name')}</label>
                                                    <input type="text"
                                                        id="m_name"
                                                        className="form-control inputField "
                                                        name="m_name"
                                                        placeholder={t('EnterName')}
                                                        value={mName}
                                                        onChange={(e) => setMName(e.target.value)}
                                                        required="true" >
                                                    </input>
                                                    <div className='row mt-2'>
                                                        <div className='col-sm-12 col-md-6'>
                                                            <label className='label_form dBlock'>{t('Date of birth')}</label>
                                                            <div class="form-group "  >

                                                                <DatePicker
                                                                    dateFormat="dd/MM/yyyy"
                                                                    peekNextMonth
                                                                    showMonthDropdown
                                                                    showYearDropdown
                                                                    dropdownMode="select"
                                                                    className="form-control inputField"
                                                                    selected={date}
                                                                    onChange={(e) => setDate(e)}

                                                                />
                                                            </div>

                                                        </div>
                                                        <div className='col-sm-12 col-md-6'>
                                                            <label className='label_form'>{t('TimeSelect')}</label>
                                                            <input
                                                                type="time"
                                                                value={time}
                                                                className="form-control inputField"
                                                                onChange={(e) => {
                                                                    setTime(e.currentTarget.value)
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2 mb-2">
                                                        <div className="col-sm-12 matchFormPlace">
                                                            <label className='label_form' >{t('Select Birth Place')}</label>
                                                            {/* <GoogleSearchPlace parentCallback={callbackFunction} /> */}
                                                            {errors.place && (<p className='error'>{errors.place}</p>)}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 col-md-2"></div>
                                    <br />
                                    <div className="col-sm-4 col-md-4 matchMakingFemaleForm">
                                        <div className="card matchMakingFormTextBox" >
                                            <div className="boxFormHeadingMale">
                                                <h4 className='text-center boxHeadingText '>{t('Enter Female Birth Details')}</h4>
                                            </div>
                                            <div className="card-body box_manage_margins_MatchForm">
                                                {/* -----------------------Enter Female Details--------------------- */}
                                                <label className='label_form' >{t('name')}</label>
                                                <input type="text"
                                                    id="f_name"
                                                    className="form-control inputField"
                                                    name="f_name"
                                                    placeholder={t('EnterName')}
                                                    value={fName}
                                                    onChange={(e) => setFName(e.target.value)}
                                                    required >
                                                </input>
                                                <div className='row mt-2'>
                                                    <div className='col-sm-6 col-md-6'>
                                                        <label className='label_form dBlock'>{t('Date of birth')}</label>
                                                        <DatePicker
                                                            dateFormat="dd/MM/yyyy"
                                                            peekNextMonth
                                                            showMonthDropdown
                                                            showYearDropdown
                                                            dropdownMode="select"
                                                            className="form-control inputField"
                                                            selected={dateFemale}
                                                            onChange={(e) => setDateFemale(e)}
                                                        />
                                                    </div>
                                                    <div className='col-sm-6 col-md-6'>
                                                        <label className='label_form'>{t('TimeSelect')}</label>
                                                        <input
                                                            type="time"
                                                            value={timeFemale}
                                                            className="form-control inputField"
                                                            onChange={(e) => {
                                                                setTimeFemale(e.currentTarget.value)
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row mt-2 mb-2 matchFormPlace">
                                                    <label className='label_form' >{t('Select Birth Place')}</label>
                                                    {/* <GoogleSearchPlace parentCallback={callbackFunctionFemale} /> */}
                                                    {errors.placeFemale && (<p className='error'>{errors.placeFemale}</p>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-1 col-md-1"></div>
                                    <br></br>
                                    {/* -------------------Submit Button------------------------------- */}

                                    <>
                                        <center className="mt-5">
                                            <button type="button" onClick={(e) => onSubmit(e)} className="btn matchMakingButton text-white">{t('Get Your Matching Details Now')}</button>
                                        </center>
                                        <center>

                                            <button type="button" onClick={(e) => onSaveAndContinue(e)} className="btn matchMakingButton text-white">{t('Save and continue')}</button>
                                            <ToastContainer autoClose={1500} />
                                        </center>
                                    </>
                                </div>
                                <br></br><br></br>
                                {token_v ?
                                    <div className="row ">
                                        <div className="col-sm-12">
                                            {/* <MatchList /> */}
                                        </div>
                                    </div> : ""}
                                <br></br><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    )
}



export default MatchMaking;

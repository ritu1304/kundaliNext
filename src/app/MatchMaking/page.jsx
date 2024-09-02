
"use client";

import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from '@/components/Common';
import ReactReadMoreReadLess from "react-read-more-read-less";
import matchGroup from '../../../public/Match-Making small 200kb.png'
import Image from 'next/image';


const LATITUDE = 26.449923;
const LONGITUDE = 80.3318736;
const TIMEZONE = 5.5;
const PLACE_MALE = "Kota";
const PLACE_FEMALE = "Indore";

const MatchMaking = (props) => {
    const [date, setDate] = useState(new Date());
    const [dateFemale, setDateFemale] = useState(new Date());
    const [time, setTime] = useState(JSON.parse(sessionStorage.getItem('matchmakingData'))?.m_hour + ':' + JSON.parse(sessionStorage.getItem('matchmakingData'))?.m_min || moment().format('HH:mm'));
    const [timeFemale, setTimeFemale] = useState(JSON.parse(sessionStorage.getItem('matchmakingData'))?.f_hour + ':' + JSON.parse(sessionStorage.getItem('matchmakingData'))?.f_min || moment().format('HH:mm'));
    const [mName, setMName] = useState(JSON.parse(sessionStorage.getItem('matchmakingData'))?.m_name || '');
    const [fName, setFName] = useState(JSON.parse(sessionStorage.getItem('matchmakingData'))?.f_name || '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaveSubmitting, setIsSaveSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const { t } = useTranslation();
    const token_v = localStorage.getItem("token");

    const [m_hour, m_min] = time.split(':');
    const [f_hour, f_min] = timeFemale.split(':');

    const matchmakingData = {
        m_name: mName,
        m_day: moment(date).format('DD'),
        m_month: moment(date).format('M'),
        m_year: moment(date).format('yy'),
        m_hour,
        m_min,
        m_lat: LATITUDE,
        m_lon: LONGITUDE,
        m_tzone: TIMEZONE,
        m_place: PLACE_MALE,

        f_name: fName,
        f_day: moment(dateFemale).format('DD'),
        f_month: moment(dateFemale).format('M'),
        f_year: moment(dateFemale).format('yy'),
        f_hour,
        f_min,
        f_lat: LATITUDE,
        f_lon: LONGITUDE,
        f_tzone: TIMEZONE,
        f_place: PLACE_FEMALE,
    };

    const validate = () => {
        let errors = {};
        if (!matchmakingData.m_name) {
            errors.m_name = 'Male name is required!';
        }
        if (!matchmakingData.f_name) {
            errors.f_name = 'Female name is required!';
        }
        const rule = /^[a-zA-Z\s]*$/;
        if (!rule.test(matchmakingData.m_name)) {
            errors.m_name = 'Male name is Invalid!';
        }
        if (!rule.test(matchmakingData.f_name)) {
            errors.f_name = 'Female name is Invalid!';
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            sessionStorage.setItem('matchmakingData', JSON.stringify(matchmakingData));
            router.push('/MatchMaking/MatchMakingHome');
        }
    }, [errors, isSubmitting, router, matchmakingData]);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSaveSubmitting) {
          

            sessionStorage.setItem('matchmakingData', JSON.stringify(matchmakingData));
            router.push('/MatchMaking/MatchMakingHome');
        }
    }, [errors, isSaveSubmitting, router, matchmakingData]);

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
        const storedData = JSON.parse(sessionStorage.getItem('matchmakingData'));
        if (storedData) {
            setMName(storedData.m_name);
            setFName(storedData.f_name);
            setDate(new Date(`20${storedData.m_year}`, storedData.m_month - 1, storedData.m_day));
            setDateFemale(new Date(`20${storedData.f_year}`, storedData.f_month - 1, storedData.f_day));
            setTime(`${storedData.m_hour}:${storedData.m_min}`);
            setTimeFemale(`${storedData.f_hour}:${storedData.f_min}`);
        }
    }, []);

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
                                                    {/* <label className='label_form' >{t('Select Birth Place')}</label> */}
                                                    {/* <GoogleSearchPlace parentCallback={callbackFunctionFemale} /> */}
                                                    {/* {errors.placeFemale && (<p className='error'>{errors.placeFemale}</p>)} */}
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
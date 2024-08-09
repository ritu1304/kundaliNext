"use client"
import React, { useState, useEffect, useRef } from 'react'
import 'react-calendar/dist/Calendar.css'
// import './Panchang.css'
// import axios from "axios";
// import { toast } from "react-toastify";
import moment from 'moment';
import { useTranslation } from "react-i18next";
import { Table } from 'react-bootstrap';
import Image from 'next/image'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { data } from 'jquery';
// import { geoLocation, advancePanchang, planetPanchang, chaughadiyaPanchang, horaPanchang, additionalPanchang, monthPanchang, panchangLaganTable, panchangChartSunrise } from "../../Redux/Action/PanchangAction"
// import { useDispatch, useSelector } from 'react-redux';
// import GooglePlace from "./GooglePlace";
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Common from '@/components/Common';
import ReactReadMoreReadLess from "react-read-more-read-less";
// import mixpanel from 'mixpanel-browser';
import { Link } from 'react-router-dom'
// import Loader from "../../components/Loader";
import PrevSVG from '../../../public/icons8-back-to-32.png'
import NextSVG from '../../../public/icons8-back-to-32 (1).png'
import PanchangChart from '../../components/PanchangChart';
import panchangYantra from '../../../public/Panchang small 200KB.png'
import sunrise from '../../../public/Sunrise.png'
import sunset from '../../../public/Sunset.png'
import sanatanLogo from '../../../public/Headerlogo35kb.png'


function Panchang() {
    useEffect(() => {
        // mixpanel.track('panchangPageViewed');
    }, []);
    useEffect(() => {
        // mixpanel.track('monthlyPanchang');
    }, []);
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);

    const scrollToDiv = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate1, setSelectedDate1] = useState(new Date());
    const [sunriseHour, setSunriseHour] = useState(0);
    const [sunriseMinute, setSunriseMinute] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(moment().month());
    const [festivals, setFestivals] = useState([]);
    const [firstFestival, setFirstFestival] = useState('');

    const [placeShow, setPlaceShow] = useState(true);
    const [show, setShow] = useState(false)
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [timezone, setTimezone] = useState("")
    const [place, setPlace] = useState("");
    const [monthCount, setMonthCount] = useState("");
    const [newPlace, setNewPlace] = useState("");
    const [topTextVisible, setTopTextVisible] = useState(false);
    const [bottomTextVisible, setBottomTextVisible] = useState(false);
    const [leftTextVisible, setLeftTextVisible] = useState(false);
    const [rightTextVisible, setRightTextVisible] = useState(false);
    const [userData, setUserData] = useState("")
    const [date, setDate] = useState(new Date());
    const [date1, setDate1] = useState(new Date());
    const [newDate, setNewDate] = useState(new Date());
    const [dateToday, setDateToday] = useState(new Date());

    const [loaderState, setLoaderState] = useState(false);
    const [time, setTime] = useState("10:10");
    const [showTime, setShowTime] = useState(true);
    const [hours, setHours] = useState("");
    const [mins, setMins] = useState("");
    const [mainFestival, setMainFestival] = useState([]);
    const [error, setError] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 1400);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    // const monthPanchangData = useSelector(
    //     (state) => state.PanchangReducer?.result?.data
    // );
    // const monthPanchangData2 = useSelector(
    //     (state) => state.PanchangReducer?.payload
    // );
    // const loaders = useSelector((state) => state.PanchangReducer.loading);
    // const monthPanchangpayload = useSelector(
    //     (state) => state.PanchangReducer.result2
    // );

    // const dispatch = useDispatch()
    // const advancePanchangData = useSelector((state) => state.PanchangReducer.AdvancePanchang.data);
    // const planetPanchangData = useSelector((state) => state.PanchangReducer.PlanetPanchang);
    // const chaughadiyaPanchangData = useSelector((state) => state.PanchangReducer.ChaughadiyaPanchang);
    // const horaPanchangData = useSelector((state) => state.PanchangReducer.HoraPanchang);
    const currentTime = new Date();
    // ----------------------------------------Profile Panchang----------------------

    // let data1 = {
    //     day: 1,
    //     month: moment(date).format("M"),
    //     year: moment(date).format("yy"),
    //     hour: 2,
    //     min: 15,
    //     lat: 19.0759837,
    //     lon: 72.8776559,
    //     tzone: 5.5,
    // };
   

    // useEffect(() => {
    //     setLoaderState(monthPanchangData2);
    // }, [monthPanchangpayload]);
    

    // var IdStore = localStorage.getItem("id")
    // useEffect(() => {
    //     setMonthCount(moment(date).format('M'))
    //     if (IdStore) {
    //         const url = `/api/get_User_By_Id?userId=${IdStore}`
    //         axios.get(url)
    //             .then((res) => {
    //                 setUserData(res?.data?.data)
    //                 const requestOptions = {
    //                     method: 'POST',
    //                     headers: {
    //                         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //                         'Content-Type': 'application/json',
    //                         'Accept-Language': LocalStore
    //                     },
    //                     body: JSON.stringify(
    //                         {
    //                             "day": moment(date).format('DD'),
    //                             "month": moment(date).format('M'),
    //                             "year": moment(date).format('yy'),
    //                           "hour": 0,
    //                             "min": 1,
    //                             "lat": res?.data?.data.lat || 19.0759837,
    //                             "lon": res?.data?.data.lon || 72.8776559,
    //                             "tzone": res?.data?.data.tzone || 5.5
    //                         })
    //                 };
    //                 setLatitude(res?.data?.data.lat);
    //                 setLongitude(res?.data?.data.lon);
    //                 var monthPanchangPayloadProfile = {
    //                     "day": 1,
    //                     "month": moment(date).format('M'),
    //                     "year": moment(date).format('yy'),
    //                     "hour": 0,
    //                     "min": 1,
    //                     "lat": res?.data?.data.lat || 19.0759837,
    //                     "lon": res?.data?.data.lon || 72.8776559,
    //                     "tzone": res?.data?.data.tzone || 5.5
    //                 }
    //                 const bodyLoad1 = {
    //                     "day": moment(date).format('DD'),
    //                     "month": moment(date).format('M'),
    //                     "year": moment(date).format('yy'),
    //                    "hour": 0,
    //                     "min": 1,
    //                     "lat": res?.data?.data.lat || 19.0759837,
    //                     "lon": res?.data?.data.lon || 72.8776559,
    //                     "tzone": res?.data?.data.tzone || 5.5
    //                 }

    //                 dispatch(monthPanchang(monthPanchangPayloadProfile));
    //                 dispatch(advancePanchang(requestOptions, bodyLoad1))
    //                 dispatch(panchangChartSunrise(requestOptions))
    //             })
    //     } else {
    //         const requestOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //                 'Content-Type': 'application/json',
    //                 'Accept-Language': LocalStore
    //             },
    //             body: JSON.stringify(
    //                 {
    //                     "day": moment(date).format('DD'),
    //                     "month": moment(date).format('M'),
    //                     "year": moment(date).format('yy'),
    //                     "hour": 0,
    //                     "min": 1,
    //                     "lat": 19.0759837,
    //                     "lon": 72.8776559,
    //                     "tzone": 5.5
    //                 })
    //         };
    //         var monthPanchangPayload = {
    //             "day": 1,
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //            "hour": 0,
    //             "min": 1,
    //             "lat": 19.0759837,
    //             "lon": 72.8776559,
    //             "tzone": 5.5
    //         }
    //         const bodyLoad1 = {
    //             "day": moment(date).format('DD'),
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //            "hour": 0,
    //             "min": 1,
    //             "lat": 19.0759837,
    //             "lon": 72.8776559,
    //             "tzone": 5.5
    //         }
    //         dispatch(monthPanchang(monthPanchangPayload));
    //         dispatch(advancePanchang(requestOptions, bodyLoad1))
    //         dispatch(panchangChartSunrise(requestOptions))
    //      }

    // }, [])


    // ----------------------------------------Festival on side----------------------
    // useEffect(() => {
    //     fetchFestivals(selectedMonth);
    // }, [selectedMonth]);

    // const fetchFestivals = async (month) => {
    //     var urlFes;
    //     if (LocalStore === "hi") {

    //         urlFes = `/api/getHindiFestivalsOnCategory?category=Main&year=${moment(date).format('YYYY')}`
    //     }
    //     else {
    //         urlFes = `/api/getFestivalsOnCategory?category=Main&year=${moment(date).format('YYYY')}`
    //     }

    //     try {
    //         const response = await axios.get(urlFes);
    //         setMainFestival(response.data.data)
    //         const startOfMonth = moment().month(month).startOf('month');
    //         const endOfMonth = moment().month(month).endOf('month');
    //         const nextTwoMonthsEnd = moment().month(month).add(4, 'months').endOf('month');

    //         const filteredFestivals = response.data.data.filter(festival => {
    //             const festivalDate = moment(festival.date);

    //             return festivalDate.isBetween(startOfMonth, nextTwoMonthsEnd, 'day', '[]');
    //         });

    //         setFestivals(filteredFestivals);

    //         let LocalStore = localStorage.getItem('lng');
    //         var url;
    //         if (LocalStore === "hi") {

    //             url = `/article/get_blog_by_festivalName?festivalName=दही हांडी&festivalStatus=false&articleType=PUBLISH&status=true`
    //         }
    //         else {
    //             url = `/article/get_blog_by_festivalName?festivalName=Holi&festivalStatus=true&articleType=PUBLISH&status=true`
    //         }

    //         axios.get(url)
    //             .then((res) => {
    //                 setFirstFestival(res?.data?.data[0]?.imageUrl)

    //             })



    //     } catch (error) {
    //         console.error('Error fetching festivals:', error);
    //     }
    // };

    //------------------------- function with time zone ----------------------------------

    // const callbackFunction = (latitude, longitude, timezone, place, value) => {
    //     setLatitude(latitude);
    //     setLongitude(longitude);
    //     setTimezone(timezone);
    //     setPlace(place)
    // };
    // data = Array.from(planetPanchangData);
    // let LocalStore = localStorage.getItem('lng');
    // const onChange = date => {
    //     setDate(date)

    //     setSelectedDate1(date);
    // }
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //         'Content-Type': 'application/json',
    //         'Accept-Language': LocalStore
    //     },
    //     body: JSON.stringify(
    //         {
    //             "day": moment(date).format('DD'),
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //            "hour": 0,
    //             "min": 1,
    //             "lat": 19.0759837,
    //             "lon": 72.8776559,
    //             "tzone": 5.5
    //         })
    // };

    // useEffect(() => {

    //     dispatch(geoLocation(place))

    // }, []);

    // const requestOptions1 = {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //         'Content-Type': 'application/json',
    //         'Accept-Language': LocalStore
    //     },
    //     body: JSON.stringify(
    //         {
    //             "day": moment(date).format('DD'),
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //             "hour": 0,
    //             "min": 1,
    //            "lat": latitude,
    //             "lon": longitude,
    //             "tzone": timezone
    //         })

    // }; const onSubmit11 = (e) => {
    //     setMonthCount(moment(date).format('M'))

    //     mixpanel.track('getPanchangOfDateClicked', { buttonName: 'getPanchangOfDateClicked' });
    //     e.preventDefault();
    //     setLoaderState(true);
    //     if (place === "" || place === null) {
    //         setNewDate(date);

    //         const dateObject = moment(date);
    //         const monthNumber = dateObject.month() + 1; // Adding 1 because Moment.js months are zero-based
    //         fetchFestivals(monthNumber);
    //         var monthPanchangPayloadDateSelect = {
    //             "day": 1,
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //             "hour": 0,
    //             "min": 1,
    //             "lat": 19.0759837,
    //             "lon": 72.8776559,
    //             "tzone": 5.5
    //         }
    //         const bodyLoad1 = {
    //             "day": moment(date).format('DD'),
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //            "hour": 0,
    //             "min": 1,
    //             "lat": 19.0759837,
    //             "lon": 72.8776559,
    //             "tzone": 5.5
    //         }
    //         if (monthCount !== moment(date).format('M')) {
    //             dispatch(monthPanchang(monthPanchangPayloadDateSelect));
    //         }

    //         dispatch(advancePanchang(requestOptions, bodyLoad1))
    //         dispatch(panchangChartSunrise(requestOptions))
    //     } else {
    //         setNewDate(date);
    //         setNewPlace(place);
    //         const dateObject = moment(date);
    //         const monthNumber = dateObject.month() + 1; // Adding 1 because Moment.js months are zero-based
    //         fetchFestivals(monthNumber);
    //         const dataMonthSelect11 = {
    //             day: 1,
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //             hour: 3,
    //             min: 15,
    //             lat: latitude,
    //             lon: longitude,
    //             tzone: timezone,
    //         };
    //         const bodyLoad1 = {
    //             "day": moment(date).format('DD'),
    //             "month": moment(date).format('M'),
    //             "year": moment(date).format('yy'),
    //             "hour": 0,
    //             "min": 1,
    //            "lat": latitude,
    //             "lon": longitude,
    //             "tzone": timezone
    //         }
    //        dispatch(monthPanchang(dataMonthSelect11));
    //         dispatch(advancePanchang(requestOptions1, bodyLoad1))
    //         dispatch(panchangChartSunrise(requestOptions1))
    //        setPlaceShow(false);
    //         setShow(true);

    //     }
    //     // window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });

    // };

   
    // -----------------------------------Next and Previous dates---------------------------------    
    const nextDateFnc = () => {
        date.setDate(date.getDate() + 1);
        // mixpanel.track('getNextDayPanchangClicked', { buttonName: 'getNextDayPanchangClicked' });
        const nextDate = new Date(selectedDate1);

        nextDate.setDate(nextDate.getDate() + 1);
        setSelectedDate1(nextDate);
        // panchangDispatch()
    }
    const previousdateFnc = () => {
        date.setDate(date.getDate() - 1);
        // mixpanel.track('getPreviousDayPanchangClicked', { buttonName: 'getPreviousDayPanchangClicked' });

        const prevDate = new Date(selectedDate1);

        prevDate.setDate(prevDate.getDate() - 1);
        setSelectedDate1(prevDate);

        // panchangDispatch()
    }
    // const panchangDispatch = () => {
    //     const requestOptions2 = {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //             'Content-Type': 'application/json',
    //             'Accept-Language': LocalStore
    //         },
    //         body: JSON.stringify(
    //             {
    //                 "day": moment(date).format('DD'),
    //                 "month": moment(date).format('M'),
    //                 "year": moment(date).format('yy'),
    //                 "hour": 0,
    //                 "min": 1,

    //                 "lat": 19.0759837,
    //                 "lon": 72.8776559,
    //                 "tzone": 5.5
    //             })
    //     };
    //     const bodyLoad2 = {
    //         "day": moment(date).format('DD'),
    //         "month": moment(date).format('M'),
    //         "year": moment(date).format('yy'),
    //         "hour": 0,
    //         "min": 1,
    //         "lat": 19.0759837,
    //         "lon": 72.8776559,
    //         "tzone": 5.5
    //     }

    //     const requestOptions3 = {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //             'Content-Type': 'application/json',
    //             'Accept-Language': LocalStore
    //         },
    //         body: JSON.stringify(
    //             {
    //                 "day": moment(date).format('DD'),
    //                 "month": moment(date).format('M'),
    //                 "year": moment(date).format('yy'),
    //                 "hour": 0,
    //                 "min": 1,
    //                 "lat": latitude,
    //                 "lon": longitude,
    //                 "tzone": timezone
    //             })
    //     };
    //     const bodyLoad3 = {
    //         "day": moment(date).format('DD'),
    //         "month": moment(date).format('M'),
    //         "year": moment(date).format('yy'),
    //         "hour": 0,
    //         "min": 1,
    //        "lat": latitude,
    //         "lon": longitude,
    //         "tzone": timezone
    //     }

    //     if (place === "" || place === null) {
    //         setNewDate(date)

    //         dispatch(advancePanchang(requestOptions2, bodyLoad2))
    //         dispatch(panchangChartSunrise(requestOptions2))
    //      }
    //     else {
    //         setNewDate(date)
    //         setNewPlace(place)

    //         dispatch(advancePanchang(requestOptions3, bodyLoad3))
    //         dispatch(panchangChartSunrise(requestOptions3))
    //        setPlaceShow(false)
    //         setShow(true)
    //     }
    // }

    const todaydateFnc = () => {
        setDate(new Date())
        setSelectedDate1(new Date());
        // mixpanel.track('getTodayPanchangClicked', { buttonName: 'getTodayPanchangClicked' });
        // const requestOptions2 = {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
        //         'Content-Type': 'application/json',
        //         'Accept-Language': LocalStore
        //     },
        //     body: JSON.stringify(
        //         {
        //             "day": moment(dateToday).format('DD'),
        //             "month": moment(dateToday).format('M'),
        //             "year": moment(dateToday).format('yy'),
        //             "hour": currentTime.getHours(),
        //             "min": currentTime.getMinutes(),
        //            "lat": 19.0759837,
        //             "lon": 72.8776559,
        //             "tzone": 5.5
        //         })
        // };
        // const bodyLoad2 = {
        //     "day": moment(dateToday).format('DD'),
        //     "month": moment(dateToday).format('M'),
        //     "year": moment(dateToday).format('yy'),
        //     "hour": currentTime.getHours(),
        //     "min": currentTime.getMinutes(),
        //    "lat": 19.0759837,
        //     "lon": 72.8776559,
        //     "tzone": 5.5
        // }

        // const requestOptions3 = {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
        //         'Content-Type': 'application/json',
        //         'Accept-Language': LocalStore
        //     },
        //     body: JSON.stringify(
        //         {
        //             "day": moment(dateToday).format('DD'),
        //             "month": moment(dateToday).format('M'),
        //             "year": moment(dateToday).format('yy'),
        //             "hour": 0,
        //             "min": 1,
        //            "lat": latitude,
        //             "lon": longitude,
        //             "tzone": timezone
        //         })
        // };
        // const bodyLoad3 = {
        //     "day": moment(dateToday).format('DD'),
        //     "month": moment(dateToday).format('M'),
        //     "year": moment(dateToday).format('yy'),
        //     "hour": currentTime.getHours(),
        //     "min": currentTime.getMinutes(),
        //     "lat": 19.0759837,
        //     "lon": 72.8776559,
        //     "tzone": 5.5
        // }
        // if (place === "" || place === null) {
        //     setNewDate(dateToday)

        //     dispatch(advancePanchang(requestOptions2, bodyLoad2))
        //     dispatch(panchangChartSunrise(requestOptions2))
        // }
        // else {
        //     setNewDate(dateToday)
        //     setNewPlace(place)

        //     dispatch(additionalPanchang(requestOptions3, bodyLoad3))
        //     setPlaceShow(false)
        //     setShow(true)
        // }


    }



    // useEffect(() => {
    //     // 👇️ scroll to top on page load
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // }, []);
     const { t } = useTranslation();

    // const handleMixPanelClick = (linkName) => {
    //     mixpanel.track(linkName, { buttonName: linkName });

    // };
    // const panchangDispatch1 = () => {
    //     const data = {
    //         day: 1,
    //         month: moment(date).format("M"),
    //         year: moment(date).format("yy"),
    //         lat: 19.0759837,
    //         lon: 72.8776559,
    //         tzone: 5.5,
    //     };
    //     const dataMonthSelect = {
    //         day: 1,
    //         month: moment(date).format("M"),
    //         year: moment(date).format("yy"),
    //         lat: latitude,
    //         lon: longitude,
    //         tzone: timezone,
    //     };
    //     if (place === "" || place === null) {
    //         setNewDate(date);
    //         setShowTime(false);
    //         dispatch(monthPanchang(data));
    //     } else {
    //         setNewDate(date);
    //         setNewPlace(place);
    //         setShowTime(false);
    //         dispatch(monthPanchang(dataMonthSelect));
    //         setPlaceShow(false);
    //         setShow(true);
    //     }
    // };
    const todaydateFnc1 = () => {
        setLoaderState(true);
        setDate(new Date());
        // const data = {
        //     day: 1,
        //     month: moment(dateToday).format("M"),
        //     year: moment(dateToday).format("yy"),
        //     lat: 28.535517,
        //     lon: 77.391029,
        //     tzone: 5.5,
        // };
        // const dataMonthSelect = {
        //     day: 1,
        //     month: moment(dateToday).format("M"),
        //     year: moment(dateToday).format("yy"),
        //     lat: latitude,
        //     lon: longitude,
        //     tzone: timezone,
        // };
        // if (place === "" || place === null) {
        //     setNewDate(dateToday);
        //     setShowTime(false);
        //     dispatch(monthPanchang(data));
        // } else {
        //     setNewDate(dateToday);
        //     setNewPlace(place);
        //     setShowTime(false);
        //     dispatch(monthPanchang(dataMonthSelect));
        //     setPlaceShow(false);
        //     setShow(true);
        // }

    };

    const nextDateFnc1 = () => {
        date.setMonth(date.getMonth() + 1);
        setSelectedMonth(nextMonth => nextMonth + 1);
        // panchangDispatch1();
        setLoaderState(true);
    };
    const previousdateFnc1 = () => {
        date.setMonth(date.getMonth() - 1);
        setSelectedMonth(prevMonth => prevMonth - 1);
        // panchangDispatch1();
        setLoaderState(true);
    };


    // const onSubmit = async (e, value) => {
    //     e.preventDefault();

    //     const requestOptions1 = {
    //         method: "POST",
    //         headers: {
    //             Authorization: "Basic " + btoa(userId + ":" + apiKey),
    //             "Content-Type": "application/json",
    //             "Accept-Language": LocalStore,
    //         },
    //         body: JSON.stringify({
    //             day: value,
    //             month: moment(date).format("M"),
    //             year: moment(date).format("yy"),
    //             "hour": 0,
    //             "min": 1,
    //             lat: 19.0759837,
    //             lon: 72.8776559,
    //             tzone: 5.5,
    //         }),
    //     };
    //     const requestOptions2 = {
    //         method: "POST",
    //         headers: {
    //             Authorization: "Basic " + btoa(userId + ":" + apiKey),
    //             "Content-Type": "application/json",
    //             "Accept-Language": LocalStore,
    //         },
    //         body: JSON.stringify({
    //             day: value,
    //             month: moment(date).format("M"),
    //             year: moment(date).format("yy"),
    //             hour: 0,
    //             min: 1,
    //             lat: latitude,
    //             lon: longitude,
    //             tzone: timezone,
    //         }),
    //     };
    //     const bodyLoad1 = {
    //         day: value,
    //         month: moment(date).format("M"),
    //         year: moment(date).format("yy"),
    //         "hour": 0,
    //         "min": 1,
    //         lat: 19.0759837,
    //         lon: 72.8776559,
    //         tzone: 5.5,
    //     }
    //     const bodyLoad2 = {
    //         day: value,
    //         month: moment(date).format("M"),
    //         year: moment(date).format("yy"),
    //         hour: 0,
    //         min: 1,
    //         lat: latitude,
    //         lon: longitude,
    //         tzone: timezone,
    //     }
    //     if (place === "" || place === null) {
    //         dispatch(advancePanchang(requestOptions1, bodyLoad1))
    //         dispatch(panchangChartSunrise(requestOptions1))
    //     } else {
    //         dispatch(advancePanchang(requestOptions2, bodyLoad2))
    //         dispatch(panchangChartSunrise(requestOptions2))
    //     }

    //     setNewDate(
    //         value +
    //         " " +
    //         moment(date).format("MMMM") +
    //         " " +
    //         moment(date).format("YYYY")
    //     );
    //     const dateStr = `${value} ${moment(date).format("MMMM")} ${moment(date).format("YYYY")}`;
    //     // Debugging output

    //     // Parse the date string into a Date object
    //     const parsedDate = moment(dateStr, "D MMMM YYYY");

    //     // Check if the date is valid
    //     if (!parsedDate.isValid()) {

    //         console.error(`Invalid Date: ${dateStr}`);
    //         return;
    //     }

    //     // Get current time
    //     const currentTime = moment();

    //     // Combine parsed date with current time
    //     parsedDate.hour(currentTime.hour());
    //     parsedDate.minute(currentTime.minute());
    //     parsedDate.second(currentTime.second());

    //     // Format the date into the desired format including the fixed time zone name
    //     const formatted = parsedDate.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ') + ' (India Standard Time)';
    //     function convertToDateObject(formatted) {
    //         // Extract the date and time part before the timezone
    //         const dateTimeString = formatted.split(' (')[0];

    //         // Extract individual components
    //         const [dayOfWeek, month, day, year, time, timezone] = dateTimeString.split(' ');

    //         // Construct a date string compatible with Date constructor
    //         const validDateString = `${day} ${month} ${year} ${time} ${timezone}`;

    //         // Create and return the Date object
    //         return new Date(validDateString);
    //     }

        // Use the function to convert
    //     const dateObject = convertToDateObject(formatted);


    //     setSelectedDate1(dateObject)
    //     setDate(dateObject)

    //     // window.scrollTo({ top: 1500, left: 0, behavior: 'smooth' });
    //     scrollToDiv(div1Ref)
    //     // setOpen2(1);
    // };

    const weekDays = [
        {
            name: t("Sunday"),
        },
        {
            name: t("Monday"),
        },
        {
            name: t("Tuesday"),
        },
        {
            name: t("Wednesday"),
        },
        {
            name: t("Thursday"),
        },
        {
            name: t("Friday"),
        },
        {
            name: t("Saturday"),
        },
    ];
    const chunkedItems = [];
    // for (let i = 0; i < monthPanchangData?.data.length; i += 7) {

    //     chunkedItems.push(monthPanchangData?.data.slice(i, i + 7));
    // }
   


    function getTranslatedMonth(dateSelected) {

        var dateValueSelected = t(dateSelected);

        return dateValueSelected;
    }
    // const getFestivalBlogId = (name) => {
    //     // mixpanel.track('getFestivalBlogsClicked', { buttonName: 'getFestivalBlogsClicked' });

    //     // ------------------------------API CALL---------------------------
    //     let LocalStore = localStorage.getItem('lng');
    //     var url1;
    //     if (LocalStore === "hi") {

    //         url1 = `/article/get_blog_by_festivalName?festivalName=${name}&festivalStatus=false&articleType=PUBLISH&status=true`
    //     }
    //     else {
    //         url1 = `/article/get_blog_by_festivalName?festivalName=${name}&festivalStatus=true&articleType=PUBLISH&status=true`
    //     }
    //     let OPTIONS = {
    //         url: url1,
    //         method: "get",

    //         headers: {
    //             "content-type": "application/json",
    //         },
    //     };
    //     axios(OPTIONS)
    //         .then((res) => {
    //             // 

    //             if (res.data.data[0]?.articleId) {
    //                 // mixpanel.track('getFestivalBlogsSuccess');

    //                 const win = window.open(`/Blog/${res.data.data[0]?.articleId}`, '_blank');
    //                 if (win != null) {
    //                     win.focus();
    //                 }
    //             } else {
    //                 // mixpanel.track('getFestivalBlogsFailed');
    //                 toast.error(t('No Blog Found'))
    //             }


    //         })
    //     // ---------------------------------API CALL END---------------------------
      

    // }
    // const laganTablePanchang = useSelector((state) => state?.PanchangReducer?.panchangChartRiseSun);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (laganTablePanchang) {
    //         setLoading(false);
    //     }
    // }, [laganTablePanchang]);




    return (
        <div>
            <div className="wrapper1" >
                <div className="container-fluid find_now">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Common panchang='a' show='a' />
                                
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mt-3">
                                        <div className="image-container position-relative">
                                            <center>
                                                <Image
                                                    src={panchangYantra}
                                                    alt="Your "
                                                    className="img-fluid"
                                                ></Image>
                                            </center>

                                            <div className="permanent-text">
                                                {moment(newDate).format('DD')}
                                                {/* <h2 className=''> {moment(newDate).format('DD')}  </h2> */}
                                                <center>                                                    
                                                    <h3 className='date-text-box'>{moment(newDate).format('M/YY')}</h3>
                                                </center>

                                            </div>
                                            {/* Top Text */}
                                            <div
                                                className="hover-text top"
                                                onMouseEnter={() => setTopTextVisible(true)}
                                                onMouseLeave={() => setTopTextVisible(false)}
                                            >
                                                <div className="card hover-text-card" >
                                                    <div className="card-body  ">
                                                        <span>

                                                            {t('Sunrise')}
                                                            {/* <p>{advancePanchangData ? advancePanchangData.sunrise : "Empty Data"}</p> */}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Left Text */}
                                            <div
                                                className="hover-text left"
                                                onMouseEnter={() => setLeftTextVisible(true)}
                                                onMouseLeave={() => setLeftTextVisible(false)}
                                            >
                                                <div className="card hover-text-card" >
                                                    <div className="card-body ">
                                                        {t('Moonset')}
                                                        {/* <p>{advancePanchangData ? advancePanchangData.moonset : "Empty Data"}</p> */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Text */}
                                            <div
                                                className="hover-text right"
                                                onMouseEnter={() => setRightTextVisible(true)}
                                                onMouseLeave={() => setRightTextVisible(false)}
                                            >
                                                <div className="card hover-text-card" >
                                                    <div className="card-body ">
                                                        {t('Sunset')}
                                                        {/* <p>{advancePanchangData ? advancePanchangData.sunset : "Empty Data"}</p> */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Text */}
                                            <div
                                                className="hover-text bottom"
                                                onMouseEnter={() => setBottomTextVisible(true)}
                                                onMouseLeave={() => setBottomTextVisible(false)}
                                            >
                                                <div className="card hover-text-card" >
                                                    <div className="card-body ">
                                                        {t('Moonrise')}
                                                        {/* <p>{advancePanchangData ? advancePanchangData.moonrise : "Empty Data"} </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 mt-5 ">
                                        <div className='mb-3'>
                                           <center className='flashing-button mb-2 '>
                                                {/* <NavLink target="_blank" exact to={`/Panchang/PanchangAdditional`} onClick={() => handleMixPanelClick("checkAdvancePanchangAccordingToDateAndTimeClicked")}>
                                                    <button type="button" className="btn btn-danger placeSearchButton" >~ {t('Check')} ~</button>


                                                </NavLink> */}
                                            </center>
                                        </div>
                                        <span>
                                            <p className='for_paragraph textAlignment resText'>
                                                <ReactReadMoreReadLess
                                                    charLimit={200}
                                                    readMoreText={t('Read more ▼')}
                                                    readLessText={t('Read less ▼')}
                                                >
                                                    {t('panchang')}
                                                </ReactReadMoreReadLess>
                                            </p>
                                            <p className='for_paragraph textAlignment fullText'>
                                                {t('panchang')}
                                            </p>

                                        </span>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-1">
                                                <b className='select-panchang'>{t('Select Panchang :')}</b>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-1">
                                                <DatePicker
                                                    peekNextMonth
                                                    showMonthDropdown
                                                    showYearDropdown
                                                    dateFormat="dd/MM/yyyy"
                                                    dropdownMode="select"
                                                    // className='selectPanchangDate' selected={date} onChange={onChange}
                                                />
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3     col-xl-3   mt-1">
                                                {/* <GooglePlace parentCallback={callbackFunction} /> */}
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3     col-xl-3   mt-1">
                                                <button type="button" onClick={(e) => onSubmit11(e)} className="btn btn-danger placeSearchButton">{t('Submit')}</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                {/* ===================================================================================================================================                 */}


                <div className='container-fluid find_now order-content'>
                    <div className='wrapper-panchang-muhurat'>
                        {!isMobile && (
                            <div className='muhurat-items overFlowFes'>
                                <h5 className='festival'>{t('Upcoming Festivals')}</h5>

                                <ul className='fest-name'>
                                    {festivals.map(festival => (
                                        <li className='cursor-pointer' key={festival.id} onClick={() => getFestivalBlogId(festival.festival)}>
                                           <Link> {festival.festival} : <br></br>{moment(festival.date).format('DD-MM-YYYY')}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className='six-columns'>
                            <div>


                                <div className="for_background">
                                    <div className="container-fluid find_now space-res">

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="container-fluid ">


                                                    <div className="wholeMonthCalendar">
                                                        <div className="row1 mt-3">
                                                            {/* {!loaders ? ( */}
                                                                <>
                                                                    <div className="alignment-fix">
                                                                        <div className="festival">
                                                                            <div className="date-place">
                                                                                <div
                                                                                    type="button"
                                                                                    onClick={previousdateFnc1}
                                                                                >
                                                                                    <img
                                                                                        alt=""
                                                                                        src={PrevSVG} />
                                                                                    {/* {t("Prev")} */}
                                                                                </div>

                                                                                <h2 type="button" onClick={todaydateFnc1}>
                                                                                    <h2 className=''><b className=''> {getTranslatedMonth(moment(date).format('MMMM'))} {moment(date).format('YYYY')}</b></h2>

                                                                                </h2>

                                                                                <div
                                                                                    type="button"
                                                                                    onClick={nextDateFnc1}
                                                                                >
                                                                                    <img
                                                                                        alt=""
                                                                                        src={NextSVG} />

                                                                                    {/* {t("NextP")} */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="planetTableDataPanchang">
                                                                            <div className="weekeeee">
                                                                                {weekDays.map((item, index) => {
                                                                                    return (
                                                                                        <div className="week">
                                                                                            <h3>
                                                                                                <center>
                                                                                                    {item.name.substring(0, 3)}
                                                                                                    {/* {item.name} */}
                                                                                                </center>
                                                                                            </h3>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                            </div>

                                                                            {chunkedItems.map((chunk, rowIndex) => (
                                                                                <div key={rowIndex} className="dates-vertical">
                                                                                    {chunk.map((item, colIndex) => (
                                                                                        <div key={colIndex} >
                                                                                            <div className="calender-box"
                                                                                            >
                                                                                                <div className="card calender-box cursor-pointer"
                                                                                                    style={{
                                                                                                        background: `${item.offDay === null ||
                                                                                                            item.offDay === ""
                                                                                                            ? "#9C4018"
                                                                                                            : item.date ==
                                                                                                                moment(date).format("DD")
                                                                                                                ? `#f2e6e4`
                                                                                                                : item.offDay === item.day
                                                                                                                    ? "#F29726"
                                                                                                                    : item?.offDayHindi === item?.day
                                                                                                                        ? "#F29726"
                                                                                                                        : `#FEFADD`
                                                                                                            }`,
                                                                                                    }}>
                                                                                                    <div className="card-body">
                                                                                                        {item.tithi ?
                                                                                                            <div onClick={(e) => onSubmit(e, item.date)}>
                                                                                                                <div className="tithi-margin">
                                                                                                                    <h6 className={((LocalStore == "en") || (LocalStore == null)) ? "tithi-Name1" : "tithi-Name2"}><b class="panContent">{t("Ti")}</b><span>
                                                                                                                        {item.tithi.details.tithi_name}</span></h6>
                                                                                                                    <h6 class="tithi-Name">
                                                                                                                        <b class="panContent">{t("Maah")}</b>{item?.hindu_maah?.purnimanta}
                                                                                                                    </h6>
                                                                                                                </div>
                                                                                                                <div className="date-time-sign">
                                                                                                                    <div className="time-sign-wrap">
                                                                                                                        <div className="sunrise-sunset">
                                                                                                                            <div className="wrapper">
                                                                                                                                <img
                                                                                                                                    className="img-icon1"
                                                                                                                                    src={sunrise}
                                                                                                                                    width="70%"
                                                                                                                                    alt="..."
                                                                                                                                />
                                                                                                                                <h6 className="sunrise-time">
                                                                                                                                    {item.sunrise}
                                                                                                                                    {/* {item.sunrise} */}
                                                                                                                                </h6>
                                                                                                                            </div>

                                                                                                                            <div className="wrapper">
                                                                                                                                <img
                                                                                                                                    className="img-icon1"
                                                                                                                                    src={sunset}
                                                                                                                                    width="60%"
                                                                                                                                    alt="..."
                                                                                                                                />
                                                                                                                                <h6 className="sunrise-time">
                                                                                                                                    {item.sunset}
                                                                                                                                    {/* {item.sunset ? item.sunset : ""} */}
                                                                                                                                </h6>
                                                                                                                            </div>
                                                                                                                        </div>



                                                                                                                    </div>



                                                                                                                    <div className="flex-date">
                                                                                                                        <div className="date-text">
                                                                                                                            <h1 class="date-Index ">
                                                                                                                                <b>{item.date}</b>
                                                                                                                            </h1>

                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div> :
                                                                                                            <>
                                                                                                                <center>
                                                                                                                    <img
                                                                                                                        className="sanatan_logo_panchang"
                                                                                                                        src={sanatanLogo}
                                                                                                                        alt="hii"
                                                                                                                        width="130px"
                                                                                                                    ></img>
                                                                                                                </center>
                                                                                                            </>}

                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            {/* ) : ( */}
                                                                {/* <>
                                                                    <div class="w-25 mx-auto text-center  " role="status">
                                                                        <Loader />
                                                                        <div
                                                                            class="spinner-grow "
                                                                            style={{ color: "gray" }}
                                                                            role="status"
                                                                        ></div>
                                                                        <div
                                                                            class="spinner-grow "
                                                                            style={{ color: "gray" }}
                                                                            role="status"
                                                                        ></div>
                                                                        <div
                                                                            class="spinner-grow "
                                                                            style={{ color: "gray" }}
                                                                            role="status"
                                                                        ></div>
                                                                    </div>
                                                                </> */}
                                                            {/* )} */}
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="col-sm-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {!isMobile && (
                            <div className='flex-items'>
                                <div className='muhurat-items1 overFlowFes '>
                                    <h5 className='festival'>{t('Shubh Muhurat')}</h5>

                                    {/* <ul className='fest-name1 '>
                                        <li><Link to='/Panchang/Muhurat/VivahMuhurat' target="_blank">
                                            {t('Wedding Muhurta')}

                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/Tilakotsav' target="_blank">
                                            {t('Tilakotsav Muhurat')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/Mundan' target="_blank">
                                            {t('Mundan Sanskar')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/VadhuPravesh' target="_blank">
                                            {t('Vadhu Pravesh')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/BarikshaAndSagai' target="_blank">
                                            {t('BarikshaSagai')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/BhumiPoojan' target="_blank">
                                            {t('BhumiPoojan')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/VehiclePurchase' target="_blank">
                                            {t('VehiclePurchase')}
                                        </Link></li>
                                    </ul> */}

                                </div>
                                <div className='muhurat-items2 overFlowFes'>

                                    <h5 className='festival'>{t('Main Festival')}</h5>

                                    <ul className='fest-name1'>

                                        {mainFestival.map(festival => (
                                            <li className='cursor-pointer' key={festival.id} onClick={() => getFestivalBlogId(festival.festival)}>
                                               {/* <Link> {festival.festival} : <br></br>{moment(festival.date).format('DD-MM-YYYY')}</Link> */}
                                            </li>
                                        ))}

                                    </ul>

                                </div>

                            </div>
                        )}
                    </div>
                </div>

                {/* -------------------------------------------Hindu Panchang or Advanced Panchang----------------------------------                */}

                <div className='container-fluid find_now mt-1 ' ref={div1Ref}>
                    <div className="container">

                        <div className="row mb-3">
                            <div className="col-sm-12 mt-4">
                                <center>

                                    <h4 className='dateAndTime date-mrg'> <b>
                                        {/* {selectedDate} */}
                                        {moment(newDate).format('DD/MM/YY')}

                                    </b></h4>
                                    {/* {placeShow ? <div className="col-sm-12 dateAndTime">
                                        {IdStore ? <h6>{userData.location}</h6> : <h6>Mumbai, Maharashtra, India</h6>}

                                    </div> : null} */}
                                    {show ? <div className="col-sm-12 dateAndTime">
                                        <h6> {newPlace}</h6>
                                    </div> : null}
                                    <h4 className='dateAndTime'>
                                        {/* {advancePanchangData ? advancePanchangData?.day : "Empty Data"} */}
                                    </h4>

                                </center>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className=" col-sm-0 col-md-0 col-lg-2 col-xl-2 mt-2"> </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-2">
                                <center>
                                    <button
                                        type="button"
                                        onClick={previousdateFnc}
                                        className="btn   prevNextodayButton"
                                    >
                                        {t("Prev")}
                                    </button>
                                </center>

                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-2">
                                <center>
                                    <button
                                        type="button"
                                        onClick={todaydateFnc}
                                        className="btn   prevNextodayButton"
                                    >
                                        {t('Today')}
                                    </button>
                                </center>

                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 mt-2">
                                <center>
                                    <button
                                        type="button"
                                        onClick={nextDateFnc}
                                        className="btn prevNextodayButton"
                                    >
                                        {t("NextP")}
                                    </button>
                                </center>

                            </div>
                            <div className="col-sm-0 col-md-0 col-lg-2 col-xl-2 mt-2"> </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-0 col-md-1'></div>
                            <div className='col-sm-12 col-md-10 col-lg-10 col-xl-10 '>
                                <Table className='manage_tables table-responsive  commonTableColor panchangMainBox ' bordered hover >
                                    <thead>
                                        <tr>
                                            {/* <td rowSpan="2" ><b className='headingColorAdvance'>{t('Sunrise')}</b> <br />{advancePanchangData ? advancePanchangData?.sunrise : "Empty Data"} <br /><br /><b className='headingColorAdvance'>{t('Sun sign')}</b> <br />{advancePanchangData ? advancePanchangData.sun_sign : "Empty Data"}</td>
                                            <td rowSpan="2" ><b className='headingColorAdvance'>{t('Sunset')}</b> <br />{advancePanchangData ? advancePanchangData?.sunset : "Empty Data"} <br /><br /> <b className='headingColorAdvance'>{t('Moon sign')}</b> <br /> {advancePanchangData ? advancePanchangData.moon_sign : "Empty Data"}</td>
                                            <td rowSpan="2" ><b className='headingColorAdvance'>{t('Moonrise')}</b> <br />{advancePanchangData ? advancePanchangData?.moonrise : "Empty Data"} <br /><br /><b className='headingColorAdvance'>{t('Ritu')}</b> <br /> {advancePanchangData ? advancePanchangData.ritu : "Empty Data"}</td>
                                            <td rowSpan="2" ><b className='headingColorAdvance'>{t('Moonset')}</b> <br />{advancePanchangData ? advancePanchangData?.moonset : "Empty Data"} <br /><br /><b className='headingColorAdvance'>{t('Ayan')}</b> <br /> {advancePanchangData ? advancePanchangData.ayana : "Empty Data"}</td> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {/* <td colSpan='2'><b className='headingColorAdvance'>  {t('Inauspicious Period')}</b> <br />{t('Rahu kalm')} - {advancePanchangData ? advancePanchangData?.rahukaal?.start : 'Empty Data'}  | {advancePanchangData ? advancePanchangData?.rahukaal?.end : 'Empty Data'} <br />{t('Yamghant kaal')} - {advancePanchangData ? advancePanchangData?.yamghant_kaal?.start : 'Empty Data'} | {advancePanchangData ? advancePanchangData?.yamghant_kaal?.end : 'Empty Data'}<br />{t('GuliKaal')} - {advancePanchangData ? advancePanchangData.guliKaal?.start : 'Empty Data'} | {advancePanchangData ? advancePanchangData?.guliKaal?.end : 'Empty Data'}</td>
                                            <td colSpan='2'> <b className='headingColorAdvance'> {t('Lunar Month')} </b> <br />{t('Amanta')} - {advancePanchangData ? advancePanchangData?.hindu_maah?.amanta : 'Empty Data'}  <br />{t('Purnimanta')} - {advancePanchangData ? advancePanchangData?.hindu_maah?.purnimanta : 'Empty Data'} <br />{t('Paksha')} - {advancePanchangData ? advancePanchangData?.paksha : 'Empty Data'} </td> */}
                                        </tr>
                                        <tr>
                                            {/* <td><b className='headingColorAdvance'>{t('Tithi')}</b> <br></br>{advancePanchangData ? advancePanchangData?.tithi?.details?.tithi_name : 'Empty Data'} - {advancePanchangData ? advancePanchangData?.tithi?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.tithi?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.tithi?.end_time?.second : 'Empty Data'} ({t('Till')})  <br /> {(advancePanchangData?.tithi_2?.details?.tithi_name) ? <b className='headingColorAdvance'>{t('Next')}</b> : ''}{advancePanchangData ? advancePanchangData?.tithi_2?.details?.tithi_name : 'Empty Data'}  </td>
                                            <td><b className='headingColorAdvance'>{t('Yog')}</b> <br></br>{advancePanchangData ? advancePanchangData?.yog?.details?.yog_name : 'Empty Data'} - {advancePanchangData ? advancePanchangData?.yog?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.yog?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.yog?.end_time?.second : 'Empty Data'} ({t('Till')})  <br />{(advancePanchangData?.yog_2?.details?.yog_name) ? <b className='headingColorAdvance'>{t('Next')}</b> : ''}{advancePanchangData ? advancePanchangData?.yog_2?.details?.yog_name : 'Empty Data'}  </td>
                                            <td><b className='headingColorAdvance'>{t('Nakshatra')}</b> <br></br>{advancePanchangData ? advancePanchangData?.nakshatra?.details?.nak_name : 'Empty Data'} - {advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.second : 'Empty Data'} ({t('Till')})  <br />{(advancePanchangData?.nakshatra_2?.details?.nak_name) ? <b className='headingColorAdvance'>{t('Next')}</b> : ''}{advancePanchangData ? advancePanchangData?.nakshatra_2?.details?.nak_name : 'Empty Data'}</td>
                                            <td><b className='headingColorAdvance'>{t('Karan')}</b> <br></br>{advancePanchangData ? advancePanchangData?.karan?.details?.karan_name : 'Empty Data'} - {advancePanchangData ? advancePanchangData?.karan?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.karan?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.karan?.end_time?.second : 'Empty Data'} ({t('Till')})   <br />{(advancePanchangData?.karan_2?.details?.karan_name) ? <b className='headingColorAdvance'>{t('Next')}</b> : ''}{advancePanchangData ? advancePanchangData?.karan_2?.details?.karan_name : 'Empty Data'}</td> */}
                                        </tr>
                                        <tr>
                                            {/* <td><b className='headingColorAdvance'>{t('Abhijit Muhurta')}</b> <br></br>{advancePanchangData ? advancePanchangData?.abhijit_muhurta?.start : 'Empty Data'} | {advancePanchangData ? advancePanchangData?.abhijit_muhurta?.end : 'Empty Data'}  </td>
                                            <td><b className='headingColorAdvance'>{t('Adhik')}</b> <br></br>{(advancePanchangData?.hindu_maah?.adhik_status) === true ? t('Yes') : t('No')}
                                            </td> */}
                                            {/* <td><b className='headingColorAdvance'>{t('Shaka Samvat')}</b> <br></br>{advancePanchangData ? advancePanchangData?.shaka_samvat : 'Empty Data'} - {advancePanchangData ? advancePanchangData?.shaka_samvat_name : 'Empty Data'}  </td>
                                            <td><b className='headingColorAdvance'>{t('Vikram Samvats')}</b> <br></br>{advancePanchangData ? advancePanchangData?.vikram_samvat : 'Empty Data'} - {advancePanchangData ? advancePanchangData?.vkram_samvat_name : 'Empty Data'} </td> */}
                                        </tr>
                                        {/* {(advancePanchangData?.bhadraStartTime) ?
                                            <tr>
                                                <td colSpan='4'><b className='headingColorAdvance'>{t('Bhadra')} :  </b>{advancePanchangData ? advancePanchangData?.bhadraLok : 'Empty Data'}  <br /> {advancePanchangData ? advancePanchangData?.bhadraStartTime : 'Empty Data'} ({t('Start')}) - {advancePanchangData ? advancePanchangData?.bhadraEndTime : 'Empty Data'} ({t('Till')})  </td>

                                            </tr> : ""} */}
                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-sm-0 col-md-1'></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 space-div">
                                <center className='flashing-button'>
                                    {/* <NavLink exact to={`/Panchang/PanchangAdditional`} onClick={() => handleMixPanelClick("checkAdvancePanchangAccordingToDateAndTimeClicked")} target="_blank"> <button type="button" className="btn btn-danger placeSearchButton">~ {t('Check')} ~</button>
                                    </NavLink> */}
                                </center>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                        <br></br>
                    </div>
                </div>
                {/* --------------------------Planet Details-------------------------------------------*/}
                <div className='container-fluid find_now '>
                    <div className="container">
                        {/* <Common PlanetDetails='a' show='a' /> */}
                        <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-10 table_for_height planDataPan mt-4'>
                                <Table className='for_css manage_table table-responsive fontSize' striped bordered hover >

                                    <thead>
                                        <tr className="tableHeadBirth">
                                            <th colSpan="11"><h4 className='text-center headingTab'><b>{t('Planet Details')} </b></h4></th>
                                        </tr>
                                        <tr className='th_color'>
                                            <th>{t('Name')}</th>
                                            <th>{t('Full Degree')}</th>
                                            <th>{t('NormaL Degree')}</th>
                                            <th>{t('Speed')}</th>
                                            <th>{t('Retro')}</th>
                                            <th>{t('Sign')}</th>
                                            <th>{t('Sign Lord')}</th>
                                            <th>{t('Nakshatra')}</th>
                                            <th>{t('Nakshatra Lord')}</th>
                                            <th>{t('Planet Set')}</th>
                                            <th>{t('House')}</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {planetPanchangData.PlanetPanchang !== null}
                                        {data?.map((planet, index) => (
                                            <tr data-index={index}>
                                                <td>{planet.name}</td>
                                                <td>{planet.fullDegree.toFixed(2)}</td>
                                                <td>{planet.normDegree.toFixed(2)}</td>
                                                <td>{planet.speed.toFixed(2)}</td>

                                                <td> {planet.isRetro == "false" ? <>{t('No')}</> : <>{t('Yes')}</>}  </td>

                                                <td>{planet.sign}</td>
                                                <td>{planet.signLord}</td>
                                                <td>{planet.nakshatra}</td>
                                                <td>{planet.nakshatraLord}</td>
                                                <td> {planet?.is_planet_set === false ? <>{t('No')}</> : <>{t('Yes')}</>}  </td>
                                                <td>{planet.house}</td>
                                            </tr>
                                        ))} */}
                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-md-1'></div>
                        </div><br></br>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <center>
                                    <h3 className="chartsHeadName ghocharHeading">
                                        {t('Panchang Chart (Gochar)')}
                                    </h3>
                                    {/* <PanchangChart /> */}
                                    {loading ? <div>Loading...</div> :
                                        <div>
                                            <svg
                                                className='horoCharts'

                                            >
                                                {/* House 1 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="225 56.25,140.625 140.625,225 225,309.375 140.625"
                                                        fill={laganTablePanchang[0]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="52%" y="45%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[0]?.sign}
                                                    </text>
                                                    {laganTablePanchang[0]?.planet?.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="42%"
                                                            y="20%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 2 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="56.25 56.25, 140.625 140.625,225 56.25"
                                                        fill={laganTablePanchang[1]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="33%" y="27%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[1]?.sign}
                                                    </text>
                                                    {laganTablePanchang[1]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="35%"
                                                            y="12%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 3 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="56.25 225,140.625 140.625,56.25 56.25"
                                                        fill={laganTablePanchang[2]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="29%" y="31%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[2]?.sign}
                                                    </text>
                                                    {laganTablePanchang[2]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="21%"
                                                            y="25%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >

                                                            <tspan className="chartFontSize" x="21%" dy="1.2em" >{laganTablePanchang[2]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="21%" dy="1.2em" >{laganTablePanchang[2]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 4 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="140.625 140.625,56.25 225,140.625 309.375,225 225"
                                                        fill={laganTablePanchang[3]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="48%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[3]?.sign}
                                                    </text>
                                                    {laganTablePanchang[3]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="30%"
                                                            y="40%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 5 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="56.25 225,140.625 309.375,56.75 393.75"
                                                        fill={laganTablePanchang[4]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="29%" y="68%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[4]?.sign}
                                                    </text>
                                                    {laganTablePanchang[4]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="20%"
                                                            y="61%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 6 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="56.25 393.75,140.625 309.375,225 393.75"
                                                        fill={laganTablePanchang[5]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="33%" y="71%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[5]?.sign}
                                                    </text>
                                                    {laganTablePanchang[5]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="33%"
                                                            y="71%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan>x="50%" dy="1.2em" */}
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 7 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="225 225,140.625 309.375,225 393.75,309.375 309.375"
                                                        fill={laganTablePanchang[6]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="53%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[6]?.sign}
                                                    </text>
                                                    {laganTablePanchang[6]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="52%"
                                                            y="58%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em" >{laganTablePanchang[6]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em" >{laganTablePanchang[6]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 8 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="225 393.75,309.375 309.375,393.75 393.75"
                                                        fill={laganTablePanchang[7]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="73%" y="73%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[7]?.sign}
                                                    </text>
                                                    {laganTablePanchang[7]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="71%"
                                                            y="73%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 9 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="393.75 225,309.375 309.375,393.75 393.75"
                                                        fill={laganTablePanchang[8]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="76%" y="69%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[8]?.sign}
                                                    </text>
                                                    {laganTablePanchang[8]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="85%"
                                                            y="60%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 10 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="309.375 140.625,393.75 225,309.375 309.375,225 225"
                                                        fill={laganTablePanchang[9]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="57%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[9]?.sign}
                                                    </text>
                                                    {laganTablePanchang[9]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="73%"
                                                            y="40%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 11 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="393.75 56.25,309.375 140.625,393.75 225"
                                                        fill={laganTablePanchang[10]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="77%" y="31%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[10]?.sign}
                                                    </text>
                                                    {laganTablePanchang[10]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="85%"
                                                            y="23%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em" >{laganTablePanchang[10]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em" >{laganTablePanchang[10]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>
                                                {/* House 12 */}
                                                <g>
                                                    <polygon
                                                        className='polygon'
                                                        points="225 56.25,309.375 140.625,393.75 56.25"
                                                        fill={laganTablePanchang[11]?.planet?.length > 0 ? 'green' : 'gray'}
                                                    />
                                                    <text x="73%" y="25%" dominantBaseline="middle" textAnchor="middle" fill="red">
                                                        {laganTablePanchang[11]?.sign}
                                                    </text>
                                                    {laganTablePanchang[11]?.planet.map((planet, planetIndex) => (
                                                        <text
                                                            key={planetIndex}
                                                            x="72%"
                                                            y="12%"
                                                            dominantBaseline="middle"
                                                            textAnchor="middle"
                                                            fill="blue"
                                                        >
                                                            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan>  x="50%" dy="1.2em" */}
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em" >{laganTablePanchang[11]?.planet_small[0]}</tspan>
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[1]}</tspan>
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em" >{laganTablePanchang[11]?.planet_small[2]}</tspan>
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[3]}</tspan>
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[4]}</tspan>
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[5]}</tspan>
                                                            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[6]}</tspan>

                                                        </text>
                                                    ))}
                                                </g>


                                            </svg>
                                        </div>
                                    }
                                </center>

                            </div>


                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------chaughadiya api----------------- */}
                <div className='container-fluid find_now '>
                    <div className="container">
                        <div className='row '>
                            <div className='col-md-1'></div>
                            <div className='col-md-5 table_for_height mt-4'>
                                <Table className='for_css manage_table table-responsive fontSize' striped bordered hover >
                                    <thead>
                                        <tr className="tableHeadBirth">
                                            <th colSpan="2"><h6 className='text-center headingTab'><b>{t('Day Chaughadiya')} </b></h6></th>
                                        </tr>
                                        <tr className="th_color">
                                            <th>{t('Chaughadiya Name')}</th>
                                            <th>{t('Time')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {chaughadiyaPanchangData?.day?.map((planet, index) => (
                                            <tr data-index={index}>
                                                <td>{planet.muhurta}</td>
                                                <td>{planet.time}</td>
                                            </tr>
                                        ))} */}

                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-md-5 table_for_height mt-4'>
                                <Table className='for_css manage_table table-responsive fontSize' striped bordered hover >
                                    <thead>
                                        <tr className="tableHeadBirth">
                                            <th colSpan="2"><h6 className='text-center headingTab'><b>{t('Night Chaughadiya')} </b></h6></th>
                                        </tr>
                                        <tr className="th_color">
                                            <th>{t('Chaughadiya Name')}</th>
                                            <th>{t('Time')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {chaughadiyaPanchangData?.night?.map((planet, index) => (
                                            <tr data-index={index}>
                                                <td>{planet.muhurta}</td>
                                                <td>{planet.time}</td>
                                            </tr>
                                        ))} */}


                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-md-1'></div>
                        </div>
                    </div>
                </div>
                {/* -------------------hora ---------------------------------------- */}
                <div className='container-fluid find_now '>
                    <div className="container">
                        {/* <Common Hora='a' show='a' /> */}
                        <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-5 table_for_height mt-4'>
                                <Table className='for_css manage_table table-responsive fontSize' striped bordered hover >
                                    <thead>
                                        <tr className='tableHeadBirth'>
                                            <th colSpan="2"><h6 className='headingTab'><b>{t('Day Hora')} </b></h6></th>
                                        </tr>
                                        <tr className='th_color'>
                                            <th>{t('Hora Name')}</th>
                                            <th>{t('Time')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {horaPanchangData?.day?.map((planet, index) => (
                                            <tr data-index={index}>
                                                <td>{planet.hora}</td>
                                                <td>{planet.time}</td>
                                            </tr>
                                        ))} */}

                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-md-5 table_for_height mt-4'>
                                <Table className='for_css manage_table table-responsive fontSize' striped bordered hover >
                                    <thead>
                                        <tr className='tableHeadBirth'>
                                            <th colSpan="2"><h6 className='headingTab'><b>{t('Night Hora')} </b></h6></th>
                                        </tr>
                                        <tr className='th_color'>
                                            <th>{t('Hora Name')}</th>
                                            <th>{t('Time')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {horaPanchangData?.night?.map((planet, index) => (
                                            <tr data-index={index}>
                                                <td>{planet.hora}</td>
                                                <td>{planet.time}</td>
                                            </tr>
                                        ))} */}

                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-md-1'></div>

                        </div>


                        <br></br>
                    </div>
                </div>
                <div className='container-fluid find_now '>
                    {isMobile && (
                        <div className='muhurat-items '>
                            <h5 className='festival'>{t('Upcoming Festivals')}</h5>

                            <ul className='fest-name overFlowFes1'>
                                {/* {festivals.map(festival => (
                                    <li className='cursor-pointer' key={festival.id} onClick={() => getFestivalBlogId(festival.festival)}>
                                        {festival.festival} : <div>{moment(festival.date).format('DD-MM-YYYY')}</div>
                                    </li>
                                ))} */}
                            </ul>

                            {/* <center className='mb-5'>
                                <img type="text" src={firstFestival} alt='blogImage' width="200px" ></img>
                            </center> */}


                        </div>
                    )}
                    {isMobile && (
                        <div className='flex-items'>
                            <div className='muhurat-items1  '>
                                    <h5 className='festival'>{t('Shubh Muhurat')}</h5>

                                    {/* <ul className='fest-name overFlowFes1 '>
                                        <li><Link to='/Panchang/Muhurat/VivahMuhurat' target="_blank">
                                            {t('Wedding Muhurta')}

                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/Tilakotsav' target="_blank">
                                            {t('Tilakotsav Muhurat')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/Mundan' target="_blank">
                                            {t('Mundan Sanskar')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/VadhuPravesh' target="_blank">
                                            {t('Vadhu Pravesh')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/BarikshaAndSagai' target="_blank">
                                            {t('BarikshaSagai')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/BhumiPoojan' target="_blank">
                                            {t('BhumiPoojan')}
                                        </Link></li>
                                        <li><Link to='/Panchang/Muhurat/VehiclePurchase' target="_blank">
                                            {t('VehiclePurchase')}
                                        </Link></li>
                                       

                                    </ul> */}

                                </div>
                            <div className='muhurat-items2 '>

                                <h5 className='festival'>{t('Main Festival')}</h5>

                                <ul className='fest-name overFlowFes1'>

                                    {mainFestival.map(festival => (
                                        <li className='cursor-pointer' key={festival.id} onClick={() => getFestivalBlogId(festival.festival)}>
                                          {/* <Link>  {festival.festival} : <br></br>{moment(festival.date).format('DD-MM-YYYY')}</Link> */}
                                        </li>
                                    ))}

                                </ul>
                            </div>

                        </div>
                    )}
                </div>



            </div>
        </div>
    )
}
export default Panchang
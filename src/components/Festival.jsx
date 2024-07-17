"use client"
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

// import Common from '../Common/Common'
import { Link } from 'react-router-dom';
// import { getFestival, searchFestival, categoryFestival } from "../../Redux/Action/FestivalAction"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
// import './Festival.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
 import FestivalSearch from './FestivalSearch';
import { useTranslation } from "react-i18next";
// import { getFestivalBlog } from '../../Redux/Action/BlogAction'
import axios from "axios";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ReadMoreReact from 'read-more-react';
import ReactReadMoreReadLess from "react-read-more-read-less";
// import mixpanel from 'mixpanel-browser';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay , Pagination} from 'swiper/modules';
// import '../Blogs/CustomCarousel.css'

const style_modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
function Festival(props) {
    useEffect(() => {
        // mixpanel.track('festivalPageViewed');
    }, []);
    const { t } = useTranslation();
    const festivalByCategory = [

        {
            name: "Sanatan Calender",
            label: t('Sanatan Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalCategorySanatan.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalSanatanCal.png",
            value: "Main",
            id: 1,
        },
        {
            name: "Jayanti",
            label: t('Jayanti Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivaljayanti.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalJayanCal.png",
            value: "Jayanti",
            id: 2,
        },
        {
            name: "Women",
            label: t('Women Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivalwomen.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalWomenFes.png",
            value: "Women",
            id: 3,
        },
        {
            name: "Ekadashi",
            label: t('Ekadashi Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivalekadasi.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalEkaFes.png",
            value: "Ekadashi",
            id: 4,
        },
        {
            name: "Regional",
            label: t('Regional Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivalregional.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalRegionalImage.png",
            value: "Regional",
            id: 5,
        },
        {
            name: "National",
            label: t('National Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalnationalImg.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalNationalFes.png",
            value: "National",
            id: 6,
        },
        {
            name: "Grahan",
            label: t('Grahan Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalgrahanImg.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalGrahanFes.png",
            value: "Grahan",
            id: 7,
        },
        {
            name: "Shradh",
            label: t('Shradh Calendar'),
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalShradh.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalShradhFes.png",
            value: "Shradh",
            id: 8,
        },

    ]
    const [open, setOpen] = React.useState(false);
    const [festival, setFestival] = useState("")
    const handleOpen = () => setOpen(true);
    const [date, setDate] = useState(new Date());
    const [date1, setDate1] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [year, setYear] = useState("");
    const [categoryYear, setCategoryYear] = useState("2024");
    const [valuen, setValuen] = useState("");
    const [show, setShow] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const handleClose = () => setOpen(false);
    // const dispatch = useDispatch()
    // const fes = useSelector((state) => state.FestivalReducer.getFest);
    // const searchedFestival = useSelector((state) => state.FestivalReducer?.searchFest);
    // const festivalCategory = useSelector((state) => state.FestivalReducer?.categoryFest);
    let LocalStore = localStorage.getItem('lng');

    // var data = Array.from(searchedFestival);
    const callbackFunction = (festivalName) => {
        if ((festivalName)) {
            setFestival(festivalName)
        }
    }
    //------------------For Calendar---------------- 
    const nextDateFnc = () => {
        date.setDate(date.getDate() + 1);
    }
    const previousdateFnc = () => {
        date.setDate(date.getDate() - 1);
    }
    // --------------------Get Festival------------------------
    useEffect(() => {
        var mon = moment(currentDate).format('M');
         var yea = moment(currentDate).format('yy')
        let dat = { month: mon, year: yea };
        // dispatch(getFestival(dat))
    }, [])
    // ----------------------------Search Festival----------------------
    useEffect(() => {
        var festival = "Holi"
        var year = "2024"
        var search = { festival, year }
        // dispatch(searchFestival(search))
    }, [])
    // ----------------------------------Category Festival--------------------
    useEffect(() => {
        var data = {
            year: moment(currentDate).format('yy'),
            category: "Main"
        }
        // dispatch(categoryFestival(data))
    }, [])
    //---------for search festival-------------

    const festivalSelectedData = {
        festival, year
    }
    const onSubmit1 = () => {
        if (festival && festivalSelectedData.year !== undefined) {
            // mixpanel.track('searchFestivalClicked', { buttonName: 'searchFestivalClicked' });
            // dispatch(searchFestival(festivalSelectedData))
            // mixpanel.track('searchFestivalSuccess', { buttonName: 'searchFestivalSuccess' });
            handleOpen()
        }
    }
    // ------------------for get festival--------------
    const onInputChange2 = (e) => {
        setDate({ ...date, [e.target.name]: e.target.value });
        setShow(false)
    };
    const onSubmit = () => {

        // mixpanel.track('getMonthYearFestivalClicked', { buttonName: 'getMonthYearFestivalClicked' });
        // dispatch(getFestival(date))
        // mixpanel.track('getMonthYearFestivalSuccess', { buttonName: 'getMonthYearFestivalSuccess' });
        // setShow(true)
    }
    //------------- get festival by category-----------
    const onSubmitCategory = (e, value) => {
        e.preventDefault()
        // mixpanel.track('getCategoryCalendarClicked', { buttonName: 'getCategoryCalendarClicked' });
        var data = {
            year: categoryYear,
            category: value.value
        }
        setValuen(value)
        // dispatch(categoryFestival(data))
        // mixpanel.track('getCategoryCalendarSuccess', { buttonName: 'getCategoryCalendarSuccess' });

        setShowCategory(true)
        window.scrollTo(0, 1600);
        // setFilterYear("2022")

    }
    const submitCategoryYear = (e, value) => {

        // mixpanel.track('getYearWiseCategoryCalendarClicked', { buttonName: 'getYearWiseCategoryCalendarClicked' });
        e.preventDefault()
        var data = {
            year: categoryYear,
            category: valuen.value
        }
        // dispatch(categoryFestival(data))
        // mixpanel.track('getYeaCategoryCalendarSuccess', { buttonName: 'getYeaCategoryCalendarSuccess' });
        setCategoryYear("2024")

    }
    const FestivalBlog = (festival) => {
        const formData = new FormData();
        formData.append('title', festival)
        // dispatch(getFestivalBlog(festival))


    }

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    var dateValue;
    var dateVariable = moment(date1).format('MMMM');
    if (dateVariable === "January") {
        dateValue = t('January')
    }
    else if (dateVariable === "February") {
        dateValue = t('February')
    }
    else if (dateVariable === "March") {
        dateValue = t('March')
    }
    else if (dateVariable === "April") {
        dateValue = t('April')
    }
    else if (dateVariable === "May") {
        dateValue = t('May')
    }
    else if (dateVariable === "June") {
        dateValue = t('June')
    }
    else if (dateVariable === "July") {
        dateValue = t('July')
    }
    else if (dateVariable === "August") {
        dateValue = t('August')
    }
    else if (dateVariable === "September") {
        dateValue = t('September')
    }
    else if (dateVariable === "October") {
        dateValue = t('October')
    }
    else if (dateVariable === "November") {
        dateValue = t('November')
    }
    else if (dateVariable === "December") {
        dateValue = t('December')
    }
    var dateValueSelected;
    var dateSelected = moment(date).subtract(1, "month").format('MMMM');
    if (dateSelected === "January") {
        dateValueSelected = t('January')
    }
    else if (dateSelected === "February") {
        dateValueSelected = t('February')
    }
    else if (dateSelected === "March") {
        dateValueSelected = t('March')
    }
    else if (dateSelected === "April") {
        dateValueSelected = t('April')
    }
    else if (dateSelected === "May") {
        dateValueSelected = t('May')
    }
    else if (dateSelected === "June") {
        dateValueSelected = t('June')
    }
    else if (dateSelected === "July") {
        dateValueSelected = t('July')
    }
    else if (dateSelected === "August") {
        dateValueSelected = t('August')
    }
    else if (dateSelected === "September") {
        dateValueSelected = t('September')
    }
    else if (dateSelected === "October") {
        dateValueSelected = t('October')
    }
    else if (dateSelected === "November") {
        dateValueSelected = t('November')
    }
    else if (dateSelected === "December") {
        dateValueSelected = t('December')
    }
    const getFestivalBlogId = (name) => {
        mixpanel.track('getFestivalBlogsClicked', { buttonName: 'getFestivalBlogsClicked' });

        // ------------------------------API CALL---------------------------
        let LocalStore = localStorage.getItem('lng');
        var url1;
        if (LocalStore === "hi") {

            url1 = `/article/get_blog_by_festivalName?festivalName=${name}&festivalStatus=false&articleType=PUBLISH&status=true`
        }
        else {
            url1 = `/article/get_blog_by_festivalName?festivalName=${name}&festivalStatus=true&articleType=PUBLISH&status=true`
        }
        let OPTIONS = {
            url: url1,
            method: "get",

            headers: {
                "content-type": "application/json",
            },
        };
        axios(OPTIONS)
            .then((res) => {
                // 

                if (res.data.data[0]?.articleId) {
                    mixpanel.track('getFestivalBlogsSuccess');

                    const win = window.open(`/Blog/${res.data.data[0]?.articleId}`, '_blank');
                    if (win != null) {
                        win.focus();
                    }
                } else {
                    mixpanel.track('getFestivalBlogsFailed');
                    toast.error(t('No Blog Found'))
                }


            })
        // ---------------------------------API CALL END---------------------------
        // dispatch(getFestivalSingleBlogData(name))

    }
     return (
        <div>
            <div className="for_background" >
                <div className="container-fluid find_now">
                    <div className="container">
                        <div className='row'>
                            {/* <Common festival='a' show='a' /> */}
                            <h1 className="heading-desc">FESTIVAL</h1>
                          <span>
                                {/* <p className='for_paragraph textAlignment resText'>
                                    <ReactReadMoreReadLess
                                        charLimit={200}
                                        readMoreText={t('Read more ▼')}
                                        readLessText={t('Read less ▼')}
                                    >
                                        {t('FestivalDescription')}
                                    </ReactReadMoreReadLess>
                                </p> */}
                                <p className='for_paragraph textAlignment fullText'>
                                Festivals are very important in Sanatan Samaj.Festivals fill new energy in our life with joy and gaiety. Irrespective of the period, the importance of ancient or modern festivals is the same. It gives us a break from the routine of everyday life,inspires us to spend some time with our friends and family.Sanatan Samaj believes that no moment should be wasted and social reform and religious work should continue parallel to our daily work. For the same joy and happiness in Sanatan society,festivals have been made in such a way that every person spends some time in charity, religion and social work, so that he gets peace of mind which is the ultimate happiness. It has been saidin the scriptures that Karma, Artha, Dharma,Moksha is the goal of a human being. There is no progress of man without salvation, that's why our festivals are made in such a way that we do religious work and get this supreme happiness.The health of body, mind and intellect has also been taken care of in the festivals of Sanatan Samaj. For this, many types of fasts such as Ekadashi, Pradosh, Navratri etc., so that our daily routine also continues and the health of body and mind is also maintained.In Sanatan Samaj, taking the name of God or remembering Him always is paramount. Sanatan Samaj believes that God is in every element, Hehas no shape, He is above all properties and characteristics. That's why we should celebrate festivals in one way or the other, so that there will  always be ultimate joy in our life. Sanatan Jyoti endeavors that you should know and take advantage of all the festivals of Sanatan Samaj..
                                </p>

                            </span>

                        </div>

                        {/* -------------------Festival Calender box----------- */}
                        {/* ----------------------------------Search festival ------------------------------------- */}
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                                <div className="row">
                                    <h5 className='searchFestival'> <b>{t('Search Festival')} :</b> </h5>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                        <FestivalSearch parentCallback={callbackFunction} />

                                        {LocalStore === "hi" ? <h6 className='HindiSearchNotAva mt-1'>{t('HindiSearchNotAva')}</h6> : " "}
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 ">
                                        <select name="year" id="year" className="dropdown-toggle calSearchYear" onChange={(e) => setYear(e.target.value)}>
                                            <option value="">{t('Year')}</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
                                        <button type="" onClick={(e) => onSubmit1(e)} className="btn calSearchButton">{t('SubmitFes')}</button>
                                    </div>
                                    <div className="col-sm-0 col-md-0 col-lg-0 col-xl-0"></div>
                                </div>
                            </div>
                            {/* -----------------------------------Calender--------------------------------------- */}
                        </div>

                        <div className="container calenderFestival  ">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4">
                                    <center>
                                        {show ?
                                            <h2 className=''><b className=''> {dateValueSelected} {moment(date).format('YYYY')}</b></h2>

                                            :
                                            <h2 className=''><b className=''> {dateValue} {moment(date1).format('YYYY')}</b></h2>
                                        }
                                    </center>
                                </div>
                            </div>
                            <div className="row calenderBox ">
                                 {/* -------------------------------------Calender month year Selector---------------------- */}
                                <center>
                                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-4 calHeader">
                                        <div className="row mt-4">
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                                                <select name="month" id="month" className="dropdown-toggle calSearch11" onChange={onInputChange2}>
                                                    {/* <option value="">{moment(startDate).format('M')}</option> */}
                                                    <option value="">{t('Month')}</option>
                                                    <option value="01">{t('January')}</option>
                                                    <option value="02">{t('February')}</option>
                                                    <option value="03">{t('March')}</option>
                                                    <option value="04">{t('April')}</option>
                                                    <option value="05">{t('May')}</option>
                                                    <option value="06">{t('June')}</option>
                                                    <option value="07">{t('July')}</option>
                                                    <option value="08">{t('August')}</option>
                                                    <option value="09">{t('September')}</option>
                                                    <option value="10">{t('October')}</option>
                                                    <option value="11">{t('November')}</option>
                                                    <option value="12">{t('December')}</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                                                <select name="year" id="year" className="dropdown-toggle calSearchYearSelect " onChange={onInputChange2}>
                                                    <option value="">{t('Year')}</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
                                                <button type="" onClick={(e) => onSubmit(e)} className="btn calSearched">{t('SubmitFes')}</button>
                                            </div>
                                        </div>
                                    </div>
                                </center>

                            </div>
                             {/* -------------------------------------MONTHLY CALENDER DATA--------------------------------                            */}
                            <div className="container monthlyCalanderData  homeFestivalBig">
                                <div className='row categorySection mt-5 mx-2'>
                                    <div className='' style={{ display: "flex", width: "100%" }}>
                                        <div className='col-md-4'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className='festival_date_heading'><h5><b> {t('date')}</b></h5></td>
                                                        <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {fes.data !== null}
                                                    {fes && fes?.slice(0, fes?.length / 3)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                           <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>
                                                        </tr>
                                                    ))} */}
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className='col-md-4'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className='festival_date_heading'><h5><b> {t('date')}</b></h5></td>
                                                        <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {fes.data !== null}
                                                    {fes && fes?.slice(fes?.length / 3, fes?.length / 3 * 2)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>
                                                        </tr>
                                                    ))} */}
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className='col-md-4'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className='festival_date_heading'><h5><b>{t('date')}</b></h5></td>
                                                        <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {fes.data !== null}
                                                    {fes && fes?.slice(fes?.length / 3 * 2)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)} >{festivals.festival}</td>
                                                        </tr>
                                                    ))} */}
                                                </tbody>

                                            </table>
                                        </div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                            </div>
                            <div className="row homeFestivalSmall mt-5" >
                                <center>
                                    <div className="scrollableFestivalList">
                                        {/* {fes?.map((festivals) => {
                                            return (
                                                <div className="row mx-2">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 ">{moment(festivals.date).format('DD-MM-YYYY')}</div>
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">{festivals.festival}</div>
                                                    <hr />
                                                </div>
                                            )
                                        })} */}
                                    </div>
                                </center>
                            </div>
                            <br /><br />
                        </div>
                        <br /><br /><br />
                    </div>
                </div>

                <div className='backgroundMarginHome'></div>

                {/* ----------------------FESTIVALS BY CATEGORY------------------------------------------------                */}
                <div className="container-fluid find_now">

                    <div className="container">
                        <div className="row FestivalCardsCrousel">
                            <div className='row'>
                                <center>
                                    {/* <Common fesByCategory='a' show='a' /> */}
                                </center>

                            </div>
                             <div className="swiper-container">
                                    <Swiper
                                        className="custom-swiper"
                                        modules={[Navigation, Pagination, Autoplay]}
                                        // navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 3000 }} 
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 25,
                                        },
                                        }}
                                    >
                                {festivalByCategory.map((item) => {
                                    return (
                                        <SwiperSlide>
                                        <div  onClick={e => onSubmitCategory(e, item)}>
                                            <div className='carousel-card'>
                                                <img
                                                    src={item.image}
                                                    alt="category"
                                                    className="responsive-image"
                                                ></img>
                                                <div className="overlay-text">
                                                    <h5><b>{item.label}</b></h5>
                                                    <h5><b>{t('cardCalendar')}</b></h5>


                                                </div>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    )
                                })}
                            {/* </Carousel> */}
                            </Swiper>
                            </div>
                        </div>
                        <div className="">
                            <div className="festivalsection">


                                <div className='row'>
                                    {/* <Common fesByCategory='a' show='a' /> */}
                                </div>

                                {/* ------------------------------------------CATEGORY CARDS---------------------------------------- */}
                                {festivalByCategory.data !== null}

                                <div className='row'>
                                    {festivalByCategory && festivalByCategory.map((item) => {
                                        return (
                                            <div className='col-md-3' onClick={e => onSubmitCategory(e, item)}>
                                                <div className="image-container zoom fesCardImage cursor-pointer">
                                                    <img
                                                        src={item.image}
                                                        alt="category"
                                                        className="responsive-image"
                                                    ></img>
                                                    <div className="overlay-text">
                                                        <h5><b>{item.label}</b></h5>
                                                        <h5><b>{t('cardCalendar')}</b></h5>


                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            <br /><br />
                            {/* -----------------------------------CATEGORY WISE CALENDER----------------------------------------------- */}
                            {showCategory ?
                                <div className="container-fluid fesCategoryBox ">

                                    <div className="row">
                                        <div className='col-sm-0 col-md-0 col-lg-2 col-xl-2'></div>
                                        <div className='col-sm-0 col-md-0 col-lg-2 col-xl-2 '>
                                            <div className='ganeshFes'>
                                                <img className='img_for_lefts1' src={valuen.imageHeading} alt='hii' />
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                                            <h1 className='text-center h1_color categoryTextHead '><b className=''>{valuen.label} {t('cardCalendar')}</b> </h1>
                                        </div>
                                        <div className='col-sm-0 col-md-0 col-lg-2 col-xl-2'>
                                            <div className='ganeshFes'>
                                                <img className='img_for_rights1' src={valuen.imageHeading} alt='hii' />
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-2'>
                                            <div className="row mt-5">
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <select name="year" id="year" className="dropdown-toggle calSearchYear" onChange={(e) => setCategoryYear(e.target.value)}>

                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option selected value="2024">2024</option>
                                                    </select>

                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <button type="button" onClick={(e) => submitCategoryYear(e)} className="btn  calSearchButton ">{t('SubmitFes')}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container calenderContent">
                                        {/* ----------------------------------CATEGORY CALENDER DATA----------------------------- */}
                                        <div className="container monthlyCalanderData homeFestivalBig">
                                            <div className='row categorySection1 mt-5'>
                                                <div className='text-center' style={{ display: "flex", width: "100%" }}>
                                                    <div className='col-sm-4'>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <td className='festival_date_heading'><h5><b>{t('date')}</b></h5></td>
                                                                    <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {festivalCategory.data !== null}
                                                                {festivalCategory && festivalCategory.slice(0, festivalCategory?.length / 3).map((festivals, index) => (
                                                                    <tr>
                                                                        <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                                        <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                    <div className='col-sm-4'>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <td className='festival_date_heading'><h5><b>{t('date')}</b></h5></td>
                                                                    <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {festivalCategory.data !== null}
                                                                {festivalCategory && festivalCategory.slice(festivalCategory?.length / 3, festivalCategory?.length / 3 * 2).map((festivals, index) => (
                                                                    <tr>
                                                                        <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                                        <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                    <div className='col-sm-4'>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <td className='festival_date_heading'><h5><b>{t('date')}</b></h5></td>
                                                                    <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {festivalCategory.data !== null}
                                                                {festivalCategory && festivalCategory.slice(festivalCategory?.length / 3 * 2).map((festivals, index) => (
                                                                    <tr>
                                                                        <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                                        <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>

                                                                    </tr>
                                                                ))}
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                    <br /><br /><br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row homeFestivalSmall mt-5" >
                                            <center>
                                                <div className="scrollableFestivalList">
                                                    {festivalCategory?.map((festivals) => {
                                                        return (
                                                            <div className="row mx-2">
                                                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 ">{moment(festivals.date).format('DD-MM-YYYY')}</div>
                                                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">{festivals.festival}</div>
                                                                <hr />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                    <br />
                                </div> : null}
                            <br /><br />
                        </div>
                        <div />
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------MODAL FOR FESTIVAL SEARCH---------------------            */}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    <Box className='FesSearchModal' sx={style_modal}>
                        <i className="fa-solid fa-x xIcon xButton" onClick={handleClose}></i>
                        <Typography id="modal-modal-title" variant="h6" component="h1">
                            <center><h2 className='searchFesHead'>~{t('Festival')}~</h2></center>
                        </Typography>
                        <Typography className='typoBody' id="modal-modal-title" variant="h6" component="h5">
                            <div className='row aaa'>
                                {/* {data && data.length ? */}
                                    <>
                                        {/* {data.map((festivals) => {
                                            return (
                                                <div className='col-md-12'>
                                                    <center>
                                                        <tr>
                                                            <td className='searchModDate'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='searchModFestival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>
                                                        </tr>
                                                    </center>
                                                </div>
                                            )
                                        })} */}
                                    </>
                                    {/* : <h4>{t('No Festival')}</h4>} */}
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div >
    )
}

export default Festival;

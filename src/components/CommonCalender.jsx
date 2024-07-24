"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
// import { getFestival } from "../../Redux/Action/FestivalAction"

import moment from 'moment';
import axios from "axios";

import { Link } from 'react-router-dom'
// import mixpanel from 'mixpanel-browser';

function Festival(props) {
    const { t } = useTranslation();
    // const dispatch = useDispatch()
    // const festivals = useSelector((state) => state.FestivalReducer?.getFest);
    // const fes = Array.from(festivals);
    const [date, setDate] = useState(new Date());
    // ------------------for get festival--------------
    let momentMonthName = moment().format("MMMM");
    let momentYearName = moment().format("yy");
    useEffect(() => {
        var mon = moment(date).format('M')
        var yea = moment(date).format('yy')
        let dat = { month: mon, year: yea };
        // dispatch(getFestival(dat))
    }, [])
    // ---------------------Date Function-----------------------------------------------
    const monthNameTranslate = (dateVariable) => {


        if (dateVariable === "January") {
            return dateVariable = t('January')
        }
        else if (dateVariable === "February") {
            return dateVariable = t('February')
        }
        else if (dateVariable === "March") {
            return dateVariable = t('March')
        }
        else if (dateVariable === "April") {
            return dateVariable = t('April')
        }
        else if (dateVariable === "May") {
            return dateVariable = t('May')
        }
        else if (dateVariable === "June") {
            return dateVariable = t('June')
        }
        else if (dateVariable === "July") {
            return dateVariable = t('July')
        }
        else if (dateVariable === "August") {
            return dateVariable = t('August')
        }
        else if (dateVariable === "September") {
            return dateVariable = t('September')
        }
        else if (dateVariable === "October") {
            return dateVariable = t('October')
        }
        else if (dateVariable === "November") {
            return dateVariable = t('November')
        }
        else if (dateVariable === "December") {
            return dateVariable = t('December')
        }
    };
    // ------------------------Festival By category-------------------- 
    const getFestivalBlogId = (name) => {
        mixpanel.track("getFestivalBlogClicked", { buttonName: "getFestivalBlogClicked" });
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
                mixpanel.track("getFestivalBlogSuccess", { buttonName: "getFestivalBlogSuccess" });
                if (res.data.data[0]?.articleId) {
                    const win = window.open(`/Blog/${res.data.data[0]?.articleId}`, '_blank');
                    if (win != null) {
                        win.focus();
                    }
                }


            })
            .then((error) => {
                mixpanel.track("getFestivalBlogFailed", { buttonName: "getFestivalBlogFailed" });
            })
        // ---------------------------------API CALL END---------------------------
        // dispatch(getFestivalSingleBlogData(name))

    }
    const handleMixPanelClick = (linkName) => {
        mixpanel.track(linkName, { buttonName: linkName });

    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div class="">
                            <div class="">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <center>
                                            <h2> <b>{monthNameTranslate(momentMonthName)} {momentYearName}</b></h2>
                                        </center>

                                    </div>
                                </div>
                                <div className="container   ">
                                    <div className='row homeFestivalBig categorySection mt-5 mx-2'>

                                        <div className='' style={{ display: "flex", width: "100%" }}>
                                            <div className='col-md-4'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className='festival_date_heading'><h5><b> {t('date')}</b></h5></td>
                                                            <td className='festival_festival_heading'><h5><b>{t('Festival')}</b></h5></td>
                                                        </tr>
                                                    </thead>
                                                    {/* {fes.data !== null}
                                                    {fes && fes?.slice(0, fes?.length / 3)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>

                                                            <td className='festival_for_category_margin_festival festivalNameHoverHome' onClick={() => getFestivalBlogId(festivals.festival)} >{festivals.festival}</td>
                                                        </tr>
                                                    ))} */}
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
                                                    {/* {fes.data !== null}
                                                    {fes && fes?.slice(fes?.length / 3, fes?.length / 3 * 2)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHoverHome' onClick={() => getFestivalBlogId(festivals.festival)} >{festivals.festival}</td>
                                                        </tr>
                                                    ))} */}
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
                                                    {/* {fes.data !== null}
                                                    {fes && fes?.slice(fes?.length / 3 * 2)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHoverHome' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td>

                                                        </tr>
                                                    ))} */}
                                                </table>
                                            </div>
                                            <br /><br /><br />
                                        </div>
                                    </div>
                                    <div className="row homeFestivalSmall" >
                                        <div className="card p-3 calenderFestival">
                                            <div className="card-body">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-12">
                                        <center >
                                            {/* <Link href="/Festival" onClick={() => handleMixPanelClick("moreDetailsOfFestivalsClicked")}> */}
                                                <button type="submit" className="btn control_for_btns text-white "> {t('More Details')}</button>
                                            {/* </Link> */}
                                        </center>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Festival;

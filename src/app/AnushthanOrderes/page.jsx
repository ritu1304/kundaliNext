"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import mixpanel from 'mixpanel-browser';
const AnushthanOrders = () => {
    // useEffect(() => {
    //     mixpanel.track('scheduledAnushthanPageViewed');
    // }, []);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [anushthanData, setAnushthanData] = useState([])
    const userId = localStorage.getItem("id")
    useEffect(() => {
        let OPTIONS = {
            url: `https://apis.sanatanjyoti.com/api/getScheduledAnushthanByUserId?userId=${userId}`,
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        };
        axios(OPTIONS)
            .then((res) => {
                setAnushthanData(res?.data)
            })
    }, [])
    const truncateTitle = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    return (
        <div>
            <div className="container-fluid find_now ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mt-3 mb-3">
                            <button class="btn anushthanSubmitButton" onClick={() => navigate('/AnusthanFront')}>
                                {t('Back')}
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {anushthanData.data?.map((anushthanData, index) => {
                            return (<>
                                <div className="col-sm-12 col-md-4">
                                    <div key={index} className="row">
                                        <div className="container" style={{marginBottom:"12px"}}>
                                            <div class="card newCard" style={{ margin: '5px' }}>
                                                <div class="card-body">
                                                    <center>
                                                        <img src={anushthanData.imageUrl} alt="homeIcon" width="100%" />
                                                        <h4 className='mt-3'><b>{anushthanData.anushthanName}</b></h4>
                                                    </center>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <b>{t('Price')}:</b> &#x20B9;  {anushthanData.price}/-
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <b>{t('Pandit Ji')}:</b>  {anushthanData.allocatedPanditJi}
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <b>{t('Start Date')}:</b>   {anushthanData.startDate}
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <b>{t('End Date')}:</b>    {anushthanData.endDate}
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <b>{t('Timing')}:</b>    {anushthanData.preferredTiming}
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 ">
                                                            <b>{t('Link')} :</b>  <a href={anushthanData.anushthanMeetingLink} target="_blank" rel="noreferrer"><b>
                                                                {t('Join')}
                                                            </b></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnushthanOrders
"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import mixpanel from 'mixpanel-browser';
import sanatanLogo from '../../assets/Headerlogo35kb.png'

const PanditJiMeetings = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [meetingData, setMeetingData] = useState([])
    const userId = localStorage.getItem("id")
    // useEffect(() => {
    //     mixpanel.track('panditJiMeetingsLinksPageViewed');
    // }, []);
    useEffect(() => {
        let OPTIONS = {
            url: `https://apis.sanatanjyoti.com/api/get-MeetingLinks_ByUser?page=0&size=10&userId=${userId}`,
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        };
        axios(OPTIONS)
            .then((res) => {
                setMeetingData(res?.data)

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
                            <button class="btn anushthanSubmitButton" onClick={() => navigate(-1)}>
                                {t('Back')}
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {meetingData.data?.content?.map((meetingData, index) => {
                            return (<>
                                <div className="col-sm-12 col-md-4">
                                    <div key={index} className="row">
                                        <div className="container">
                                            <div class="card newCard" style={{ margin: '5px' }}>
                                                <div class="card-body">
                                                    <center>
                                                        <img src={sanatanLogo} alt="homeIcon" width="20%" />
                                                        <h4><b>{meetingData.anushthanName}</b></h4>
                                                    </center>



                                                    <div className="row mt-2">
                                                        <div className="col-sm-12 col-md-12 ">
                                                            <b>Yajmaan:</b> {meetingData.yajMaanName}


                                                        </div>


                                                    </div>
                                                    <div className="row mt-2" >
                                                        <div className="col-sm-12 col-md-12 ">
                                                            <b>Created Date : </b>     {meetingData.createdDate}


                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">

                                                        <div className="col-sm-12 col-md-12 ">
                                                            <b>Scheduled Date : </b>     {meetingData.scheduledDate}
                                                        </div>

                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-12 col-md-12 ">
                                                            <b>Timing:</b>    {meetingData.preferredTiming}
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-12 col-md-12 ">
                                                            <b> Link:</b>  <a href={meetingData.meetingLink} target="_blank" rel="noreferrer"><b>
                                                                Join
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

export default PanditJiMeetings
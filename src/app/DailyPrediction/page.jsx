"use client";
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import KundliNavbar from '../../components/KundaliNavBar';

const DailyPrediction = () => {
    const [predictionDaily, setPredictionDaily] = useState(null);
    const [formData, setFormData] = useState({
        name: JSON.parse(sessionStorage.getItem('Form'))?.name || '',
        day: moment().format('DD'),
        month: moment().format('MM'),
        year: moment().format('YYYY'),
        hour: moment().format('HH'),
        min: moment().format('mm'),
        place: '',
        lat: '',
        lon: '',
        tzone: '',
        gender: JSON.parse(sessionStorage.getItem('Gender')) || 'female',
        mobileNo: ''
    });

    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    const LocalStore = localStorage.getItem('lng');

    useEffect(() => {
        const fetchPrediction = async () => {
            const OPTIONS = {
                method: "POST",
                body: JSON.stringify({
                    day: formData.day,
                    month: formData.month,
                    year: formData.year,
                    hour: formData.hour,
                    min: formData.min,
                    place: formData.place,
                    lat: 11,
                    lon: 77,
                    tzone: formData.tzone,
                    maxRows: "6",
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore
                },
            };

            try {
                const response = await fetch('/daily_nakshatra_prediction', OPTIONS);
                const data = await response.json();
                setPredictionDaily(data);
            } catch (error) {
                console.error("Error fetching daily prediction:", error);
            }
        };

        fetchPrediction();
    }, [formData]);

    return (
        <div className="for_background" style={{ backgroundImage: `url("imgs/Background/back.png")` }}>
            <div className='container-fluid find_now'>
                <div className="container">
                    <KundliNavbar />
                    <br />
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card-header DailyheaderBg">
                            <center>
                                <h4 className=''>Daily Prediction</h4>
                            </center>
                        </div>
                        <div className="card-body dailyPredictionCard">
                            <div className='row basic '>
                                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 '>
                                    <div className="card shadow dailyPre">
                                        <div className="card-body box_mamage_margins">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <span className="DoshaHeading text-center"><h4><b>predictionDate:</b> </h4> </span>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                    <span className="DoshaHeading text-center"><h4><b className="predDate"> {predictionDaily ? predictionDaily.prediction_date : ""}</b></h4> </span>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 col-xl-1"></div>
                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                    <center>
                                                        <span className="dotPrediction">
                                                            <div className="percentageTextDaily">
                                                                <center>
                                                                    {predictionDaily ? predictionDaily.birth_moon_sign : ""}
                                                                </center>
                                                            </div>
                                                        </span>
                                                        <h5 className="sign1 mt-2"><b>birth moonSign</b></h5>
                                                    </center>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                    <center>
                                                        <span className="dotPrediction">
                                                            <div className="percentageTextDaily">
                                                                <center>
                                                                    {predictionDaily ? predictionDaily.birth_moon_nakshatra : ""}
                                                                </center>
                                                            </div>
                                                        </span>
                                                        <h5 className="sign2 mt-2"><b>birth Nakshatra</b></h5>
                                                    </center>
                                                </div>
                                                <div className="col-sm-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-sm-12'>
                                            <div className="card shadow dailyPre">
                                                <div className="card-body box_mamage_margins">
                                                    <span className="DoshaHeading text-center"><h4><b>personalLife</b></h4> </span>
                                                    <div className="underlinePre"></div>
                                                    <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.personal_life : ""}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-sm-12'>
                                            <div className="card shadow dailyPre">
                                                <div className="card-body box_mamage_margins">
                                                    <span className="DoshaHeading text-center"><h4><b>travel</b></h4> </span>
                                                    <div className="underlinePre"></div>
                                                    <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.travel : ""}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2'>
                                    <div className="card shadow dailyPre">
                                        <div className="card-body box_mamage_margins">
                                            <span className="DoshaHeading text-center"><h4><b>profession</b></h4> </span>
                                            <div className="underlinePre"></div>
                                            <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.profession : ""}</h5>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className='col-sm-12'>
                                            <div className="card shadow dailyPre">
                                                <div className="card-body box_mamage_margins">
                                                    <span className="DoshaHeading text-center"><h4><b>luck</b></h4> </span>
                                                    <div className="underlinePre"></div>
                                                    <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.luck : ""}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col-sm-12 mt-3'>
                                            <div className="card shadow dailyPre">
                                                <div className="card-body box_mamage_margins">
                                                    <span className="DoshaHeading text-center"><h4><b>emotions</b></h4> </span>
                                                    <div className="underlinePre"></div>
                                                    <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.emotions : ""}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            </div>
        </div>
    );
};

export default DailyPrediction;

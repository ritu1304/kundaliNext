"use client"
import React from 'react'
import { useTranslation } from "react-i18next";

import { useEffect, useState} from 'react';
import KundliNavbar from '../../../components/KundaliNavBar'

const DailyPrediction = (props) => {
    const { t } = useTranslation();
    const [predictionDaily, setpredictionDaily] = useState([])
    

    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID; 
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY; 

    const fetchDailyPrediction = async () => {
      const kundliForm = JSON.parse(sessionStorage.getItem('Form'));
      const OPTIONS = {
        method: "POST",
        body: JSON.stringify({
          day: kundliForm?.day || "14",
          month: kundliForm?.month || "8",
          year: kundliForm?.year || "2023",
          hour: kundliForm?.hour || "13",
          min: kundliForm?.min || "45",
          place: kundliForm?.place || "Kota, Rajasthan, India",
          lat: kundliForm?.lat || 25.2138156,
          lon: kundliForm?.lon || 75.8647527,
          tzone: kundliForm?.tzone || 5.5,
            maxRows: "6",
        }),
        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        },
    };

      try {
          const response = await fetch(`https://json.astrologyapi.com/v1/daily_nakshatra_prediction`, OPTIONS);
          const data = await response.json();
          setpredictionDaily(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      fetchDailyPrediction();
  }, []);
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div style={{marginTop: "150px"}}>

            <div div className="for_background" style={{
                backgroundImage: `url("imgs/Background/back.png`
            }}>
                <div className='container-fluid find_now '>
                    <div className="container" >
                        <KundliNavbar />
                        <br />
                    </div>
                    <div className="container">
                        <div className="card">
                            <div className="card-header DailyheaderBg">
                                <center>
                                    <h4 className=''>{t('Daily Prediction')}</h4>
                                </center>
                            </div>
                            <div className="card-body dailyPredictionCard">
                                <div className='row basic '>

                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2 '>
                                        <div className="card shadow dailyPre" >
                                            <div className="card-body box_mamage_margins">
                                                {/* <span className="DoshaHeading text-center"><h4><b>{t('predictionDate')} :</b> <b className="predDate"> {predictionDaily ? predictionDaily.prediction_date : ""}</b></h4> </span> */}
                                                <div className="row">
                                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                        <span className="DoshaHeading text-center"><h4><b>{t('predictionDate')} :</b> </h4> </span>
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
                                                            <h5 className="sign1 mt-2"><b>{t('birth')} {t('moonSign')}</b></h5>
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
                                                            <h5 className="sign2 mt-2"><b>{t('birth')} {t('Nakshatra')}</b></h5>
                                                        </center>

                                                    </div>
                                                    <div className="col-sm-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3 ">
                                            <div className='col-sm-12'>
                                                <div className="card shadow dailyPre" >
                                                    <div className="card-body box_mamage_margins">
                                                        <span className="DoshaHeading text-center"><h4><b>{t('personalLife')}</b></h4> </span>
                                                        <div className="underlinePre"></div>
                                                        <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.personal_life : ""}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3 ">
                                            <div className='col-sm-12 '>
                                                <div className="card shadow dailyPre" >
                                                    <div className="card-body box_mamage_margins">
                                                        <span className="DoshaHeading text-center"><h4><b>{t('travel')}</b></h4> </span>
                                                        <div className="underlinePre"></div>
                                                        <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.travel : ""}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2  '>
                                        <div className="card shadow dailyPre" >
                                            <div className="card-body box_mamage_margins">
                                                <span className="DoshaHeading text-center"><h4><b>{t('profession')}</b></h4> </span>
                                                <div className="underlinePre"></div>
                                                <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.profession : ""}</h5>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className='col-sm-12 '>
                                                <div className="card shadow dailyPre" >
                                                    <div className="card-body box_mamage_margins">
                                                        <span className="DoshaHeading text-center"><h4><b> {t('luck')}</b></h4> </span>
                                                        <div className="underlinePre"></div>
                                                        <h5>{predictionDaily && predictionDaily.prediction ? predictionDaily.prediction.luck : ""}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row  ">
                                            <div className='col-sm-12 mt-3'>
                                                <div className="card shadow dailyPre" >
                                                    <div className="card-body box_mamage_margins">
                                                        <span className="DoshaHeading text-center"><h4><b> {t('emotions')}</b></h4> </span>
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
        </div>
    )
}

export default DailyPrediction;



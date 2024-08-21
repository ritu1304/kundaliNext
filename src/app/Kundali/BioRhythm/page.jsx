"use client"
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import KundliNavbar from '../../../components/KundaliNavBar'

const BioRhythm = () => {
    const { t } = useTranslation();
    const [biorhythm, setBiorhythm] = useState(null);
    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;

    const fetchBioRhythm = async () => {
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
            const response = await fetch(`https://json.astrologyapi.com/v1/biorhythm`, OPTIONS);
            const data = await response.json();
            setBiorhythm(data);
        } catch (error) {
            console.error('Error fetching biorhythm data:', error);
        }
    };

    useEffect(() => {
        fetchBioRhythm();
    }, []);

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
      <div style={{marginTop:"150px"}}>
          <div className='container-fluid find_now ' >
              <div className="container" >
                  <KundliNavbar />
                  <br />
                  <div className="row">
                      <div className="col-sm-12 mb-5">
                          <div className="card">
                              <div className="card-header DailyheaderBg">
                                  <center>
                                      <h4 className=''>{t('Biorhythm')}</h4>
                                  </center>
                              </div>
                              <div className="card-body dailyPredictionCard">
                                  <p className='bioPara '>{t('biorhythmDesc')}</p>
                                  <div className="row mt-2 kDoshaText ">
                                      <center>
                                          <span className="DoshaHeading"><h3>{t('biorhythmStatus')}</h3> </span>
                                      </center>
                                  </div>
                                  <div className="row  mt-2">
                                      <center></center>
                                      <div className="col sm-3">
                                          <center>
                                              <span className="dotBioRhythm">
                                                  <div className="percentageText">
                                                      <center>
                                                          {biorhythm && biorhythm.physical ? biorhythm.physical.percent : ""}
                                                      </center>
                                                  </div>
                                              </span>
                                              <h5 className="status mt-1">{t('physical')}</h5>
                                          </center>

                                          <center><h5 className=" ">(%)</h5></center>
                                      </div>
                                      <div className="col sm-3">
                                          <center>
                                              <span className="dotBioRhythm">
                                                  <div className="percentageText">
                                                      <center>
                                                          {biorhythm && biorhythm.emotional ? biorhythm.emotional.percent : ""}
                                                      </center>
                                                  </div>
                                              </span>
                                              <h5 className="status mt-1">{t('emotional')}</h5>
                                          </center>

                                          <center><h5 className=" ">(%)</h5></center>
                                      </div>
                                      <div className="col sm-3">
                                          <center>
                                              <span className="dotBioRhythm">
                                                  <div className="percentageText">
                                                      <center>
                                                          {biorhythm && biorhythm.intellectual ? biorhythm.intellectual.percent : ""}
                                                      </center>
                                                  </div>
                                              </span>
                                              <h5 className="status mt-1">{t('intellectual')}</h5>
                                          </center>



                                          <center><h5 className=" ">(%)</h5></center>
                                      </div>
                                      <div className="col sm-3">
                                          <center>
                                              <span className="dotBioRhythm">
                                                  <div className="percentageText">
                                                      <center>
                                                          {biorhythm && biorhythm.average ? biorhythm.average.percent : ""}
                                                      </center>
                                                  </div>
                                              </span>
                                              <h5 className="status mt-1">{t('average')}</h5>
                                          </center>

                                          <center><h5 className=" ">(%)</h5></center>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>
      </div>
  )
}


export default BioRhythm;
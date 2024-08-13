"use client"
import React, { useState, useEffect } from 'react';
import KundliNavBar from '../../../components/KundaliNavBar'

const LifeReports = () => {
    const [kundliForm, setKundliForm] = useState(null);
    const [houseReportData, setHouseReportData] = useState(null);
    const [rashiReportData, setRashiReportData] = useState(null);
    const [ascendantReportData, setAscendantReportData] = useState(null);
    const [selected, setSelected] = useState();
    const [selected1, setSelected1] = useState();
    
    const LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    const base_URL = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;

    useEffect(() => {
        const formData = JSON.parse(sessionStorage.getItem('Form'));
        if (formData) {
            setKundliForm(formData);
        }
    }, []);

    useEffect(() => {
        if (kundliForm) {
            const AscendantData = {
                method: "POST",
                body: JSON.stringify({
                    day: kundliForm.day,
                    month: kundliForm.month,
                    year: kundliForm.year,
                    hour: kundliForm.hour,
                    min: kundliForm.min,
                    place: kundliForm.place,
                    lat: kundliForm.lat,
                    lon: kundliForm.lon,
                    tzone: kundliForm.tzone,
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore,
                },
            };

            fetch(`${base_URL}/general_ascendant_report`, AscendantData)
                .then(response => response.json())
                .then(data => {
                    setAscendantReportData(data);
                    console.log("Ascendant data", ascendantReportData)
                })
                .catch(error => console.error('Error fetching ascendant report:', error));
        }
    }, [kundliForm]);

    useEffect(() => {
        if (kundliForm) {
            const OPT = {
                method: "POST",
                body: JSON.stringify({
                    day: kundliForm.day,
                    month: kundliForm.month,
                    year: kundliForm.year,
                    hour: kundliForm.hour,
                    min: kundliForm.min,
                    place: kundliForm.place,
                    lat: kundliForm.lat,
                    lon: kundliForm.lon,
                    tzone: kundliForm.tzone,
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore,
                },
            };

            fetch(`https://json.astrologyapi.com/v1/general_house_report/sun`, OPT)
                .then(response => response.json())
                .then(data => {
                    setHouseReportData(data);
                    console.log("House data", houseReportData)
                })
                .catch(error => console.error('Error fetching house report:', error));
        }
    }, [kundliForm]);

    useEffect(() => {
        if (kundliForm) {
            const OPT1 = {
                method: "POST",
                body: JSON.stringify({
                    day: kundliForm.day,
                    month: kundliForm.month,
                    year: kundliForm.year,
                    hour: kundliForm.hour,
                    min: kundliForm.min,
                    place: kundliForm.place,
                    lat: kundliForm.lat,
                    lon: kundliForm.lon,
                    tzone: kundliForm.tzone,
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore,
                },
            };

            fetch(`https://json.astrologyapi.com/v1/general_rashi_report/sun`, OPT1)
                .then(response => response.json())
                .then(data => {
                    setRashiReportData(data);
                })
                .catch(error => console.error('Error fetching rashi report:', error));
        }
    }, [kundliForm]);

    const onSubmit = () => {
        if (kundliForm) {
            const OPTIONS = {
                method: "POST",
                body: JSON.stringify({
                    day: kundliForm.day,
                    month: kundliForm.month,
                    year: kundliForm.year,
                    hour: kundliForm.hour,
                    min: kundliForm.min,
                    place: kundliForm.place,
                    lat: kundliForm.lat,
                    lon: kundliForm.lon,
                    tzone: kundliForm.tzone,
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore,
                },
            };

            fetch(`https://json.astrologyapi.com/v1/general_house_report/${selected}`, OPTIONS)
                .then(response => response.json())
                .then(data => {
                    setHouseReportData(data);
                })
                .catch(error => console.error('Error fetching house report:', error));
        }
    };

    const onSubmit1 = () => {
        if (kundliForm) {
            const OPTIONS1 = {
                method: "POST",
                body: JSON.stringify({
                    day: kundliForm.day,
                    month: kundliForm.month,
                    year: kundliForm.year,
                    hour: kundliForm.hour,
                    min: kundliForm.min,
                    place: kundliForm.place,
                    lat: kundliForm.lat,
                    lon: kundliForm.lon,
                    tzone: kundliForm.tzone,
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore,
                },
            };

            fetch(`https://json.astrologyapi.com/v1/general_rashi_report/${selected1}`, OPTIONS1)
                .then(response => response.json())
                .then(data => {
                    setRashiReportData(data);
                })
                .catch(error => console.error('Error fetching rashi report:', error));
        }
    };

    localStorage.setItem('planet_name', selected)
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <div className='container-fluid find_now wrapper1'>
                <div className="container" >
                    <KundliNavBar />
                    <br />
                </div>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-3"></div> */}
                        <div className="col-sm-12 mt-5">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                   
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <h4><b> {houseReportData ? houseReportData.planet : ""} houseReport </b></h4>
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-5">
                                            <form className="selectSign" action="" method="post">
                                                <select className="SignBar" id="planetId" onClick={(e) => onSubmit(e)} name="planet" onChange={(e) => setSelected(e.target.value)}>
                                                    <option >Select Sign</option>
                                                    <option value="sun" selected>House Report For Sun</option>
                                                    <option value="Moon">House Report For Moon</option>
                                                    <option value="Mars">House Report For Mars</option>
                                                    <option value="Mercury">House Report For Mercury</option>
                                                    <option value="Jupiter">House Report For Jupiter</option>
                                                    <option value="Venus">House Report For Venus</option>
                                                    <option value="Saturn">House Report For Saturn</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body kalsarpaCardBody">
                                    <div className="row basic kDoshaText">
                                        <div className='col-sm-12  '>
                                            <h5 className='commonFontSize ' dangerouslySetInnerHTML={{
                                                __html: houseReportData ? houseReportData.house_report : "",
                                            }}>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><br />

                </div>

            </div>
            {/* ------------------------Sign Report------------------ */}
            <div className='container-fluid find_now'>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mt-5">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                    
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <h4><b> {rashiReportData ? rashiReportData.planet : ""}  signReport</b></h4>
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-5">
                                            <form className="selectSign" action="" method="post">
                                                <select className="SignBar" id="planetId" onClick={(e) => onSubmit1(e)} name="planet" onChange={(e) => setSelected1(e.target.value)}>
                                                    <option >Select Sign</option>
                                                    <option value="sun" selected    >Sign Report For Sun</option>
                                                    <option value="Moon">Sign Report For Moon</option>
                                                    <option value="Mars">Sign Report For Mars</option>
                                                    <option value="Mercury">Sign Report For Mercury</option>
                                                    <option value="Jupiter">Sign Report For Jupiter</option>
                                                    <option value="Venus">Sign Report For Venus</option>
                                                    <option value="Saturn">Sign Report For Saturn</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body kalsarpaCardBody">
                                    <div className="row basic kDoshaText">
                                        <div className='col-sm-12  '>
                                            <h5 className=''>{rashiReportData ? rashiReportData.rashi_report : ""}</h5>
                                        </div>

                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>

                    <br /><br />

                </div>

            </div>
            {/* ---------------------------------Ascendant--------------------- */}
            <div className='container-fluid find_now'>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-3"></div> */}
                        <div className="col-sm-12 mt-5">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                    <center>
                                        <h4><b>your Ascendant {ascendantReportData && ascendantReportData.asc_report ? ascendantReportData.asc_report.ascendant : ""}</b></h4>
                                    </center>

                                </div>
                                <div class="card-body kalsarpaCardBody">
                                    <div className="row basic kDoshaText">
                                        <div className='col-sm-12  '>
                                            <h5 className=''>{ascendantReportData && ascendantReportData.asc_report ? ascendantReportData.asc_report.report : ""}</h5>
                                        </div>

                                    </div>




                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-1"></div> */}
                    </div>

                    <br /><br />

                </div>

            </div>
        </div>
    )
};

export default LifeReports;

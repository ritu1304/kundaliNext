"use client"
import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import moment from 'moment';
import { useTranslation } from "react-i18next";
import KundliNavbar from '../../../components/KundaliNavBar'
import LagnaChart from '@/components/Chart/LagnaChart.jsx';
import GocharChart from '@/components/Chart/GocharChart';

const Dasha = () => {
    const { t } = useTranslation();
    const [mahaPlanet, setMahaPlanet] = useState({});
    const [antarPlanet, setAntarPlanet] = useState({});
    const [pratyantarPlanet, setPratyantarPlanet] = useState({});
    const [mahaPlanetShow, setMahaPlanetShow] = useState({});
    const [antarPlanetShow, setAntarPlanetShow] = useState({});
    const [pratyantarPlanetShow, setPratyantarPlanetShow] = useState({});
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [currentYogini, setCurrentYogini] = useState([])
    const [currentChar,setCurrentChar]  = useState([])
    const [majorDasha, setmajorDasha] = useState([])
    const [majorYoginiDasha, setmajorYoginiDasha] = useState([])
    const [majorCharDasha, setmajorCharDasha] = useState([])
    const [antardasha, setantardasha] = useState([])
    const [pratyantarDasha, setpratyantarDasha] = useState([])
    const [sookshmaDasha, setsookshmaDasha] = useState([])
    
    
    let LocalStore = localStorage.getItem('lng');
    const kundliForm = JSON.parse(sessionStorage.getItem('Form'));
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID; 
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY; 
    var todayDate = new Date()
    const OPTIONS = {
        method: "POST",
        body: JSON.stringify({
            day: kundliForm?.day || "14",
            month: kundliForm?.month || "8",
            year: kundliForm?.year || "2023",
            hour: kundliForm?.hour || "13",
            min: kundliForm?.min || "45",
            place: kundliForm?.place || "Kota, Rajasthan, India",
            "lat": kundliForm?.lat || 25.2138156,
            "lon": kundliForm?.lon || 75.8647527,
            "tzone": kundliForm?.tzone || 5.5,
            "maxRows": "6",
            "planetColor": "#8E2E0F",
            "signColor": "#ff4500",
            "lineColor": "#F29726"
        }),
        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        },
    };
    const fetchCurrentYoginiDasha = async () => {
        

        try {
            const response = await fetch(`https://json.astrologyapi.com/v1/current_yogini_dasha`, OPTIONS);
            const data = await response.json();
            setCurrentYogini(data);
        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
    const fetchMajorYoginiDasha = async () => {
        

        try {
            const response = await fetch(`https://json.astrologyapi.com/v1/major_yogini_dasha`, OPTIONS);
            const data = await response.json();
            setmajorYoginiDasha(data);
        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
    const fetchCurrentCharDasha = async () => {
        

        try {
            const response = await fetch(`https://json.astrologyapi.com/v1/current_chardasha`, OPTIONS);
            const data = await response.json();
            setCurrentChar(data);
        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
    const fetchMajorCharDasha = async () => {
        

        try {
            const response = await fetch(` https://json.astrologyapi.com/v1/major_chardasha`, OPTIONS);
            const data = await response.json();
            setmajorCharDasha(data);
        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
    const fetchMajorDasha = async () => {
        

        try {
            const response = await fetch(`https://json.astrologyapi.com/v1/major_vdasha`, OPTIONS);
            const data = await response.json();
            console.log("=====", data)
            setmajorDasha(data);
        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
   
    


    useEffect(() => {
        fetchCurrentYoginiDasha();
        fetchMajorYoginiDasha();
        fetchCurrentCharDasha();
        fetchMajorCharDasha();
        fetchMajorDasha();
    }, []);
    useEffect(() => {
        fetchMajorDasha();
    }, []);

   
    
      const fetchAntarDasha = async (planet) => {
        try {
          const response = await fetch(
            `https://json.astrologyapi.com/v1/kundali/sub_vdasha_details/${planet}/${language}`,
            OPTIONS
          );
          const data = await response.json();
          setAntardasha(data);
        } catch (error) {
          console.error("Error fetching Antar Dasha:", error);
        }
      };
    
      const fetchPratyantarDasha = async (planet, mahaPlanet) => {
        try {
          const response = await fetch(
            `https://json.astrologyapi.com/v1/kundali/sub_sub_vdasha_details/${mahaPlanet}/${planet}/${language}`,
            OPTIONS
          );
          const data = await response.json();
          setPratyantarDasha(data);
        } catch (error) {
          console.error("Error fetching Pratyantar Dasha:", error);
        }
      };
    
      const fetchSookshmaDasha = async (planet, mahaPlanet, antarPlanet) => {
        try {
          const response = await fetch(
            `https://json.astrologyapi.com/v1/kundali/sub_sub_sub_vdasha_details/${mahaPlanet}/${antarPlanet}/${planet}/${language}`,
            OPTIONS
          );
          const data = await response.json();
          setSookshmaDasha(data);
        } catch (error) {
          console.error("Error fetching Sookshma Dasha:", error);
        }
      };
    
      useEffect(() => {
        fetchMajorDasha();
      }, []);
    
      const antarDasha = (planet, planetShow) => {
        fetchAntarDasha(planet);
        setShow(true);
        setShow1(false);
        setShow2(false);
        setMahaPlanet(planet);
        setMahaPlanetShow(planetShow);
      };
    
      const pratyantDasha = (planet, planetShow) => {
        fetchPratyantarDasha(planet, mahaPlanet);
        setShow1(true);
        setShow2(false);
        setAntarPlanet(planet);
        setAntarPlanetShow(planetShow);
        window.scrollTo(0, 500);
      };
    
      const sookshmDasha = (planet, planetShow) => {
        fetchSookshmaDasha(planet, mahaPlanet, antarPlanet);
        setPratyantarPlanet(planet);
        setPratyantarPlanetShow(planetShow);
        setShow2(true);
      };
    // -----------------------------------Toggle to Top Button------------------------
    const goUp = () => {
        window.scrollTo(500, 0);
    }
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);




    return (
        <div style={{marginTop:"150px"}}>
            <div div className="for_background" >
                <div className='container-fluid find_now '>
                    <div className="container" >
                        <KundliNavbar />
                        <br />
                        <br />
                    </div>
                    <div className="container">
                        <div className='row basic '>

                            {/* <div className='col-sm-1  mb-1'></div>   */}

                            {/* ------------------------Maha Dasha-------------------- */}
                            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3 mb-4'>
                                <Table className='for_css kmanage_table table-responsive  table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="4"><h5 className='headingTab'><b>{t('mahadasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr className='fontHead'>
                                            <td>{t('planet')}</td>
                                            <td>{t('Start Date')}</td>
                                            <td>{t('End Date')}</td>

                                        </tr>
                                    </thead>

                                    <tbody className='ktableBody'>
                                        {majorDasha?.map((mVdas, index) => (
                                            <tr className='cursorStyle' data-index={index} onClick={() => antarDasha(mVdas.hindiPlanet, mVdas.planet)}
                                                style={{
                                                    background: `${(((moment(mVdas.today, 'MM-DD-YYYY HH:mm') > moment(mVdas.start, 'DD-MM-YYYY HH:mm')) && (moment(mVdas.today, 'MM-DD-YYYY HH:mm') < moment(mVdas.end, 'DD-MM-YYYY HH:mm'))) ? 'orange' : '')}`
                                                }}
                                            >
                                                <td>
                                                    {mVdas.planet}</td>
                                                <td >  {mVdas.start} </td>
                                                <td>  {mVdas.end}  </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                {/* ---------------------------------Antar Dasha------------------------- */}
                            </div>
                            {show ? <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3  mb-2  '>
                                <Table className='for_css kmanage_table table-responsive  table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="4"><h5 className='headingTab'><b>{mahaPlanetShow} - {t('Antar Dasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr className='fontHead'>
                                            <td>{t('planet')}</td>
                                            <td>{t('Start Date')}</td>
                                            <td>{t('End Date')}</td>
                                            {/* <td>{t('Select')}</td> */}
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody'>

                                        {antardasha && antardasha?.map((mVdas, index) => (
                                            <tr className='cursorStyle' data-index={index} onClick={() => pratyantDasha(mVdas.hindiPlanet, mVdas.planet)}
                                                style={{
                                                    background: `${(((moment(mVdas.today, 'MM-DD-YYYY HH:mm') > moment(mVdas.start, 'DD-MM-YYYY HH:mm')) && (moment(mVdas.today, 'MM-DD-YYYY HH:mm') < moment(mVdas.end, 'DD-MM-YYYY HH:mm'))) ? 'orange' : '')}`
                                                }}>
                                                <td>{mahaPlanetShow}-{mVdas.planet}</td>
                                                <td>  {mVdas.start}  </td>
                                                <td>  {mVdas.end} </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div> : null}
                            {show1 ? <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                <Table className='for_css kmanage_table table-responsive table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="4"><h5 className='headingTab'><b>{mahaPlanetShow} - {antarPlanetShow} - {t('Pratyantar Dasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr className='fontHead'>
                                            <td>{t('planet')}</td>
                                            <td>{t('Start Date')}</td>
                                            <td>{t('End Date')}</td>
                                            {/* <td>{t('Select')}</td> */}
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody'>
                                        {pratyantarDasha && pratyantarDasha?.map((mVdas, index) => (
                                            <tr className='cursorStyle' data-index={index} onClick={() => sookshmDasha(mVdas.hindiPlanet, mVdas.planet)}
                                                style={{
                                                    background: `${(((moment(todayDate, 'MM-DD-YYYY HH:mm') > moment(mVdas.start, 'DD-MM-YYYY HH:mm')) && (moment(todayDate, 'MM-DD-YYYY HH:mm') < moment(mVdas.end, 'DD-MM-YYYY HH:mm'))) ? 'orange' : '')}`
                                                }}>
                                                <td>{mahaPlanetShow}-{antarPlanetShow}-{mVdas.planet}</td>
                                                <td>  {mVdas.start} </td>
                                                <td> {mVdas.end}  </td>
                                                {/* <td onClick={() => sookshmDasha(mVdas.planet)} className="arrowSelect"  ><b>{t('Sookshma Dasha')}</b>  <i className="fas fa-chevron-circle-down" aria-hidden="true" ></i></td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                            </div> : null}
                            {show2 ?
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3">
                                    {/* ----------------------------Sookshma Dasha-------------------------------------- */}
                                    <div><Table className='for_css kmanage_table table-responsive  table-striped fontSize' bordered hover>
                                        <thead className='tableHeadBirth'>
                                            <tr>
                                                <th colspan="4"><h5 className='headingTab'><b>{mahaPlanetShow} - {antarPlanetShow} - {pratyantarPlanetShow} - {t('Sookshma Dasha')}</b></h5></th>
                                            </tr>
                                        </thead>
                                        <thead className='ktableHead'>
                                            <tr className='fontHead'>
                                                <td>{t('planet')}</td>
                                                <td>{t('Start Date')}</td>
                                                <td>{t('End Date')}</td>
                                            </tr>
                                        </thead>
                                        <tbody className='ktableBody'>
                                            {sookshmaDasha && sookshmaDasha?.map((mVdas, index) => (
                                                <tr className='cursorStyle' data-index={index}
                                                    style={{
                                                        background: `${(((moment(mVdas.today, 'MM-DD-YYYY HH:mm') > moment(mVdas.start, 'DD-MM-YYYY HH:mm')) && (moment(mVdas.today, 'MM-DD-YYYY HH:mm') < moment(mVdas.end, 'DD-MM-YYYY HH:mm'))) ? 'orange' : '')}`
                                                    }}>
                                                    <td>{mahaPlanetShow}-{antarPlanetShow}-{pratyantarPlanetShow}-{mVdas.planet}</td>
                                                    <td> {mVdas.start} </td>
                                                    <td>  {mVdas.end}  </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </Table>
                                        {/* <button onClick={() => goUp()}>Go Up<i className="fas fa-chevron-circle-up" aria-hidden="true" ></i></button> */}
                                        <div className="row">
                                            <div className="col-sm-11"></div>
                                            <div className="col-sm-1"><button
                                                type="button"
                                                onClick={() => goUp()}
                                                className="btn btn-danger btn-floating btn-lg goUpButton"
                                                id="btn-back-to-top"
                                            >
                                                <i className="fas fa-arrow-up"></i>
                                            </button></div>
                                        </div>

                                    </div>

                                </div> : null}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3  mb-2">
                                <div>
                                    <h3 className="chartsHeadName">
                                        {t('lagnaChart')}
                                    </h3>
                                    <LagnaChart />
                                </div>


                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-3  mb-2">
                                <div>
                                    <h3 className="chartsHeadName">
                                        {t('GocharChart')}
                                    </h3>
                                    <GocharChart />
                                </div>


                            </div>
                        </div>
                        <div className="row ">





                        </div>
                        <br />
                    </div>

                </div>
                {/* ------------------------------Yogini Dasha----------------------------------               */}
                {/* <div className='backgroundMargin'></div> */}
                <div className='container-fluid find_now '>
                    <div className="container">
                        {/* <Common yogini='a' show1='a' /> */}
                        <div className='row '>
                            {/* <div className='col-sm-2 mt-3 mb-2'></div> */}
                            <div className='col-sm-12 mt-5 mb-4'>
                                <Table className='for_css kmanage_table table-responsive table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="4"><h5 className='headingTab'><b>{t('currentYoginiDasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    {currentYogini.major_dasha ?
                                        <>
                                            <thead className='ktableHead'>
                                                <tr className='fontHead'>
                                                    <td>{t('Dasha')}</td>
                                                    <td>{t('Type')}</td>
                                                    <td>{t('Start Date')}</td>
                                                    <td>{t('End Date')}</td>
                                                </tr>
                                            </thead>
                                            <tbody className='ktableBody'>

                                                <tr>
                                                    <td>{currentYogini && currentYogini.major_dasha ? currentYogini.major_dasha.dasha_name : ""}</td>
                                                    <td>{t('mahadasha')}</td>
                                                    <td>{currentYogini && currentYogini.major_dasha ? currentYogini.major_dasha.start_date : ""}</td>
                                                    <td>{currentYogini && currentYogini.major_dasha ? currentYogini.major_dasha.end_date : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>{currentYogini && currentYogini.sub_dasha ? currentYogini.sub_dasha.dasha_name : ""}</td>
                                                    <td>{t('Antar Dasha')}</td>
                                                    <td>{currentYogini && currentYogini.sub_dasha ? currentYogini.sub_dasha.start_date : ""}</td>
                                                    <td>{currentYogini && currentYogini.sub_dasha ? currentYogini.sub_dasha.end_date : ""}</td>
                                                </tr>
                                                <tr>
                                                    <td>{currentYogini && currentYogini.major_dasha ? currentYogini.sub_sub_dasha.dasha_name : ""}</td>
                                                    <td>{t('Pratantar Dasha')}</td>
                                                    <td>{currentYogini && currentYogini.major_dasha ? currentYogini.sub_sub_dasha.start_date : ""}</td>
                                                    <td>{currentYogini && currentYogini.major_dasha ? currentYogini.sub_sub_dasha.end_date : ""}</td>
                                                </tr>
                                            </tbody> </>
                                        :
                                        <td>{t('CurrentVDashaException')}</td>}
                                </Table>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-sm-12 mt-3 mb-4'>
                                <Table className='for_css kmanage_table table-responsive table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="4"><h5 className='headingTab'><b>{t('majorYoginiDasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr className='fontHead'>
                                            <td>{t('Dasha')}</td>
                                            <td>{t('Start Date')}</td>
                                            <td>{t('End Date')}</td>
                                            <td>{t('Duration')}</td>
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody'>
                                        {majorYoginiDasha?.map((planet, index) => (
                                            <tr data-index={index}>
                                                <td>{planet.dasha_name}</td>
                                                <td>{planet.start_date}</td>
                                                <td>{planet.end_date}</td>
                                                <td>{planet.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className='col-sm-1 mt-5 mb-2'></div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                {/* -------------------------------Char Dasha------------------------------                */}
                {/* <div className='backgroundMargin'></div> */}
                <div className='container-fluid find_now '>
                    <div className="container">
                        {/* <Common char='a' show1='a' /> */}
                        <div className='row '>
                            {/* <div className='col-sm-3 mt-3  mb-2'></div> */}
                            <div className='col-sm-12  mb-4'>
                                <Table className='for_css kmanage_table table-responsive table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="5"><h5 className='headingTab'><b>{t('currentCharDasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr className='fontHead'>
                                            <td>{t('sign')}</td>
                                            <td>{t('Type')}</td>
                                            <td>{t('Start Date')}</td>
                                            <td>{t('End Date')}</td>
                                            <td>{t('Duration')}</td>
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody'>
                                        <tr>
                                            <td>{currentChar && currentChar.major_dasha ? currentChar.major_dasha.sign_name : ""}</td>
                                            <td>{t('mahadasha')}</td>
                                            <td>{currentChar && currentChar.major_dasha ? currentChar.major_dasha.start_date : ""}</td>
                                            <td>{currentChar && currentChar.major_dasha ? currentChar.major_dasha.end_date : ""}</td>
                                            <td>{currentChar && currentChar.major_dasha ? currentChar.major_dasha.duration : ""}</td>
                                        </tr>
                                        <tr>
                                            <td>{currentChar && currentChar.sub_dasha ? currentChar.sub_dasha.sign_name : ""}</td>
                                            <td>{t('Antar Dasha')}</td>
                                            <td>{currentChar && currentChar.sub_dasha ? currentChar.sub_dasha.start_date : ""}</td>
                                            <td>{currentChar && currentChar.sub_dasha ? currentChar.sub_dasha.end_date : ""}</td>
                                            <td>{currentChar && currentChar.sub_dasha ? currentChar.sub_dasha.duration : ""}</td>
                                        </tr>
                                        <tr>
                                            <td>{currentChar && currentChar.sub_sub_dasha ? currentChar.sub_sub_dasha.sign_name : ""}</td>
                                            <td>{t('Pratantar Dasha')}</td>
                                            <td>{currentChar && currentChar.sub_sub_dasha ? currentChar.sub_sub_dasha.start_date : ""}</td>
                                            <td>{currentChar && currentChar.sub_sub_dasha ? currentChar.sub_sub_dasha.end_date : ""}</td>
                                            <td>{currentChar && currentChar.sub_sub_dasha ? currentChar.sub_sub_dasha.duration : ""}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row ">
                            <div className='col-sm-12 mt-3 mb-4'>
                                {/* <div className='tableHeadBirth'><h5 className='heading'>{t('majorCharDasha')}</h5></div> */}
                                <Table className='for_css kmanage_table table-responsive table-striped fontSize' bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="4"><h5 className='headingTab'><b>{t('majorCharDasha')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr className='fontHead'>
                                            <td>{t('sign')}</td>
                                            <td>{t('Start Date')}</td>
                                            <td>{t('End Date')}</td>
                                            <td>{t('Duration')}</td>
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody'>
                                        {majorCharDasha?.map((mChar, index) => (
                                            <tr data-index={index}>
                                                <td>{mChar.sign_name}</td>
                                                <td>{mChar.start_date}</td>
                                                <td>{mChar.end_date}</td>
                                                <td>{mChar.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            {/* <div className='col-sm-1 mt-3 mb-2'></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dasha;

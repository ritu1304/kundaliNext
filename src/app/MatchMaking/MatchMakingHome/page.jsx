"use client"
import React, { useEffect , useState} from 'react'
import { Table } from 'react-bootstrap'

import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';


const MatchMakingHome = (props) => {
    useEffect(() => {
        // mixpanel.track('matchingDetailsViewed');
    }, []);
    const [astroData, setAstroData] = useState(null);
    const [birthData, setBirthData] = useState(null);
    const [malePlanetData, setMalePlanetData] = useState(null);
    const [femalePlanetData, setFemalePlanetData] = useState(null)
    const [ashtakootData, setAshtakootData] = useState(null);
    const [dashakootData, setDashakootData] = useState(null);
    const [manglikData, setManglikData] = useState(null);
    const [obstructionsData, setObstructionsData] = useState(null);
    const [matchData, setMatchData] = useState(null);

     const matchFormData  = sessionStorage.getItem('form');


     const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
     const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    // var malePlanetData = useSelector((state) => state.matchDetails?.planet?.male_planet_details);
    // var femalePlanetData = useSelector((state) => state.matchDetails?.planet?.female_planet_details);
   
    const { t } = useTranslation();
   

    let LocalStore = localStorage.getItem('lng');
    const requestOptions = {
        method: "POST",
        body: JSON.stringify({
            "m_day": matchFormData?.m_day || "13",
            "m_month": matchFormData?.m_month || "02",
            "m_year": matchFormData?.m_year || "2024",
            "m_hour": matchFormData?.m_hour || "11",
            "m_min": matchFormData?.m_min || "12",
            "m_lat": matchFormData?.m_lat || 42.424662,
            "m_lon": matchFormData?.m_lon || 18.771234,
            "m_tzone": matchFormData?.m_tzone || 5.5,
    
            "f_day": matchFormData?.f_day || "12",
            "f_month": matchFormData?.f_month || "1",
            "f_year": matchFormData?.f_year || "2024",
            "f_hour": matchFormData?.f_hour || "10",
            "f_min": matchFormData?.f_min || "10",
            "f_lat": matchFormData?.f_lat || 25.2138156,
            "f_lon": matchFormData?.f_lon || 75.8647527,
            "f_tzone": matchFormData?.f_tzone || 2
        }),
        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        },
    };
    
    
    
    useEffect(() => {
        const fetchAstroDetails = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_astro_details', requestOptions);
            const data = await response.json();
            setAstroData(data);
        };

        const fetchBirthDetails = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_birth_details', requestOptions);
            const data = await response.json();
            setBirthData(data);
        };

        const fetchPlanetDetails = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_planet_details', requestOptions);
            const data = await response.json();
            setMalePlanetData(data?.male_planet_details);
            setFemalePlanetData(data?.female_planet_details)
        };

        const fetchAshtakootPoints = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_ashtakoot_points', requestOptions);
            const data = await response.json();
            setAshtakootData(data);
        };

        const fetchDashakootPoints = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_dashakoot_points', requestOptions);
            const data = await response.json();
            setDashakootData(data);
        };

        const fetchManglikReport = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_manglik_report', requestOptions);
            const data = await response.json();
            setManglikData(data);
        };

        const fetchMatchObstructions = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_obstructions', requestOptions);
            const data = await response.json();
            setObstructionsData(data);
        };

        const fetchMatchMakingReport = async () => {
            const response = await fetch('https://json.astrologyapi.com/v1/match_making_report', requestOptions);
            const data = await response.json();
            setMatchData(data);
        };

        fetchAstroDetails();
        fetchBirthDetails();
        fetchPlanetDetails();
        fetchAshtakootPoints();
        fetchDashakootPoints();
        fetchManglikReport();
        fetchMatchObstructions();
        fetchMatchMakingReport();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const maleName = (matchFormData?.formData?.m_name?.charAt(0).toUpperCase() + matchFormData?.formData?.m_name?.slice(1)) || "ram";
    const femaleName = (matchFormData?.formData?.f_name?.charAt(0).toUpperCase() + matchFormData?.formData?.f_name?.slice(1)) || "sita";
    

    // const maleName = (matchFormData?.formData?.m_name).charAt(0).toUpperCase() + (matchFormData?.formData?.m_name).slice(1);
    // const femaleName = (matchFormData?.formData?.f_name).charAt(0).toUpperCase() + (matchFormData?.formData?.f_name).slice(1);

    return (
        <div style={{marginTop:"150px"}}>
            <div div className="find_now">


                {/* ---------------------Birth Details and Astro details-------*/}

                <div className='container-fluid  '>
                    <div className='row'>
                        <div className='col-sm-1   mt-4'></div>
                        <div className='col-sm-5   mt-4'>
                            <Table className='for_css manage_table_match_making birthTableData making_planetBirth table-responsive birthAstroTable commonTableColor ' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="3"><h5 className=''>{t('birthDetails')}</h5></th>
                                    </tr>
                                </thead>
                                <tbody className='tableBody'>
                                    <tr className='tableHead'>
                                        <th scope="col">{maleName}</th>
                                        <th scope="col">{t('birthDetails')}</th>
                                        <th scope="col">{femaleName}</th>
                                    </tr>
                                    <tr >
                                        <td>{t('male')}</td>
                                        <td>{t('Gender')}</td>
                                        <td>{t('female')}</td>
                                    </tr>
                                    <tr >
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.day : ""}:{birthData && birthData.male_astro_details ? birthData.male_astro_details.month : ""}:{birthData && birthData.male_astro_details ? birthData.male_astro_details.year : ""}</td>
                                        <td>{t('Date of birth')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.day : ""}:{birthData && birthData.female_astro_details ? birthData.female_astro_details.month : ""}:{birthData && birthData.female_astro_details ? birthData.female_astro_details.year : ""}</td>
                                    </tr>
                                    {/* <tr >
                                        <td>{matchFormData.maleDayOfWeek}</td>
                                        <td>{t('Day of Birth')}</td>
                                        <td>{matchFormData.femaleDayOfWeek}</td>
                                    </tr> */}
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.hour : ""}:{birthData && birthData.male_astro_details ? birthData.male_astro_details.minute : ""}</td>
                                        <td>{t('Birth Time')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.hour : ""}:{birthData && birthData.female_astro_details ? birthData.female_astro_details.minute : ""}</td>
                                    </tr>
                                    {/* <tr>
                                        <td>{matchFormData?.place}</td>
                                        <td>{t('Place')}</td>
                                        <td>{matchFormData.placeFemale}</td>
                                    </tr> */}
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.latitude : ""}</td>
                                       
                                        <td>{t('latitude')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.latitude : ""}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.longitude : ""}</td>
                                       
                                        <td>{t('longitude')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.longitude : ""}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.timezone : ""}</td>
                                        <td>{t('timezone')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.timezone : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.sunrise : ""}</td>
                                        <td>{t('sunrise')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.sunrise : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.sunset : ""}</td>
                                        <td>{t('sunset')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.sunset : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{birthData && birthData.male_astro_details ? birthData.male_astro_details.ayanamsha : ""}</td>
                                        <td>{t('ayanamsha')}</td>
                                        <td>{birthData && birthData.female_astro_details ? birthData.female_astro_details.ayanamsha : ""}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-5   mt-4'>
                            <Table className='for_css manage_table_match_making birthTableData table-responsive birthAstroTable commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>

                                    <tr>
                                        <th colSpan="3"><h5 className=''>{t('astroDetails')}</h5></th>
                                    </tr>
                                </thead>

                                <tbody className='tableBody'>
                                    <tr className='tableHead'>
                                        <th scope="col">{maleName}</th>
                                        <th scope="col">{t('astroDetails')}</th>
                                        <th scope="col">{femaleName}</th>
                                    </tr>
                                    <tr>
                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Varna : ""}</td>
                                        <td>{t('varna')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Varna : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Vashya : ""}</td>
                                        <td>{t('vashya')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Vashya : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Yoni : ""}</td>
                                        <td>{t('yoni')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Yoni : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Gan : ""}</td>
                                        <td>{t('gan')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Gan : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Nadi : ""}</td>
                                        <td>{t('nadi')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Nadi : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.SignLord : ""}</td>
                                        <td>{t('signLord')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.SignLord : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Naksahtra : ""}</td>
                                        <td>{t('Nakshatra')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Naksahtra : ""}</td>
                                    </tr><tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.NaksahtraLord : ""}</td>
                                        <td>{t('naksahtraLord')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.NaksahtraLord : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Charan : ""}</td>
                                        <td>{t('charan')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Charan : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Yog : ""}</td>
                                        <td>{t('yog')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Yog : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Karan : ""}</td>
                                        <td>{t('karna')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Karan : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.Tithi : ""}</td>
                                        <td>{t('tithi')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.Tithi : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.yunja : ""}</td>
                                        <td>{t('yunja')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.yunja : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.tatva : ""}</td>
                                        <td>{t('tatva')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.tatva : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.name_alphabet : ""}</td>
                                        <td>{t('nameAlphabet')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.name_alphabet : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.paya : ""}</td>
                                        <td>{t('paya')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.paya : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.ascendant : ""}</td>
                                        <td>{t('ascendant')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.ascendant : ""}</td>
                                    </tr>
                                    <tr>

                                        <td>{astroData && astroData.male_astro_details ? astroData.male_astro_details.sign : ""}</td>
                                        <td>{t('sign')}</td>
                                        <td>{astroData && astroData.female_astro_details ? astroData.female_astro_details.sign : ""}</td>
                                    </tr>


                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-1   mt-4'></div>
                    </div>
                </div>


                {/* ------------------------Male planet details-------------*/}

                <div className='container-fluid '>
                    <div className="row">
                        <div className='col-sm-1 '></div>
                        <div className="col-sm-10 ">
                            <Table className='for_css manage_table_match_making making_planet  table-responsive commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>

                                    <tr>
                                        <th colSpan="8"><h5 className=''>{maleName}: {t('malePlanetDetails')}</h5></th>
                                    </tr>
                                </thead>

                                <tbody className='tableBody'>
                                    <tr className='tableHead'>

                                        <th scope="col">{t('planet')}</th>
                                        <th scope="col">{t('retro')}</th>
                                        <th scope="col">{t('sign')}</th>
                                        <th scope="col">{t('signLord')}</th>
                                        <th scope="col">{t('degree')}</th>
                                        <th scope="col">{t('Nakshatra')}</th>
                                        <th scope="col">{t('naksahtraLord')}</th>
                                        <th scope="col">{t('house')}</th>
                                    </tr>
                                    {malePlanetData?.map((planet, index) => (
                                        <tr data-index={index}>
                                            <td>{planet.name}</td>
                                            <td>{
                                                planet.isRetro !== "true" ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-check" aria-hidden="true"></i>
                                            }</td>
                                            <td>{planet.sign}</td>
                                            <td>{planet.signLord}</td>
                                            <td>{planet.fullDegree.toFixed(2)}</td>
                                            <td>{planet.nakshatra}</td>
                                            <td>{planet.nakshatraLord}</td>
                                            <td>{planet.house}</td>

                                        </tr>
                                    ))}



                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>

                    <br></br>

                    {/* --------------------------Female Planet Details--------------------                    */}

                    <div className="row">
                        <div className='col-sm-1'></div>
                        <div className="col-sm-10 ">
                            <Table className='for_css manage_table_match_making making_planet  table-responsive commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="8"><h5 className=''>{femaleName}: {t('femalePlanetDetails')}</h5></th>
                                    </tr>
                                </thead>
                                <tbody className='tableBody'>
                                    <tr className='tableHead'>

                                        <th scope="col">{t('planet')}</th>
                                        <th scope="col">{t('retro')}</th>
                                        <th scope="col">{t('sign')}</th>
                                        <th scope="col">{t('signLord')}</th>
                                        <th scope="col">{t('degree')}</th>
                                        <th scope="col">{t('Nakshatra')}</th>
                                        <th scope="col">{t('naksahtraLord')}</th>
                                        <th scope="col">{t('house')}</th>
                                    </tr>
                                    {femalePlanetData?.map((planet, index) => (
                                        <tr data-index={index}>
                                            <td>{planet.name}</td>
                                            <td>{
                                                planet.isRetro !== "true" ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-check" aria-hidden="true"></i>
                                            }</td>
                                            <td>{planet.sign}</td>
                                            <td>{planet.signLord}</td>
                                            <td>{planet.fullDegree.toFixed(2)}</td>
                                            <td>{planet.nakshatra}</td>
                                            <td>{planet.nakshatraLord}</td>
                                            <td>{planet.house}</td>

                                        </tr>
                                    ))}


                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                </div>


                {/* ------------------------Asthskoot Score-----------------*/}

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-7 '>
                            <Table className='for_css manage_table_match_making making_planet table-responsive commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colspan="4"><h5 className=''>{t('matchAshtakootPoints')} </h5>
                                        </th>
                                        <th colspan="2">
                                            <b>   <h1 className=''>{ashtakootData && ashtakootData.total ? ashtakootData.total.received_points : ""}/{ashtakootData && ashtakootData.total ? ashtakootData.total.total_points : ""}</h1></b>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className='tableBody'>
                                    <tr className='tableHead'>

                                        <th scope="col">{t('Attribute')}</th>
                                        <th scope="col">{t('Description')}</th>
                                        <th scope="col">{maleName}</th>
                                        <th scope="col">{femaleName}</th>
                                        <th scope="col">{t('Out of')}</th>
                                        <th scope="col">{t('Received')}</th>
                                    </tr>
                                    <tr >

                                        <td>{t('varna')}</td>
                                        <td>{ashtakootData && ashtakootData.varna ? ashtakootData.varna.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.varna ? ashtakootData.varna.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.varna ? ashtakootData.varna.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.varna ? ashtakootData.varna.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.varna ? ashtakootData.varna.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('vashya')}</td>

                                        <td>{ashtakootData && ashtakootData.vashya ? ashtakootData.vashya.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.vashya ? ashtakootData.vashya.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.vashya ? ashtakootData.vashya.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.vashya ? ashtakootData.vashya.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.vashya ? ashtakootData.vashya.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('Tara')}</td>
                                        <td>{ashtakootData && ashtakootData.tara ? ashtakootData.tara.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.tara ? ashtakootData.tara.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.tara ? ashtakootData.tara.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.tara ? ashtakootData.tara.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.tara ? ashtakootData.tara.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('yoni')}</td>
                                        <td>{ashtakootData && ashtakootData.yoni ? ashtakootData.yoni.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.yoni ? ashtakootData.yoni.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.yoni ? ashtakootData.yoni.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.yoni ? ashtakootData.yoni.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.yoni ? ashtakootData.yoni.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Maitri')}</td>
                                        <td>{ashtakootData && ashtakootData.maitri ? ashtakootData.maitri.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.maitri ? ashtakootData.maitri.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.maitri ? ashtakootData.maitri.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.maitri ? ashtakootData.maitri.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.maitri ? ashtakootData.maitri.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Gan')}</td>
                                        <td>{ashtakootData && ashtakootData.gan ? ashtakootData.gan.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.gan ? ashtakootData.gan.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.gan ? ashtakootData.gan.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.gan ? ashtakootData.gan.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.gan ? ashtakootData.gan.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Bhakut')}</td>
                                        <td>{ashtakootData && ashtakootData.bhakut ? ashtakootData.bhakut.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.bhakut ? ashtakootData.bhakut.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.bhakut ? ashtakootData.bhakut.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.bhakut ? ashtakootData.bhakut.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.bhakut ? ashtakootData.bhakut.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Nadi')}</td>
                                        <td>{ashtakootData && ashtakootData.nadi ? ashtakootData.nadi.description : ""}</td>
                                        <td>{ashtakootData && ashtakootData.nadi ? ashtakootData.nadi.male_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.nadi ? ashtakootData.nadi.female_koot_attribute : ""}</td>
                                        <td>{ashtakootData && ashtakootData.nadi ? ashtakootData.nadi.total_points : ""}</td>
                                        <td>{ashtakootData && ashtakootData.nadi ? ashtakootData.nadi.received_points : ""}</td>

                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-3'>
                            <div className="card test_box_match_making" >
                                <div className="boxHeadingMale">
                                    <h4 className='text-center boxHeadingText'><b>{t('Ashtakoot')}</b></h4>
                                </div>
                                <div className="card-body box_manage_margins_MatchForm">
                                    <b className='conclusionColor'>{t('conclusion')}</b>
                                    <p>{manglikData && manglikData.conclusion ? manglikData.conclusion.report : ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-1'></div>
                </div>

                {/* -----------------------Dashakoot Score----------------------*/}
                {/* <div className="boxHeadingMale">
                                    <h4 className='text-center boxHeadingText'>{t('conclusion')}</h4>
                                </div> */}
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 '>
                            <Table className='for_css manage_table_match_making mDashaTable table-responsive commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="3"><h5 className='tableHeadBirth'>{t('matchDashakootPoints')}</h5>

                                        </th>
                                        <th colSpan="2">
                                            <b><h1 className=''>{dashakootData && dashakootData.total ? dashakootData.total.received_points : ""}/{dashakootData && dashakootData.total ? dashakootData.total.total_points : ""}</h1></b>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className='tableBody'>
                                    <tr className='tableHead'>
                                        <th scope="col">{t('Attribute')}</th>
                                        <th scope="col">{maleName}</th>
                                        <th scope="col">{femaleName}</th>
                                        <th scope="col">{t('Out of')}</th>
                                        <th scope="col">{t('Received')}</th>
                                    </tr>
                                    <tr >
                                        <td>{t('Dina')}</td>
                                        <td>{dashakootData && dashakootData.dina ? dashakootData.dina.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.dina ? dashakootData.dina.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.dina ? dashakootData.dina.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.dina ? dashakootData.dina.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Gana')}</td>
                                        <td>{dashakootData && dashakootData.gana ? dashakootData.gana.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.gana ? dashakootData.gana.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.gana ? dashakootData.gana.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.gana ? dashakootData.gana.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('Yoni')}</td>
                                        <td>{dashakootData && dashakootData.yoni ? dashakootData.yoni.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.yoni ? dashakootData.yoni.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.yoni ? dashakootData.yoni.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.yoni ? dashakootData.yoni.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('Rashi')}</td>
                                        <td>{dashakootData && dashakootData.rashi ? dashakootData.rashi.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.rashi ? dashakootData.rashi.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.rashi ? dashakootData.rashi.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.rashi ? dashakootData.rashi.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Rasyadhipati')}</td>
                                        <td>{dashakootData && dashakootData.rasyadhipati ? dashakootData.rasyadhipati.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.rasyadhipati ? dashakootData.rasyadhipati.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.rasyadhipati ? dashakootData.rasyadhipati.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.rasyadhipati ? dashakootData.rasyadhipati.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('Rajju')}</td>
                                        <td>{dashakootData && dashakootData.rajju ? dashakootData.rajju.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.rajju ? dashakootData.rajju.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.rajju ? dashakootData.rajju.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.rajju ? dashakootData.rajju.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('Vedha')}</td>
                                        <td>{dashakootData && dashakootData.vedha ? dashakootData.vedha.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.vedha ? dashakootData.vedha.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.vedha ? dashakootData.vedha.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.vedha ? dashakootData.vedha.received_points : ""}</td>
                                    </tr>
                                    <tr >
                                        <td>{t('Vashya')}</td>

                                        <td>{dashakootData && dashakootData.vashya ? dashakootData.vashya.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.vashya ? dashakootData.vashya.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.vashya ? dashakootData.vashya.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.vashya ? dashakootData.vashya.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Mahendra')}</td>

                                        <td>{dashakootData && dashakootData.mahendra ? dashakootData.mahendra.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.mahendra ? dashakootData.mahendra.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.mahendra ? dashakootData.mahendra.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.mahendra ? dashakootData.mahendra.received_points : ""}</td>

                                    </tr>
                                    <tr >
                                        <td>{t('Stree Deergha')}</td>

                                        <td>{dashakootData && dashakootData.streeDeergha ? dashakootData.streeDeergha.male_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.streeDeergha ? dashakootData.streeDeergha.female_koot_attribute : ""}</td>
                                        <td>{dashakootData && dashakootData.streeDeergha ? dashakootData.streeDeergha.total_points : ""}</td>
                                        <td>{dashakootData && dashakootData.streeDeergha ? dashakootData.streeDeergha.received_points : ""}</td>

                                    </tr>

                                </tbody>
                            </Table>
                        </div>

                        <div className='col-sm-1'></div>
                    </div>
                </div>

                {/* -----------------------Manglik details-----------------------*/}

                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-5  '>



                            <Table className='for_css manage_table_match_making table-responsive commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="1"><h5 className=''>{maleName}: {t('Manglik Details')} </h5>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <span><h4 className='manglikDataHeading'>{t('manglikBasHouse')}</h4>
                                        <p>{manglikData && manglikData.male && manglikData.male.manglik_present_rule ? manglikData.male.manglik_present_rule.based_on_aspect[0] : ""}.
                                            {manglikData && manglikData.male && manglikData.male.manglik_present_rule ? manglikData.male.manglik_present_rule.based_on_aspect[1] : ""}.</p>
                                    </span>
                                    <hr></hr>
                                    <span><h4 className='manglikDataHeading'>{t('manglikBasAspe')}</h4>
                                        <p>
                                            {manglikData && manglikData.male && manglikData.male.manglik_present_rule ? manglikData.male.manglik_present_rule.based_on_aspect[2] : ""}.
                                            {manglikData && manglikData.male && manglikData.male.manglik_present_rule ? manglikData.male.manglik_present_rule.based_on_aspect[3] : ""}.
                                            {manglikData && manglikData.male && manglikData.male.manglik_present_rule ? manglikData.male.manglik_present_rule.based_on_aspect[4] : ""}.
                                        </p>
                                    </span>
                                    <hr />
                                    <span><h4 className='manglikDataHeading'>{t('Manglik Effect')}</h4>
                                        <p>{manglikData && manglikData.male ? manglikData.male.manglik_status : ""}</p>
                                    </span>
                                    <hr />
                                    <span> <h4 className='manglikDataHeading'>{t('manglikAnalysis')}</h4>
                                        <p>{manglikData && manglikData.male ? manglikData.male.manglik_report : ""}</p>
                                    </span>
                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-5  '>
                            <Table className='for_css manage_table_match_making table-responsive commonTableColor' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="1"><h5 className=''>{femaleName}: {t('Manglik Details')}</h5></th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <span><h4 className='manglikDataHeading'>{t('manglikBasHouse')}</h4>
                                        <p>{manglikData && manglikData.female && manglikData.female.manglik_present_rule ? manglikData.female.manglik_present_rule.based_on_aspect[0] : ""}.
                                            {manglikData && manglikData.female && manglikData.female.manglik_present_rule ? manglikData.female.manglik_present_rule.based_on_aspect[1] : ""}.</p>
                                    </span>
                                    <hr></hr>
                                    <span><h4 className='manglikDataHeading'>{t('manglikBasAspe')}</h4>
                                        <p>
                                            {manglikData && manglikData.female && manglikData.female.manglik_present_rule ? manglikData.female.manglik_present_rule.based_on_aspect[2] : ""}.
                                            {manglikData && manglikData.female && manglikData.female.manglik_present_rule ? manglikData.female.manglik_present_rule.based_on_aspect[3] : ""}.
                                            {manglikData && manglikData.female && manglikData.female.manglik_present_rule ? manglikData.female.manglik_present_rule.based_on_aspect[4] : ""}.
                                        </p>
                                    </span>
                                    <hr />
                                    <span><h4 className='manglikDataHeading'>{t('Manglik Effect')}</h4>
                                        <p>{manglikData && manglikData.female ? manglikData.female.manglik_status : ""}</p>
                                    </span>
                                    <hr />
                                    <span> <h4 className='manglikDataHeading'>{t('manglikAnalysis')}</h4>
                                        <p>{manglikData && manglikData.female ? manglikData.female.manglik_report : ""}</p>
                                    </span>
                                </tbody>
                            </Table>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <br></br>
                    {/* ----------------------------------Manglik conclusion---------------------- */}
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10  '>
                            <div className="card test_box_match_making" >
                                <div className="boxHeadingMale">
                                    <h4 className='text-center boxHeadingText'>{t('conclusion')}</h4>
                                </div>
                                <div className="card-body box_manage_margins_MatchForm">
                                    <p>{manglikData && manglikData.conclusion ? manglikData.conclusion.report : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                </div>

                {/* -----------------------Vedh Dosha Report----------------------*/}
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-sm-3 '></div>

                        <div className='col-sm-6 mt-5 '>
                            <div className="card test_box_match_making" >
                                <div className="boxHeadingMale">
                                    <h4 className='text-center boxHeadingText'>{t('vedhDoshaReport')}</h4>
                                </div>
                                <div className="card-body box_manage_margins_MatchForm">
                                    <p>{obstructionsData ? obstructionsData.vedha_report : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3 '></div>
                    </div>
                </div>

                {/* ------------------------conclusion card-------------- */}
                <div className='container-fluid '>
                    <div className="row ">
                        <div className="col-sm-3 "></div>
                        <div className="col-sm-6 ">

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card box-part" >

                                        <div className="card-body">
                                            <center className='match-score'>
                                                <div className="titleCard">
                                                    <h4>{t('ashtakootScore')}</h4>
                                                </div>
                                                <div className="text">
                                                    <h1 className='numberSize'>{matchData && matchData.ashtakoota ? matchData.ashtakoota.received_points : ""}/36</h1>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card box-part" >

                                        <div className="card-body">
                                           <center className='match-score'>
                                                <div className="titleCard">
                                                    <h4>{t('manglikMatch')}</h4>
                                                </div>
                                                <div className="text">
                                                    <h1 className='numberSize'> {matchData && matchData.manglik ? matchData.manglik.female_percentage : ""}</h1>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card box-part" >

                                        <div className="card-body">
                                           <center className='match-score'>
                                                <div className="titleCard">
                                                    <h4>{t('rajjooDosha')}</h4>
                                                </div>
                                                <div className="text">
                                                    <h1 className='numberSize'>{dashakootData && dashakootData.rajju ? dashakootData.rajju.received_points : ""}</h1>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card box-part" >

                                        <div className="card-body">
                                           <center className='match-score'>
                                                <div className="titleCard">
                                                    <h4>{t('Vedha Dosha')}</h4>
                                                </div>
                                                <div className="text">
                                                    <h1 className='numberSize'>{dashakootData && dashakootData.vedha ? dashakootData.vedha.received_points : ""}</h1>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 "></div>
                    </div>
                </div>
                <div className='container-fluid '>
                    <div className="row">
                        <div className='col-sm-3  mb-5'></div>
                        <div className='col-sm-6 mb-5 '>
                            <div className="card test_box_match_making" >
                                <div className="boxHeadingMale">
                                    <h4 className='text-center boxHeadingText'>{t('conclusion')}</h4>
                                </div>
                                <div className="card-body box_manage_margins_MatchForm">
                                    <p>{matchData && matchData.conclusion ? matchData.conclusion.match_report : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3  mb-5'></div>
                    </div>
                </div>

            </div>
        </div>
    )
}




export default MatchMakingHome;


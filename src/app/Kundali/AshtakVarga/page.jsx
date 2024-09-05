"use client";
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import KundliNavbar from '../../../components/KundaliNavBar';

const AshtakVarga = (props) => {
    let LocalStore = localStorage.getItem('lng');

    const kundliForm = JSON.parse(sessionStorage.getItem('Form'));
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID; 
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY; 
    const [Ashtakvarga, setAshtakVarga] = useState([]);
    const [Sarvashtakvarga, setSarvashtakvarga] = useState([]);
    const [sarvashtakVargaChart, setSarvashtakVargaChart] = useState([]);
    const [selected, setSelected] = useState("SUN");
    const body = {
        day: kundliForm?.day || "14",
            month: kundliForm?.month || "8",
            year: kundliForm?.year || "2023",
            hour: kundliForm?.hour || "13",
            min: kundliForm?.min || "45",
            place: kundliForm?.place || "Kota, Rajasthan, India",
            lat: kundliForm?.lat || 25.2138156,
            lon: kundliForm?.lon || 75.8647527,
            tzone: kundliForm?.tzone || 5.5,
        "planetColor": "#8E2E0F",
        "signColor": "#ff4500",
        "lineColor": "#F29726"
    };

    const Options = {
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
            tzone: kundliForm?.tzone || 5.5
        }),
        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        }
    };
    const fetchSarvashtak = async () => {
        const response = await fetch(`https://json.astrologyapi.com/v1/sarvashtak`, {
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
            tzone: kundliForm?.tzone || 5.5
            }),
            headers: {
                'Authorization': `Basic ${btoa(`${userId}:${apiKey}`)}`,
                'Content-Type': 'application/json',
                'Accept-Language': LocalStore
            }
        });
        const data = await response.json();
        setSarvashtakvarga(data)
    };
    useEffect(() => {
        fetchSarvashtak(); 
        fetchSarvashtakVargaChart(); 
    }, []);
    const fetchSarvashtakVargaChart = async () => {
        const response = await fetch(`https://apis.sanatanjyoti.com/kundali/getChart/LAGNA/null`, {
            day: kundliForm?.day || "14",
            month: kundliForm?.month || "8",
            year: kundliForm?.year || "2023",
            hour: kundliForm?.hour || "13",
            min: kundliForm?.min || "45",
            place: kundliForm?.place || "Kota, Rajasthan, India",
            lat: kundliForm?.lat || 25.2138156,
            lon: kundliForm?.lon || 75.8647527,
            tzone: kundliForm?.tzone || 5.5,
        "planetColor": "#8E2E0F",
        "signColor": "#ff4500",
        "lineColor": "#F29726"
        });
        const data = await response.json();
        setSarvashtakVargaChart(data);
    };
    useEffect(() => {
        fetchSarvashtak(); 
        fetchSarvashtakVargaChart 
    }, []);
    const fetchBhinnashtak = async () => {
        const response = await fetch(`https://json.astrologyapi.com/v1/planet_ashtak/${selected}`, {
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
            tzone: kundliForm?.tzone || 5.5
            }),
            headers: {
                'Authorization': `Basic ${btoa(`${userId}:${apiKey}`)}`,
                'Content-Type': 'application/json',
                'Accept-Language': LocalStore
            }
        });
        const data = await response.json();
        setAshtakVarga(data?.ashtak_points);
    };
    useEffect(() => {
        fetchBhinnashtak();  
    }, []);

    const onSubmit = async () => {
        await fetchBhinnashtak();  
    };

    // useEffect(() => {
    //     const fetchSarvashtakVarga = async () => {
    //         try {
    //             const response = await fetch(`https://json.astrologyapi.com/v1/planet_ashtak/SUN`, Options);
    //             const data = await response.json();
    //             setSarvashtakvargai(data); 
    //             setAshtakVarga(data)
    //             console.log("=========", Sarvashtakvarga)
    //         } catch (error) {
    //             console.error('Error fetching Sarvashtak Varga:', error);
    //         }
    //     };

    //     fetchSarvashtakVarga();
    // }, []);
    // var data = selected;
    // var OPTIONS = { Options, data }
    // useEffect(() => {
    //     var data = "SUN"
    //     var OPTIONS = { Options, data }
    //     dispatch(bhinnashtak(OPTIONS));
    // }, [1]);
    // const onSubmit = async () => {
    //     dispatch(bhinnashtak(OPTIONS))
    // }
    const { t } = useTranslation();
    return (
        <div style={{marginTop: "150px"}}>
            <div div className="for_background"  >
                <div className='container-fluid find_now '>
                    <div className="container" >

                        <KundliNavbar />
                        <br />
                   </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-sm-12  mb-2'>
                                <center>
                                    <h4 className=' fw-bolder sarvaHeading'>{t('What are the points in BhinnashtakVarga?')}</h4>
                                </center>
                                <h5 className='sarvaPara'>{t('BhinnashtakVarga')}</h5>
                            </div>
                        </div>

                        <div className='row bhinnash '>
                           <div className="col-sm-12 col-md-12 col-lg-12 mt-3">
                                <div className='tableHeadBirth'>
                                </div>
                                <Table className='for_css kmanage_table table-responsive fontSize planetTableData ' striped bordered hover >
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="13">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h4><b className=''>{t('bhinnashtakVarga')}</b></h4>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <form className="" action="" method="post">
                                                            <select className="selectFormVarga" id="planetId" onClick={(e) => onSubmit(e)} name="planet" onChange={(e) => setSelected(e.target.value)}>
                                                                <option value="sun">{t('Ashtak Varga For Sun')}</option>
                                                                <option value="Moon">{t('Ashtak Varga For Moon')}</option>
                                                                <option value="Mars">{t('Ashtak Varga For Mars')}</option>
                                                                <option value="Mercury">{t('Ashtak Varga For Mercury')}</option>
                                                                <option value="Jupiter">{t('Ashtak Varga For Jupiter')}</option>
                                                                <option value="Venus">{t('Ashtak Varga For Venus')}</option>
                                                                <option value="Saturn">{t('Ashtak Varga For Saturn')}</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                </div>
                                           </th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr>
                                            <th scope="col"><b>{t('planetZodiac')}</b></th>
                                            <th scope="col"><b>{t('aries')}</b></th>
                                            <th scope="col"><b>{t('taurus')}</b></th>
                                            <th scope="col"><b>{t('gemini')}</b></th>
                                            <th scope="col"><b>{t('cancer')}</b></th>
                                            <th scope="col"><b>{t('Leo')}</b></th>
                                            <th scope="col"><b>{t('virgo')}</b></th>
                                            <th scope="col"><b>{t('libra')}</b></th>
                                            <th scope="col"><b>{t('scorpio')}</b></th>
                                            <th scope="col"><b>{t('sagittarius')}</b></th>
                                            <th scope="col"><b>{t('capricorn')}</b></th>
                                            <th scope="col"><b>{t('aquarius')}</b></th>
                                            <th scope="col"><b>{t('pisces')}</b></th>
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody'>
                                        <tr >
                                            <th>{t('sun')}</th>
                                            <td>{Ashtakvarga?.aries?.sun}</td>
                                            <td>{Ashtakvarga?.taurus?.sun}</td>
                                            <td>{Ashtakvarga?.gemini?.sun}</td>
                                            <td>{Ashtakvarga?.cancer?.sun}</td>
                                            <td>{Ashtakvarga?.leo?.sun}</td>
                                            <td>{Ashtakvarga?.virgo?.sun}</td>
                                            <td>{Ashtakvarga?.libra?.sun}</td>
                                            <td>{Ashtakvarga?.scorpio?.sun}</td>
                                            <td>{Ashtakvarga?.sagittarius?.sun}</td>
                                            <td>{Ashtakvarga?.capricorn?.sun}</td>
                                            <td>{Ashtakvarga?.aquarius?.sun}</td>
                                            <td>{Ashtakvarga?.pisces?.sun}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('moon')}</th>
                                            <td>{Ashtakvarga?.aries?.moon}</td>
                                            <td>{Ashtakvarga?.taurus?.moon}</td>
                                            <td>{Ashtakvarga?.gemini?.moon}</td>
                                            <td>{Ashtakvarga?.cancer?.moon}</td>
                                            <td>{Ashtakvarga?.leo?.moon}</td>
                                            <td>{Ashtakvarga?.virgo?.moon}</td>
                                            <td>{Ashtakvarga?.libra?.moon}</td>
                                            <td>{Ashtakvarga?.scorpio?.moon}</td>
                                            <td>{Ashtakvarga?.sagittarius?.moon}</td>
                                            <td>{Ashtakvarga?.capricorn?.moon}</td>
                                            <td>{Ashtakvarga?.aquarius?.moon}</td>
                                            <td>{Ashtakvarga?.pisces?.moon}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('mars')}</th>
                                            <td>{Ashtakvarga?.aries?.mars}</td>
                                            <td>{Ashtakvarga?.taurus?.mars}</td>
                                            <td>{Ashtakvarga?.gemini?.mars}</td>
                                            <td>{Ashtakvarga?.cancer?.mars}</td>
                                            <td>{Ashtakvarga?.leo?.mars}</td>
                                            <td>{Ashtakvarga?.virgo?.mars}</td>
                                            <td>{Ashtakvarga?.libra?.mars}</td>
                                            <td>{Ashtakvarga?.scorpio?.mars}</td>
                                            <td>{Ashtakvarga?.sagittarius?.mars}</td>
                                            <td>{Ashtakvarga?.capricorn?.mars}</td>
                                            <td>{Ashtakvarga?.aquarius?.mars}</td>
                                            <td>{Ashtakvarga?.pisces?.mars}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('mercury')}</th>
                                            <td>{Ashtakvarga?.aries?.mercury}</td>
                                            <td>{Ashtakvarga?.taurus?.mercury}</td>
                                            <td>{Ashtakvarga?.gemini?.mercury}</td>
                                            <td>{Ashtakvarga?.cancer?.mercury}</td>
                                            <td>{Ashtakvarga?.leo?.mercury}</td>
                                            <td>{Ashtakvarga?.virgo?.mercury}</td>
                                            <td>{Ashtakvarga?.libra?.mercury}</td>
                                            <td>{Ashtakvarga?.scorpio?.mercury}</td>
                                            <td>{Ashtakvarga?.sagittarius?.mercury}</td>
                                            <td>{Ashtakvarga?.capricorn?.mercury}</td>
                                            <td>{Ashtakvarga?.aquarius?.mercury}</td>
                                            <td>{Ashtakvarga?.pisces?.mercury}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('jupiter')}</th>
                                            <td>{Ashtakvarga?.aries?.jupiter}</td>
                                            <td>{Ashtakvarga?.taurus?.jupiter}</td>
                                            <td>{Ashtakvarga?.gemini?.jupiter}</td>
                                            <td>{Ashtakvarga?.cancer?.jupiter}</td>
                                            <td>{Ashtakvarga?.leo?.jupiter}</td>
                                            <td>{Ashtakvarga?.virgo?.jupiter}</td>
                                            <td>{Ashtakvarga?.libra?.jupiter}</td>
                                            <td>{Ashtakvarga?.scorpio?.jupiter}</td>
                                            <td>{Ashtakvarga?.sagittarius?.jupiter}</td>
                                            <td>{Ashtakvarga?.capricorn?.jupiter}</td>
                                            <td>{Ashtakvarga?.aquarius?.jupiter}</td>
                                            <td>{Ashtakvarga?.pisces?.jupiter}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('venus')}</th>
                                            <td>{Ashtakvarga?.aries?.venus}</td>
                                            <td>{Ashtakvarga?.taurus?.venus}</td>
                                            <td>{Ashtakvarga?.gemini?.venus}</td>
                                            <td>{Ashtakvarga?.cancer?.venus}</td>
                                            <td>{Ashtakvarga?.leo?.venus}</td>
                                            <td>{Ashtakvarga?.virgo?.venus}</td>
                                            <td>{Ashtakvarga?.libra?.venus}</td>
                                            <td>{Ashtakvarga?.scorpio?.venus}</td>
                                            <td>{Ashtakvarga?.sagittarius?.venus}</td>
                                            <td>{Ashtakvarga?.capricorn?.venus}</td>
                                            <td>{Ashtakvarga?.aquarius?.venus}</td>
                                            <td>{Ashtakvarga?.pisces?.venus}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('saturn')}</th>
                                            <td>{Ashtakvarga?.aries?.saturn}</td>
                                            <td>{Ashtakvarga?.taurus?.saturn}</td>
                                            <td>{Ashtakvarga?.gemini?.saturn}</td>
                                            <td>{Ashtakvarga?.cancer?.saturn}</td>
                                            <td>{Ashtakvarga?.leo?.saturn}</td>
                                            <td>{Ashtakvarga?.virgo?.saturn}</td>
                                            <td>{Ashtakvarga?.libra?.saturn}</td>
                                            <td>{Ashtakvarga?.scorpio?.saturn}</td>
                                            <td>{Ashtakvarga?.sagittarius?.saturn}</td>
                                            <td>{Ashtakvarga?.capricorn?.saturn}</td>
                                            <td>{Ashtakvarga?.aquarius?.saturn}</td>
                                            <td>{Ashtakvarga?.pisces?.saturn}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('ascendant')}</th>
                                            <td>{Ashtakvarga?.aries?.ascendant}</td>
                                            <td>{Ashtakvarga?.taurus?.ascendant}</td>
                                            <td>{Ashtakvarga?.gemini?.ascendant}</td>
                                            <td>{Ashtakvarga?.cancer?.ascendant}</td>
                                            <td>{Ashtakvarga?.leo?.ascendant}</td>
                                            <td>{Ashtakvarga?.virgo?.ascendant}</td>
                                            <td>{Ashtakvarga?.libra?.ascendant}</td>
                                            <td>{Ashtakvarga?.scorpio?.ascendant}</td>
                                            <td>{Ashtakvarga?.sagittarius?.ascendant}</td>
                                            <td>{Ashtakvarga?.capricorn?.ascendant}</td>
                                            <td>{Ashtakvarga?.aquarius?.ascendant}</td>
                                            <td>{Ashtakvarga?.pisces?.ascendant}</td>
                                        </tr>
                                        <tr className='ktableHead'>
                                            <td className='rowColor'><b>{t('Total')}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.aries?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.taurus?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.gemini?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.cancer?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.leo?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.virgo?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.libra?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.scorpio?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.sagittarius?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.capricorn?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.aquarius?.total}</b></td>
                                            <td className='rowColor'> <b> {Ashtakvarga?.pisces?.total}</b></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                         </div>
                        <br />
                    </div>
                </div>
                {/* ---------------------------------------- sarvashtakVarga-------------------------               */}
               
                <div className='container-fluid find_now'>
                    <div className="  ">
                        <div className="row">
                            <div className='col-sm-12  mb-2'>
                                <center>
                                    <h4 className=' fw-bolder sarvaHeading'>{t('What are the points in AshtakaVarga?')}</h4>
                                </center>
                                <h5 className='sarvaPara'>{t('Sarvashtakavarga')}</h5>
                            </div>
                        </div>
                        <div className="row scroll-table">

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                                <Table className='for_css kmanage_table table-responsive  planetTableData scroll-table' striped bordered hover>
                                    <thead className='tableHeadBirth'>
                                        <tr>
                                            <th colspan="13"><h5 className='headingTab'><b>{t('sarvashtakVarga')}</b></h5></th>
                                        </tr>
                                    </thead>
                                    <thead className='ktableHead'>
                                        <tr>
                                            <th scope="col"><b>{t('planetZodiac')}</b></th>
                                            <th scope="col"><b>{t('aries')}</b></th>
                                            <th scope="col"><b>{t('taurus')}</b></th>
                                            <th scope="col"><b>{t('gemini')}</b></th>
                                            <th scope="col"><b>{t('cancer')}</b></th>
                                            <th scope="col"><b >{t('Leo')}</b></th>
                                            <th scope="col"><b>{t('virgo')}</b></th>
                                            <th scope="col"><b>{t('libra')}</b></th>
                                            <th scope="col"><b>{t('scorpio')}</b></th>
                                            <th scope="col"><b>{t('sagittarius')}</b></th>
                                            <th scope="col"><b>{t('capricorn')}</b></th>
                                            <th scope="col"><b>{t('aquarius')}</b></th>
                                            <th scope="col"><b>{t('pisces')}</b></th>
                                        </tr>
                                    </thead>
                                    <tbody className='ktableBody' >
                                        <tr >
                                            <th>{t('sun')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.sun}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.sun}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('moon')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.moon}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.moon}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('mars')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.mars}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.mars}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('mercury')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.mercury}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.mercury}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('jupiter')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.jupiter}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.jupiter}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('venus')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.venus}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.venus}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('saturn')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.saturn}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.saturn}</td>
                                        </tr>
                                        <tr >
                                            <th>{t('ascendant')}</th>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aries.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.taurus.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.gemini.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.cancer.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.leo.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.virgo.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.libra.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.scorpio.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.sagittarius.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.capricorn.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.aquarius.ascendant}</td>
                                            <td>{Sarvashtakvarga?.ashtak_points?.pisces.ascendant}</td>
                                        </tr>
                                        <tr className='ktableHead' >
                                            <td className='rowColor'><b>{t('Total')}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.aries.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.taurus.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.gemini.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.cancer.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.leo.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.virgo.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.libra.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.scorpio.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.sagittarius.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.capricorn.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.aquarius.total}</b></td>
                                            <td className='rowColor'><b>{Sarvashtakvarga?.ashtak_points?.pisces.total}</b></td>
                                        </tr>


                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-3">
                                <center>
                                    <h3 className="chartsHeadName">
                                        {t('Sarvashtak Varga Chart')}
                                    </h3>
                                    <div className="sarvaChart" dangerouslySetInnerHTML={{
                                        __html: sarvashtakVargaChart ? sarvashtakVargaChart.svg : "",
                                    }}></div>
                                </center>


                            </div>

                        </div>







                    </div>
                </div>
            </div>
        </div>
    )
}
export default AshtakVarga;

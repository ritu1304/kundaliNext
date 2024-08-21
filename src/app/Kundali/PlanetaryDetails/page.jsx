"use client"
import React from 'react'
import { Table } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

import { useEffect, useState} from 'react';

import KundliNavbar from '../../../components/KundaliNavBar'
import LagnaChart from '@/components/Chart/LagnaChart.jsx';

const PlanetDetails = () => {
    const { t } = useTranslation();
   
    const [lagnaChart, setLagnaChart] = useState([])
    var [dataPlanet, setDataPlanet] = useState([])
    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    // const OPTIONS = {
    //     method: "POST",
    //     body: JSON.stringify({
    //         day: kundliForm.day,
    //         month: kundliForm.month,
    //         year: kundliForm.year,
    //         hour: kundliForm.hour,
    //         min: kundliForm.min,
    //         place: kundliForm.place,
    //         "lat": kundliForm.lat,
    //         "lon": kundliForm.lon,
    //         "tzone": kundliForm.tzone,
    //         "maxRows": "6",
    //         "planetColor": "#8E2E0F",
    //         "signColor": "#ff4500",
    //         "lineColor": "#F29726",


    //     }),
    //     headers: {
    //         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
    //         'Content-Type': 'application/json',
    //         'Accept-Language': LocalStore
    //     },
    // };

    const fetchData = async () => {
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
            const response = await fetch(`https://json.astrologyapi.com/v1/planets`, OPTIONS);
            const data = await response.json();
            setDataPlanet(data);

              

        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
  
    useEffect(() => {
        fetchData();
    }, []);

    
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div style={{marginTop: "150px"}}>


            <div className='container-fluid find_now '>
                <div className="container" >
                    <KundliNavbar />
                    <br />

                </div>
                <div className="container">
                    <div className='row basic '>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8  mb-5">
                            <Table className='for_css kmanage_table table-responsive planetTableData fontSize' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colspan="8"><h5 className='headingTab'><b>{t('planetDetails')}</b></h5></th>
                                    </tr>
                                </thead>
                                <thead className='ktableHead'>
                                    <tr className='fontHead' >
                                        <th scope="col">{t('planet')}</th>
                                        <th scope="col">{t('retro')}</th>
                                        <th scope="col">{t('sign')}</th>
                                        <th scope="col">{t('signLord')}</th>
                                        <th scope="col">{t('degree')}</th>
                                        <th scope="col">{t('Nakshatra')}</th>
                                        <th scope="col">{t('naksahtraLord')}</th>
                                        <th scope="col">{t('house')}</th>
                                    </tr>
                                </thead>
                                <tbody className='ktableBody'>
                                    {dataPlanet?.map((planet, index) => (
                                        <tr data-index={index}>
                                            <td>{planet.name}</td>
                                            <td>{
                                                planet.isRetro !== "true" ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-check" aria-hidden="true"></i>
                                            }</td>
                                            <td>{planet.sign}</td>
                                            <td>{planet.signLord}</td>
                                            <td>{planet.normDegree.toFixed(2)}</td>
                                            <td>{planet.nakshatra}</td>
                                            <td>{planet.nakshatraLord}</td>
                                            <td>{planet.house}</td>

                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                            <center>
                                <div>
                                    <h3 className="chartsHeadName">
                                        {t('lagnaChart')}
                                    </h3>
                                    <LagnaChart />
                                </div>
                            </center>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PlanetDetails;


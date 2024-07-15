"use client"
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import KundliNavbar from '../../components/KundaliNavBar';
import LagnaChart from '../../components/LagnaChart.jsx';

const PlanetDetails = () => {
    const [kundliForm, setKundliForm] = useState(null);
    const [dataPlanet, setDataPlanet] = useState([]);
    const [lagnaChart, setLagnaChart] = useState(null);

    const LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;

    useEffect(() => {
        const formData = JSON.parse(sessionStorage.getItem('Form'));
        if (formData) {
            setKundliForm(formData);
        }
    }, []);

    useEffect(() => {
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
                    "lat": kundliForm.lat,
                    "lon": kundliForm.lon,
                    "tzone": kundliForm.tzone,
                    "maxRows": "6",
                    "planetColor": "#8E2E0F",
                    "signColor": "#ff4500",
                    "lineColor": "#F29726",
                }),
                headers: {
                    'Authorization': "Basic " + btoa(userId + ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': LocalStore
                },
            };

            fetch(`${baseUrl}/planets`, OPTIONS)
                .then(response => response.json())
                .then(data => {
                    setDataPlanet(Array.from(data));
                })
                .catch(error => console.error('Error fetching planet details:', error));

            fetch(`${baseUrl}/kundali/horaChart/LAGNA/${LocalStore}`, OPTIONS)
                .then(response => response.json())
                .then(data => {
                    setLagnaChart(data);
                })
                .catch(error => console.error('Error fetching lagna chart:', error));
        }
    }, [kundliForm]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='container-fluid find_now'>
            <div className="container">
                <KundliNavbar />
                <br />
            </div>
            <div className="container">
                <div className='row basic'>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8 mb-5">
                        <Table className='for_css kmanage_table table-responsive planetTableData fontSize' striped bordered hover>
                            <thead className='tableHeadBirth'>
                                <tr>
                                    <th colSpan="8"><h5 className='headingTab'><b>planetDetails</b></h5></th>
                                </tr>
                            </thead>
                            <thead className='ktableHead'>
                                <tr className='fontHead'>
                                    <th scope="col">planet</th>
                                    <th scope="col">retro</th>
                                    <th scope="col">sign</th>
                                    <th scope="col">signLord</th>
                                    <th scope="col">degree</th>
                                    <th scope="col">Nakshatra</th>
                                    <th scope="col">naksahtraLord</th>
                                    <th scope="col">house</th>
                                </tr>
                            </thead>
                            <tbody className='ktableBody'>
                                {dataPlanet.map((planet, index) => (
                                    <tr key={index}>
                                        <td>{planet.name}</td>
                                        <td>
                                            {planet.isRetro !== "true" ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-check" aria-hidden="true"></i>}
                                        </td>
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
                                    lagnaChart
                                </h3>
                                <LagnaChart />
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlanetDetails;

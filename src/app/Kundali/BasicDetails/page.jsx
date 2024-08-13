
"use client";
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import KundliNavBar from '../../../components/KundaliNavBar'

const BasicDetails = () => {
    const [astroDetailsData, setAstroDetailsData] = useState(null);
    const [birthDetailsData, setBirthDetailsData] = useState(null);

    const { t } = useTranslation();
    const kundliForm  = sessionStorage.getItem('Form');


    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.REACT_APP_SANTAN_USER_ID;
    const apiKey = process.env.REACT_APP_SANTAN_API_KEY;

    const OPTIONS = {
        method: "POST",
        body: JSON.stringify({
            day: kundliForm?.day || "13",
            month: kundliForm?.month || "8",
            year: kundliForm?.year ||"2023",
            hour: kundliForm?.hour || "08",
            min: kundliForm?.min || "30",
            place: kundliForm?.place || "Karnataka, India",
            "lat": kundliForm?.lat || 15.3172775,
            "lon": kundliForm?.lon || 75.7138884,
            "maxRows": "6",
        }),
        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        },
    };

    useEffect(() => {
        // mixpanel.track('kundliBasicDetailsViewed');

        const fetchData = async () => {
            try {
                const astroResponse = await fetch( 'https://json.astrologyapi.com/v1/astro_details', OPTIONS);
                const astroData = await astroResponse.json();
                setAstroDetailsData(astroData);

                const birthResponse = await fetch('https://json.astrologyapi.com/v1/birth_details', OPTIONS);
                const birthData = await birthResponse.json();
                setBirthDetailsData(birthData);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchData();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [OPTIONS]);

    const gender = kundliForm?.gender === "Male" ? t('male') : kundliForm?.gender === "Female" ? t('female') : '';
    const day = t(kundliForm?.dayOfWeek || '');

    return (
        <div style={{marginTop:"150px"}}>
            <div className='container-fluid find_now'>
                <div className="container">
                    <KundliNavBar />
                    <br />
                </div>

                <div className="container">
                    <div className='row basic'>
                        <div className='col-sm-6 mb-3'>
                            <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="2"><h5 className='headingTab'><b>{t('birthDetails')}</b></h5></th>
                                    </tr>
                                </thead>
                                <tbody className='ktableBody'>
                                    <tr>
                                        <th>{t('Name')}</th>
                                        <td className='names'>{kundliForm?.name || "robin"}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('Gender')}</th>
                                        <td className='names'>{gender}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('Day')}</th>
                                        <td>{day}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('Place')}</th>
                                        <td>{kundliForm?.place || "kanpur"}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('birthDate')}</th>
                                        <td>{birthDetailsData ? `${birthDetailsData.day}:${birthDetailsData.month}:${birthDetailsData.year}` : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('time')}</th>
                                        <td>{birthDetailsData ? `${birthDetailsData.hour}:${birthDetailsData.minute}` : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('latitude')}</th>
                                        <td>{birthDetailsData ? birthDetailsData.latitude : "0"}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('longitude')}</th>
                                        <td>{birthDetailsData ? birthDetailsData.longitude : "0"}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('timezone')}</th>
                                        <td>{birthDetailsData ? birthDetailsData.timezone : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('sunrise')}</th>
                                        <td>{birthDetailsData ? birthDetailsData.sunrise : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('sunset')}</th>
                                        <td>{birthDetailsData ? birthDetailsData.sunset : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('ayanamsha')}</th>
                                        <td>{birthDetailsData ? birthDetailsData.ayanamsha : ""}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
                                        <thead className='tableHeadBirth'>
                                            <tr>
                                                <th colSpan="2"><h5 className='headingTab'><b>{t('basicPanchangDetails')}</b></h5></th>
                                            </tr>
                                        </thead>
                                        <tbody className='ktableBody'>
                                            <tr>
                                                <th>{t('tithi')}</th>
                                                <td>{astroDetailsData ? astroDetailsData.Tithi : ""}</td>
                                            </tr>
                                            <tr>
                                                <th>{t('karna')}</th>
                                                <td>{astroDetailsData ? astroDetailsData.Karan : ""}</td>
                                            </tr>
                                            <tr>
                                                <th>{t('yog')}</th>
                                                <td>{astroDetailsData ? astroDetailsData.Yog : ""}</td>
                                            </tr>
                                            <tr>
                                                <th>{t('Nakshatra')}</th>
                                                <td>{astroDetailsData ? astroDetailsData.Naksahtra : ""}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colSpan="2"><h5 className='headingTab'><b>{t('avakhadaDetails')}</b></h5></th>
                                    </tr>
                                </thead>
                                <tbody className='ktableBody'>
                                    <tr>
                                        <th>{t('varna')}</th>
                                        <td>{astroDetailsData ? astroDetailsData.Varna : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('vashya')}</th>
                                        <td>{astroDetailsData ? astroDetailsData.Vashya : ""}</td>
                                    </tr>
                                    </tbody>
                            </Table>
                          </div>


                          </div>
                          </div>
                          </div>
                          </div>
                          )
                          }
  export default BasicDetails;

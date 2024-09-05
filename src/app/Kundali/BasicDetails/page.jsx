
// "use client";
// import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { useTranslation } from "react-i18next";
// import KundliNavBar from '../../../components/KundaliNavBar'

// const BasicDetails = () => {
//     const [astroDetailsData, setAstroDetailsData] = useState(null);
//     const [birthDetailsData, setBirthDetailsData] = useState(null);

//     const { t } = useTranslation();
//     const kundliForm  = sessionStorage.getItem('Form');


//     let LocalStore = localStorage.getItem('lng');
//     const userId = process.env.REACT_APP_SANTAN_USER_ID;
//     const apiKey = process.env.REACT_APP_SANTAN_API_KEY;

//     const OPTIONS = {
//         method: "POST",
//         body: JSON.stringify({
//             day: kundliForm?.day,
//             month: kundliForm?.month,
//             year: kundliForm?.year,
//             hour: kundliForm?.hour,
//             min: kundliForm?.min ,
//             place: kundliForm?.place,
//             "lat": kundliForm?.lat,
//             "lon": kundliForm?.lon,
//             "maxRows": "6",
//         }),
//         headers: {
//             'Authorization': "Basic " + btoa(userId + ":" + apiKey),
//             'Content-Type': 'application/json',
//             'Accept-Language': LocalStore
//         },
//     };

//     useEffect(() => {
//         // mixpanel.track('kundliBasicDetailsViewed');

//         const fetchData = async () => {
//             try {
//                 const astroResponse = await fetch( 'https://json.astrologyapi.com/v1/astro_details', OPTIONS);
//                 const astroData = await astroResponse.json();
//                 setAstroDetailsData(astroData);

//                 const birthResponse = await fetch('https://json.astrologyapi.com/v1/birth_details', OPTIONS);
//                 const birthData = await birthResponse.json();
//                 setBirthDetailsData(birthData);
//             } catch (error) {
//                 console.error('Error fetching details:', error);
//             }
//         };

//         fetchData();

//         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//     }, [OPTIONS]);

//     const gender = kundliForm?.gender === "Male" ? t('male') : kundliForm?.gender === "Female" ? t('female') : '';
//     const day = t(kundliForm?.dayOfWeek || '');

//     return (
//         <div style={{marginTop:"150px"}}>
//             <div className='container-fluid find_now'>
//                 <div className="container">
//                     <KundliNavBar />
//                     <br />
//                 </div>

//                 <div className="container">
//                     <div className='row basic'>
//                         <div className='col-sm-6 mb-3'>
//                             <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
//                                 <thead className='tableHeadBirth'>
//                                     <tr>
//                                         <th colSpan="2"><h5 className='headingTab'><b>{t('birthDetails')}</b></h5></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className='ktableBody'>
//                                     <tr>
//                                         <th>{t('Name')}</th>
//                                         <td className='names'>{kundliForm.name}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('Gender')}</th>
//                                         <td className='names'>{gender}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('Day')}</th>
//                                         <td>{day}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('Place')}</th>
//                                         <td>{kundliForm?.place || "kanpur"}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('birthDate')}</th>
//                                         <td>{birthDetailsData ? `${birthDetailsData.day}:${birthDetailsData.month}:${birthDetailsData.year}` : ""}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('time')}</th>
//                                         <td>{birthDetailsData ? `${birthDetailsData.hour}:${birthDetailsData.minute}` : ""}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('latitude')}</th>
//                                         <td>{birthDetailsData ? birthDetailsData.latitude : "0"}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('longitude')}</th>
//                                         <td>{birthDetailsData ? birthDetailsData.longitude : "0"}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('timezone')}</th>
//                                         <td>{birthDetailsData ? birthDetailsData.timezone : ""}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('sunrise')}</th>
//                                         <td>{birthDetailsData ? birthDetailsData.sunrise : ""}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('sunset')}</th>
//                                         <td>{birthDetailsData ? birthDetailsData.sunset : ""}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('ayanamsha')}</th>
//                                         <td>{birthDetailsData ? birthDetailsData.ayanamsha : ""}</td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                             <div className='row'>
//                                 <div className='col-sm-12'>
//                                     <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
//                                         <thead className='tableHeadBirth'>
//                                             <tr>
//                                                 <th colSpan="2"><h5 className='headingTab'><b>{t('basicPanchangDetails')}</b></h5></th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className='ktableBody'>
//                                             <tr>
//                                                 <th>{t('tithi')}</th>
//                                                 <td>{astroDetailsData ? astroDetailsData.Tithi : ""}</td>
//                                             </tr>
//                                             <tr>
//                                                 <th>{t('karna')}</th>
//                                                 <td>{astroDetailsData ? astroDetailsData.Karan : ""}</td>
//                                             </tr>
//                                             <tr>
//                                                 <th>{t('yog')}</th>
//                                                 <td>{astroDetailsData ? astroDetailsData.Yog : ""}</td>
//                                             </tr>
//                                             <tr>
//                                                 <th>{t('Nakshatra')}</th>
//                                                 <td>{astroDetailsData ? astroDetailsData.Naksahtra : ""}</td>
//                                             </tr>
//                                         </tbody>
//                                     </Table>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-sm-6 mb-4'>
//                             <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
//                                 <thead className='tableHeadBirth'>
//                                     <tr>
//                                         <th colSpan="2"><h5 className='headingTab'><b>{t('avakhadaDetails')}</b></h5></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className='ktableBody'>
//                                     <tr>
//                                         <th>{t('varna')}</th>
//                                         <td>{astroDetailsData ? astroDetailsData.Varna : ""}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>{t('vashya')}</th>
//                                         <td>{astroDetailsData ? astroDetailsData.Vashya : ""}</td>
//                                     </tr>
//                                     </tbody>
//                             </Table>
//                           </div>


//                           </div>
//                           </div>
//                           </div>
//                           </div>
//                           )
//                           }
//   export default BasicDetails;


"use client";
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import KundliNavBar from '../../../components/KundaliNavBar';

const BasicDetails = () => {
    const [kundliAstroDetails, setKundliAstroDetails] = useState(null);
    const [kundliBirthDetails, setKundliBirthDetails] = useState(null);

    const { t } = useTranslation();
    
   const kundliForm = JSON.parse(sessionStorage.getItem('Form'));

    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID; 
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY; 

    const OPTIONS = {
        method: "POST",
        body: JSON.stringify({
            day: kundliForm?.day,
            month: kundliForm?.month,
            year: kundliForm?.year,
            hour: kundliForm?.hour,
            min: kundliForm?.min,
            place: kundliForm?.place || "Kota, Rajasthan, India",
            lat: kundliForm?.lat,
            lon: kundliForm?.lon,
            tzone: kundliForm?.tzone,
            maxRows: "6",
        }),
        headers: {
            'Authorization': "Basic " + btoa(userId + ":" + apiKey),
            'Content-Type': 'application/json',
            'Accept-Language': LocalStore
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const astroResponse = await fetch('https://json.astrologyapi.com/v1/astro_details', OPTIONS);
                const astroData = await astroResponse.json();
                setKundliAstroDetails(astroData);

                const birthResponse = await fetch('https://json.astrologyapi.com/v1/birth_details', OPTIONS);
                const birthData = await birthResponse.json();
                setKundliBirthDetails(birthData);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        if (kundliForm) {
            fetchData();
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [OPTIONS, kundliForm]);

    const gender = kundliForm?.gender === "Male" ? t('male') : kundliForm?.gender === "Female" ? t('female') : '';
    const day = t(kundliForm?.dayOfWeek || '');

    // return (
    //     <div style={{ marginTop: "150px" }}>
    //         <div className='container-fluid find_now'>
    //             <div className="container">
    //                 <KundliNavBar />
    //                 <br />
    //             </div>

    //             <div className="container">
    //                 <div className='row basic'>
    //                     <div className='col-sm-6 mb-3'>
    //                         <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
    //                             <thead className='tableHeadBirth'>
    //                                 <tr>
    //                                     <th colSpan="2"><h5 className='headingTab'><b>{t('birthDetails')}</b></h5></th>
    //                                 </tr>
    //                             </thead>
    //                             <tbody className='ktableBody'>
    //                                 <tr>
    //                                     <th>{t('Name')}</th>
    //                                     <td className='names'>{kundliForm?.name}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('Gender')}</th>
    //                                     <td className='names'>{gender}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('Day')}</th>
    //                                     <td>{day}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('Place')}</th>
    //                                     <td>{kundliForm?.place || "kanpur"}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('birthDate')}</th>
    //                                     <td>{birthDetailsData ? `${birthDetailsData.day}:${birthDetailsData.month}:${birthDetailsData.year}` : ""}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('time')}</th>
    //                                     <td>{birthDetailsData ? `${birthDetailsData.hour}:${birthDetailsData.minute}` : ""}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('latitude')}</th>
    //                                     <td>{birthDetailsData ? birthDetailsData.latitude : "0"}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('longitude')}</th>
    //                                     <td>{birthDetailsData ? birthDetailsData.longitude : "0"}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('timezone')}</th>
    //                                     <td>{birthDetailsData ? birthDetailsData.timezone : ""}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('sunrise')}</th>
    //                                     <td>{birthDetailsData ? birthDetailsData.sunrise : ""}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('sunset')}</th>
    //                                     <td>{birthDetailsData ? birthDetailsData.sunset : ""}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('ayanamsha')}</th>
    //                                     <td>{birthDetailsData ? birthDetailsData.ayanamsha : ""}</td>
    //                                 </tr>
    //                             </tbody>
    //                         </Table>
    //                         <div className='row'>
    //                             <div className='col-sm-12'>
    //                                 <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
    //                                     <thead className='tableHeadBirth'>
    //                                         <tr>
    //                                             <th colSpan="2"><h5 className='headingTab'><b>{t('basicPanchangDetails')}</b></h5></th>
    //                                         </tr>
    //                                     </thead>
    //                                     <tbody className='ktableBody'>
    //                                         <tr>
    //                                             <th>{t('tithi')}</th>
    //                                             <td>{astroDetailsData ? astroDetailsData.Tithi : ""}</td>
    //                                         </tr>
    //                                         <tr>
    //                                             <th>{t('karna')}</th>
    //                                             <td>{astroDetailsData ? astroDetailsData.Karan : ""}</td>
    //                                         </tr>
    //                                         <tr>
    //                                             <th>{t('yog')}</th>
    //                                             <td>{astroDetailsData ? astroDetailsData.Yog : ""}</td>
    //                                         </tr>
    //                                         <tr>
    //                                             <th>{t('Nakshatra')}</th>
    //                                             <td>{astroDetailsData ? astroDetailsData.Naksahtra : ""}</td>
    //                                         </tr>
    //                                     </tbody>
    //                                 </Table>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='col-sm-6 mb-4'>
    //                         <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
    //                             <thead className='tableHeadBirth'>
    //                                 <tr>
    //                                     <th colSpan="2"><h5 className='headingTab'><b>{t('avakhadaDetails')}</b></h5></th>
    //                                 </tr>
    //                             </thead>
    //                             <tbody className='ktableBody'>
    //                                 <tr>
    //                                     <th>{t('varna')}</th>
    //                                     <td>{astroDetailsData ? astroDetailsData.Varna : ""}</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <th>{t('vashya')}</th>
    //                                     <td>{astroDetailsData ? astroDetailsData.Vashya : ""}</td>
    //                                 </tr>
    //                             </tbody>
    //                         </Table>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div style={{marginTop:"150px"}}>
            <div className='container-fluid find_now '>
                <div className="container" >
                    <KundliNavBar/>
                    <br />
                </div>

                <div className="container  " >
                    <div className='row   basic'>
                        {/* <div className='col-sm-3 mb-2'>

                        </div> */}
                        <div className='col-sm-6  mb-3'>
                            {/* <div className='tableHeadBirth'><h5 className='heading'>{t('birthDetails')}</h5></div> */}
                            <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>

                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colspan="2"><h5 className='headingTab'><b>{t('birthDetails')}</b></h5></th>
                                    </tr>
                                </thead>
                                <tbody className='ktableBody'>
                                    <tr >
                                        <th>{t('Name')}</th>
                                        <td className='names'>{kundliForm.name}</td>

                                    </tr>
                                    <tr >
                                        <th>{t('Gender')}</th>
                                        <td className='names'>{gender}</td>

                                    </tr>
                                    <tr >
                                        <th>{t('Day')}</th>
                                        <td>{day}</td>

                                    </tr>
                                    <tr >
                                        <th>{t('Place')}</th>
                                        <td>{kundliForm.place}</td>

                                    </tr>
                                    <tr >
                                        <th>{t('birthDate')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.day : ""}:{kundliBirthDetails ? kundliBirthDetails.month : ""}:{kundliBirthDetails ? kundliBirthDetails.year : ""}</td>

                                    </tr>
                                    <tr >
                                        <th>{t('time')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.hour : ""}:{kundliBirthDetails ? kundliBirthDetails.minute : ""}</td>
                                    </tr>
                                    <tr >
                                        <th>{t('latitude')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.latitude : "0"}</td>

                                    </tr>
                                    <tr >
                                        <th>{t('longitude')}</th>

                                        <td>{kundliBirthDetails ? kundliBirthDetails.longitude : "0"}</td>


                                    </tr>
                                    <tr >
                                        <th>{t('timezone')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.timezone : ""}</td>
                                    </tr>
                                    <tr >
                                        <th>{t('sunrise')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.sunrise : ""}</td>
                                    </tr>
                                    <tr >
                                        <th>{t('sunset')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.sunset : ""}</td>
                                    </tr>
                                    <tr >
                                        <th>{t('ayanamsha')}</th>
                                        <td>{kundliBirthDetails ? kundliBirthDetails.ayanamsha : ""}</td>
                                    </tr>


                                </tbody>
                            </Table>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    {/* <div className='tableHeadBirth'><h5 className='heading'>{t('basicPanchangDetails')}</h5></div> */}
                                    <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
                                        <thead className='tableHeadBirth'>
                                            <tr>
                                                <th colspan="2"><h5 className='headingTab'><b>{t('basicPanchangDetails')}</b></h5></th>
                                            </tr>
                                        </thead>
                                        <tbody className='ktableBody'>
                                            <tr >
                                                <th>{t('tithi')}</th>
                                                <td>{kundliAstroDetails ? kundliAstroDetails.Tithi : ""}</td>
                                            </tr>
                                            <tr >
                                                <th>{t('karna')}</th>
                                                <td>{kundliAstroDetails ? kundliAstroDetails.Karan : ""}</td>
                                            </tr>
                                            <tr >
                                                <th>{t('yog')}</th>
                                                <td>{kundliAstroDetails ? kundliAstroDetails.Yog : ""}</td>
                                            </tr>
                                            <tr >
                                                <th>{t('Nakshatra')}</th>
                                                <td>{kundliAstroDetails ? kundliAstroDetails.Naksahtra : ""}</td>
                                            </tr>
                                            {/* <tr >
                                                <th>{t('sunrise')}</th>
                                                <td>{kundliBirthDetails ? kundliBirthDetails.sunrise : ""}</td>
                                            </tr>
                                            <tr >
                                                <th>{t('sunset')}</th>
                                                <td>{kundliBirthDetails ? kundliBirthDetails.sunset : ""}</td>
                                            </tr> */}


                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-6   mb-4'>

                            {/* <div className='tableHeadBirth'><h5 className='heading'>{t('avakhadaDetails')}</h5></div> */}
                            <Table className='for_css kmanage_table birthTableData table-responsive fontSize' striped bordered hover>
                                <thead className='tableHeadBirth'>
                                    <tr>
                                        <th colspan="2"><h5 className='headingTab'><b>{t('avakhadaDetails')}</b></h5></th>
                                    </tr>
                                </thead>
                                <tbody className='ktableBody'>
                                    <tr>
                                        <th>{t('varna')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Varna : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('vashya')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Vashya : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('yoni')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Yoni : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('gan')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Gan : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('nadi')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Nadi : ""}</td>
                                    </tr>
                                    <tr>

                                        <th>{t('Moon sign')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.sign : ""}</td>

                                    </tr>
                                    <tr>
                                        <th>{t('signLord')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.SignLord : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('charan')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Charan : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('yog')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Yog : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('karna')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Karan : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('tithi')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.Tithi : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('yunja')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.yunja : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('tatva')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.tatva : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('nameAlphabet')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.name_alphabet : ""}</td>
                                    </tr>
                                    <tr>
                                        <th>{t('paya')}</th>
                                        <td>{kundliAstroDetails ? kundliAstroDetails.paya : ""}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        {/* <div className='col-sm-1  mb-2'></div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BasicDetails;

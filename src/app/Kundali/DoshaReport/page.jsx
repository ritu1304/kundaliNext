"use client"
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import KundliNavbar from '../../../components/KundaliNavBar';

const Dosha = (props) => {
    const { t } = useTranslation();
    const [doshaKalsarpa, setdoshaKalsarpa] = useState([])
    const [doshaManglik, setdoshaManglik] = useState([])
    const [doshaSadhesati, setdoshaSadhesati] = useState([])
    const [doshaPitra, setdoshaPitra] = useState([])
    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    
    const fetchDoshaReport = async () => {
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
            const response = await fetch(`https://json.astrologyapi.com/v1/kalsarpa_details`, OPTIONS);
            const data = await response.json();
            setdoshaKalsarpa(data);

                const response2 = await fetch('https://json.astrologyapi.com/v1/manglik', OPTIONS);
                const data2 = await response2.json();
                setdoshaManglik(data2);

                const response3 = await fetch('https://json.astrologyapi.com/v1/sadhesati_current_status', OPTIONS);
                const data3 = await response3.json();
                setdoshaSadhesati(data3);

                const response4 = await fetch('https://json.astrologyapi.com/v1/pitra_dosha_report', OPTIONS);
                const data4 = await response4.json();
                setdoshaPitra(data4);
        } catch (error) {
            console.error('Error fetching  data:', error);
        }
    };
  
    useEffect(() => {
        fetchDoshaReport();
    }, []);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div style={{marginTop:"150px"}}>

            <div div className="for_background ">
                <div className='container-fluid find_now '>
                    <div className="container" >
                        <KundliNavbar />
                        <br />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div class="card kalsarpaCard">
                                    <div className="card-header kalsarpaHeader">
                                        <center>
                                            <h4>{t('kalDoshaAnalysis')}</h4>
                                        </center>
                                    </div>
                                    <div class="card-body kalsarpaCardBody">
                                        <div className="row basic kDoshaText">
                                            <div className='col-sm-12  '>
                                                <h5 className="textAlignment">{t('kalDoshaDesc')}</h5>
                                            </div>
                                        </div>
                                        <div className="KalsarpaName mt-2"><h5><b>{t('kalDoshaName')}:</b>  <b className="kHeading" >
                                            {doshaKalsarpa.name == null ? t('Kalsarpa Dosha not present') : doshaKalsarpa.name}
                                        </b></h5>
                                            <hr className="hrHeadingName" />
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                    <div className="card doshaCardLeft" >
                                                        <div className="card-body ">
                                                            <span className="kHeading text-center"><h5>{t('kalDoshaDes')}</h5></span>
                                                            <div className="hrHeadingDes"  ><hr /></div>
                                                            <h5 className="description "  >
                                                                {doshaKalsarpa ? doshaKalsarpa.one_line : ""}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 mt-2">
                                                    <center>
                                                        <span className="dot ">
                                                            <div className="mt-3">
                                                                <h6 className='dotText'><b>{t('present')}</b></h6>
                                                            </div>
                                                            <hr className='circleLine' />
                                                            <h4> <b>{
                                                                doshaKalsarpa.present === false ? t('No') : t('Yes')
                                                            }</b></h4>
                                                        </span>
                                                    </center>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                    <div className="card doshaCardRight" >
                                                        <div className="card-body type">
                                                            <span className="kHeading text-center"><h5>{t('Type')}</h5></span>
                                                            <div className="hrHeadingDes"  ><hr /></div>
                                                            <h5>
                                                                {doshaKalsarpa.type == null ? t('Congratulations') : ""}
                                                                {doshaKalsarpa.type === "Partial Ascending" ? t('Partial Ascending') : ''}
                                                                {doshaKalsarpa.type === "Full Descending" ? t('Full Descending') : ''}
                                                                {doshaKalsarpa.type === "Partial Descending" ? t('Partial Descending') : ''}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                {/* <div className='backgroundMargin'></div> */}
                {/* -------------------------Manglik Dosha---------------------------------------- */}
                <div className='container-fluid find_now'>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 mt-5">
                                <div class="card kalsarpaCard">
                                    <div className="card-header kalsarpaHeader">
                                        <center>
                                            <h4>{t('manglikAnalysis')}</h4>
                                        </center>
                                    </div>
                                    <div class="card-body kalsarpaCardBody">
                                        <div className="KalsarpaName mt-2"><h5><b>{t('Manglik Effect')}:</b>  <b className="kHeading" >{doshaManglik ? doshaManglik.manglik_status : ""} </b></h5>
                                            <hr className="hrHeadingName" />
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                    <div className="card doshaCardLeft" >
                                                        <div className="card-body ">
                                                            <span className="kHeading text-center"><h5>{t('manglikAnalysis')}</h5></span>
                                                            <div className="hrHeadingDes"><hr /></div>
                                                            <h5 className="description"> {doshaManglik ? doshaManglik.manglik_report : ""}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 mt-2">
                                                    <center>
                                                        <span className="dot ">
                                                            <div className="mt-3">
                                                                <h6 className='dotText'><b>{t('percentage')}</b></h6>
                                                            </div>
                                                            <hr />
                                                            <h4 > <b>{doshaManglik ? doshaManglik.percentage_manglik_present : ""}</b></h4>
                                                        </span>
                                                    </center>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                    <div className="card doshaCardRight" >
                                                        <div className="card-body ">
                                                            <span className="kHeading text-center"><h5>{t('manglikBasAspe')}</h5></span>
                                                            <div className="hrHeadingrep"><hr></hr></div>
                                                            <h5 className="description"> -{doshaManglik && doshaManglik.manglik_present_rule ? doshaManglik.manglik_present_rule.based_on_aspect[0] : ""} <br />
                                                                -{doshaManglik && doshaManglik.manglik_present_rule ? doshaManglik.manglik_present_rule.based_on_aspect[1] : ""} <br />
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                {/* <div className='backgroundMargin'></div> */}
                {/* ---------------------------------Sadhesati Dosha-------------------------------------------------               */}
                <div className='container-fluid find_now'>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 mt-5">
                                <div class="card kalsarpaCard">
                                    <div className="card-header kalsarpaHeader">
                                        <center>
                                            <h4>{t('sadhesatiAnalysis')}</h4>
                                        </center>
                                    </div>
                                    <div class="card-body kalsarpaCardBody">
                                        <div className="row basic kDoshaText">
                                            <div className='col-sm-12  '>
                                                <h5 className="textAlignment">{t('sadhesatiDesc')}</h5>
                                            </div>
                                        </div>
                                        <hr className="hrHeadingName" />
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardLeft" >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>{t('otherDetails')}</h5></span>
                                                        <div className="hrHeadingDes"><hr /></div>
                                                        <h5>{t('Is Saturn Retrograde')} : {doshaSadhesati.is_saturn_retrograde === false ? t('No') : t('Yes')}</h5>
                                                        <h5>{t('Consideration Date')} : {doshaSadhesati ? doshaSadhesati.consideration_date : ""}</h5>
                                                        <h5>{t('moonSign')}: {doshaSadhesati ? doshaSadhesati.moon_sign : ""}</h5>
                                                        <h5>{t('Saturn Sign')} : {doshaSadhesati ? doshaSadhesati.saturn_sign : ""}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 mt-2">
                                                <center>
                                                    <span className="dot ">
                                                        <div className="mt-3">
                                                            <h6 className='dotText'><b>{t('present')}</b></h6>
                                                        </div>
                                                        <hr />
                                                        <h4> <b> {
                                                            doshaSadhesati.sadhesati_status === false ? t('No') : t('Yes')
                                                        }</b></h4>
                                                    </span>
                                                </center>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardRight" >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>{t('conclusion')}</h5></span>
                                                        <div className="hrHeadingrep"><hr></hr></div>
                                                        <h5 className="description">{doshaSadhesati ? doshaSadhesati.is_undergoing_sadhesati : ""}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
                {/* <div className='backgroundMargin'></div> */}
                {/* -----------------------------------------Pitra Dosha--------------------------------------                */}
                <div className='container-fluid find_now'>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 mt-5">
                                <div class="card kalsarpaCard">
                                    <div className="card-header kalsarpaHeader">
                                        <center>
                                            <h4>{t('pitraAnalysis')}</h4>
                                        </center>
                                    </div>
                                    <div class="card-body kalsarpaCardBody">
                                        <div className="row basic kDoshaText">
                                            <div className='col-sm-12  '>
                                                <h5 className="textAlignment">{doshaPitra ? doshaPitra.what_is_pitri_dosha : ""}</h5>
                                            </div>
                                        </div>
                                        <hr className="hrHeadingName" />
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 ">
                                                <div className="card doshaCardLeft" >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>{t('effects')}</h5></span>
                                                        <div className="hrHeadingDes"><hr /></div>
                                                        <h5>
                                                            {doshaPitra.effects == null ? t('noPitra') : doshaPitra.effects}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 mt-2">
                                                <center>
                                                    <span className="dot ">
                                                        <div className="mt-3">
                                                            <h6 className='dotText'><b>{t('present')}</b></h6>
                                                        </div>
                                                        <hr />
                                                        <h4> <b>{doshaPitra.is_pitri_dosha_present === false ? t('No') : t('Yes')}</b></h4>
                                                    </span>
                                                </center>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardRight " >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>{t('conclusion')}</h5></span>
                                                        <div className="hrHeadingDes"  ><hr /></div>
                                                        <h5>{doshaPitra ? doshaPitra.conclusion : ""}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dosha;


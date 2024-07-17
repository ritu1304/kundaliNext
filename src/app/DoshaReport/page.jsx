"use client"
import React, { useEffect, useState } from 'react';
import KundliNavbar from '../../components/KundaliNavBar';

const Dosha = () => {
  const [kundliForm, setKundliForm] = useState(null);
  const [doshaKalsarpa, setDoshaKalsarpa] = useState(null);
  const [doshaManglik, setDoshaManglik] = useState(null);
  const [doshaSadhesati, setDoshaSadhesati] = useState(null);
  const [doshaPitra, setDoshaPitra] = useState(null);

  useEffect(() => {
    const formData = JSON.parse(sessionStorage.getItem('Form'));
    setKundliForm(formData);

    if (formData) {
      const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID; 
      const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY; 
      const baseUrl = process.env.NEXT_PUBLIC_SANTAN_BASE_URL; 

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          day: formData.day,
          month: formData.month,
          year: formData.year,
          hour: formData.hour,
          min: formData.min,
          place: formData.place,
          lat: formData.lat,
          lon: formData.lon,
          tzone: formData.tzone,
          maxRows: '6',
        }),
        headers: {
          Authorization: 'Basic ' + btoa(userId + ':' + apiKey),
          'Content-Type': 'application/json',
          'Accept-Language': localStorage.getItem('lng'),
        },
      };

      //  Kalsarpa Details
      fetch(`${baseUrl}/kalsarpa_details`, requestOptions)
        .then((response) => response.json())
        .then((data) => setDoshaKalsarpa(data))
        .catch((error) => console.error('Error fetching Kalsarpa details:', error));

      //  Manglik Details
      fetch(`${baseUrl}/manglik`, requestOptions)
        .then((response) => response.json())
        .then((data) => setDoshaManglik(data))
        .catch((error) => console.error('Error fetching Manglik details:', error));

      //  Sadhesati Details
      fetch(`${baseUrl}/sadhesati_current_status`, requestOptions)
        .then((response) => response.json())
        .then((data) => setDoshaSadhesati(data))
        .catch((error) => console.error('Error fetching Sadhesati details:', error));

      // Fetch Pitra Dosha Details
      fetch(`${baseUrl}/pitra_dosha_report`, requestOptions)
        .then((response) => response.json())
        .then((data) => setDoshaPitra(data))
        .catch((error) => console.error('Error fetching Pitra Dosha details:', error));
    }
  }, []);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  
  return (
    

        <div div className="for_background ">
            <div className='container-fluid find_now '>
                <div className="container" >
                    <KundliNavbar />
                    <br />
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                    <center>
                                        <h4>kalDoshaAnalysis</h4>
                                    </center>
                                </div>
                                <div class="card-body kalsarpaCardBody">
                                    <div className="row basic kDoshaText">
                                        <div className='col-sm-12  '>
                                            <h5 className="textAlignment">kalDoshaDesc</h5>
                                        </div>
                                    </div>
                                    <div className="KalsarpaName mt-2"><h5><b>kalDoshaName:</b>  <b className="kHeading" >
                                        {doshaKalsarpa.name == null ? "Kalsarpa Dosha not present" : doshaKalsarpa.name}
                                    </b></h5>
                                        <hr className="hrHeadingName" />
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardLeft" >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>kalDoshaDes</h5></span>
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
                                                            <h6 className='dotText'><b>present</b></h6>
                                                        </div>
                                                        <hr className='circleLine' />
                                                        <h4> <b>{
                                                            doshaKalsarpa.present === false ? 'No' : 'Yes'
                                                        }</b></h4>
                                                    </span>
                                                </center>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardRight" >
                                                    <div className="card-body type">
                                                        <span className="kHeading text-center"><h5>Type</h5></span>
                                                        <div className="hrHeadingDes"  ><hr /></div>
                                                        <h5>
                                                            {doshaKalsarpa.type == null ? 'Congratulations' : ""}
                                                            {doshaKalsarpa.type === "Partial Ascending" ? 'Partial Ascending' : ''}
                                                            {doshaKalsarpa.type === "Full Descending" ? 'Full Descending' : ''}
                                                            {doshaKalsarpa.type === "Partial Descending" ? 'Partial Descending' : ''}
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
           
            
            <div className='container-fluid find_now'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mt-5">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                    <center>
                                        <h4>manglikAnalysis</h4>
                                    </center>
                                </div>
                                <div class="card-body kalsarpaCardBody">
                                    <div className="KalsarpaName mt-2"><h5><b>Manglik Effect:</b>  <b className="kHeading" >{doshaManglik ? doshaManglik.manglik_status : ""} </b></h5>
                                        <hr className="hrHeadingName" />
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardLeft" >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>manglikAnalysis</h5></span>
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
                                                            <h6 className='dotText'><b>percentage</b></h6>
                                                        </div>
                                                        <hr />
                                                        <h4 > <b>{doshaManglik ? doshaManglik.percentage_manglik_present : ""}</b></h4>
                                                    </span>
                                                </center>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                                <div className="card doshaCardRight" >
                                                    <div className="card-body ">
                                                        <span className="kHeading text-center"><h5>manglikBasAspe</h5></span>
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
             <div className='container-fluid find_now'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mt-5">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                    <center>
                                        <h4>sadhesatiAnalysis</h4>
                                    </center>
                                </div>
                                <div class="card-body kalsarpaCardBody">
                                    <div className="row basic kDoshaText">
                                        <div className='col-sm-12  '>
                                            <h5 className="textAlignment">sadhesatiDesc</h5>
                                        </div>
                                    </div>
                                    <hr className="hrHeadingName" />
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                            <div className="card doshaCardLeft" >
                                                <div className="card-body ">
                                                    <span className="kHeading text-center"><h5>otherDetails</h5></span>
                                                    <div className="hrHeadingDes"><hr /></div>
                                                    <h5>Is Saturn Retrograde : {doshaSadhesati.is_saturn_retrograde === false ? 'No' : 'Yes'}</h5>
                                                    <h5>Consideration Date : {doshaSadhesati ? doshaSadhesati.consideration_date : ""}</h5>
                                                    <h5>moonSign: {doshaSadhesati ? doshaSadhesati.moon_sign : ""}</h5>
                                                    <h5>Saturn Sign : {doshaSadhesati ? doshaSadhesati.saturn_sign : ""}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 mt-2">
                                            <center>
                                                <span className="dot ">
                                                    <div className="mt-3">
                                                        <h6 className='dotText'><b>present</b></h6>
                                                    </div>
                                                    <hr />
                                                    <h4> <b> {
                                                        doshaSadhesati.sadhesati_status === false ? 'No' : 'Yes'
                                                    }</b></h4>
                                                </span>
                                            </center>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                            <div className="card doshaCardRight" >
                                                <div className="card-body ">
                                                    <span className="kHeading text-center"><h5>conclusion</h5></span>
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
             <div className='container-fluid find_now'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mt-5">
                            <div class="card kalsarpaCard">
                                <div className="card-header kalsarpaHeader">
                                    <center>
                                        <h4>pitraAnalysis</h4>
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
                                                    <span className="kHeading text-center"><h5>effects</h5></span>
                                                    <div className="hrHeadingDes"><hr /></div>
                                                    <h5>
                                                        {doshaPitra.effects == null ? 'noPitra' : doshaPitra.effects}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 mb-2 mt-2">
                                            <center>
                                                <span className="dot ">
                                                    <div className="mt-3">
                                                        <h6 className='dotText'><b>present</b></h6>
                                                    </div>
                                                    <hr />
                                                    <h4> <b>{doshaPitra.is_pitri_dosha_present === false ? 'No' : 'Yes'}</b></h4>
                                                </span>
                                            </center>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                            <div className="card doshaCardRight " >
                                                <div className="card-body ">
                                                    <span className="kHeading text-center"><h5>conclusion</h5></span>
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
            </div> */}
        </div>
    </div >
)
}

export default Dosha;



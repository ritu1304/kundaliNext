"use client";
import { useEffect, useState } from 'react';
import KundliNavBar from '../../../components/KundaliNavBar'

const Remedies = () => {
    const [kundliForm, setKundliForm] = useState(null);
    const [bgemRemedies, setBgemRemedies] = useState(null);
    const [rudrakshaRemedies, setRudrakshaRemedies] = useState(null);
    const [sadhesatiRemedies, setSadhesatiRemedies] = useState(null);
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;

    useEffect(() => {
        const formData = JSON.parse(sessionStorage.getItem('Form'));
       

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
                    "maxRows": "6",
                }),
                headers: {
                    'Authorization': "Basic " + btoa( userId+ ":" + apiKey),
                    'Content-Type': 'application/json',
                    'Accept-Language': localStorage.getItem('lng') || 'en',  
                },
            };

            // Fetch gemstone remedies
            fetch(`https://json.astrologyapi.com/v1/basic_gem_suggestion`, OPTIONS)
                .then(response => response.json())
                .then(data => {
                    setBgemRemedies(data);
                })
                .catch(error => {
                    console.error('Error fetching gemstone remedies:', error);
                });

            // Fetch rudraksha suggestions
            fetch(`https://json.astrologyapi.com/v1/rudraksha_suggestion`, OPTIONS)
                .then(response => response.json())
                .then(data => {
                    setRudrakshaRemedies(data);
                })
                .catch(error => {
                    console.error('Error fetching rudraksha suggestions:', error);
                });

            // Fetch sadhesati remedies
            fetch(`https://json.astrologyapi.com/v1/sadhesati_remedies`, OPTIONS)
                .then(response => response.json())
                .then(data => {
                    setSadhesatiRemedies(data);
                })
                .catch(error => {
                    console.error('Error fetching sadhesati remedies:', error);
                });
        
    }, []);
    console.log("sadhesati", sadhesatiRemedies);
    console.log("gem", bgemRemedies)
    console.log("rudraksh", rudrakshaRemedies)


    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
      <div>

          <div div className="for_background wrapper1">
              <div className='container-fluid find_now  '>
                  <div className="container" >

                      <KundliNavBar />
                      <br />

                      {/* <Common remedies='a' show1='a' /> */}

                  </div>
                  <div className="container">

                      <div className='row kalAnalysis  basic'>
                          {/* <div className='col-sm-3 '>
                          </div> */}
                          <div className='col-sm-12 gemes'>
                              <div className="shadow kalHead">
                                  <div className="analysis">
                                      <h4>gemRem</h4>
                                  </div>
                              </div>
                              <div className="shadow backGem ">
                                  <div className="card-body gemBox">
                                      <div className="row gemRem">
                                          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 gemStone">
                                              <h5 className='gemHead'><b className='gemHeading'>lifeStone</b>: <br /> {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.name : ""} </h5>
                                              <hr />
                                              <h5><b>substitute</b> : {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.semi_gem : ""}</h5>
                                              <h5><b>finger</b> : {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.wear_finger : ""}</h5>
                                              <h5><b>weight(caret)</b> : {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.weight_caret : ""}</h5>
                                              <h5><b>day</b>: {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.wear_day : ""}</h5>
                                              <h5><b>deity</b>: {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.gem_deity : ""}</h5>
                                              <h5><b>'metal</b>: {bgemRemedies && bgemRemedies.LIFE ? bgemRemedies.LIFE.wear_metal : ""}</h5>
                                          </div>

                                          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 gemStone">
                                              <h5 className='gemHead'><b className='gemHeading'>BeneficStone</b> : <br /> {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.name : ""} </h5>
                                              <hr />
                                              <h5><b>substitute</b> : {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.semi_gem : ""}</h5>
                                              <h5><b>finger</b> : {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.wear_finger : ""}</h5>
                                              <h5><b>weight(caret)</b> : {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.weight_caret : ""}</h5>
                                              <h5><b>day</b>: {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.wear_day : ""}</h5>
                                              <h5><b>deity</b>: {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.gem_deity : ""}</h5>
                                              <h5><b>metal</b>: {bgemRemedies && bgemRemedies.BENEFIC ? bgemRemedies.BENEFIC.wear_metal : ""}</h5>
                                          </div>
                                          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                              <h5 className='gemHead'><b className='gemHeading'>luckyStone</b> : <br /> {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.name : ""} </h5>
                                              <hr />
                                              <h5><b>substitute</b>: {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.semi_gem : ""}</h5>
                                              <h5><b>finger</b>: {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.wear_finger : ""}</h5>
                                              <h5><b>weight(caret)</b> : {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.weight_caret : ""}</h5>
                                              <h5><b>day</b> : {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.wear_day : ""}</h5>
                                              <h5><b>deity</b> : {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.gem_deity : ""}</h5>
                                              <h5><b>metal</b> : {bgemRemedies && bgemRemedies.LUCKY ? bgemRemedies.LUCKY.wear_metal : ""}</h5>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          {/* <div className="col-sm-1"></div> */}
                      </div>


                  </div>
              </div>

              {/* ----------------------Rudraraksha Suggestion----------------------------------- */}
              <div className='container-fluid find_now'>
                  <div className="container">
                      <div className='row kalAnalysis'>
                          {/* <Common rudraksha='a' show1='a' /> */}
                          {/* <div className='col-sm-3'> </div> */}
                          <div className='col-sm-12 gemes'>
                              <div className=" shadow kalHead">
                                  <div className="analysis">
                                      <h4>rudrakshaSuggestion</h4>
                                  </div>
                              </div>
                              <div className="shadow backGem">
                                  <div className="card-body gemBox">
                                      <div>
                                          <center>
                                              <span >
                                                  {/* <img src={rudrakshaRemedies ? rudrakshaRemedies.img_url : ""} /> */}
                                                  <h2 className='rudraHead'><b className='gemHeading'>{rudrakshaRemedies ? rudrakshaRemedies.name : ""}</b></h2>
                                                  <h4>{rudrakshaRemedies ? rudrakshaRemedies.recommend : ""}</h4>
                                              </span>
                                          </center>
                                      </div>
                                      <hr />
                                      <h5 className='rudraDtails'>{rudrakshaRemedies ? rudrakshaRemedies.detail : ""}</h5>

                                  </div>

                              </div>
                          </div>
                          {/* <div className="col-sm-1"></div> */}
                      </div>

                  </div>
              </div>

              {/* -----------------------------------------Sadhesati Remedies-------------------------------------- */}
              <div className='container-fluid find_now'>
                  <div className="container">
                      <div className='row kalAnalysis '>
                          {/* <Common sadhesati='a' show1='a' /> */}
                          {/* <div className='col-sm-3 mt-5'> </div> */}
                          <div className='col-sm-12 gemes'>
                              <div className="sadow kalHead">
                                  <div className="analysis">
                                      <h4>sadhesatiIs</h4>
                                  </div>
                              </div>
                              <div className="shadow backGem ">
                                  <div className="card-body gemBox">

                                      <h5 className='sadhesatiIs'>{sadhesatiRemedies ? sadhesatiRemedies.what_is_sadhesati : ""}</h5>

                                      <hr />
                                      <h4><b className='gemHeading'>remedies</b></h4>
                                      {sadhesatiRemedies?.remedies?.map((remedy, index) => (
                                          <h5>{remedy}</h5>
                                      ))}

                                  </div>
                                  <br></br>
                              </div>
                          </div>
                          {/* <div className="col-sm-1"></div> */}
                      </div>
                      <br /><br />
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Remedies

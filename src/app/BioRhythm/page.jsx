"use client";
import React, { useEffect, useState } from 'react';
import KundliNavbar from '../../components/KundaliNavBar';

const BioRhythm = () => {
  const [biorhythm, setBiorhythm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBiorhythm = async () => {
      const formData = JSON.parse(sessionStorage.getItem('Form')) || {};
      console.log('Fetched Form Data:', formData); // Debug log

      const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
      const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
      const base_URL = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;
      const fullURL = `${base_URL}/biorhythm`;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`${userId}:${apiKey}`)}`,
          'Content-Type': 'application/json',
          'Accept-Language': localStorage.getItem('lng') || 'en',
        },
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
      };

      console.log('Request Options:', requestOptions); // Debug log
      console.log('Full URL:', fullURL); // Debug log

      try {
        const response = await fetch(fullURL, requestOptions);
        console.log('API Response:', response); // Debug log
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched Biorhythm Data:', data); // Debug log
        setBiorhythm(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching biorhythm:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchBiorhythm();
  }, []); // Empty dependency array ensures this runs only once on component mount

 


  return (
    <div className='container-fluid find_now wrapper1'>
      <div className="container">
        <KundliNavbar />
        <br />
        <div className="row">
          <div className="col-12 mb-5">
            <div className="card">
              <div className="card-header DailyheaderBg">
                <center>
                  <h4>Biorhythm</h4>
                </center>
              </div>
              <div className="card-body dailyPredictionCard">
                <p className='bioPara'>biorhythmDesc</p>
                <div className="row mt-2 kDoshaText">
                  <center>
                    <span className="DoshaHeading"><h3>biorhythmStatus</h3></span>
                  </center>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <center>
                      <span className="dotBioRhythm">
                        <div className="percentageText">
                          <center>{biorhythm?.physical?.percent || ''}</center>
                        </div>
                      </span>
                      <h5 className="status mt-1">physical</h5>
                    </center>
                    <center><h5>(%)</h5></center>
                  </div>
                  <div className="col-3">
                    <center>
                      <span className="dotBioRhythm">
                        <div className="percentageText">
                          <center>{biorhythm?.emotional?.percent || ''}</center>
                        </div>
                      </span>
                      <h5 className="status mt-1">emotional</h5>
                    </center>
                    <center><h5>(%)</h5></center>
                  </div>
                  <div className="col-3">
                    <center>
                      <span className="dotBioRhythm">
                        <div className="percentageText">
                          <center>{biorhythm?.intellectual?.percent || ''}</center>
                        </div>
                      </span>
                      <h5 className="status mt-1">intellectual</h5>
                    </center>
                    <center><h5>(%)</h5></center>
                  </div>
                  <div className="col-3">
                    <center>
                      <span className="dotBioRhythm">
                        <div className="percentageText">
                          <center>{biorhythm?.average?.percent || ''}</center>
                        </div>
                      </span>
                      <h5 className="status mt-1">average</h5>
                    </center>
                    <center><h5>(%)</h5></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioRhythm;


// "use client";
// import React, { useEffect, useState } from 'react';
// import KundliNavbar from '../../components/KundaliNavBar';

// const BioRhythm = () => {
//   const [biorhythm, setBiorhythm] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBiorhythm = async () => {
//       const kundliForm = {
//         day: '1', // Example: Replace with actual form data retrieval
//         month: '1',
//         year: '1990',
//         hour: '12',
//         min: '0',
//         place: 'Sample City',
//         lat: '0.0',
//         lon: '0.0',
//         tzone: '0'
//       };

//       const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
//       const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY ;
//       const base_URL = process.env.NEXT_PUBLIC_SANTAN_BASE_URL; // Make sure to set this in your .env file

//       const requestOptions = {
//         method: 'POST',
//         headers: {
//           'Authorization': `Basic ${Buffer.from(`${userId}:${apiKey}`).toString('base64')}`,
//           'Content-Type': 'application/json',
//           'Accept-Language': localStorage.getItem('lng') || 'en' // Example: Provide a default language if none found
//         },
//         body: JSON.stringify({
//           day: kundliForm.day,
//           month: kundliForm.month,
//           year: kundliForm.year,
//           hour: kundliForm.hour,
//           min: kundliForm.min,
//           place: kundliForm.place,
//           lat: kundliForm.lat,
//           lon: kundliForm.lon,
//           tzone: kundliForm.tzone,
//           maxRows: '6'
//         })
//       };

//       try {
//         const response = await fetch(`${base_URL}/biorhythm`, requestOptions);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setBiorhythm(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching biorhythm:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchBiorhythm();
//   }, []); // Empty dependency array ensures this runs only once on component mount

//   if (loading) {
//     return <p>Loading...</p>; // Optional: You can replace with a loader component
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>; // Optional: Handle error UI
//   }

//   return (
//     <div className='container-fluid find_now'>
//       <div className="container">
//         <KundliNavbar />
//         <br />
//         <div className="row">
//           <div className="col-sm-12 mb-5">
//             <div className="card">
//               <div className="card-header DailyheaderBg">
//                 <center>
//                   <h4>Biorhythm</h4>
//                 </center>
//               </div>
//               <div className="card-body dailyPredictionCard">
//                 <p className='bioPara'>biorhythmDesc</p>
//                 <div className="row mt-2 kDoshaText">
//                   <center>
//                     <span className="DoshaHeading"><h3>biorhythmStatus</h3></span>
//                   </center>
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col sm-3">
//                     <center>
//                       <span className="dotBioRhythm">
//                         <div className="percentageText">
//                           <center>{biorhythm?.physical?.percent || ''}</center>
//                         </div>
//                       </span>
//                       <h5 className="status mt-1">physical</h5>
//                     </center>
//                     <center><h5>(%)</h5></center>
//                   </div>
//                   <div className="col sm-3">
//                     <center>
//                       <span className="dotBioRhythm">
//                         <div className="percentageText">
//                           <center>{biorhythm?.emotional?.percent || ''}</center>
//                         </div>
//                       </span>
//                       <h5 className="status mt-1">emotional</h5>
//                     </center>
//                     <center><h5>(%)</h5></center>
//                   </div>
//                   <div className="col sm-3">
//                     <center>
//                       <span className="dotBioRhythm">
//                         <div className="percentageText">
//                           <center>{biorhythm?.intellectual?.percent || ''}</center>
//                         </div>
//                       </span>
//                       <h5 className="status mt-1">intellectual</h5>
//                     </center>
//                     <center><h5>(%)</h5></center>
//                   </div>
//                   <div className="col sm-3">
//                     <center>
//                       <span className="dotBioRhythm">
//                         <div className="percentageText">
//                           <center>{biorhythm?.average?.percent || ''}</center>
//                         </div>
//                       </span>
//                       <h5 className="status mt-1">average</h5>
//                     </center>
//                     <center><h5>(%)</h5></center>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BioRhythm;

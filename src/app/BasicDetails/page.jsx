// "use client";
// import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/components/KundaliNavBar';

// const baseUrl = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;

// const fetchBirthDetails = async (param) => {
//   const response = await fetch(`${baseUrl}/birth_details`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(param),
//   });
//   const data = await response.json();
//   return data;
// };

// const fetchAstroDetails = async (param) => {
//   const response = await fetch(`${baseUrl}/astro_details`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(param),
//   });
//   const data = await response.json();
//   console.log("==data===", response)
//   return data;
// };

// const BasicDetails = () => {
//   const [kundliAstroDetails, setKundliAstroDetails] = useState(null);
//   const [kundliBirthDetails, setKundliBirthDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     const storedFormData = JSON.parse(sessionStorage.getItem('Form'));
//     if (storedFormData) {
//       fetchDetails(storedFormData);
//     } 
//     else {
//       router.push(''); 
//     }
//   }, []);

//   const fetchDetails = async (formData) => {
//     try {
//       const [astroData, birthData] = await Promise.all([
//         fetchAstroDetails(formData),
//         fetchBirthDetails(formData),
//       ]);

//       setKundliAstroDetails(astroData);
//       setKundliBirthDetails(birthData);
//     } catch (error) {
//       setError('Error fetching details');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (error) {
//   //   return <div>{error}</div>;
//   // }

//   return (
//     <div className="container">
//       <Navbar />
//       <div className="row">
//         <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
//           <div className="col-md-12 shadow">
//             <div className="card">
//               <div className="card-header">
//                 <center>Basic Details</center>
//               </div>
//               <div className="card-body">
//                 <Table >
//                   <tbody>
//                     <tr>
//                       <th>Sign</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.sign : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Sign Lord</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.SignLord : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Charan</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.Charan : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Yog</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.Yog : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Karna</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.Karan : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Tithi</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.Tithi : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Yunja</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.yunja : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Tatva</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.tatva : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Name Alphabet</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.name_alphabet : ""}</td>
//                     </tr>
//                     <tr>
//                       <th>Paya</th>
//                       <td>{kundliAstroDetails ? kundliAstroDetails.paya : ""}</td>
//                     </tr>
                   
//                   </tbody>
//                 </Table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicDetails;


"use client";
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/KundaliNavBar';

const baseUrl = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;

const fetchBirthDetails = async (param, headers) => {
  const response = await fetch(`http://172.31.11.181:5001/birth_details`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  console.log("Astr details data", response)
  const data = await response.json();
  console.log("Astr details data", data)
  return data;
};

const fetchAstroDetails = async (param, headers) => {
  const response = await fetch(`http://172.31.11.181:5001/astro_details`, {
  // const response = await fetch(`${baseUrl}/astro_details`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  const data = await response.json();
  console.log("Astr details data", data)
  return data;
};

const BasicDetails = () => {
  const [kundliAstroDetails, setKundliAstroDetails] = useState(null);
  const [kundliBirthDetails, setKundliBirthDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedFormData = JSON.parse(sessionStorage.getItem('Form'));
    if (storedFormData) {
      fetchDetails(storedFormData);
    } else {
      router.push(''); 
    }
    console.log("stored form data", storedFormData)
  }, []);

  const fetchDetails = async (formData) => {
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    const LocalStore = localStorage.getItem('lng');
    
    const headers = {
      'Authorization': "Basic " + btoa(userId + ":" + apiKey),
      'Accept-Language': LocalStore
    };

    try {
      const [astroData, birthData] = await Promise.all([
        fetchAstroDetails(formData, headers),
        fetchBirthDetails(formData, headers),
      ]);

      setKundliAstroDetails(astroData);
      setKundliBirthDetails(birthData);
    } catch (error) {
      setError('Error fetching details');
    } finally {
      setLoading(false);
    }
    console.log("form data", formData)
  };

  

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="col-md-12 shadow">
            <div className="card">
              <div className="card-header">
                <center>Basic Details</center>
              </div>
              <div className="card-body">
                <Table>
                  <tbody>
                    <tr>
                      <th>Sign</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.sign : ""}</td>
                    </tr>
                    <tr>
                      <th>Sign Lord</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.SignLord : ""}</td>
                    </tr>
                    <tr>
                      <th>Charan</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.Charan : ""}</td>
                    </tr>
                    <tr>
                      <th>Yog</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.Yog : ""}</td>
                    </tr>
                    <tr>
                      <th>Karna</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.Karan : ""}</td>
                    </tr>
                    <tr>
                      <th>Tithi</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.Tithi : ""}</td>
                    </tr>
                    <tr>
                      <th>Yunja</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.yunja : ""}</td>
                    </tr>
                    <tr>
                      <th>Tatva</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.tatva : ""}</td>
                    </tr>
                    <tr>
                      <th>Name Alphabet</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.name_alphabet : ""}</td>
                    </tr>
                    <tr>
                      <th>Paya</th>
                      <td>{kundliAstroDetails ? kundliAstroDetails.paya : ""}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;

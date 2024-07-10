// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="kundliNvRow ">
      <ul className="navbar-nav kundliSubNav">
        <li className="nav-item1 p-1  linksTab"><Link href="/BasicDetails" className="nav-link1" activeClassName="nav_link1"><p>Basic Details</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/DashaReport" className="nav-link1" activeClassName="nav_link1"><p>DashaReport</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/AshtakVarga" className="nav-link1" activeClassName="nav_link1"><p>Ashtak Varga</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/BioRhythm" className="nav-link1" activeClassName="nav_link1"><p>BioRhythm</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/DailyPrediction" className="nav-link1" activeClassName="nav_link1"><p>Daily Prediction</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/DashaReport" className="nav-link1" activeClassName="nav_link1"><p>Dasha Report</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/DoshaReport" className="nav-link1" activeClassName="nav_link1"><p>Dosha Report</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/HoroScopeChart" className="nav-link1" activeClassName="nav_link1"><p>HoroScope Chart</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/LifeReport" className="nav-link1" activeClassName="nav_link1"><p>Life Report</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/PlanetaryDetails" className="nav-link1" activeClassName="nav_link1"><p>Planetary Details</p></Link></li>
        <li className="nav-item1 p-1  linksTab"><Link href="/Remedies" className="nav-link1" activeClassName="nav_link1"><p>Remedies</p></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// import React from 'react'
// import Link from 'next/link'; 

// const KundliNavbar = () => {
//     const kundliLinks = [
//         {

//             link: '/Kundali/BasicDetails',
//             id: 1,
//             linkName: "Basic Details"
//         },
//         {

//             link: '/Kundali/HoroscopeCharts',
//             id: 2,
//             linkName: "Horoscope Chart"
//         },
//         {
//             link: '/Kundali/PlanetDetails',
//             id: 3,
//             linkName: "Planetary Details"
//         },
//         {
//             link: '/Kundali/Dasha',
//             id: 4,
//             linkName: "Dasha Report"
//         },
//         {
//             link: '/Kundali/Dosha',
//             id: 5,
//             linkName: "Dosha Report"
//         },
//         {
//             link: '/Kundali/Remedies',
//             id: 6,
//             linkName: "Remedies"
//         },
//         {
//             link: '/Kundali/LifeReports',
//             id: 7,
//             linkName: "Life Report"
//         },
//         {
//             link: '/Kundali/AshtakVarga',
//             id: 8,
//             linkName: "Ashtak Varga"
//         },
//         {
//             link: '/Kundali/DailyPrediction',
//             id: 9,
//             linkName: "Daily Prediction"
//         },
//         {
//             link: '/Kundali/BioRhythm',
//             id: 10,
//             linkName: "Biorhythm"
//         },



//     ]
   

//     return (
//         <div className=''>
//             <div className="row ">
//                 <div className="kundliNvRow ">
//                     <ul className="navbar-nav kundliSubNav">
//                         {kundliLinks.map((item) => {
//                             return (
//                                 <li className="nav-item1 p-1  linksTab">
//                                     <Link
//                                         className="nav-link1"
//                                         exact
//                                         to={item.link}
//                                         activeClassName="nav_link1"

//                                     >
//                                         {item.linkName}
//                                     </Link>
//                                 </li>

//                             )
//                         })}

//                     </ul>
//                 </div>



//             </div>


//         </div>
//     )
// }

// export default KundliNavbar

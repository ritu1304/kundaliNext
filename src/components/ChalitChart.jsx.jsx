"use client"
import React, { useEffect, useRef, useState } from 'react';

const ChalitChart = () => {
  const [houseData, setHouseData] = useState([]);
  const kundliForm = JSON.parse(sessionStorage.getItem('Form'));
  var LocalStore = localStorage.getItem('lng');
  var language;
  if (LocalStore === null) {
    language = "en"
  } else {
    language = LocalStore;
  }
 
  const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
  const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;
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
      "lineColor": "#F29726"

    }),
    headers: {
      'Authorization': "Basic " + btoa(userId + ":" + apiKey),
      'Content-Type': 'application/json',
      'Accept-Language': language
    },
  };
  useEffect(() => {
    fetch(`${baseUrl}/kundali/horaChart/CHALIT/${language}`, OPTIONS)
      .then(response => response.json()).then(data => setHouseData(data))
  }, []); // Empty dependency array ensures useEffect runs once on mount
  return (
    <svg className='horoCharts'
      // style={{ height: '460px', width: '429px', marginLeft: '-64px', marginBottom:'-23px', marginTop:'-30px' }}
    >
      {/* House 1 */}
      <g>
        <polygon
          className='polygon'
          points="225 56.25,140.625 140.625,225 225,309.375 140.625"
          fill={houseData[0]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="52%" y="45%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[0]?.sign}
        </text>
        {houseData[0]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="42%"
            y="20%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[0]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[0]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[0]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[0]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[0]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 2 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 56.25, 140.625 140.625,225 56.25"
          fill={houseData[1]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="33%" y="27%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[1]?.sign}
        </text>
        {houseData[1]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="35%"
            y="12%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="35%" dy="1.2em">{houseData[1]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="35%" dy="1.2em">{houseData[1]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="35%" dy="1.2em">{houseData[1]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="35%" dy="1.2em">{houseData[1]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="35%" dy="1.2em">{houseData[1]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 3 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 225,140.625 140.625,56.25 56.25"
          fill={houseData[2]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="29%" y="31%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[2]?.sign}
        </text>
        {houseData[2]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="21%"
            y="25%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >

            <tspan className = "chartFontSize" x="21%" dy="1.2em" >{houseData[2]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="21%" dy="1.2em">{houseData[2]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="21%" dy="1.2em" >{houseData[2]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="21%" dy="1.2em">{houseData[2]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="21%" dy="1.2em">{houseData[2]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 4 */}
      <g>
        <polygon
          className='polygon'
          points="140.625 140.625,56.25 225,140.625 309.375,225 225"
          fill={houseData[3]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="48%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[3]?.sign}
        </text>
        {houseData[3]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="30%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="30%" dy="1.2em">{houseData[3]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="30%" dy="1.2em">{houseData[3]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="30%" dy="1.2em">{houseData[3]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="30%" dy="1.2em">{houseData[3]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="30%" dy="1.2em">{houseData[3]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 5 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 225,140.625 309.375,56.75 393.75"
          fill={houseData[4]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="29%" y="68%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[4]?.sign}
        </text>
        {houseData[4]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="20%"
            y="61%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="20%" dy="1.2em">{houseData[4]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="20%" dy="1.2em">{houseData[4]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="20%" dy="1.2em">{houseData[4]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="20%" dy="1.2em">{houseData[4]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="20%" dy="1.2em">{houseData[4]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 6 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 393.75,140.625 309.375,225 393.75"
          fill={houseData[5]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="33%" y="71%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[5]?.sign}
        </text>
        {houseData[5]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="33%"
            y="71%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan>x="50%" dy="1.2em" */}
            <tspan className = "chartFontSize" x="33%" dy="1.2em">{houseData[5]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="33%" dy="1.2em">{houseData[5]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="33%" dy="1.2em">{houseData[5]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="33%" dy="1.2em">{houseData[5]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="33%" dy="1.2em">{houseData[5]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 7 */}
      <g>
        <polygon
          className='polygon'
          points="225 225,140.625 309.375,225 393.75,309.375 309.375"
          fill={houseData[6]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="53%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[6]?.sign}
        </text>
        {houseData[6]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="52%"
            y="58%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="52%" dy="1.2em" >{houseData[6]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[6]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em" >{houseData[6]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[6]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="52%" dy="1.2em">{houseData[6]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 8 */}
      <g>
        <polygon
          className='polygon'
          points="225 393.75,309.375 309.375,393.75 393.75"
          fill={houseData[7]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="73%" y="73%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[7]?.sign}
        </text>
        {houseData[7]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="71%"
            y="73%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="71%" dy="1.2em">{houseData[7]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="71%" dy="1.2em">{houseData[7]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="71%" dy="1.2em">{houseData[7]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="71%" dy="1.2em">{houseData[7]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="71%" dy="1.2em">{houseData[7]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 9 */}
      <g>
        <polygon
          className='polygon'
          points="393.75 225,309.375 309.375,393.75 393.75"
          fill={houseData[8]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="76%" y="69%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[8]?.sign}
        </text>
        {houseData[8]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="85%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[8]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[8]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[8]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[8]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[8]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 10 */}
      <g>
        <polygon
          className='polygon'
          points="309.375 140.625,393.75 225,309.375 309.375,225 225"
          fill={houseData[9]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="57%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[9]?.sign}
        </text>
        {houseData[9]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="73%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="73%" dy="1.2em">{houseData[9]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="73%" dy="1.2em">{houseData[9]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="73%" dy="1.2em">{houseData[9]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="73%" dy="1.2em">{houseData[9]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="73%" dy="1.2em">{houseData[9]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 11 */}
      <g>
        <polygon
          className='polygon'
          points="393.75 56.25,309.375 140.625,393.75 225"
          fill={houseData[10]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="77%" y="31%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[10]?.sign}
        </text>
        {houseData[10]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="85%"
            y="23%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className = "chartFontSize" x="85%" dy="1.2em" >{houseData[10]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[10]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em" >{houseData[10]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[10]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="85%" dy="1.2em">{houseData[10]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>
      {/* House 12 */}
      <g>
        <polygon
          className='polygon'
          points="225 56.25,309.375 140.625,393.75 56.25"
          fill={houseData[11]?.planets.length > 0 ? 'green' : 'gray'}
        />
        <text x="73%" y="25%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {houseData[11]?.sign}
        </text>
        {houseData[11]?.planets.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="72%"
            y="12%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{houseData[0].planetSmall[planetIndex]}</tspan>  x="50%" dy="1.2em" */}
            <tspan className = "chartFontSize" x="72%" dy="1.2em" >{houseData[11]?.planet_degree[0]}</tspan>
            <tspan className = "chartFontSize" x="72%" dy="1.2em">{houseData[11]?.planet_degree[1]}</tspan>
            <tspan className = "chartFontSize" x="72%" dy="1.2em" >{houseData[11]?.planet_degree[2]}</tspan>
            <tspan className = "chartFontSize" x="72%" dy="1.2em">{houseData[11]?.planet_degree[3]}</tspan>
            <tspan className = "chartFontSize" x="72%" dy="1.2em">{houseData[11]?.planet_degree[4]}</tspan>

          </text>
        ))}
      </g>


    </svg>
  );
};

export default ChalitChart;

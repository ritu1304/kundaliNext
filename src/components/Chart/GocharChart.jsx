"use client"
import React, { useEffect, useState } from 'react';
import moment from 'moment';
const GocharChart = () => {
  const [laganTablePanchang, setLaganTablePanchang] = useState([]);
  let LocalStore = localStorage.getItem('lng');
  const kundliForm = JSON.parse(sessionStorage.getItem('Form'));
  const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID; 
  const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY; 
  const [date, setDate] = useState(new Date());
  const currentTime = new Date();
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': "Basic " + btoa(userId + ":" + apiKey),
        'Content-Type': 'application/json',
        'Accept-Language': LocalStore
      },
      body: JSON.stringify(
        {
          "day": moment(date).format('DD'),
          "month": moment(date).format('M'),
          "year": moment(date).format('yy'),
          "hour": currentTime.getHours(),
          "min": currentTime.getMinutes(),
          "lat": kundliForm?.lat || 25.2138156,
            "lon": kundliForm?.lon || 75.8647527,
            "tzone": kundliForm?.tzone || 5.5,
        })
    }
        useEffect(() => {
            fetchGocharData();
            },[])
    
    
    
 
  const fetchGocharData = async () => {
        

    try {
        const response = await fetch(`https://json.astrologyapi.com/v1/panchang_chart/sunrise`, requestOptions);
        const data = await response.json();
       setLaganTablePanchang(data);
    } catch (error) {
        console.error('Error fetching  data:', error);
    }
};
  return (
    <svg
      className='horoCharts'

    >
      {/* House 1 */}
      <g>
        <polygon
          className='polygon'
          points="225 56.25,140.625 140.625,225 225,309.375 140.625"
          fill={laganTablePanchang[0]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="52%" y="45%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[0]?.sign}
        </text>
        {laganTablePanchang[0]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="42%"
            y="20%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[0]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 2 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 56.25, 140.625 140.625,225 56.25"
          fill={laganTablePanchang[1]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="33%" y="27%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[1]?.sign}
        </text>
        {laganTablePanchang[1]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="35%"
            y="12%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="35%" dy="1.2em">{laganTablePanchang[1]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 3 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 225,140.625 140.625,56.25 56.25"
          fill={laganTablePanchang[2]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="29%" y="31%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[2]?.sign}
        </text>
        {laganTablePanchang[2]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="21%"
            y="25%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >

            <tspan className="chartFontSize" x="21%" dy="1.2em" >{laganTablePanchang[2]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="21%" dy="1.2em" >{laganTablePanchang[2]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="21%" dy="1.2em">{laganTablePanchang[2]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 4 */}
      <g>
        <polygon
          className='polygon'
          points="140.625 140.625,56.25 225,140.625 309.375,225 225"
          fill={laganTablePanchang[3]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="48%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[3]?.sign}
        </text>
        {laganTablePanchang[3]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="30%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="30%" dy="1.2em">{laganTablePanchang[3]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 5 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 225,140.625 309.375,56.75 393.75"
          fill={laganTablePanchang[4]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="29%" y="68%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[4]?.sign}
        </text>
        {laganTablePanchang[4]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="20%"
            y="61%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="20%" dy="1.2em">{laganTablePanchang[4]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 6 */}
      <g>
        <polygon
          className='polygon'
          points="56.25 393.75,140.625 309.375,225 393.75"
          fill={laganTablePanchang[5]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="33%" y="71%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[5]?.sign}
        </text>
        {laganTablePanchang[5]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="33%"
            y="71%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan>x="50%" dy="1.2em" */}
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="33%" dy="1.2em">{laganTablePanchang[5]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 7 */}
      <g>
        <polygon
          className='polygon'
          points="225 225,140.625 309.375,225 393.75,309.375 309.375"
          fill={laganTablePanchang[6]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="53%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[6]?.sign}
        </text>
        {laganTablePanchang[6]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="52%"
            y="58%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="52%" dy="1.2em" >{laganTablePanchang[6]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em" >{laganTablePanchang[6]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="52%" dy="1.2em">{laganTablePanchang[6]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 8 */}
      <g>
        <polygon
          className='polygon'
          points="225 393.75,309.375 309.375,393.75 393.75"
          fill={laganTablePanchang[7]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="73%" y="73%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[7]?.sign}
        </text>
        {laganTablePanchang[7]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="71%"
            y="73%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="71%" dy="1.2em">{laganTablePanchang[7]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 9 */}
      <g>
        <polygon
          className='polygon'
          points="393.75 225,309.375 309.375,393.75 393.75"
          fill={laganTablePanchang[8]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="76%" y="69%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[8]?.sign}
        </text>
        {laganTablePanchang[8]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="85%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[8]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 10 */}
      <g>
        <polygon
          className='polygon'
          points="309.375 140.625,393.75 225,309.375 309.375,225 225"
          fill={laganTablePanchang[9]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="57%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[9]?.sign}
        </text>
        {laganTablePanchang[9]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="73%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="73%" dy="1.2em">{laganTablePanchang[9]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 11 */}
      <g>
        <polygon
          className='polygon'
          points="393.75 56.25,309.375 140.625,393.75 225"
          fill={laganTablePanchang[10]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="77%" y="31%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[10]?.sign}
        </text>
        {laganTablePanchang[10]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="85%"
            y="23%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan> */}
            <tspan className="chartFontSize" x="85%" dy="1.2em" >{laganTablePanchang[10]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em" >{laganTablePanchang[10]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="85%" dy="1.2em">{laganTablePanchang[10]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>
      {/* House 12 */}
      <g>
        <polygon
          className='polygon'
          points="225 56.25,309.375 140.625,393.75 56.25"
          fill={laganTablePanchang[11]?.planet.length > 0 ? 'green' : 'gray'}
        />
        <text x="73%" y="25%" dominantBaseline="middle" textAnchor="middle" fill="red">
          {laganTablePanchang[11]?.sign}
        </text>
        {laganTablePanchang[11]?.planet.map((planet, planetIndex) => (
          <text
            key={planetIndex}
            x="72%"
            y="12%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="blue"
          >
            {/* <tspan className = "chartFontSize">{laganTablePanchang[0].planetSmall[planetIndex]}</tspan>  x="50%" dy="1.2em" */}
            <tspan className="chartFontSize" x="72%" dy="1.2em" >{laganTablePanchang[11]?.planet_small[0]}</tspan>
            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[1]}</tspan>
            <tspan className="chartFontSize" x="72%" dy="1.2em" >{laganTablePanchang[11]?.planet_small[2]}</tspan>
            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[3]}</tspan>
            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[4]}</tspan>
            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[5]}</tspan>
            <tspan className="chartFontSize" x="72%" dy="1.2em">{laganTablePanchang[11]?.planet_small[6]}</tspan>

          </text>
        ))}
      </g>


    </svg>
  );
};

export default GocharChart;

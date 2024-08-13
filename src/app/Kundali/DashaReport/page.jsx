"use client"
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import KundliNavbar from '../../../components/KundaliNavBar';

const Dasha = () => {
    const [kundliForm, setKundliForm] = useState(null);
    const [lagnaChart, setLagnaChart] = useState(null);
    const [majorVdasha, setMajorVdasha] = useState([]);
    const [currentYoginidasha, setCurrentYoginidasha] = useState(null);
    const [majorYoginidasha, setMajorYoginidasha] = useState([]);
    const [currentChardasha, setCurrentChardasha] = useState(null);
    const [majorChardasha, setMajorChardasha] = useState([]);
    const [subVdasha, setSubVdasha] = useState([]);
    const [pratyantar, setPratyantar] = useState([]);
    const [sookshma, setSookshma] = useState([]);

    const [mahaPlanet, setMahaPlanet] = useState({});
    const [antarPlanet, setAntarPlanet] = useState({});
    const [pratyantarPlanet, setPratyantarPlanet] = useState({});
    const [mahaPlanetShow, setMahaPlanetShow] = useState({});
    const [antarPlanetShow, setAntarPlanetShow] = useState({});
    const [pratyantarPlanetShow, setPratyantarPlanetShow] = useState({});
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    let LocalStore = localStorage.getItem('lng');
    const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
    const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_SANTAN_BASE_URL;
    const todayDate = new Date();

    useEffect(() => {
        const formData = JSON.parse(sessionStorage.getItem('Form'));
        if (formData) {
            setKundliForm(formData);
        }
    }, []);

    useEffect(() => {
        if (kundliForm) {
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
                    'Accept-Language': LocalStore
                },
            };

            fetchData(OPTIONS);
        }
    }, [kundliForm]);

    const fetchData = async (OPTIONS) => {
        try {
            const lagnaResponse = await fetch(`${baseUrl}/kundali/horaChart/LAGNA/${LocalStore}`, OPTIONS);
            const lagnaData = await lagnaResponse.json();
            setLagnaChart(lagnaData);

            const majorVdashaResponse = await fetch(`${baseUrl}/kundali/majorVdasha_details/${LocalStore}`, OPTIONS);
            const majorVdashaData = await majorVdashaResponse.json();
            setMajorVdasha(Array.from(majorVdashaData));

            const currentYoginidashaResponse = await fetch(`${baseUrl}/current_yogini_dasha`, OPTIONS);
            const currentYoginidashaData = await currentYoginidashaResponse.json();
            setCurrentYoginidasha(currentYoginidashaData);

            const majorYoginidashaResponse = await fetch(`${baseUrl}/major_yogini_dasha`, OPTIONS);
            const majorYoginidashaData = await majorYoginidashaResponse.json();
            setMajorYoginidasha(Array.from(majorYoginidashaData));

            const currentChardashaResponse = await fetch(`${baseUrl}/current_chardasha`, OPTIONS);
            const currentChardashaData = await currentChardashaResponse.json();
            setCurrentChardasha(currentChardashaData);

            const majorChardashaResponse = await fetch(`${baseUrl}/major_chardasha`, OPTIONS);
            const majorChardashaData = await majorChardashaResponse.json();
            setMajorChardasha(Array.from(majorChardashaData));

            fetchSubVdasha('SUN', OPTIONS);
            fetchPratyantar('SUN', 'SUN', OPTIONS);
            fetchSookshma('SUN', 'SUN', 'SUN', OPTIONS);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchSubVdasha = async (planet, OPTIONS) => {
        try {
            const response = await fetch(`${baseUrl}/kundali/sub_vdasha_details/${planet}/${LocalStore}`, OPTIONS);
            const data = await response.json();
            setSubVdasha(data);
        } catch (error) {
            console.error('Error fetching sub vdasha:', error);
        }
    };

    const fetchPratyantar = async (mahaPlanet, planet, OPTIONS) => {
        try {
            const response = await fetch(`${baseUrl}/kundali/sub_sub_vdasha_details/${mahaPlanet}/${planet}/${LocalStore}`, OPTIONS);
            const data = await response.json();
            setPratyantar(data);
        } catch (error) {
            console.error('Error fetching pratyantar:', error);
        }
    };

    const fetchSookshma = async (mahaPlanet, antarPlanet, planet, OPTIONS) => {
        try {
            const response = await fetch(`${baseUrl}/kundali/sub_sub_sub_vdasha_details/${mahaPlanet}/${antarPlanet}/${planet}/${LocalStore}`, OPTIONS);
            const data = await response.json();
            setSookshma(data);
        } catch (error) {
            console.error('Error fetching sookshma:', error);
        }
    };

    const antarDasha = (planet, planetShow) => {
        fetchSubVdasha(planet, OPTIONS);
        setShow(true);
        setShow1(false);
        setShow2(false);
        setMahaPlanet(planet);
        setMahaPlanetShow(planetShow);
    };

    const pratyantDasha = (planet, planetShow) => {
        fetchPratyantar(mahaPlanet, planet, OPTIONS);
        setShow1(true);
        setShow2(false);
        setAntarPlanet(planet);
        setAntarPlanetShow(planetShow);
        window.scrollTo(0, 500);
    };

    const sookshmDasha = (planet, planetShow) => {
        fetchSookshma(mahaPlanet, antarPlanet, planet, OPTIONS);
        setPratyantarPlanet(planet);
        setPratyantarPlanetShow(planetShow);
        setShow2(true);
    };
  return (
    <div className='wrapper1'>
      <KundliNavbar />
      <h1>Dosha Report</h1>
      <p>This is Dosha Report Section</p>
    </div>
  );
};

export default Dasha

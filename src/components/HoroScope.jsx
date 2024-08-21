"use client"
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
 import { CModal, CModalBody, CModalHeader } from '@coreui/react';
import "react-datepicker/dist/react-datepicker.css";
import wishesEng from '../../public/Best wishes image.png'
import wishesHin from '../../public/BestWishesHindi.png'
import aries from '../../public/Aries1.png'
import taurus from '../../public/Taurus1.png'
import gemini from '../../public/Gemini1.png'
import cancer from '../../public/Cancer1.png'
import leo from '../../public/Leo1.png'
import virgo from '../../public/Virgo1.png'
import libra from '../../public/Libra1.png'
import scorpio from '../../public/Scorpio1.png'
import sagittarius from '../../public/Sagittarius1.png'
import capricorn from '../../public/Capricorn1.png'
import aquarius from '../../public/Aquarius1.png'
import pisces from '../../public/Pisces1.png'
import Image from 'next/image';
import KundaliForm from './Kundali/Form'
const Horoscope = () => {
    const [open1, setOpen1] = useState(false);
    const [show, setShow] = useState(false);
    const today = new Date();
    const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    
    const [open, setOpen] = useState(false);
    const [moonModal, setMoonModal] = useState(false);
    const [visible, setVisible] = useState(false);
    const [StoreResp, setStoreResp] = useState("");
    const [name, setName] = useState();
    const [image, setImage] = useState();

    

    const language = typeof window !== 'undefined' ? localStorage.getItem('lng') || 'en' : 'en';

    const handleOpen1 = () => {
        setOpen1(true);
    }

    const onClose = () => setOpen1(false);
    const handleClose1 = () => setOpen1(false);
var signID;
    const zodiacSignConstant = [
        { name: 'Aries', label: "Aries", image: aries, value: "aries", id: 1, date: 'aries date' },
        { name: 'Cancer', label: "Cancer", image: cancer, value: "cancer", id: 2, date: 'cancer date' },
        { name: 'Libra', label: "Libra", image: libra, value: "libra", id: 3, date: 'libra date' },
        { name: 'Capricorn', label: "Capricorn", image: capricorn, value: "capricorn", id: 4, date: 'capricorn date' },
        { name: 'Taurus', label: "Taurus", image: taurus, value: "taurus", id: 5, date: 'taurus date' },
        { name: 'Leo', label: "Leo", image: leo, value: "leo", id: 6, date: 'leo date' },
        { name: 'Scorpio', label: "Scorpio", image: scorpio, value: "scorpio", id: 7, date: 'scorpio date' },
        { name: 'Aquarius', label: "Aquarius", image: aquarius, value: "aquarius", id: 8, date: 'Aquarius date' },
        { name: 'Gemini', label: "Gemini", image: gemini, value: "gemini", id: 9, date: 'Gemini date' },
        { name: 'Virgo', label: "Virgo", image: virgo, value: "virgo", id: 10, date: 'Virgo date' },
        { name: 'Sagittarius', label: "Sagittarius", image: sagittarius, value: "sagittarius", id: 11, date: 'Sagittarius date' },
        { name: 'Pisces', label: "Pisces", image: pisces, value: "pisces", id: 12, date: 'Pisces date' },
    ];

    const onSubmit = async (e, value) => {
        e.preventDefault();
        setName(value.name);
        setImage(value.image);

        try {
            // const res = await axios.post(`/api/sun_sign_prediction/${value.value}?lang=${language}`);
             
            // setStoreResp(res.data);
            // setVisible(!visible);
            setOpen(true);
        } catch (error) {
        }
    }

    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo({ top: 650, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`container-fluid `}>
            <div className="container">
                <div className="row">
                    {/* <Common Horoscope='a' />
                    <Common Horoscope='a' show='a' /> */}
                    <h1 className="heading-desc">HOROSCOPE</h1>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 paragraphHoro">
                        <span>
                            <p className={`for_paragraph textAlignment resText `}>
                            Sun is known by various names like Bhanu, Dinkar Diwakar, Bhaskar, Arun, Prabhakar, Dinesh, Tarini, Graha Pati, Graha etc. The sun is called the king of the solar system because it is very luminous and more powerful than all the planets. Surya Rashifal is a modern method of astrology which shows only the position of Sun at the time of birth. It gives results by looking at the position of the Sun in those 12 zodiac signs, negates all other planets. In astrology, the Sun is called the king of the planets. A strong Sun can bestow you with wealth, stamina, might etc. While a negative or weak Sun makes you poor, low in respect and low in self-esteem. Each zodiac sign has its own characteristics, whom a strong sun works to refine. Sun sign is determined according to the month of your birth. There are 12 types of zodiac signs. Each zodiac has its own specialty and qualities and they have their own owner. There are 27 constellations in 12 zodiac signs.
                            </p>
                            <p className='for_paragraph textAlignment fullText'>
                                horoPara
                            </p>
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <center>
                            {language === 'hi' ?
                            
                                <Image src={wishesHin} alt="wishes" width="100%" /> :
                                <Image src={wishesEng} alt="wishes" width="100%" />
                            }
                        </center>
                    </div>
                </div>

                <div className="row mt-2 mb-2">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h3><center><b>~Get today~</b></center></h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <center><h1 className='text-center h1_color'><b>Sun Sign Prediction</b></h1></center>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 mb-4">
                        <center>
                            <button type='submit' className='btn moonSignPredictionBtn' onClick={handleOpen1}>Moon Sign Prediction</button>
                        </center>
                    </div>
                </div>

                <div className="row mb-5">
                    {zodiacSignConstant.map((item) => (
                        <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 zoom' key={item.id}>
                            <div className='zodiac_sign_img zoom'>
                                <Image
                                    type="text"
                                    id='western'
                                    onClick={e => onSubmit(e, item)}
                                    src={item.image}
                                    alt={item.label}
                                />
                            </div>
                            <h5 className='horaaName' onClick={e => onSubmit(e, item)}>
                                <b className={item.id === signID ? "westernHighlight rounded" : ""}>{item.name}</b>
                            </h5>
                            <h6 className='horaaName'>
                                <b className={item.id === signID ? "westernHighlight rounded" : ""}>{item.date}</b>
                            </h6>
                        </div>
                    ))}
                </div>

                <div className='row'>
                     <CModal
                        className={`zodiacModal zodiacModal_for_width `}
                        fullscreen="sm"
                        scrollable
                        visible={visible}
                        onClose={() => setVisible(false)}
                    >
                        <CModalHeader className='cModalHeaderCSS'>
                            <div className="row">
                                <div className="col-2 col-lg-2">
                                    {/* <Image src={image} alt='Profile' className='img-fluid' /> */}
                                </div>
                                <div className="col-8 col-lg-8">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className='text-center'>
                                                {/* {name} */}
                                                </h5>
                                        </div>
                                        <div className="col-12">
                                            <h6 className='text-center'>
                                                {/* {date} */}
                                                </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CModalHeader>

                        <CModalBody className='HoroscopeModalBody'>
                            <div className="row borderBottom">
                                <div className="col-sm-6 modalData1">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Personal Life</b></h5>
                                    {/* <p>{StoreResp?.prediction?.personal_life}</p> */}
                                </div>
                                <div className="col-sm-6">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Health</b></h5>
                                    {/* <p>{StoreResp?.prediction?.health}</p> */}
                                </div>
                            </div>
                            <div className="row borderBottom">
                                <div className="col-sm-6 modalData1">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Travel</b></h5>
                                    {/* <p>{StoreResp?.prediction?.travel}</p> */}
                                </div>
                                <div className="col-sm-6">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Luck</b></h5>
                                    {/* <p>{StoreResp?.prediction?.luck}</p> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 modalData1">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Emotions</b></h5>
                                    {/* <p>{StoreResp?.prediction?.emotions}</p> */}
                                </div>
                                <div className="col-sm-6">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Profession</b></h5>
                                    {/* <p>{StoreResp?.prediction?.profession}</p> */}
                                </div>
                            </div>
                        </CModalBody>
                    </CModal> 
                </div>

                <div>
                    <div className='row'>
                        <CModal
                            className={`zodiacModal zodiacModal_for_width `}
                            fullscreen="sm"
                            scrollable
                            visible={open1}
                            onClose={handleClose1}
                        >
                            <CModalBody className='HoroscopeModalBody'>
                                <button className="close-button1" onClick={onClose}>
                                    &#10006;
                                </button>
                                <KundaliForm datas='data' />
                            </CModalBody>
                        </CModal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Horoscope;

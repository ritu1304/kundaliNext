
"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CModal, CModalBody, CModalHeader } from '@coreui/react';
import "react-datepicker/dist/react-datepicker.css";
 import wishesEng from '../../../public/Best wishes image.png'
import wishesHin from '../../../public/BestWishesHindi.png'
import aries from '../../../public/Aries1.png'
import taurus from '../../../public/Taurus1.png'
import gemini from '../../../public/Gemini1.png'
import cancer from '../../../public/Cancer1.png'
import leo from '../../../public/Leo1.png'
import virgo from '../../../public/Virgo1.png'
import libra from '../../../public/Libra1.png'
import scorpio from '../../../public/Scorpio1.png'
import sagittarius from '../../../public/Sagittarius1.png'
import capricorn from '../../../public/Capricorn1.png'
import aquarius from '../../../public/Aquarius1.png'
import pisces from '../../../public/Pisces1.png'
import Image from 'next/image';
import ReadMoreReadLess from '@/components/ReadMoreReadLess';
import Common from '@/components/Common';

function Horoscope() {
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const language = typeof window !== 'undefined' ? localStorage.getItem('lng') || 'en' : 'en';
    
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
    const handleClick = async (sign) => {
        setLoading(true);
        try {
            const response = await fetch(`https://apis.sanatanjyoti.com/api/getZodiacData?sign=${sign.value}&language=${language}`, {
                method: 'GET', 
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setModalData({
                name: sign.name,
                image: sign.image,
                prediction: data.prediction,
                date: new Date().toLocaleDateString(), 
            });
            
            setOpen(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    const text = "Sun is known by various names like Bhanu, Dinkar Diwakar, Bhaskar, Arun, Prabhakar, Dinesh, Tarini, Graha Pati, Graha etc. The sun is called the king of the solar system because it is very luminous and more powerful than all the planets. Surya Rashifal is a modern method of astrology which shows only the position of Sun at the time of birth. It gives results by looking at the position of the Sun in those 12 zodiac signs, negates all other planets. In astrology, the Sun is called the king of the planets. A strong Sun can bestow you with wealth, stamina, might etc. While a negative or weak Sun makes you poor, low in respect and low in self-esteem. Each zodiac sign has its own characteristics, whom a strong sun works to refine. Sun sign is determined according to the month of your birth. There are 12 types of zodiac signs. Each zodiac has its own specialty and qualities and they have their own owner. There are 27 constellations in 12 zodiac signs."

    return (
        <div className={`container-fluid wrapper1`}>
             <div className="container">
                 {/* <div className="row"> */}
                 {/* <Common Horoscope='a' /> */}
                 <Common Horoscope='a' show='a' />
                 {/* </div> */}

               <div className="row">
                     <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 paragraphHoro">
                      
                             <ReadMoreReadLess text={text} maxLength={300} />
                                 
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
                            <button type='submit' className='btn moonSignPredictionBtn'
                            //  onClick={handleOpen1}
                             >Moon Sign Prediction</button>
                        </center>
                    </div>
                </div>
            {/* <div className='row mb-5'> */}
            <div className='flex-hora'>
                {zodiacSignConstant.map((item) => (
                    <div className='col-sm-3 col-md-3 col-lg-3 col-xl-3 zoom mb-4' key={item.id}>
                        <div className='zodiac_sign_img zoom'>
                            <Image
                                type="text"
                                onClick={() => handleClick(item)}
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                        <h5 className='horaaName'>
                            <b>{item.name}</b>
                        </h5>
                        <h6 className='horaaName'>
                            <b>{item.date}</b>
                        </h6>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <CModal className='zodiacModal zodiacModal_for_width' fullscreen="sm" scrollable visible={open} onClose={() => setOpen(false)}>
                <CModalHeader>
                    <div className="row">
                        <div className="col-2">
                            <Image src={modalData?.image} alt={modalData?.name} className='img-fluid' />
                        </div>
                        <div className="col-8">
                            <h5 className='text-center'>{modalData?.name}</h5>
                            <h6 className='text-center'>{modalData?.date}</h6>
                        </div>
                    </div>
                </CModalHeader>
                <CModalBody className='HoroscopeModalBody'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                        <div className="row borderBottom">
                                 <div className="col-sm-6 modalData1">
                                     <h5 className='text-center mt-1 horoHeadingColor'><b>Personal Life</b></h5>
                                     <p>{modalData?.prediction?.personal_life}</p>
                                 </div>
                                 <div className="col-sm-6">
                                     <h5 className='text-center mt-1 horoHeadingColor'><b>Health</b></h5>
                                     <p>{modalData?.prediction?.health}</p>
                                 </div>
                             </div>
                            <div className="row borderBottom">
                                <div className="col-sm-6 modalData1">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Travel</b></h5>
                                    <p>{modalData?.prediction?.travel}</p>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Luck</b></h5>
                                    <p>{modalData?.prediction?.luck}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 modalData1">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Emotions</b></h5>
                                    <p>{modalData?.prediction?.emotions}</p>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className='text-center mt-1 horoHeadingColor'><b>Profession</b></h5>
                                    <p>{modalData?.prediction?.profession}</p>
                                </div>
                            </div>
                            </>
                    )}
                </CModalBody>
            </CModal>
        </div>
        </div>
    );
}

export default Horoscope;


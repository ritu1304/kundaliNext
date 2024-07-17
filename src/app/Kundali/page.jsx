"use client"
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Kunda from '../../components/Form';
// import Common from '../Common/Common';
import "react-datepicker/dist/react-datepicker.css";
// import './Kundali.css';
// import KundliList from '../Profiles/KundliList';
import ReadMoreReact from 'read-more-react';
import ReactReadMoreReadLess from "react-read-more-read-less";
// import mixpanel from 'mixpanel-browser';
import kundaliEng from '../../../public/Kundli image english 38 kb.png'
import kundaliHin from '../../../public/Kundli image Hindi 38 kb.png'
import Image from 'next/image';

function Kundali(props) {
    useEffect(() => {
        // mixpanel.track('kundliPageViewed');
    }, []);
    const token_v = localStorage.getItem("token");
    const { t } = useTranslation();
    var LocalStore = localStorage.getItem('lng');
    return (
        <div>
            <div className='container-fluid find_now '>
                <div className='container'>
                    {/* <Common Kundali='a' show='a' /> */}
                    <h1 className="heading-desc">Kundali</h1>
                    <div className='row mt-1 textAlignment'>
                        
                        <span>
                            <p className='for_paragraph textAlignment resText'>
                                {/* <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={t('Read more ▼')}
                                    readLessText={t('Read less ▼')}
                                >
                                    {t('kundliDes')}
                                </ReactReadMoreReadLess> */}
                            </p>
                            <p className='for_paragraph textAlignment fullText'>
                            The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.
      
                            </p>

                        </span>
                    </div>
                    {/* {/ -----------------Form for kundli---------------- /} */}
                    <div className="row mt-4" style={{marginRight:"110px"}}>
                        <div className="col-xs-12 col-sm-7 col-md-12 col-lg-7 col-xl-7 mt-2">
                            {/* <div class="text-center">
                                <img className='svg_img pt-2 ' alt='iii' src="https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/KundaliImage.png" width="80%"></img>
                            </div> */}
                            <center>
                                <div className=" ">
                                    {(LocalStore == 'en') || (LocalStore == null) ?
                                        <Image className='svg_img pt-2 ' alt='kundli' src={kundaliEng} width="60%"></Image> :
                                        <Image className='svg_img pt-2 ' alt='kundli' src={kundaliHin} width="60%"></Image>
                                    }

                                </div>
                            </center>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-12 col-lg-5 col-xl-5 kundli-div mt-2">
                            <Kunda dataMain="dataMain" name="kundli" />
                        </div>
                    </div>
                    {/* {form} */}
                    <div className='row ' >
                        <div className='col-sm-5 col-md-5 text-center' >
                        </div>
                    </div>
                    {/* {token_v ?
                        <div className="row">
                            <div className="col-sm-12 ">
                                <KundliList />
                            </div>
                            <hr />
                        </div> : ""} */}
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
export default Kundali
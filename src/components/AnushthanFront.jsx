"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-phone-input-2/lib/style.css'
// import Payment from './Payment';
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
 import RepTalk from './RepTalk';
import ReactReadMoreReadLess from "react-read-more-read-less";
 import UpdateProfile from './UpdateProfile';
// import mixpanel from 'mixpanel-browser';



const style_modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'hidden',
    p: 4,
    width: "auto"
}

const AnushthanFront = () => {
    const { t } = useTranslation();
    // const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let LocalStore = localStorage.getItem('lng');
    const [anushthanData, setAnushthanData] = useState([])
    const [formModal, setFormModal] = React.useState(false)
    const [thanksModal, setThanksModal] = React.useState(false)
    const [PanditModal, setPanditModal] = React.useState(false)
    const [planData, setPlanData] = useState([])
    const firstName = localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName")
    const location = localStorage.getItem("location")
    const userId = localStorage.getItem("id")
    useEffect(() => {
        // mixpanel.track('anushthanPageViewed');
    }, []);
    var language;
    if (LocalStore == "hi") {
        language = false;
    }
    else {
        language = true;
    }
    useEffect(() => {
        let OPTIONS = {
            url: `/api/getAnushthans?language=${language}&anushthanStatus=true`,
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        };
        axios(OPTIONS)
            .then((res) => {
                setAnushthanData(res?.data)
            })
    }, [])

    // -----------------------------Talk with Pandit ji ------------------------------------
    const onSubmitPandit = () => {
        // mixpanel.track('talkToPanditJiClicked', { buttonName: 'talkToPanditJiClicked' });
        setFormModal(false)
        setThanksModal(false)
        if (userId != null) {
            handleOpen()

            setPanditModal(true)
            let OPTIONS = {
                url: `/api/get-plans`,
                method: "get",
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {
                    setPlanData(res?.data)
                })
        }
        else {
            toast.error("Please Sign In First");
        }
    }
    const anushthanOrders = (e) => {
        e.preventDefault();
        if (userId != null) {
            // mixpanel.track('getScheduledAnushthanClicked', { buttonName: 'getScheduledAnushthanClicked' });
            let OPTIONS = {
                url: `/api/getScheduledAnushthanByUserId?userId=${userId}`,
                method: "get",
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {

                    // 
                    if (res.data.data.length > 0) {
                        // navigate('/AnusthanFront/AnushthanOrders')
                    }
                    else {
                        toast.error("No Scheduled Anushthans");
                    }
                })

        }
        else {
            toast.error("Please Sign In First");
        }
    }


    const handleMixPanelClick = (linkName) => {
        // mixpanel.track(linkName, { buttonName: linkName });

    };

    return (
        <div className="for_background ">

            <div className="container-fluid find_now">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 marginResp">
                        <div className="blogBox my-3 text-center">
                        <h2 style={{fontSize:'20px'}} className='fw-bold pt-2 textSize'>{t('Anusthan')}</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <span>
                                <p className='for_paragraph textAlignment resText'>
                                    <ReactReadMoreReadLess
                                        charLimit={200}
                                        readMoreText={t('Read more ▼')}
                                        readLessText={t('Read less ▼')}
                                    >
                                        {t('What is Anushthan')}
                                    </ReactReadMoreReadLess>
                                </p>
                                <p className='for_paragraph textAlignment fullText'>
                                    {t('What is Anushthan')}
                                </p>

                            </span>
                        </div>
                    </div>
                    <div className="row " style={{ margin: '5px' }}>
                      
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-2 ">
                            <center>
                                <button onClick={(e) => anushthanOrders(e)} className='btn homeButtonsHeader'>{t('Scheduled Anushthan')}</button>

                            </center>
                        </div>
                        <div className=" col-sm-12 col-md-4 col-lg-4 mt-2" >
                            {(firstName === "null" || firstName === undefined || firstName === '' ||
                                lastName === "null" || lastName === undefined || lastName === '' ||
                                location === "null" || location === undefined || location === '') ?
                                 <UpdateProfile btName="rep" /> 
                                
                                 : 
                                
                                 <RepTalk />
                                 }
                            {/* <button class="btn anushthanSubmitButton" >



                            </button> */}

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 mt-2 ">
                            <center>
                                {(firstName === "null" || firstName === undefined || firstName === '' ||
                                    lastName === "null" || lastName === undefined || lastName === '' ||
                                    location === "null" || location === undefined || location === '') ? <UpdateProfile btName="pandit" /> : <button className='btn homeButtonsHeader' onClick={(e) => onSubmitPandit(e)}>{t('Talk to Pandit Ji')}</button>}


                            </center>


                        </div>
                    </div>
                    <div className="row mt-2">
                        {anushthanData.data?.map((data, index) => {
                            return (<>
                                <div key={index} >
                                    <div className="row">
                                        <div class="card mb-2" >
                                            <div class="card-body">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                                        <img src={data.anushthanImage} alt="bihariJi" className='bankeBihariImage' width="100%" />
                                                    </div>
                                                    <div className="col-sm-12 col-md-8 col-lg-8">
                                                        <h4 className='AnushthanHeading mt-1'>{data.anushthanName}</h4>
                                                        <div className='flex'>
                                                            <h5 className='mt-2'
                                                                dangerouslySetInnerHTML={{
                                                                    __html: data ? data.subject : null,
                                                                }}
                                                            >
                                                            </h5>
                                                            <Link class="link-primary" to={`/AnusthanFront/${data.anushthanId}`}>
                                                                <h5 className=''> {t('Know More')}...</h5>
                                                            </Link>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-3">
                                                                <h5><b>{t('Price')} :</b> &#x20B9; {data.price}/-</h5>

                                                            </div>

                                                            {/* {data.discountPercentage !== 0.0 ?
                                                                <div className="col-sm-12 col-md-4"> <h5><b>{t('Offer Price')} :</b> &#x20B9; {data.offerPrice}/-</h5>
                                                                </div> : ""
                                                            } */}


                                                            <div className="col-sm-12 col-md-3">
                                                                <h5><b>{t('Time')} :</b> {data.days} {t('Days')}</h5>

                                                            </div>

                                                            <div className="-col-sm-12 col-md-4 ">
                                                                {(firstName === "null" || firstName === undefined || firstName === '' ||
                                                                    lastName === "null" || lastName === undefined || lastName === '' ||
                                                                    location === "null" || location === undefined || location === '') ? <UpdateProfile btName="bookNow" /> : <Link to={`/AnusthanFront/${data.anushthanId}`} onClick={() => handleMixPanelClick("bookNowAnushthanClicked")}>
                                                                    <h4 className=' btn homeButtonsHeader'> {t('Book Now')}</h4>
                                                                </Link>}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    <Box className='modal_bg_color' sx={style_modal}>
                        <i className="fa-solid fa-x xIcon xButton" onClick={handleClose}></i>

                        {PanditModal ? <Typography id="modal-modal-description " sx={{ mt: 2 }}>
                            <div className='row mt-2'>

                                {/* <Payment /> */}
                            </div>
                        </Typography> : ""}

                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default AnushthanFront
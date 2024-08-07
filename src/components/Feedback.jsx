"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState} from 'react';
// import './Feedback.css'
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
// import mixpanel from 'mixpanel-browser';
import sanatanLogo from '../../public/Headerlogo35kb.png'
import Image from 'next/image'

import axios from 'axios';
const style_modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const Feedback = () => {
    const userId = localStorage.getItem('id');

    const { t } = useTranslation();
    const [input, setInput] = useState({
        userFeedback: '',
        modulesList: '',
    });
    const [open, setOpen] = React.useState(0);
    const [buttonDi, setButtonDi] = useState(false);

    const handleOpen = () => {
        // mixpanel.track('feedback');
        setOpen(1);
    }
    const handleCloses = () => {
        setOpen(0);
    };

    const onInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitFeedback = (e) => {
        e.preventDefault();
        // mixpanel.track('feedbackBtn', { buttonName: 'feedbackBtn' });
        setButtonDi(true);

        // Check if userFeedback and modulesList are filled
        if (!input.userFeedback || !input.modulesList) {
            // You can display an error message or handle it accordingly
            toast.error('Please fill in all required fields');
            setButtonDi(false);
            return;
        }

        const data = {
            userId: userId,
            userFeedback: input.userFeedback,
            module: input.modulesList,
        };

        let OPTIONS = {
            url: `/api/create_feedback`,
            method: 'Post',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        };

        axios(OPTIONS)
            .then((res) => {
                // mixpanel.track('feedbackSent', { buttonName: 'feedbackSent' });
                // Handle success if needed
            })
            .catch((error) => {
                // Handle error if needed
                console.error('Error submitting feedback:', error);
            })
            .finally(() => {
                setTimeout(() => {
                    setButtonDi(false);
                    setOpen(0);
                }, 1000);
            });
    };
    return (
        <div>

            <button onClick={handleOpen} className="btn  control_for_btns text-white"  >{t('Feedback')}</button>

            <Modal
                open={open}
                onClose={handleCloses}
            >
                <Box className='modal_bg_color responsiveModalBoxFeedback' sx={style_modal}>

                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        <span >
                            <i class="fa-sharp fa-solid fa-xmark cross" onClick={handleCloses}></i>
                        </span>
                        <center>
                            <Image className='sanatan_logo_signin mb-3' src={sanatanLogo} alt='hii' width="130px"></Image>

                            <h4><b>{t('Feedback')}</b></h4>
                            <p className='text_signin'>{t('SanatanText')}</p>
                        </center>

                        <div className="row">
                            <div className="col-sm-6">
                               
                            </div>
                            <form className="" action="" method="post">
                                <select className="selectModule" id="modulesList" onChange={onInputChange} name="modulesList" >
                                    <option >{t('Select Module')}</option>
                                    <option value="Horoscope" >{t('Horoscope')}</option>
                                    <option value="Anushthan" >{t('Anushthan')}</option>
                                    <option value="Kundli">{t('Kundli')}</option>
                                    <option value="Match Making">{t('Match Making')}</option>
                                    <option value="Panchang">{t('Panchang')}</option>
                                    <option value="Kundli">{t('Blog')}</option>
                                    <option value="Festival">{t('Festival')}</option>
                                    <option value="Registration">{t('Registration')}</option>
                                    <option value="Sign Up">{t('Sign Up')}</option>
                                </select>
                            </form>
                            <form class="" onSubmit={submitFeedback}>

                                <div className="form-group name_margin">
                                    
                                    <textarea name='userFeedback' className="feedArea" id="userFeedback" onChange={onInputChange} rows="4" cols="40"></textarea>
                                    <span id='message'></span>
                                </div>

                                <div class="">
                                    <center>

                                        <button class="SignUPButton"
                                            type="submit" disabled={buttonDi}>
                                            {t('Submit')}
                                        </button>
                                    </center>



                                </div>
                            </form>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Feedback
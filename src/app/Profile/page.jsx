"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Outlet, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import axios from "axios";
// import { formUser } from "../../Redux/Action/kundliDetails"
// import { matchFormData } from "../../Redux/Action/matchDetails"
// import { SIGNIN_VERIFY_USER_SUCCESS, } from '../../Redux/constant/actionType'
// import { signinUserUpdate } from '../../Redux/Action/updateAction'
import Modal from '@mui/material/Modal';
import $ from 'jquery';
import UpdateProfile from '@/components/UpdateProfile';
// import mixpanel from 'mixpanel-browser';

// import defaultProfile from "../../images/defaultProfile.png"
const Profiles = () => {
    // useEffect(() => {
    //     mixpanel.track('profilePageViewed');
    // }, []);
    // const navigate = useNavigate();
    const { t } = useTranslation();
    // const dispatch = useDispatch();
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicChanged, setProfilePicChanged] = useState(false);

    const [show, setShow] = useState(false)
    const [showMatch, setShowMatch] = useState(false)
    const [openDiv, setOpenDiv] = useState(true)
    const [data, setData] = useState("")
    const [userData, setUserData] = useState("")
    let UserNames = localStorage.getItem("UserName")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [location, setLocation] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    // const [image, setImage] = useState([])
    const [image, setImage] = useState(null);
    const [selectedKundliData, setSelectedKundliData] = useState("")
    const [dataMatch, setDataMatch] = useState("")
    const [open1, setOpen1] = React.useState(false);
    const handleClose1 = () => setOpen1(false);
    const [fullName, setFullName] = useState({
        fullName: "",
    });
    const userId = localStorage.getItem("id");//userLoginVerify.result.userId;
    var nameOfUser = localStorage.getItem('firstName')
    console.log(nameOfUser)
    var IdStore = localStorage.getItem("id")
    useEffect(() => {

        const url = `https://apis.sanatanjyoti.com/api/get_User_By_Id?userId=${IdStore}`
        axios.get(url)
            .then((res) => {
                setUserData((res?.data?.data))

            })

    }, [])
    useEffect(() => {
        if (userData) {
            setName(userData.firstName)
            setGender(userData.gender)
            setLocation(userData.location)
            setMobileNo(userData.mobileNo)
            setImage(userData.profileUrl)
            // setImage({ preview: userData.imageProfileUrl, raw: userData.imageProfileName })
        }

    }, [userData])
    useEffect(() => {
        // This effect will run whenever profilePicChanged state changes
        if (profilePicChanged) {
            const url = `https://apis.sanatanjyoti.com/api/get_User_By_Id?userId=${IdStore}`
            axios.get(url)
                .then((res) => {
                    setUserData((res?.data?.data))

                })
        }
    }, [profilePicChanged]);

    const onSubmit = () => {
        // mixpanel.track('addMatchDetailsClicked', { buttonName: 'addMatchDetailsClicked' });

        // navigate('/Profiles/MatchProfiles')
        window.scrollTo(0, 500);
    }
    useEffect(() => {
        const url = `https://apis.sanatanjyoti.com/api/get_matchMaking_list?userId=${IdStore}&matchmakingStatus=true`
        axios.get(url)
            .then((res) => {
                // setDataMatch(res)
                setDataMatch((res?.data?.data).length)
            })
    }, [])

    useEffect(() => {
        const url = `/kundali/get_Kundalis_by_userId?userId=${IdStore}&search=&kundaliStatus=true`
        axios.get(url)
            .then((res) => {
                // setData(res)
                setData((res?.data?.data).length)

            })
    }, [])

    const match = () => {
        mixpanel.track('getSaveMatchesClicked', { buttonName: 'getSaveMatchesClicked' });

        // navigate('/Profiles/MatchList')
        window.scrollTo(0, 500);

    }

    //    ----------------------------------------For Kundli----------------------------------------
    const onSubmitKundli = () => {
        mixpanel.track('addKundliDetailsClicked', { buttonName: 'addKundliDetailsClicked' });

        navigate('/Profiles/KundliProfiles')
        window.scrollTo(0, 500);
    }
    const kundli = () => {
        // mixpanel.track('getSavedKundliClicked', { buttonName: 'getSavedKundliClicked' });
        // navigate('/Profiles/KundliList')
        window.scrollTo(0, 500);

    }

    const dataUpdate = {
        userId: userId,
        fullName: name,
        "gender": gender,
        "location": location,
        "mobileNo": mobileNo
    }

    const cancelupdate = () => {
        // setOpen1(true)
        setOpenDiv(true)
    }
    const update = (e) => {
        e.preventDefault();
        if (dataUpdate) {
            dispatch(signinUserUpdate(dataUpdate))
            return {
                type: SIGNIN_VERIFY_USER_SUCCESS,
                payload: false,
                result: localStorage.getItem('userData'),
                verifySigninIn: true,
            }

        }
    }
    return (
        <div className='wrapper1 mt-14'>
            <div className="container-fluid containerColor find_now">
                <div className="container ">
                    <div className="row profile">

                        <div className="col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
                        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
                            <div className="profile-content">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                                        <h1 className=' profileNameHeading mx-2'>
                                            {userData ? <>{userData.firstName} {userData.lastName}</> : "User"}
                                        </h1>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h2>{t('Profile')}</h2>
                                        <div style={{ display: 'inline-block', position: 'relative' }}>
                                            <img
                                                src={image ? image : "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/images+(1).png"}
                                                alt="Profile"
                                                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                                            />


                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 ">
                                    </div>


                                </div>

                                <hr />
                                <div className="row mt-2">
                                    <div className="col-sm-12">
                                        <div className="card profileCard" >
                                            <div className="card-body">
                                                {openDiv ? <>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                            <h5> <b className='profHead'>{t('Mobile')}  : </b>{userData ? <>{userData.mobileNo}</> : "Not Mentioned"}</h5>
                                                        </div>
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                            <h5> <b className='profHead'>{t('Email')}  : </b>{userData ? <>{userData.email}</> : "Not Mentioned"}</h5>

                                                         </div>
                                                    </div>
                                                    <div className="row mt-1">
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                            <h5> <b className='profHead'>{t('Location')}  : </b>{userData ? <>{userData.location}</> : ""}</h5>
                                                        </div>

                                                    </div>

                                                    <div className="row updateIcon">
                                                        <div className="col-sm-12 ">
                                                           <UpdateProfile onProfilePicChange={() => setProfilePicChanged(true)} />
                                                        </div>
                                                    </div>
                                                </> : <>
                                                    <form className='updateUserDetails'>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                                <label htmlFor="icon" className="text-dark">
                                                                    Image :
                                                                </label>

                                                                <input
                                                                    alt="Category image"
                                                                    type="file"
                                                                    name="icon"
                                                                    className="form-control"

                                                                    accept="image/*"
                                                                />
                                                            </div>

                                                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                                <label>Enter your Name:

                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                                <label>Enter your Gender:

                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={gender}
                                                                    onChange={(e) => setGender(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                                <label>Enter your Location:

                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={location}
                                                                    onChange={(e) => setLocation(e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                                <label>Enter your Mobile:

                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    value={mobileNo}
                                                                    onChange={(e) => setMobileNo(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                                <center>
                                                                    <button className='btn btn-primary' onClick={update} >Save</button>

                                                                </center>
                                                            </div>
                                                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                                <center>
                                                                    <button className='btn btn-primary' onClick={cancelupdate} >Cancel</button>

                                                                </center>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                                        <center>
                                            <div className="card kundliProfilesCard" >
                                                <div className="card-body">
                                                    <div className="">
                                                        <h3 className="card-title"><b className='profHead'>{t('Kundli')}</b></h3>
                                                        <hr />
                                                    </div>
                                                    <div className='kundliList mt-5 mb-3'>
                                                        <h1>{data}</h1>
                                                    </div>
                                                    <div className="row buttonRow ">
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                                                            <center>
                                                                <button className='btn  profilesButton' onClick={onSubmitKundli} >{t('Add Kundli Details')}</button>
                                                            </center>
                                                        </div>
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                                                            <center>
                                                                <button className='btn  profilesButton' onClick={kundli} >{t('Saved Kundli')}</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </center>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                                        <center>


                                            <div className="card matchProfilesCard" >
                                                <div className="card-body">
                                                    <div className=''>
                                                        <h3 className="card-title"><b className='profHead'>{t('Match Making')}</b></h3>
                                                        <hr />
                                                    </div>
                                                    <div className='matchList mt-5 mb-3'>
                                                        <center>
                                                            <h1>{dataMatch}</h1>
                                                        </center>
                                                    </div>

                                                    <div className="row buttonRow">
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                                                            <center>
                                                                <button className='btn profilesButton' onClick={onSubmit} >{t('Add Match Details')}</button>
                                                            </center>
                                                        </div>
                                                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-2">
                                                            <center>
                                                                <button className='btn profilesButton' onClick={match} >{t('Saved Matches')}</button>
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </center>
                                    </div>

                                    <Outlet />
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
                        <br /><br />
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Profiles
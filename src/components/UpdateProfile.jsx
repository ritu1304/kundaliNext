"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import '../Login/Login.css';
// import GoogleSearchPlace from '../SearchPlace/GoogleSearchPlace';
// import mixpanel from 'mixpanel-browser';
import { FaEdit } from 'react-icons/fa'; // Font Awesome icons
import { MdEdit } from 'react-icons/md'; // Material Design icons
import { AiFillEdit } from 'react-icons/ai'; // Ant Design icons

const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  width: 'auto',
};

const UpdateProfile = (props) => {
  const { t } = useTranslation();

  // State variables
  const [profilePic, setProfilePic] = useState({ preview: '', raw: '' });
  const [image, setImage] = useState({ preview: "", raw: "" });

  const [mobileNo, setMobileNo] = useState('');
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [gender, setGender] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [timezone, setTimezone] = useState('');
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState('');

  // Validation function
  const validate = () => {
    let valid = true;
    if (!firstName?.trim()) {
      setFirstNameError('Please enter First Name');
      valid = false;
    } else {
      setFirstNameError('');
    }
    if (!lastName?.trim()) {
      setLastNameError('Please enter Last Name');
      valid = false;
    } else {
      setLastNameError('');
    }
    if (!email?.trim()) {
      setEmailError('Please enter Email');
      valid = false;
    } else {
      setEmailError('');
    }
    return valid;
  };

  useEffect(() => {
    let userID = localStorage.getItem('id');
    setFirstName(localStorage.getItem('firstName') === 'null' ? null : localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName') === 'null' ? null : localStorage.getItem('lastName'));
    setGender(localStorage.getItem('gender') === 'null' ? null : localStorage.getItem('gender'));
    setEmail(localStorage.getItem('email') === 'null' ? null : localStorage.getItem('email'));
    setMobileNo(localStorage.getItem('mobileNo') === 'null' ? null : localStorage.getItem('mobileNo'));
    setLocation(localStorage.getItem('location') === 'null' ? null : localStorage.getItem('location'));
    setLatitude(localStorage.getItem('lat') === 'null' ? null : localStorage.getItem('lat'));
    setLongitude(localStorage.getItem('lon') === 'null' ? null : localStorage.getItem('lon'));
    setTimezone(localStorage.getItem('tzone') === 'null' ? null : localStorage.getItem('tzone'));
    setPlace(localStorage.getItem('location') === 'null' ? null : localStorage.getItem('location'));
    setProfilePic({
      preview: localStorage.getItem('profileUrl') === 'null' ? null : localStorage.getItem('profileUrl'),
      raw: localStorage.getItem('profileName') === 'null' ? null : localStorage.getItem('profileName'),
    });
  }, []);

  const callbackFunction = (latitude, longitude, timezone, place) => {
    if (latitude && longitude && timezone && place) {
      setLatitude(latitude);
      setLongitude(longitude);
      setTimezone(timezone);
      setPlace(place);
    }
  };

  const handleOpen = () => {
    // mixpanel.track('editProfileClicked', { buttonName: 'editProfileClicked' });

    setOpen(true);

  }
  const handleClose = () => {
    setOpen(false);
  }

  let userID = localStorage.getItem('id');
  const updateDetails = () => {
    // mixpanel.track('updteProfileClicked', { buttonName: 'updteProfileClicked' });

    if (validate()) {

      const dataUpdate = {
        userId: userID,
        firstName: firstName,
        lastName: lastName,
        location: place,
        lat: latitude,
        lon: longitude,
        tzone: timezone,
        gender: gender,
        email: email,
      };

      let OPTIONS = {
        url: `https://apis.sanatanjyoti.com/api/update_user`,
        method: 'PUT',
        data: dataUpdate,
        headers: {
          'content-type': 'application/json',
        },
      };

      axios(OPTIONS)
        .then((res) => {
        //   mixpanel.track('updteProfileSuccess', { buttonName: 'updteProfileSuccess' });

          localStorage.setItem('FullName', res?.data?.data?.firstName);
          localStorage.setItem('firstName', res.data.data.firstName);
          localStorage.setItem('lastName', res.data.data.lastName);
          localStorage.setItem('location', res.data.data.location);
          localStorage.setItem('lat', res.data.data.lat);
          localStorage.setItem('lon', res.data.data.lon);
          localStorage.setItem('tzone', res.data.data.tzone);
          localStorage.setItem('gender', res.data.data.gender);
          localStorage.setItem('email', res.data.data.email);
          localStorage.setItem('mobileNo', res.data.data.mobileNo);
          window.location.reload();
        })
        .catch((error) => {
        //   mixpanel.track('updteProfileFailed', { buttonName: 'updteProfileFailed' });

        });
    }
  };

  const handleSubmitMobile = (event) => {

    event.preventDefault();
    updateDetails();
  };

  const handlePicChange = (event) => {
    const selectedPic = event.target.files[0];

    if (selectedPic) {
      if (selectedPic.size > 1024 * 1024) { // Check if image size is larger than 1MB
        compressImage(selectedPic, (compressedPic) => {
          setProfilePic({
            preview: URL.createObjectURL(compressedPic),
            raw: compressedPic,
          });

          uploadPic(compressedPic);
        });
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfilePic({
            preview: URL.createObjectURL(selectedPic),
            raw: selectedPic,
          });

          uploadPic(selectedPic);
        };
        reader.readAsDataURL(selectedPic);
      }
    }
  };

  const compressImage = (image, callback) => {
    const maxSize = 200 * 1024; // 200kb
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const maxWidth = 800; // Max width for the image
        const maxHeight = 600; // Max height for the image

        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          callback(new File([blob], image.name, { type: 'image/jpeg', lastModified: Date.now() }));
        }, 'image/jpeg', 0.7); // Adjust quality here
      };
    };
    reader.readAsDataURL(image);
  };

  const uploadPic = (selectedPic) => {
    const formData = new FormData();
    formData.append('file', selectedPic);
    formData.append('userId', userID);

    axios('https://apis.sanatanjyoti.com/api/user/image/upload', {
      method: 'POST',
      data: formData, 
    })
      .then(response => {
        if (response.ok) { 
        } else {
          console.error('Image upload failed');
        }
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };




  return (
    <div>
      <button onClick={handleOpen} className="btn  homeButtonsHeader">
        {(props.btName == "rep") ? t('Talk to representative') : (props.btName == "pandit") ? t('Talk to Pandit Ji') : (props.btName == "bookNow") ? t('Book Now') : 
        // <i class="fas fa-edit"></i>
        <FaEdit size={24} color="#8e2e0f" />
        // <AiFillEdit size={24} color="red" />
        // <MdEdit size={24} color="green" />
        }

      </button>
      <Modal scrollable open={open} onClose={handleClose}>
        <Box className="modal_bg_color modalbody responsiveModalBox " sx={style_modal}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            <span>
              <i className="fa-sharp fa-solid fa-xmark cross" onClick={handleClose}></i>
            </span>
            <div style={{ textAlign: 'center' }}>
              <h2>{t('Update Profile')} </h2>
              <div style={{ display: 'inline-block', position: 'relative' }}>
                <img
                  src={profilePic.preview ? profilePic.preview : 'https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/images+(1).png'}
                  alt="Profile"
                  style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                />

                <label htmlFor="fileInput" style={{ position: 'absolute', bottom: '10px', transform: 'translateX(-53%)', cursor: 'pointer' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#8e2e0f', border: '2px solid #ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/upload-icon-30.png" alt="Edit" style={{ width: '30px', height: '30px' }} />
                  </div>
                </label>
                <input id="fileInput" name="image" type="file" onChange={handlePicChange} accept="image/*" style={{ display: 'none' }} />

              </div>

            </div>
            <div className="row">
              <div className="col-sm-12">
                <center>
                  <h2>+{mobileNo}</h2>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <form onSubmit={handleSubmitMobile}>
                  <div className="row name_margin">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="label_form">
                        {t('First Name')}
                      </label>
                      <input
                        type="text"
                        className="form-control control"
                        placeholder={t('Please Enter First Name')}
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {firstNameError && <div className="error">{firstNameError}</div>}
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <label htmlFor="lastName" className="label_form">
                          {t('Last Name')}
                        </label>
                        <input
                          type="text"
                          className="form-control control"
                          placeholder={t('Please Enter Last Name')}
                          name="lastName"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        {lastNameError && <div className="error">{lastNameError}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div>
                        <label htmlFor="place" className="label_form">
                          {t('Select Location')}
                        </label>
                        {/* <GoogleSearchPlace parentCallback={callbackFunction} locationName={location} /> */}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <label htmlFor="email" className="label_form">
                          {t('Email')}
                        </label>
                        <input
                          className="form-control control"
                          type="email"
                          placeholder={t('Please Enter Email')}
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="error">{emailError}</div>}
                      </div>
                    </div>
                  </div>
                  <center>
                    <button className="SignUPButton" type="submit">
                      {t('Update')}
                    </button>
                  </center>
                </form>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProfile;

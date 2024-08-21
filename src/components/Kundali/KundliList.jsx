"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import DatePicker from 'react-datepicker';
// import GoogleSearchPlace from '../SearchPlace/GoogleSearchPlace';
// import mixpanel from 'mixpanel-browser';
import { useTranslation } from 'react-i18next';

const KundliList = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [filterSearch, setFilterSearch] = useState('');

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [gender, setGender] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [timezone, setTimezone] = useState('');
  const [place, setPlace] = useState('');

  const optns = [
    { value: 'female', label: t('female') },
    { value: 'male', label: t('male') },
  ];

  useEffect(() => {
    const IdStore = localStorage.getItem('id');
    const url = `/api/kundali/get_Kundalis_by_userId?userId=${IdStore}&search=${filterSearch}&kundaliStatus=true`;
    axios.get(url)
      .then((res) => {
        setData(res.data.data || []);
      })
      .catch((err) => console.error(err));
  }, [filterSearch]);

  const kundliSelector = (e, value) => {
    // mixpanel.track('viewSavedKundliClicked', { buttonName: 'viewSavedKundliClicked' });
    
    const url = `/api/kundali/get_kundali_data?kundaliId=${value}`;
    axios.get(url)
      .then((res) => {
        const formData = {
          name: res.data.data.name,
          day: res.data.data.day,
          month: res.data.data.month,
          year: res.data.data.year,
          place: res.data.data.place,
          hour: res.data.data.hour,
          min: res.data.data.min,
          lat: res.data.data.lat,
          lon: res.data.data.lon,
          tzone: res.data.data.tzone,
          gender: res.data.data.gender,
          dayOfWeek: res.data.data.day_of_birth,
        };
        // Assuming you want to store formData in localStorage or sessionStorage
        sessionStorage.setItem('formData', JSON.stringify(formData));
        router.push('/Kundali/BasicDetails');
      })
      .catch((err) => console.error(err));
  };

  const deleteKundli = (e, id) => {
    // mixpanel.track('deleteSaveKundliClicked', { buttonName: 'deleteSaveKundliClicked' });
    
    const url = `/api/kundali/delete_Kundali?kundaliId=${id}`;
    axios.put(url)
      .then(() => {
        // Refetch data after deletion
        const IdStore = localStorage.getItem('id');
        axios.get(`/api/kundali/get_Kundalis_by_userId?userId=${IdStore}&search=${filterSearch}&kundaliStatus=true`)
          .then((res) => {
            setData(res.data.data || []);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = (e) => {
    setFilterSearch(e.target.value);
  };

  const callbackFunction = (latitude, longitude, timezone, place) => {
    setLatitude(latitude);
    setLongitude(longitude);
    setTimezone(timezone);
    setPlace(place);
  };

  const onSubmit = () => {
    router.push('/Kundali/BasicDetails');
  };

  return (
    <div>
      <div className="container">
        {showList && (
          <div className="row mt-2">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <h4 className="saved mt-3"><b>{t('Your Saved Kundlis')} :</b></h4>
                <div className="proUnderline"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <form>
                  <div className="icon-input mt-3">
                    <input
                      className="icon-input__text-field px-4 w-100"
                      required
                      type="text"
                      placeholder={t('Search by Name or Mobile')}
                      value={filterSearch}
                      onChange={handleSearch}
                    />
                    <button className="fas fa-search icon-input__icon material-icons" type="submit"></button>
                  </div>
                </form>
              </div>
            </div>

            <div className="row mt-3">
              <div className="scrollableKundliList">
                {data.map((option) => (
                  <div key={option.kundaliId} className="col-sm-12 mt-3">
                    <div className="card matchProfile">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-9">
                            <h5 className="card-text">
                              <b className="cardsList">{option.name || ''}</b>
                            </h5>
                          </div>
                          <div className="col-sm-2">
                            <h6 className="clickToView" onClick={(e) => kundliSelector(e, option.kundaliId)}>{t('Click to View')}</h6>
                          </div>
                          <div className="col-sm-1">
                            <i className="fas fa-trash cursor-pointer" onClick={(e) => deleteKundli(e, option.kundaliId)}></i>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-4">
                            <h6><b className="cardsList">{t('Date of Birth')}</b> : {option.day || ''}/{option.month || ''}/{option.year || ''}</h6>
                          </div>
                          <div className="col-sm-4">
                            <h6><b className="cardsList">{t('Created Date')}</b> : {option.createdDate || ''}</h6>
                          </div>
                          <div className="col-sm-4">
                            <h6><b className="cardsList">{t('Location')}</b> : {option.place || ''}</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <h6><b className="cardsList">{t('Time of Birth')}</b> : {option.hour || ''}:{option.min || ''}</h6>
                          </div>
                          <div className="col-sm-4">
                            <h6><b className="cardsList">{t('Gender')}</b> : {option.gender || ''}</h6>
                          </div>
                          <div className="col-sm-4">
                            <h6><b className="cardsList">{t('Mobile')}</b> : {option.mobileNo || ''}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {showEditForm && (
          <div className="row matchMakingForms mt-5">
            <div className="col-sm-3 col-md-3"></div>
            <div className="col-sm-6 col-md-6 matchMakingMaleForm">
              <div className="card matchMakingFormTextBox">
                <div className="boxFormHeadingMale">
                  <h4 className="text-center boxHeadingText">{t('Enter Your Birth Details')}</h4>
                </div>
                <div className="card-body box_manage_margins_MatchForm">
                  <form className="">
                    <label className="label_form">{t('Name')}</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control inputField"
                      placeholder={t('EnterName')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div className="row mt-2">
                      <div className="col-sm-6 col-md-6">
                        <label className="label_form">{t('Date of birth')}</label>
                        <DatePicker
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          className="form-control inputField"
                          selected={date}
                          dateFormat="dd/MM/yyyy"
                          onChange={(e) => setDate(e)}
                        />
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <label className="label_form">{t('TimeSelect')}</label>
                        <input
                          type="time"
                          className="form-control inputField"
                          value={time}
                          onChange={(e) => setTime(e.currentTarget.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label_form">{t('Gender')}</label>
                      <select className="form-select control" value={gender} onChange={(e) => setGender(e.target.value)} required>
                        {optns.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 matchFormPlace">
                        <label className="label_form">{t('Select Birth Place')}</label>
                        {/* <GoogleSearchPlace type="submit" parentCallback={callbackFunction} required /> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3"></div>
            <br />
            <center className="mt-5">
              <button type="button" onClick={onSubmit} className="btn mb-4 matchMakingButton text-white">
                {t('Save')}
              </button>
            </center>
          </div>
        )}
      </div>
    </div>
  );
};

export default KundliList;

  "use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form = () => {
  const [show, setShow] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [dateToday, setDateToday] = useState(new Date());
  const [name, setName] = useState(
    JSON.parse(sessionStorage.getItem('Form')) ? JSON.parse(sessionStorage.getItem('Form')).name : ''
  );
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(
    JSON.parse(sessionStorage.getItem('Form'))
      ? JSON.parse(sessionStorage.getItem('Form')).hour + ':' + JSON.parse(sessionStorage.getItem('Form')).min
      : moment().format('HH:mm')
  );
  const [gender, setGender] = useState(
    JSON.parse(sessionStorage.getItem('Gender')) ? JSON.parse(sessionStorage.getItem('Gender')) : 'female'
  );
  const [hour, min] = time.split(':');
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [timezone, setTimezone] = useState("");
  const [place, setPlace] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaveSubmitting, setIsSaveSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const dayOfWeek = moment(date).format('dddd');
  const formData = {
    name,
    day: moment(date).format('DD'),
    month: moment(date).format('M'),
    year: moment(date).format('YY'),
    date: date ? moment(date).format('DD/MM/YYYY') : "",
    place,
    hour,
    min,
    lat: latitude,
    lon: longitude,
    tzone: timezone,
    gender,
    dayOfWeek,
    mobileNo: phoneNo,
  };
  var IdStore = localStorage.getItem("id");
  var dataKundliProfile = {
    "userId": IdStore,
    "name": name,
    "gender": gender,
    "day": moment(date).format('DD'),
    "month": moment(date).format('M'),
    "year": moment(date).format('YY'),
    "hour": hour,
    "min": min,
    "lat": latitude,
    "lon": longitude,
    "tzone": timezone,
    "mobileNo": phoneNo,
    "place": place,
    "kundaliStatus": "",
    "createdDate": moment(dateToday).format('dd/MM/yyyy'),
    "modifiedDate": "",
    "day_of_birth": dayOfWeek
  }

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Save form data to sessionStorage
      sessionStorage.setItem('Form', JSON.stringify(formData));
      sessionStorage.setItem('Gender', JSON.stringify(gender));
      // Redirect to BasicDetails page
      router.push('/BasicDetails');
    } else {
      setErrors(errors);
    }
  };

  const optns = [
    { value: "", label: "Select" },
    { value: "Female", label: "female" },
    { value: "Male", label: "male" },
  ];

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required!';
    }
    var rule = /^[a-zA-Z\s]*$/;
    if (!rule.test(formData.name)) {
      errors.name = 'Name is Invalid!';
    }
    if (!place) {
      errors.place = 'Select Place!';
    }
    return errors;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="col-md-12 shadow">
              <div className="card">
                <div className="card-header formHeader">
                  <center>Enter Your Birth Details</center>
                </div>
                <div className="card-body">
                  <div className="form-bg p-3">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group name_margin">
                            <label className="label_form">Name</label>
                            <input
                              type="text"
                              name="name"
                              className="form-control control"
                              placeholder="Enter Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div>
                            <label htmlFor="Gender" className="label_form">Gender</label>
                            <select
                              className="form-select control"
                              name="gender"
                              value={gender}
                              id="gender"
                              onChange={handleChange}
                            >
                              {optns.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <div className="error">{errors.gender}</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <label className="label_form">Date of birth</label>
                          <div className="form-group">
                            <DatePicker
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              className="form-control control"
                              selected={date}
                              dateFormat="dd/MM/yyyy"
                              onChange={(e) => setDate(e)}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label className="label_form">TimeSelect</label>
                            <input
                              type="time"
                              className="form-control control"
                              placeholder=""
                              value={time}
                              onChange={(e) => setTime(e.currentTarget.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group name_margin">
                            <label className="label_form">Select Birth Place</label>
                            <input
                              type="text"
                              name="birthplace"
                              className="form-control control"
                              placeholder="Enter Birth Place"
                              value={place}
                              onChange={(e) => setPlace(e.target.value)}
                            />
                            {errors.place && <p className="error">{errors.place}</p>}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="label_form">Mobile</label>
                            <div className="row">
                              <PhoneInput
                                country={"in"}
                                countryCodeEditable={false}
                                className=""
                                enableSearch={true}
                                value={phoneNo}
                                onChange={(phoneNo) => setPhoneNo(phoneNo)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div>
                            <div className="row">
                              <div className="col sm-12">
                                <center>
                                  <button
                                    type="submit"
                                    className="btn mb-4 kundliSubmitButton1 w-80 mx-auto text-white px-5"
                                  >
                                    Get Your Free Kundali Now
                                  </button>
                                </center>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col sm-12">
                                <center>
                                  <button
                                    type="button"
                                    onClick={(e) => onSaveAndContinue(e)}
                                    className="btn mb-4 kundliSubmitButton1 w-80 mx-auto text-white px-5"
                                  >
                                    Save and continue
                                  </button>
                                </center>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const Form = () => {
//   const [show, setShow] = useState(false);
//   const [phoneNo, setPhoneNo] = useState("");
//   const [dateToday, setDateToday] = useState(new Date());
//   const [name, setName] = useState(
//     JSON.parse(sessionStorage.getItem('Form')) ? JSON.parse(sessionStorage.getItem('Form')).name : ''
//   );
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(
//     JSON.parse(sessionStorage.getItem('Form'))
//       ? JSON.parse(sessionStorage.getItem('Form')).hour + ':' + JSON.parse(sessionStorage.getItem('Form')).min
//       : moment().format('HH:mm')
//   );
//   const [gender, setGender] = useState(
//     JSON.parse(sessionStorage.getItem('Gender')) ? JSON.parse(sessionStorage.getItem('Gender')) : 'female'
//   );
//   const [hour, min] = time.split(':');
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [timezone, setTimezone] = useState("");
//   const [place, setPlace] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSaveSubmitting, setIsSaveSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const dayOfWeek = moment(date).format('dddd');
//   const formData = {
//     name,
//     day: moment(date).format('DD'),
//     month: moment(date).format('M'),
//     year: moment(date).format('YY'),
//     date: date ? moment(date).format('DD/MM/YYYY') : "",
//     place,
//     hour,
//     min,
//     lat: latitude,
//     lon: longitude,
//     tzone: timezone,
//     gender,
//     dayOfWeek,
//     mobileNo: phoneNo,
//   };
//   var IdStore = localStorage.getItem("id");
//   var dataKundliProfile = {
//     "userId": IdStore,
//     "name": name,
//     "gender": gender,
//     "day": moment(date).format('DD'),
//     "month": moment(date).format('M'),
//     "year": moment(date).format('YY'),
//     "hour": hour,
//     "min": min,
//     "lat": latitude,
//     "lon": longitude,
//     "tzone": timezone,
//     "mobileNo": phoneNo,
//     "place": place,
//     "kundaliStatus": "",
//     "createdDate": moment(dateToday).format('dd/MM/yyyy'),
//     "modifiedDate": "",
//     "day_of_birth": dayOfWeek
//   }

//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form data
//     const errors = validate();
//     if (Object.keys(errors).length === 0) {
//       // Save form data to sessionStorage
//       sessionStorage.setItem('Form', JSON.stringify(formData));
//       sessionStorage.setItem('Gender', JSON.stringify(gender));
//       // Redirect to BasicDetails page
//       router.push('/BasicDetails');
//     } else {
//       setErrors(errors);
//     }
//   };

//   const optns = [
//     { value: "", label: "Select" },
//     { value: "Female", label: "female" },
//     { value: "Male", label: "male" },
//   ];

//   const handleChange = (event) => {
//     setGender(event.target.value);
//   };

//   const validate = () => {
//     let errors = {};
//     if (!formData.name) {
//       errors.name = 'Name is required!';
//     }
//     var rule = /^[a-zA-Z\s]*$/;
//     if (!rule.test(formData.name)) {
//       errors.name = 'Name is Invalid!';
//     }
//     if (!place) {
//       errors.place = 'Select Place!';
//     }
//     return errors;
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
//             <div className="col-md-12 shadow">
//               <div className="card">
//                 <div className="card-header formHeader">
//                   <center>Enter Your Birth Details</center>
//                 </div>
//                 <div className="card-body">
//                   <div className="form-bg p-3">
//                     <form onSubmit={handleSubmit}>
//                       <div className="row">
//                         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                           <div className="form-group name_margin">
//                             <label className="label_form">Name</label>
//                             <input
//                               type="text"
//                               name="name"
//                               className="form-control control"
//                               placeholder="Enter Name"
//                               value={name}
//                               onChange={(e) => setName(e.target.value)}
//                               required
//                             />
//                             {errors.name && <p className="error">{errors.name}</p>}
//                           </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                           <div>
//                             <label htmlFor="Gender" className="label_form">Gender</label>
//                             <select
//                               className="form-select control"
//                               name="gender"
//                               value={gender}
//                               id="gender"
//                               onChange={handleChange}
//                             >
//                               {optns.map((option) => (
//                                 <option key={option.value} value={option.value}>
//                                   {option.label}
//                                 </option>
//                               ))}
//                             </select>
//                             <div className="error">{errors.gender}</div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                           <label className="label_form">Date of birth</label>
//                           <div className="form-group">
//                             <DatePicker
//                               peekNextMonth
//                               showMonthDropdown
//                               showYearDropdown
//                               dropdownMode="select"
//                               className="form-control control"
//                               selected={date}
//                               dateFormat="dd/MM/yyyy"
//                               onChange={(e) => setDate(e)}
//                             />
//                           </div>
//                         </div>
//                         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                           <div className="form-group">
//                             <label className="label_form">TimeSelect</label>
//                             <input
//                               type="time"
//                               className="form-control control"
//                               placeholder=""
//                               value={time}
//                               onChange={(e) => setTime(e.currentTarget.value)}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                           <div className="form-group name_margin">
//                             <label className="label_form">Select Birth Place</label>
//                             <input
//                               type="text"
//                               name="birthplace"
//                               className="form-control control"
//                               placeholder="Enter Birth Place"
//                               value={place}
//                               onChange={(e) => setPlace(e.target.value)}
//                             />
//                             {errors.place && <p className="error">{errors.place}</p>}
//                           </div>
//                         </div>
//                         <div className="col-sm-6">
//                           <div className="form-group">
//                             <label className="label_form">Mobile</label>
//                             <div className="row">
//                               <PhoneInput
//                                 country={"in"}
//                                 countryCodeEditable={false}
//                                 className=""
//                                 enableSearch={true}
//                                 value={phoneNo}
//                                 onChange={(phoneNo) => setPhoneNo(phoneNo)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-sm-12">
//                           <div>
//                             <div className="row">
//                               <div className="col sm-12">
//                                 <center>
//                                   <button
//                                     type="submit"
//                                     className="btn mb-4 kundliSubmitButton1 w-80 mx-auto text-white px-5"
//                                   >
//                                     Get Your Free Kundali Now
//                                   </button>
//                                 </center>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="col sm-12">
//                                 <center>
//                                   <button
//                                     type="button"
//                                     onClick={(e) => onSaveAndContinue(e)}
//                                     className="btn mb-4 kundliSubmitButton1 w-80 mx-auto text-white px-5"
//                                   >
//                                     Save and continue
//                                   </button>
//                                 </center>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;



// // // const Form = () => {
// // //     return (
// // //       <div className="form-container">
// // //         <h2>Enter Your Birth Details</h2>
// // //         <form>
// // //           <div className="form-group">
// // //             <label>Name</label>
// // //             <input type="text" name="name" />
// // //           </div>
// // //           <div className="form-group">
// // //             <label>Gender</label>
// // //             <select name="gender">
// // //               <option value="">Select</option>
// // //               <option value="male">Male</option>
// // //               <option value="female">Female</option>
// // //             </select>
// // //           </div>
// // //           <div className="form-group">
// // //             <label>Date of Birth</label>
// // //             <input type="date" name="dob" />
// // //           </div>
// // //           <div className="form-group">
// // //             <label>Time of Birth</label>
// // //             <input type="time" name="tob" />
// // //           </div>
// // //           <div className="form-group">
// // //             <label>Select Birth Place</label>
// // //             <input type="text" name="birthplace" />
// // //           </div>
// // //           <div className="form-group">
// // //             <label>Mobile</label>
// // //             <input type="tel" name="mobile" />
// // //           </div>
// // //           <button type="submit">Get Your Free Kundli Now</button>
// // //           <button  className="button_prev">Save and continue</button>
// // //         </form>
// // //       </div>
// // //     );
// // //   };
  
// // //   export default Form;
  
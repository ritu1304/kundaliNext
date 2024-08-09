
"use client"
import { useEffect, useState } from 'react';
import moment from 'moment';
import FestivalCategory from '@/components/FestivalComponent/FestivalCategory';

const Festival = () => {
  const [festivals, setFestivals] = useState([]);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchFestivals = async () => {
      const date = new Date();
      const mon = moment(date).format('M');
      const yea = moment(date).format('yy');

      try {
        const response = await fetch(`https://apis.sanatanjyoti.com/api/get_festival?month=${mon}&year=${yea}`);
        const result = await response.json();
        setFestivals(result.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to load festivals");
      }
    };

    fetchFestivals();
  }, []);


  var dateValue;
    var dateVariable = moment(date).format('MMMM');
    if (dateVariable === "January") {
        dateValue = 'January'
    }
    else if (dateVariable === "February") {
        dateValue = 'February'
    }
    else if (dateVariable === "March") {
        dateValue = 'March'
    }
    else if (dateVariable === "April") {
        dateValue = 'April'
    }
    else if (dateVariable === "May") {
        dateValue = 'May'
    }
    else if (dateVariable === "June") {
        dateValue = 'June'
    }
    else if (dateVariable === "July") {
        dateValue = 'July'
    }
    else if (dateVariable === "August") {
        dateValue = 'August'
    }
    else if (dateVariable === "September") {
        dateValue = 'September'
    }
    else if (dateVariable === "October") {
        dateValue = 'October'
    }
    else if (dateVariable === "November") {
        dateValue = 'November'
    }
    else if (dateVariable === "December") {
        dateValue = 'December'
    }
    var dateValueSelected;
    var dateSelected = moment(date).subtract(1, "month").format('MMMM');
    if (dateSelected === "January") {
        dateValueSelected = 'January'
    }
    else if (dateSelected === "February") {
        dateValueSelected = 'February'
    }
    else if (dateSelected === "March") {
        dateValueSelected = 'March'
    }
    else if (dateSelected === "April") {
        dateValueSelected = 'April'
    }
    else if (dateSelected === "May") {
        dateValueSelected = 'May'
    }
    else if (dateSelected === "June") {
        dateValueSelected = 'June'
    }
    else if (dateSelected === "July") {
        dateValueSelected = 'July'
    }
    else if (dateSelected === "August") {
        dateValueSelected = 'August'
    }
    else if (dateSelected === "September") {
        dateValueSelected = 'September'
    }
    else if (dateSelected === "October") {
        dateValueSelected = 'October'
    }
    else if (dateSelected === "November") {
        dateValueSelected = 'November'
    }
    else if (dateSelected === "December") {
        dateValueSelected = 'December'
    }


 

  return (
    <div>
            <div className="for_background wrapper1" >
                <div className="container-fluid find_now">
                    <div className="container">
                        <div className='row'>
                            <center className="heading-desc">FESTIVAL</center>
                          <span>
                                <p className='for_paragraph textAlignment fullText'>
                                Festivals are very important in Sanatan Samaj.Festivals fill new energy in our life with joy and gaiety. Irrespective of the period, the importance of ancient or modern festivals is the same. It gives us a break from the routine of everyday life,inspires us to spend some time with our friends and family.Sanatan Samaj believes that no moment should be wasted and social reform and religious work should continue parallel to our daily work. For the same joy and happiness in Sanatan society,festivals have been made in such a way that every person spends some time in charity, religion and social work, so that he gets peace of mind which is the ultimate happiness. It has been saidin the scriptures that Karma, Artha, Dharma,Moksha is the goal of a human being. There is no progress of man without salvation, that's why our festivals are made in such a way that we do religious work and get this supreme happiness.The health of body, mind and intellect has also been taken care of in the festivals of Sanatan Samaj. For this, many types of fasts such as Ekadashi, Pradosh, Navratri etc., so that our daily routine also continues and the health of body and mind is also maintained.In Sanatan Samaj, taking the name of God or remembering Him always is paramount. Sanatan Samaj believes that God is in every element, Hehas no shape, He is above all properties and characteristics. That's why we should celebrate festivals in one way or the other, so that there will  always be ultimate joy in our life. Sanatan Jyoti endeavors that you should know and take advantage of all the festivals of Sanatan Samaj..
                                </p>

                            </span>

                        </div>


                        <div className="container calenderFestival  ">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4">
                                    <center>
                                        {/* {show ?
                                            <h2 className=''><b className=''> {dateValueSelected} {moment(date).format('YYYY')}</b></h2>

                                            :
                                            <h2 className=''><b className=''> {dateValue} {moment(date).format('YYYY')}</b></h2>
                                        } */}
                                         <h2 className=''><b className=''>  {dateValue} {moment(date).format('YYYY')}</b></h2>
                                    </center>
                                </div>
                            </div>
                            <div className="row calenderBox ">
                                 {/* -------------------------------------Calender month year Selector---------------------- */}
                                <center>
                                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-4 calHeader">
                                        <div className="row mt-4">
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                                            {/* <select name="month" id="month" className="dropdown-toggle calSearch11" onChange={onInputChange2}> */}
                                                <select name="month" id="month" className="dropdown-toggle calSearch11" >
                                                    <option value="">Month</option>
                                                    <option value="01">January</option>
                                                    <option value="02">February</option>
                                                    <option value="03">March</option>
                                                    <option value="04">April</option>
                                                    <option value="05">May</option>
                                                    <option value="06">June</option>
                                                    <option value="07">July</option>
                                                    <option value="08">August</option>
                                                    <option value="09">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2">
                                            {/* select name="year" id="year" className="dropdown-toggle calSearchYearSelect " onChange={onInputChange2}> */}
                                                <select name="year" id="year" className="dropdown-toggle calSearchYearSelect " >
                                                    <option value="">Year</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2026">2026</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-2">
                                                <button type="" className="btn calSearched">SubmitFes</button>
                                            </div>
                                        </div>
                                    </div>
                                </center>

                            </div>
                             {/* -------------------------------------MONTHLY CALENDER DATA--------------------------------                            */}
                            <div className="container monthlyCalanderData  homeFestivalBig">
                                <div className='row categorySection mt-5 mx-2'>
                                    <div className='' style={{ display: "flex", width: "100%" }}>
                                        <div className='col-md-4'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className='festival_date_heading'><h5><b> date</b></h5></td>
                                                        <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    {festivals.data !== null}
                                                    {festivals && festivals?.slice(0, festivals?.length / 3)?.map((festival, index) => (
                                                                                                          
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festival.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHover' >{festival.festival}</td>
                                                        </tr>
                                                      ))}
                                                   
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className='col-md-4'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className='festival_date_heading'><h5><b> date</b></h5></td>
                                                        <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {festivals.data !== null}
                                                    {festivals && festivals?.slice(festivals?.length / 3, festivals?.length / 3 * 2)?.map((festival, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festival.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHover' >{festival.festival}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className='col-md-4'>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td className='festival_date_heading'><h5><b>date</b></h5></td>
                                                        <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {festivals.data !== null}
                                                    {festivals && festivals?.slice(festivals?.length / 3 * 2)?.map((festival, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festival.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHover'  >{festival.festival}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>

                                            </table>
                                        </div>
                                        <br /><br /><br />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row homeFestivalSmall mt-5" >
                                <center>
                                    <div className="scrollableFestivalList">
                                        {festivals?.map((festival) => {
                                            return (
                                                <div className="row mx-2">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 ">{moment(festival.date).format('DD-MM-YYYY')}</div>
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">{festival.festival}</div>
                                                    <hr />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </center>
                            </div> */}
                            <br /><br />
                        </div>
                        
                    </div>
                
                </div>

                {/* ----------------------FESTIVALS BY CATEGORY------------------------------------------------                */}
                  <FestivalCategory />
            </div>
    </div>
  );
};

export default Festival;



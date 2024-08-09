"use client"
import moment from 'moment';
import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay , Pagination} from 'swiper/modules';
import Common from '../Common';

const FestivalCategory = () => {
    const [year, setYear] = useState("");
    const [categoryYear, setCategoryYear] = useState("2024");
    const [valuen, setValuen] = useState("");
    const [show, setShow] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [festivalCategory, setFestivalCategory] = useState("")
    

    const festivalByCategory = [

        {
            name: "Sanatan",
            label: 'Sanatan Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalCategorySanatan.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalSanatanCal.png",
            value: "Main",
            id: 1,
        },
        {
            name: "Jayanti",
            label: 'Jayanti Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivaljayanti.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalJayanCal.png",
            value: "Jayanti",
            id: 2,
        },
        {
            name: "Women",
            label: 'Women Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivalwomen.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalWomenFes.png",
            value: "Women",
            id: 3,
        },
        {
            name: "Ekadashi",
            label: 'Ekadashi Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivalekadasi.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalEkaFes.png",
            value: "Ekadashi",
            id: 4,
        },
        {
            name: "Regional",
            label: 'Regional Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/Festivalregional.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalRegionalImage.png",
            value: "Regional",
            id: 5,
        },
        {
            name: "National",
            label: 'National Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalnationalImg.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalNationalFes.png",
            value: "National",
            id: 6,
        },
        {
            name: "Grahan",
            label: 'Grahan Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalgrahanImg.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalGrahanFes.png",
            value: "Grahan",
            id: 7,
        },
        {
            name: "Shradh",
            label: 'Shradh Calendar',
            image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalShradh.png",
            imageHeading: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/FestivalShradhFes.png",
            value: "Shradh",
            id: 8,
        },
    
    ]
    const onSubmitCategory = async (e, value) => {
        e.preventDefault();
        setValuen(value);
        setShowCategory(true);
    
        try {
            const response = await fetch(`/api/festivals?category=${value.value}&year=${categoryYear}`);
        //   const response = await fetch(`/api/festivals?category=Jayanti&year=2024`);
          const data = await response.json();
          setFestivalCategory(data.data || []);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };

    return(
        <div>
            <div className="container-fluid find_now">
                <div className="container">
                     <div className="row FestivalCardsCrousel">
                        {/* <div className='row'>
                            <center>
                            <Common fesByCategory='a' show='a' />
                            </center>

                        </div> */}
                        {/* <div className="swiper-container">
                                <Swiper
                                    className="custom-swiper"
                                    modules={[Navigation, Pagination, Autoplay]}
                                    // navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000 }} 
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 25,
                                    },
                                    }}
                                >
                            {festivalByCategory.map((item) => {
                                return (
                                    <SwiperSlide>
                                    <div  onClick={e => onSubmitCategory(e, item)}>
                                        <div className='carousel-card'>
                                            <img
                                                src={item.image}
                                                alt="category"
                                                className="responsive-image"
                                            ></img>
                                            <div className="overlay-text">
                                                <h5><b>{item.label}</b></h5>
                                                <h5><b>Calender</b></h5>


                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        </div> */}
                    </div> 
                    <div className="">
                        <div className="festivalsection mt-4">


                            <div className='row mt-4'>
                                <Common fesByCategory='a' show='a' />
                            </div>

                            {/* ------------------------------------------CATEGORY CARDS---------------------------------------- */}
                            {festivalByCategory.data !== null}

                            <div className='row'>
                                {festivalByCategory && festivalByCategory.map((item) => {
                                    return (
                                        <div className='col-md-3' onClick={e => onSubmitCategory(e, item)}>
                                    
                                            <div className="image-container zoom fesCardImage cursor-pointer">
                                                <img
                                                    src={item.image}
                                                    alt="category"
                                                    className="responsive-image"
                                                ></img>
                                                <div className="overlay-text">
                                                    <h5><b>{item.name}</b></h5>
                                                    <h5><b>Calendar</b></h5>


                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <br /><br />
                        {/* -----------------------------------CATEGORY WISE CALENDER----------------------------------------------- */}
                        {showCategory ?
                            <div className="container-fluid fesCategoryBox ">

                                <div className="row">
                                    <div className='col-sm-0 col-md-0 col-lg-2 col-xl-2'></div>
                                    <div className='col-sm-0 col-md-0 col-lg-2 col-xl-2 '>
                                        <div className='ganeshFes'>
                                            <img className='img_for_lefts1' src={valuen.imageHeading} alt='hii' />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                                        <h1 className='text-center h1_color categoryTextHead '><b className=''>{valuen.label} Calender</b> </h1>
                                    </div>
                                    <div className='col-sm-0 col-md-0 col-lg-2 col-xl-2'>
                                        <div className='ganeshFes'>
                                            <img className='img_for_rights1' src={valuen.imageHeading} alt='hii' />
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-2'>
                                        <div className="row mt-5">
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                <select name="year" id="year" className="dropdown-toggle calSearchYear" onChange={(e) => setCategoryYear(e.target.value)}>

                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option selected value="2024">2024</option>
                                                </select>

                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                {/* <button type="button" onClick={(e) => submitCategoryYear(e)} className="btn  calSearchButton ">{t('SubmitFes')}</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container calenderContent">
                                    {/* ----------------------------------CATEGORY CALENDER DATA----------------------------- */}
                                    <div className="container monthlyCalanderData homeFestivalBig">
                                        <div className='row categorySection1 mt-5'>
                                            <div className='text-center' style={{ display: "flex", width: "100%" }}>
                                                <div className='col-sm-4'>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td className='festival_date_heading'><h5><b>date</b></h5></td>
                                                                <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {festivalCategory.data !== null}
                                                            {festivalCategory && festivalCategory.slice(0, festivalCategory?.length / 3).map((festivals, index) => (
                                                                <tr>
                                                                    <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                                    <td className='festival_for_category_margin_festival festivalNameHover' >{festivals.festival}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td className='festival_date_heading'><h5><b>date</b></h5></td>
                                                                <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {festivalCategory.data !== null}
                                                            {festivalCategory && festivalCategory.slice(festivalCategory?.length / 3, festivalCategory?.length / 3 * 2).map((festivals, index) => (
                                                                <tr>
                                                                    <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                                    <td className='festival_for_category_margin_festival festivalNameHover' >{festivals.festival}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td className='festival_date_heading'><h5><b>date</b></h5></td>
                                                                <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {festivalCategory.data !== null}
                                                            {festivalCategory && festivalCategory.slice(festivalCategory?.length / 3 * 2).map((festivals, index) => (
                                                                <tr>
                                                                    <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                                    {/* <td className='festival_for_category_margin_festival festivalNameHover' onClick={() => getFestivalBlogId(festivals.festival)}>{festivals.festival}</td> */}
                                                                    <td className='festival_for_category_margin_festival festivalNameHover' >{festivals.festival}</td>

                                                                </tr>
                                                            ))}
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <br /><br /><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row homeFestivalSmall mt-5" >
                                        <center>
                                            <div className="scrollableFestivalList">
                                                {/* {festivalCategory?.map((festivals) => {
                                                    return (
                                                        <div className="row mx-2">
                                                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 ">{moment(festivals.date).format('DD-MM-YYYY')}</div>
                                                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">{festivals.festival}</div>
                                                            <hr />
                                                        </div>
                                                    )
                                                })} */}
                                            </div>
                                        </center>
                                    </div>
                                </div>
                                <br />
                            </div> : null}
                        <br /><br />
                    </div>
                    <div />
                </div>
            </div>
        </div>
    )
}
export default FestivalCategory
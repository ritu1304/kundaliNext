"use client"
import React, { useEffect, useState } from 'react'
import { Link, } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { getBlog, randomTopViewBlog, getPopularBlog, getCategory } from '../../Redux/Action/BlogAction'
// import './Blog.css';
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from 'react-toastify';
// import mixpanel from 'mixpanel-browser';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay , Pagination} from 'swiper/modules';
import pisces from '../../public/KundaliImg.png'
import Image from 'next/image';
// import './CustomCarousel.css';

const Blog = () => {
    useEffect(() => {
        // mixpanel.track('blogsPageViewed');
    }, []);
    // ---------------------Infinite Scroll------------------------
    const [posts, setPosts] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    // ---------------------Infinite Scroll------------------------
    const [value, setValue] = useState(null)
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(1);
    const [allPosts, setAllPosts] = useState([])
    //  const dispatch = useDispatch()
    const [key, setKey] = useState("All")
    const [page, setPage] = useState(0)
    const [filterSearch, setFilterSearch] = useState('')
    const [categories, setCategories] = useState('')

    // const blogData = useSelector(state => state.blogReducer)
    // -------------------------------------Blogs Category-------------------------
    const optns = [
        { value: "All", label: t('All') },
        { value: "Other", label: t('Other') },
        { value: "By Author", label: t('By Author') },
        { value: "Vrat", label: t('Vrat') },
        { value: "Shiv Shakti", label: t('Shiv Shakti') },
        { value: "Shree Hari", label: t('Shree Hari') },
        { value: "Ekadashi", label: t('Ekadashi') },
        { value: "Astrology", label: t('Astrology') },
        { value: "Festival", label: t('Festival') },
        { value: "Jayanti", label: t('Jayanti') },

    ];
    // ------------------------------------All blogs ---------------------------
    let LocalStore = localStorage.getItem('lng');

    var language;
    if (LocalStore == "hi") {
        language = false;
    }
    else {
        language = true;
    }
    useEffect(() => {
        const fetchAllPosts = async () => {
            let OPTIONS = {

                url: `/article/get_All_Blogs?articleType=PUBLISH&festivalStatus=${language}&page=0&size=30&status=true`,
                method: "get",
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {

                    setAllPosts(res.data.data)


                })
        }
        fetchAllPosts()
    }, [])
    // useEffect(() => {
    //     const fetchAllPosts = async () => {
    //         let OPTIONS = {
    //             url: `http://localhost:5000/article/get_All_Blogs?articleType=PUBLISH&festivalStatus=${language}&page=0&size=30&status=true`,
    //             method: "get",
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //         };
    //         axios(OPTIONS)
    //             .then((res) => {
    //                 setAllPosts(res.data.data);
    //             })
    //             .catch((error) => {
    //                 console.error("Error fetching posts:", error);
    //             });
    //     };
    //     fetchAllPosts();
    // }, [language]);
    // ------------------------------------All blogs API End ---------------------------

    useEffect(() => {
        const data = {
            keyword: filterSearch,
            category: key,
            changeCate: '',
            page: page,
        }

        // dispatch(getBlog(data))
        // dispatch(randomTopViewBlog())
        // dispatch(getPopularBlog())
        // dispatch(getCategory())
    }, [page])
    const toggleTab = (datas, index) => {
        // mixpanel.track(datas, { buttonName: 'getBlogsByCategoryClicked' });

        setToggleState(index);
        setPageNumber(0)


        if (datas == 'All') {
            setCategories("")
            const data = {
                keyword: filterSearch,
                category: 'All',
                changeCate: '',
                page: page,
            }

            // dispatch(getBlog(data))

        } else {
            setCategories(datas)
            const data = {
                keyword: filterSearch,
                category: 'All',
                changeCate: datas,
                page: page,
            }

            // dispatch(getBlog(data))

        }



    };

    // ================================content word reduce========================
    const truncateContent = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '.....';
        } else {
            return str;
        }
    };
    // 
    // ==================================================filtersearch ================================
    const handleSearch = (e) => {
        setPageNumber(0)
        setFilterSearch(e.target.value)


    }
    const searchFilter = (e) => {

        // mixpanel.track('getSearchedBlogClicked', { buttonName: 'getSearchedBlogClicked' });

        e.preventDefault()
        const data = {
            keyword: filterSearch,
            category: key
        }

        // dispatch(getBlog(data))

    }
    useEffect(() => {
        if (filterSearch.length < 1) {

            const data = {
                keyword: filterSearch,
                category: key,
                changeCate: ''
            }

            // dispatch(getBlog(data))

        } else {

        }
    }, [filterSearch])
    // ---------------------Infinite Scroll------------------------
    useEffect(() => {
        const fetchApiPosts = async () => {
            let OPTIONS = {
                url: `/article/get_blogs?category=${key}&categoryName=${categories}&keyword=${filterSearch}&articleType=PUBLISH&isDraftBlog=false&festivalStatus=${language}&status=true&page=${pageNumber}&size=5`,
                method: "get",
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {
                    setPosts(res.data.data)

                    if (res.data.data.length >= 5) {
                        setPageNumber(pageNumber + 1)
                    }

                })
        }
        fetchApiPosts()
    }, [categories, filterSearch])
    const fetchData = async () => {
        if (posts.length >= 5) {

            setPageNumber((prevPageNumber) => prevPageNumber + 1);
            const fetchApiPosts = async () => {
                let OPTIONS = {
                    url: `/article/get_blogs?category=${key}&categoryName=${categories}&keyword=${filterSearch}&articleType=PUBLISH&isDraftBlog=false&festivalStatus=${language}&status=true&page=${pageNumber}&size=5`,
                    method: "get",
                    headers: {
                        "content-type": "application/json",
                    },
                };
                axios(OPTIONS)
                    .then((res) => {
                        setPosts(posts.concat(res.data.data))
                    })
            }
            fetchApiPosts()
        }
    }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const anyFunction = (idArticle) => {
        localStorage.setItem('idArticle', idArticle)
        setValue(idArticle)
    }
    const userId = localStorage.getItem("id")
    
    const likeFunction = (idArticle) => {
        localStorage.setItem('idArticle', idArticle)
        // setValue(idArticle)
        if (userId) {
            let OPTIONS = {

                url: `/article/like_ArticleOrDislike_Article`,
                method: "POST",
                data: {
                    articleId: idArticle,
                    userId: userId
                },
                headers: {
                    "content-type": "application/json",
                },
            };
            axios(OPTIONS)
                .then((res) => {
                    // alert("without parameter and like")


                })
            // againcall()
        }
        else {
            toast.error("Please  Login")
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
                            <h2 style={{fontSize:'24px'}} className='fw-bold pt-2 textSize'>{t('Blog')}</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container mt-2">
                        <div className="row">
                            <h4 className='main_color fw-bold'>
                                {t('Categories')}
                            </h4>
                            <div className="container">
                                <div className="bloc-tabs">
                                    <>  {
                                        optns?.map((data, index) => {
                                            return <>
                                                <button
                                                    className={toggleState === index + 1 ? "tabs active-tabs" : "tabs"}
                                                    onClick={() => toggleTab(data.value, index + 1)}
                                                >
                                                    {data.label}
                                                </button>
                                            </>
                                        })
                                    }</>

                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------------------Crousel------------------------------------- */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="swiper-container">
                                    <Swiper
                                    className="custom-swiper"
                                        modules={[Navigation, Autoplay, Pagination]}
                                        // navigation
                                        pagination={{ clickable: true }}
                                        autoplay={{ delay: 3000 }} 
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 5,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 15,
                                        },
                                        }}
                                    >
                                        {/* {allPosts.map((item, index) => ( */}
                                                <SwiperSlide >
                                                    {/* <Link
                                                    to={`${item?.articleId}`}
                                                    onClick={() => handleMixPanelClick('getSingleBlogClicked')}
                                                    
                                                    > */}
                                                    <div className="carousel-card">
                                                        {/* <img src={item?.imageUrl} alt={item?.title} /> */}
                                                        <Image
                                                            src={pisces}
                                                            alt= 'pisces'
                                                            width="100px"
                                                            height="100px"
                                                        />
                                                        <div className="textCarousel">
                                                        <h5><b>
                                                            {/* {item?.title} */}
                                                            Shivratri
                                                            </b></h5>
                                                        </div>
                                                        
                                                    </div>
                                                    {/* </Link> */}
                                                </SwiperSlide>
                                         {/* ))} */}
                                </Swiper>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------------------Crousel End------------------------------------- */}
                        <hr />
                        <div className='row' >
                            <div className='col-sm-12 col-md-9 col-lg-9 ' >
                                <div className="row " style={{alignItems:"center"}}>
                                    <div className='col-sm-12 col-md-3 col-lg-3 ' >
                                        {/* <Link to={``}> */}
                                        <h5 className='main_color'>{t('Latest Posts')} </h5>
                                        {/* </Link> */}
                                        <hr className='main_color w-25 hr_main ' />
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-6  ' >
                                        <form onSubmit={searchFilter}>
                                            <div className="icon-input">
                                                <input className="icon-input__text-field  px-4 w-100 " required type="text"
                                                    value={filterSearch} onChange={(e) => handleSearch(e)} />
                                                <button className="fas fa-search icon-input__icon material-icons  " type="submit"></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='col-sm-2 col-md-2 col-lg-2  ' ></div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------------Infinite Scroll------------------------ */}
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 mt-3">
                                <div className="">
                                    <InfiniteScroll
                                        dataLength={posts.length}
                                        next={fetchData}
                                        hasMore={true}
                                        loader={<h4 style={{paddingTop:'6px'}}>{t('No more blogs')}</h4>}
                                    >
                                        {posts?.map((data, index) => {
                                            return (<>
                                                <div key={index} >

                                                    <div class="card newCard mt-3" >
                                                        <div className="card-header text-light popularHeader">
                                                            <center>
                                                                <h4><b className=' mt-2  '>
                                                                    {truncateContent(`${data.title}`, 70)} </b></h4>
                                                            </center>
                                                        </div>

                                                        <div class="card-body">
                                                            <img className=' img-fluid imageMain shadow '
                                                                src={data.imageUrl} alt={data.imageName} />
                                                            <p className='blogParaP mt-2'
                                                                dangerouslySetInnerHTML={{ __html: truncateContent(`${data.subject}`, 300) }} />
                                                          
                                                            <div className='readMore '>
                                                                <div>
                                                                    <Link to={`${data.articleId}`} onClick={() => handleMixPanelClick("getSingleBlogClicked")} >
                                                                        <h6 className='fw-bold readMoreText'>{t('Read More')}..</h6>
                                                                        <hr className='hr_main main_color' />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </>)
                                        })}
                                    </InfiniteScroll>
                                </div>
                            </div>
                            {/* <div className='col-sm-1 col-md-1 col-lg-1  '> </div> */}
                            <div className='col-sm-4 col-md-4 col-lg-4  mt-2'>
                                {/* ---------------------------------------------Popular Posts--------------------------------------------------- */}
                                <div className="card popularBox stickyDiv">
                                    <div className="card-header text-light popularHeader">
                                        <center>
                                            <h4 className='pt-2'>{t('Popular Posts')}</h4>
                                        </center>
                                    </div>
                                    <div className="card-body hiddenScroll">
                                        <div className="scrollableCards ">
                                            {/* {blogData?.popularBlog?.map((data) => {
                                                return <>
                                                    <img className=' img-fluid imageThumbnail shadow '
                                                        src={data.imageUrl} alt={data.imageName} />
                                                    <h5 className='main_color h5 fw-bold mt-2'>{truncateContent(`${data.title}`, 30)}</h5>
                                                    <p className='blogParaP '

                                                        dangerouslySetInnerHTML={{ __html: truncateContent(`${data.subject}`, 100) }}
                                                    />
                                                    <div className='readMore '>
                                                        <div>
                                                            <Link to={`${data.articleId}`} onClick={() => handleMixPanelClick("readPopularBlogClicked")}>
                                                                <h6 className='fw-bold readMoreText'>{t('Read More')}..</h6>
                                                                <hr className='hr_main main_color' />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </>
                                            })} */}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br />
                </div >
            </div>
        </div>
    )
}
export default Blog
import SwiperComponent from "@/components/BlogComponent/SwiperBlog";
import CategoryTabs from "@/components/BlogComponent/BlogCategory";

const Blog = async () => {
  let allPosts = [];
  try {
    const response = await fetch('https://apis.sanatanjyoti.com/article/get_All_Blogs?articleType=PUBLISH&festivalStatus=true&page=0&size=30&status=true');
    const result = await response.json();
    allPosts = result.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  let posts = [];
  try {
    const response = await fetch('https://apis.sanatanjyoti.com/article/get_blogs?category=All&categoryName=&keyword=&articleType=PUBLISH&isDraftBlog=false&festivalStatus=true&status=true&page=0&size=5');
    const result = await response.json();
    posts = result.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  let blogData = [];
  try {
    const response = await fetch('https://apis.sanatanjyoti.com/article/get_Top_Blogs');
    const result = await response.json();
    blogData = result.data;
    console.log("=====", blogData)
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
  

//   const handleSearch = (e) => {
//     setPageNumber(0)
//     setFilterSearch(e.target.value)


// }

//   const searchFilter = (e) => {

    
//     e.preventDefault()
//     const data = {
//         keyword: filterSearch,
//         category: key
//     }

//     // fetch blog API

//   }
const truncateContent = (str, num) => {
  if (str?.length > num) {
      return str.slice(0, num) + '.....';
  } else {
      return str;
  }
};

 

  return (
    <div className="for_background wrapper1">
            <div className="container-fluid find_now">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 marginResp">
                        <div className="blogBox my-3 text-center">
                            <h2 style={{fontSize:'24px'}} className='fw-bold pt-2 textSize'>Blog</h2>
                        </div>
                    </div>
                </div>
            {/* <div className="container">
              <div className="container mt-2"> */}
              <div>
                <div>
                        <div className="row">
                            <h4 className='main_color fw-bold'>
                                Categories
                            </h4>
                            <CategoryTabs />
                        </div>
                
                      <div className="row">
                        <div className="col-sm-12">
                          {allPosts.length > 0 ? (
                            <SwiperComponent allPosts={allPosts} />
                          ) : (
                            <p>No posts available</p>
                          )}
                        </div>
                      </div>
                      <div className='row' >
                            <div className='col-sm-12 col-md-9 col-lg-9 ' >
                                <div className="row " style={{alignItems:"center"}}>
                                    <div className='col-sm-12 col-md-3 col-lg-3 ' >
                                        <h5 className='main_color'>Latest Posts </h5>
                                        <hr className='main_color w-25 hr_main ' />
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-6  ' >
                                        <form                                        
                                        //  onSubmit={searchFilter}
                                        >
                                            <div className="icon-input">
                                                <input className="icon-input__text-field  px-4 w-100 " required type="text"
                                                    //  value={filterSearch} onChange={(e) => handleSearch(e)} 
                                                    />
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
                                    {/* <InfiniteScroll
                                        dataLength={posts.length}
                                        next={fetchData}
                                        hasMore={true}
                                        loader={<h4 style={{paddingTop:'6px'}}>{t('No more blogs')}</h4>}
                                    > */}
                                        {posts?.map((data, index) => {
                                            return (<>
                                                <div key={index} >

                                                    <div class="card newCard mt-3" >
                                                        <div className="card-header text-light popularHeader">
                                                            <center>
                                                                <h4><b className=' mt-2  '>
                                                                    {truncateContent(`${data.title}`, 70)} 
                                                                    {data.title}
                                                                    </b></h4>
                                                            </center>
                                                        </div>

                                                        <div class="card-body">
                                                            <img className=' img-fluid imageMain shadow '
                                                                src={data.imageUrl} alt={data.imageName} />
                                                            <p className='blogParaP mt-2'
                                                                dangerouslySetInnerHTML={{ __html: truncateContent(`${data.subject}`, 300) }} 
                                                                />
                                                          
                                                            <div className='readMore '>
                                                                <div>
                                                                    {/* <Link to={`${data.articleId}`} onClick={() => handleMixPanelClick("getSingleBlogClicked")} > */}
                                                                        <h6 className='fw-bold readMoreText'>Read More..</h6>
                                                                        <hr className='hr_main main_color' />
                                                                    {/* </Link> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </>)
                                        })}
                                    {/* </InfiniteScroll> */}
                                </div>
                            </div>
                            {/* <div className='col-sm-1 col-md-1 col-lg-1  '> </div> */}
                            <div className='col-sm-4 col-md-4 col-lg-4  mt-2'>
                                {/* ---------------------------------------------Popular Posts--------------------------------------------------- */}
                                <div className="card popularBox stickyDiv">
                                    <div className="card-header text-light popularHeader">
                                        <center>
                                            <h4 className='pt-2' >Popular Posts</h4>
                                        </center>
                                    </div>
                                    <div className="card-body hiddenScroll">
                                        <div className="scrollableCards ">
                                             {blogData?.map((data) => {
                                                return <>
                                                    <img className=' img-fluid imageThumbnail shadow '
                                                        src={data.imageUrl} alt={data.imageName} />
                                                    <h5 className='main_color h5 fw-bold mt-2'>{truncateContent(`${data.title}`, 30)}</h5>
                                                    <p className='blogParaP '

                                                        dangerouslySetInnerHTML={{ __html: truncateContent(`${data.subject}`, 100) }}
                                                    />
                                                    <div className='readMore '>
                                                        <div>
                                                            {/* <Link to={`${data.articleId}`} onClick={() => handleMixPanelClick("readPopularBlogClicked")}> */}
                                                                <h6 className='fw-bold readMoreText'>Read More..</h6>
                                                                <hr className='hr_main main_color' />
                                                            {/* </Link> */}
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </>
                                            })} 
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
              </div>
              {/* </div>
            </div> */}
    </div>
    </div>
    
  );
};

export default Blog;

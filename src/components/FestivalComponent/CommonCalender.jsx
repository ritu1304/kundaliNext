
// import "react-datepicker/dist/react-datepicker.css";

 import moment from 'moment';

const Festival = async() => {

    const date = new Date();

    var mon = moment(date).format('M');

        var yea = moment(date).format('yy')
        

    let fes = [];
    try {
      const response = await fetch(`https://apis.sanatanjyoti.com/api/get_festival?month=${mon}&year=${yea}`);
      const result = await response.json();
      fes = result.data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  
    // ------------------for get festival--------------
    let momentMonthName = moment().format("MMMM");
    let momentYearName = moment().format("yy");
    
    // ---------------------Date Function-----------------------------------------------
    const monthNameTranslate = (dateVariable) => {


        if (dateVariable === "January") {
            return dateVariable = 'January'
        }
        else if (dateVariable === "February") {
            return dateVariable = 'February'
        }
        else if (dateVariable === "March") {
            return dateVariable = 'March'
        }
        else if (dateVariable === "April") {
            return dateVariable = 'April'
        }
        else if (dateVariable === "May") {
            return dateVariable = 'May'
        }
        else if (dateVariable === "June") {
            return dateVariable = 'June'
        }
        else if (dateVariable === "July") {
            return dateVariable ='July'
        }
        else if (dateVariable === "August") {
            return dateVariable = 'August'
        }
        else if (dateVariable === "September") {
            return dateVariable = 'September'
        }
        else if (dateVariable === "October") {
            return dateVariable = 'October'
        }
        else if (dateVariable === "November") {
            return dateVariable = 'November'
        }
        else if (dateVariable === "December") {
            return dateVariable = 'December'
        }
    };
   

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div class="">
                            <div class="">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <center>
                                            <h2> <b>{monthNameTranslate(momentMonthName)} {momentYearName}</b></h2>
                                        </center>

                                    </div>
                                </div>
                                <div className="container   ">
                                    <div className='row homeFestivalBig categorySection mt-5 mx-2'>

                                        <div className='' style={{ display: "flex", width: "100%" }}>
                                            <div className='col-md-4'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className='festival_date_heading'><h5><b> Date</b></h5></td>
                                                            <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                        </tr>
                                                    </thead>
                                                    {fes.data !== null}
                                                    {fes && fes?.slice(0, fes?.length / 3)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>

                                                            <td className='festival_for_category_margin_festival festivalNameHoverHome' 
                                                            // onClick={() => getFestivalBlogId(festivals.festival)} 
                                                            >{festivals.festival}</td>
                                                        </tr>
                                                    ))}
                                                </table>
                                            </div>
                                            <div className='col-md-4'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className='festival_date_heading'><h5><b>Date</b></h5></td>
                                                            <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                        </tr>
                                                    </thead>
                                                    {fes.data !== null}
                                                    {fes && fes?.slice(fes?.length / 3, fes?.length / 3 * 2)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHoverHome' 
                                                            // onClick={() => getFestivalBlogId(festivals.festival)} 
                                                            >{festivals.festival}</td>
                                                        </tr>
                                                    ))}
                                                </table>
                                            </div>
                                            <div className='col-md-4'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className='festival_date_heading'><h5><b>Date</b></h5></td>
                                                            <td className='festival_festival_heading'><h5><b>Festival</b></h5></td>
                                                        </tr>
                                                    </thead>
                                                    {fes.data !== null}
                                                    {fes && fes?.slice(fes?.length / 3 * 2)?.map((festivals, index) => (
                                                        <tr>
                                                            <td className='festival_for_category_margin_date'>{moment(festivals.date).format('DD-MM-YYYY')}</td>
                                                            <td className='festival_for_category_margin_festival festivalNameHoverHome'
                                                            //  onClick={() => getFestivalBlogId(festivals.festival)}
                                                             >{festivals.festival}</td>

                                                        </tr>
                                                    ))}
                                                </table>
                                            </div>
                                            <br /><br /><br />
                                        </div>
                                    </div>
                                    <div className="row homeFestivalSmall" >
                                        <div className="card p-3 calenderFestival">
                                            <div className="card-body">
                                                <center>
                                                    <div className="scrollableFestivalList">
                                                        {fes?.map((festivals) => {
                                                            return (
                                                                <div className="row mx-2">
                                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 ">{moment(festivals.date).format('DD-MM-YYYY')}</div>
                                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">{festivals.festival}</div>
                                                                    <hr />
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </center>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-sm-12">
                                        <center >
                                            {/* <Link href="/Festival" onClick={() => handleMixPanelClick("moreDetailsOfFestivalsClicked")}> */}
                                                <button type="submit" className="btn control_for_btns text-white "> More Details</button>
                                            {/* </Link> */}
                                        </center>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Festival;

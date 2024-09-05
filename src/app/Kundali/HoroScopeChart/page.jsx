import React from 'react';
import KundliNavbar from '../../../components/KundaliNavBar';
 import LagnaChart from '../../../components/Chart/LagnaChart.jsx.jsx';
 import SunChart from '../../../components/Chart/SunChart.jsx.jsx';

 import ChalitChart from '../../../components/Chart/ChalitChart.jsx.jsx';
import NavmanshaChart from '../../../components/Chart/NavmanshaChart.jsx.jsx';
 import MoonChart from '../../../components/Chart/MoonChart.jsx.jsx';
const HoroscopeCharts = (props) => {
   
    return (
        <div>
            <div className='container-fluid find_now wrapper1'>
                <div className="container" >
                    <KundliNavbar />
                    <br />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">

                            <div>
                                <h3 className="chartsHeadName">
                                    lagnaChart
                                </h3>
                                <LagnaChart />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">

                            <div>
                                <h3 className="chartsHeadName">
                                    sunChart
                                </h3>
                                <SunChart />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">

                            <div>
                                <h3 className="chartsHeadName">
                                moonChart
                                </h3>
                                <MoonChart />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">

                            <div>
                                <h3 className="chartsHeadName">
                                chalitChart
                                </h3>
                                <ChalitChart />
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-5">

                           
                            <div>
                                <h3 className="chartsHeadName">
                                navamanshaChart
                                </h3>
                                <NavmanshaChart />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default HoroscopeCharts;



"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Table } from 'react-bootstrap'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import mixpanel from 'mixpanel-browser';


const PaymentsList = () => {
    // useEffect(() => {
    //     mixpanel.track('panditJiMeetingsLinksPageViewed');
    // }, []);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [downloading, setDownloading] = useState(false);
    const [paymentsList, setPaymentsList] = useState([])
    const userId = localStorage.getItem("id")
    useEffect(() => {
        let OPTIONS = {
            url: `https://apis.sanatanjyoti.com/api/get_Transactions?page=0&size=10&userId=${userId}`,
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        };
        axios(OPTIONS)
            .then((res) => {
                setPaymentsList(res?.data)
            })
    }, [])
    const truncateTitle = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    const downloadPDF = (orderId) => {
       

        axios({
            method: 'get',
            url: `https://apis.sanatanjyoti.com/api/generate`,

            headers: {
                "content-type": "application/json",
                "X-Order-Id": orderId
            },
        })
            .then(response => {
                
                window.open(response?.data.data.body, '_blank');


            })
            .catch(error => {
                toast.error('Error downloading PDF:', error);
                // setDownloading(false);
            });
    };
    return (
        <div>
            <div className="container-fluid find_now ">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 mt-3 mb-3">
                            <button class="btn anushthanSubmitButton" onClick={() => navigate('/AnusthanFront')}>
                                {t('Back')}
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mt-4 mb-4 paymentDataTable">
                            <Table class="table for_css kmanage_table table-responsive  table-striped  " striped bordered hover>
                                <thead className='ktableHead'>
                                    <tr className=' bg-blue-100  text-start fontHead'>
                                        <td class=" py-3 pl-2  ">{t('Order ID')}</td>
                                        <td class="py-3 pl-2 ">{t('Tracking ID')}</td>
                                        <td class=" py-3 pl-2 ">{t('Name')}</td>
                                        <td class=" py-3 pl-2 ">{t('Payment Mode')}</td>
                                        <td class=" py-3 pl-2 ">{t('Status')}</td>
                                        <td class=" py-3 pl-2 ">{t('Date & Time')}</td>
                                        <td class="py-3 pl-2  ">{t('Amount')}</td>
                                        <td class=" py-3 pl-2 ">{t('For')}</td>
                                        <td class=" py-3 pl-2 ">{t('Invoice')}</td>
                                    </tr>
                                </thead>
                                <tbody className='ktableBody'>
                                    {paymentsList.data?.content?.map((data, index) => {
                                        return (<>
                                            <tr key={index} className={` text-gray-500 text-start`}>
                                                <td class=" py-3 pl-2 ">{data.orderId}</td>
                                                <td class=" py-3 pl-2 ">{data.trackingId}</td>
                                                <td class=" py-3 pl-2 ">{data.yajmaanName}</td>
                                                <td class=" py-3 pl-2 ">{data.paymentMode}</td>
                                                <td class=" py-3 pl-2 "
                                                    style={{
                                                        backgroundColor: (data.paymentStatus == "Success") ? 'rgba(144, 238, 144, 0.7)' : 'rgba(255, 0, 0, 0.5)',
                                                        // Add other inline styles as needed
                                                    }}
                                                >{data.paymentStatus}</td>
                                                <td class=" py-3 pl-2 ">{data.paidDate}</td>
                                                <td class=" py-3 pl-2 ">{data.amount}</td>
                                                <td class=" py-3 pl-2 ">{(data.paymentFor == "Anushthan") ? t('Anusthan') : (data.paymentFor == "PanditJi") ? t('Pandit Ji') : ""}</td>
                                                <td class=" py-3 pl-2 link-primary " style={{ cursor: "pointer" }} onClick={() => downloadPDF(data.orderId)} >{t('Download')}</td>

                                            </tr>
                                        </>)
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PaymentsList
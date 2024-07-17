"use client"
import React, { useState } from 'react'
import axios from "axios";
import { useTranslation } from "react-i18next";
import moment from 'moment';


function FestivalSearch({ parentCallback }) {
    const { t } = useTranslation();
    const [sea_place, setSea_place] = useState("")
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date());
    const [res, setRes] = useState([])
    const [disp, setDisp] = useState('block')
    var year = moment(date).format('yy')
    const onchangePlace = (e) => {
        setSea_place(e.target.value)
        const OPTIONS = {
            url: `/api/search_festival?festival=${e.target.value}&year=${year}`,
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        };

        setDisp("block")
        axios(OPTIONS)
            .then(response => {
                var a = response.data
             
                setRes(a)
            })
            parentCallback()
            if(sea_place.length!==1){
              
                setDisp("block")
                setShow(true)
               
            }
            else{
              
                setDisp("none")
                hideBox()
            }
            if(sea_place.length===0){
                hideBox()
            }

    }
    const showBox = (e) => {
        setShow(true)
    }
    const hideBox = (e) => {
        setShow(false)
    }
    const handleOnClear = (e) => {
        setShow(false)
    }
    const sendData = (a) => {
        setSea_place(a?.festival)
        setShow(false)
        parentCallback(a?.festival);
    }
    return (
        <>
            <input className="calSearchFestival" type="text" placeholder={t('Enter Festival')} defaultValue={sea_place}  onClear={handleOnClear} value={sea_place} onChange={onchangePlace} />
            {show ? <div className='scrollbox'>


                {
                    res && res.data?.map((data, index) => {
                        return (
                            <div
                                className={` d-${disp}   border-bottom border-dark  my-1 px-2 festivalsHover  `}
                                // style={{ cursor: "pointer", backgroundColor: data.active ? "#fa8a00" : "#fff" }}
                                style={{ cursor: "pointer",}}


                                onClick={() => sendData(data, index + setDisp("none"))} >

                                <h6>{data?.festival}</h6>
                                

                            </div>
                        )
                    })
                }
            </div> : null}
        </>
    )
}

export default FestivalSearch
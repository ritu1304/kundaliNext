"use client"
import React, { useEffect } from 'react'
// import './Loader.css'
import gsap from "gsap";
import { useRef } from 'react';
import sanatanLogo from '../../public/Headerlogo35kb.png'

function Loader() {
    const moves = useRef()
    useEffect(() => {
        gsap.to(moves.current,




            {
                x: '+=30',
                duration: 1, ease: 'none',
                repeat: -1, yoyo: true
            }



        )
    })

    return (
        <>
            <div className='text center moves' ref={moves}>

                <img src={sanatanLogo} alt='sanatan' className='w-50'></img>

            </div>
        </>
    )
}

export default Loader
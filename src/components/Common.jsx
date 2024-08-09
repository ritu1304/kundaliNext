import React from 'react'
import { useTranslation, initReactI18next } from "react-i18next";
import Image from 'next/image';
import omIcon from '../../public/Om icon.png'


export const Common = (props) => {
    let data = props.data
    let data1 = props.data1
    let data2 = props.data2
    let HinduPanchang = props.HinduPanchang
    let PlanetDetails = props.PlanetDetails
    let ChaughadiyaDetails = props.ChaughadiyaDetails
    let Hora = props.Hora
    let Horoscope = props.Horoscope
    let Match_Making = props.Match_Making
    let Kundali = props.Kundali
    let festival = props.festival
    let panchang = props.panchang
    let advancePanchang = props.advancePanchang
    let basicDetails = props.basicDetails
    let horoscopeChart = props.horoscopeChart
    let planetaryDetails = props.planetaryDetails
    let vimshottari = props.vimshottari
    let yogini = props.yogini
    let char = props.char
    let kalsarpa = props.kalsarpa
    let manglik = props.manglik
    let SadheSati = props.SadheSati
    let pitra = props.pitra
    let remedies = props.remedies
    let rudraksha = props.rudraksha
    let sadhesati = props.sadhesati
    let lifeReport = props.lifeReport
    let Bhinnashtak = props.Bhinnashtak
    let Sarvashtak = props.Sarvashtak
    let debts = props.debts
    let lalHouse = props.lalHouse
    let DailyPredict = props.DailyPredict
    let BioRhythm = props.BioRhythm
    let fesByCategory = props.fesByCategory
    let contribute = props.contribute
    let contact = props.contact

    const { t } = useTranslation();
    let show = props.show
    let show1 = props.show1


    return (
        <div>
            {show ?
                <div className='row heading_for_margin_buttom'>
                    <div className='col-sm-2 col-md-2'></div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='ompicture'>
                            <Image className='img_for_lefts om-icon' src={omIcon} alt='hii' width="100%" />
                        </div>
                    </div>
                    <div className='col-sm-4 col-md-4 mt-3 main-header-margin'>

                        {data ? <h1 className='text-center h1_color mt-5'><b>{t('Vision')}</b> </h1> : null}
                        {data1 ? <h1 className='text-center h1_color mt-5'><b>{t('Our Story')} </b> </h1> : null}
                        {data2 ? <h1 className='text-center h1_color mt-5'><b>{t('Sanatan')}</b> </h1> : null}
                        {Horoscope ? <h1 className='text-center h1_color'><b> {t('Zodiac Signs')} </b> </h1> : null}
                        {HinduPanchang ? <h1 className='text-center h1_color mt-5'><b>{t('Hindu Panchang')} </b> </h1> : null}
                        {PlanetDetails ? <h1 className='text-center h1_color mt-5'><b>{t('Planet Details')} </b> </h1> : null}
                        {ChaughadiyaDetails ? <h1 className='text-center h1_color mt-5'><b>{t('Chaughadiya Details')} </b> </h1> : null}
                        {Hora ? <h1 className='text-center h1_color mt-5'><b>{t('Hora Details')} </b> </h1> : null}
                        {Match_Making ? <h1 className='text-center h1_color'><b>{t('Match Making')} </b> </h1> : null}
                        {Kundali ? <h1 className='text-center h1_color '><b>{t('Kundli')} </b> </h1> : null}
                        {festival ? <h1 className='text-center h1_color '><b>{t('Festival')}</b> </h1> : null}
                        {panchang ? <h1 className='text-center h1_color mt-5'><b>{t('Panchang')}</b> </h1> : null}
                        {advancePanchang ? <h1 className='text-center h1_color mt-5'><b>{t('Advance Panchang')}</b> </h1> : null}
                        {fesByCategory ? <h1 className='text-center h1_color mt-4'><b>{t('Categories')}</b> </h1> : null}
                        {contribute ? <h1 className='text-center h1_color mt-4'><b>{t('Contribute')}</b> </h1> : null}
                        {contact ? <h1 className='text-center h1_color mt-5'><b>{t('Contact Us')}</b> </h1> : null}


                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='ompicture'>
                            <Image className='img_for_rights om-icon' src={omIcon} alt='hii' width="100%" />

                        </div>
                    </div>
                    <div className='col-sm-2 col-md-2'></div>
                </div> : null}
            {show1 ?
                <div className='row  kunHead'>
                    <div className='col-sm-2 col-md-2 '>
                        <div className='ompicture'>
                            <center>

                                <Image className='img_for_lefts om-icon' src={omIcon} alt='hii' width="100%" />
                            </center>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 '>

                        {basicDetails ? <h1 className='text-center h1_color mt-4 '><b>{t('Basic Details')} </b> </h1> : null}
                        {horoscopeChart ? <h1 className='text-center h1_color mt-4 '><b>{t('horoscopeChart')} </b> </h1> : null}
                        {planetaryDetails ? <h1 className='text-center h1_color mt-4 '><b>{t('Planetary Details')} </b> </h1> : null}
                        {vimshottari ? <h1 className='text-center h1_color mt-4 '><b>{t('Vimshottari Dasha')} </b> </h1> : null}
                        {yogini ? <h1 className='text-center h1_color mt-4 '><b>{t('Yogini Dasha')} </b> </h1> : null}
                        {char ? <h1 className='text-center h1_color mt-4 '><b>{t('Char Dasha')} </b> </h1> : null}
                        {kalsarpa ? <h1 className='text-center h1_color mt-4 '><b>{t('Kalsarpa Dosha')} </b> </h1> : null}
                        {manglik ? <h1 className='text-center h1_color mt-4 '><b>{t('Manglik Dosha')} </b> </h1> : null}
                        {SadheSati ? <h1 className='text-center h1_color mt-4 '><b>{t('SadheSati Dosha')} </b> </h1> : null}
                        {pitra ? <h1 className='text-center h1_color mt-4 '><b>{t('Pitra Dosha')} </b> </h1> : null}
                        {remedies ? <h1 className='text-center h1_color mt-4 '><b>{t('Gemstone Remedies')}</b> </h1> : null}
                        {rudraksha ? <h1 className='text-center h1_color mt-4 '><b>{t('Rudraraksha Suggestion')}</b> </h1> : null}
                        {sadhesati ? <h1 className='text-center h1_color mt-4 '><b>{t('Sadhesati Remedies')}</b> </h1> : null}
                        {lifeReport ? <h1 className='text-center h1_color mt-4 '><b>{t('Life Report')}</b> </h1> : null}
                        {Bhinnashtak ? <h1 className='text-center h1_color mt-4 '><b>{t('Bhinnashtak Varga')}</b> </h1> : null}
                        {Sarvashtak ? <h1 className='text-center h1_color mt-4 '><b>{t('sarvashtakVarga')}</b> </h1> : null}
                        {debts ? <h1 className='text-center h1_color mt-4 '><b>{t('Lal Kitab')}</b> </h1> : null}
                        {lalHouse ? <h1 className='text-center h1_color mt-4 '><b>{t('Remedies')}</b> </h1> : null}
                        {DailyPredict ? <h1 className='text-center h1_color mt-4 '><b>{t('Daily Prediction')}</b> </h1> : null}
                        {BioRhythm ? <h1 className='text-center h1_color mt-4 '><b>{t('Biorhythm')}</b> </h1> : null}

                    </div>
                    <div className='col-sm-2 col-md-2'>
                        <div className='ompicture'>
                            <center>

                                <Image className='img_for_rights om-icon' src={omIcon} alt='hii' width="100%" />
                            </center>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}
export default Common;
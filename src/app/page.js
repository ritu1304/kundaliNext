// "use client"
// import React, { useEffect, useState } from 'react'
import CommonCalendar from '../components/FestivalComponent/CommonCalender'
 import IndianZodiac from '../components/IndianZodiac';
// import "react-datepicker/dist/react-datepicker.css";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from 'react-redux';
// import { additionalPanchang } from "../../Redux/Action/PanchangAction"
// import moment from 'moment';
// import axios from 'axios';
// import { Link } from 'react-router-dom'
//  import { CModal, CModalBody, CModalHeader } from '@coreui/react';
//  import ReactReadMoreReadLess from "react-read-more-read-less";
// import { register } from 'swiper/element/bundle';
// import { NavLink } from "react-router-dom";
import guruGeetaEng from '../../public/guru geeta ad photo english.jpg'
import guruGeetaHin from '../../public/guru geeta ad photo hindi.jpg'
import youtube from '../../public/youtube 1.svg'
import instagram from '../../public/instagram 1.svg'
import facebook from '../../public/facebook 1.svg'
import santanTextEng from '../../public/Sanatan jyoti text 14 kb.png'
import sanatantextHin from '../../public/santan jyoti text hin.png'
import sunrise from '../../public/Sunrise.png'
import sunset from '../../public/Sunset.png'
import moonrise from '../../public/moonrise.png'
import moonset from '../../public/Moonset.png'
import tithi from '../../public/Tithi.png'
import rahukaal from '../../public/Rahu Kaal.png'
import nakshatra from '../../public/Nakshatra.png'
import aries from '../../public/Aries.png'
import taurus from '../../public/Taurus.png'
import gemini from '../../public/Gemini.png'
import cancer from '../../public/Cancer.png'
import leo from '../../public/Leo.png'
import virgo from '../../public/Virgo.png'
import libra from '../../public/Libra.png'
import scropio from '../../public/Scorpio.png'
import saggitarius from '../../public/Sagittarius.png'
import capricorn from '../../public/Capricorn.png'
import aquarius from '../../public/Aquarius.png'
import pisces from '../../public/Pisces.png'
import laghuRudra from '../../public/Laghu  Rudra  Anushthan.png'
import vishnuSahas from '../../public/Vishnu  Sahastranaam.png'
import rudrabhishek from '../../public/Rudraabhishek.png'
import atiRudra from '../../public/Ati Rudra Anushthan.png'
import kanakaDhara from '../../public/Kanaka Dhara Stotram.png'
import sriSuktam from '../../public/Sri suktam.png'
import Image from 'next/image';
import Link from 'next/link';
import ReadMoreReadLess from '@/components/ReadMoreReadLess';

// import '../Home/Home.css' //changes
// import mixpanel from 'mixpanel-browser';
// import LocationComponent from './LocationComponent';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import '../Blogs/CustomCarousel.css'

const HomePage =  () => {
  // useEffect(() => {
  //   // mixpanel.track('homePageViewed');
  // }, []);
  // const [allPosts, setAllPosts] = useState([])
  // const [date, setDate] = useState(new Date());
  // const [show, setShow] = React.useState(0)
  // const userId = process.env.NEXT_PUBLIC_SANTAN_USER_ID;
  // const apiKey = process.env.NEXT_PUBLIC_SANTAN_API_KEY;
  // const advancePanchangData = useSelector((state) => state.PanchangReducer.AdditionalPanchang.data);
 
  // const { t } = useTranslation();
  // register();
  // var LocalStore = localStorage.getItem('lng');
  // var languageForApi;
  // if (LocalStore === null) {
  //   languageForApi = "en"
  // } else {
  //   languageForApi = LocalStore;
  // }
  // -----------------------------------------------Western Modal-------------------------------------
  // const [showStickyNote, setShowStickyNote] = useState(true);
  // const [open, setOpen] = React.useState(false);
  // const [name, setName] = useState("")
  // const [image, setImage] = useState("")
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [visible, setVisible] = useState(false)
  // const [StoreResp, setStoreResp] = useState("")
  // var today = new Date();
  // var date1 = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  // var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  // var formattedDate = today.toLocaleDateString('en-IN', options).replace(/\//g, '/');
  // const dispatch = useDispatch()

  const zodiacSignConstant = [
    {
      name: 'Aries',
      label: "Aries",
      image: aries,
      value: "aries",
      id: 1,
      date: 'aries date1'
    },
    {
      name: 'Taurus',
      label: "Taurus",
      image: taurus,
      value: "taurus",
      id: 2,
      date: 'taurus date1'
    },
    {
      name: 'Gemini',
      label: "Gemini",
      image: gemini,
      value: "gemini",
      id: 3,
      date: 'Gemini date1'
    },
    {
      name: 'Cancer',
      label: "Cancer",
      image: cancer,
      value: "cancer",
      id: 4,
      date: 'cancer date1'
    },
    {
      name: 'Leo',
      label: "Leo",
      image: leo,
      value: "leo",
      id: 5,
      date: 'leo date1'
    },
    {
      name: 'Virgo',
      label: "Virgo",
      image: virgo,
      value: "gemini",
      id: 6,
      date: 'Virgo date1'
    },
    {
      name: 'Libra',
      label: "Libra",
      image: libra,
      value: "libra",
      id: 7,
      date: 'libra date1'
    },
    {
      name: 'Scorpio',
      label: "Scorpio",
      image: scropio,
      value: "scorpio",
      id: 8,
      date: 'scorpio date1'
    },
    {
      name: 'Sagittarius',
      label: "Sagittarius",
      image: saggitarius,
      value: "sagittarius",
      id: 9,
      date: 'Sagittarius date1'
    },
    {
      name: 'Capricorn',
      label: "Capricorn",
      image: capricorn,
      value: "capricorn",
      id: 10,
      date: 'capricorn date1'
    },
    {
      name: 'Aquarius',
      label: "Aquarius",
      image: aquarius,
      value: "aquarius",
      id: 11,
      date: 'Aquarius date1'
    },
    {
      name: 'Pisces',
      label: "Pisces",
      image: pisces,
      value: "pisces",
      id: 12,
      date: 'Pisces date1'
    },

  ]
  const slides = [
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review1.jpg", name: "Sarika, Resident - Amrapali Sapphire, Noida, Uttar Pradesh", date: "04/04/2024", review: "वैसे तो पंचांग को समझना बहुत कठिन होता है परंतु सनातन ज्योति के पंचांग की सरलता और सटीकता ने मुझे काफी प्रभावित किया है। इसमें पूरे साल के लिए मिलने वाली समय, तिथि, और मुहूर्त की जानकारी वास्तव में बिल्कुल सही होती है, जिससे मुझे अपने धार्मिक और सांस्कृतिक कार्यों की सही तिथि व समय के लिए इधर उधर भटकना नहीं पड़ता है। अब तो मेरे लिए यह मेरा विश्वसनीय स्रोत बन चुका है साथ ही अब मैं इस पंचांग का प्रयोग करने की सलाह अपने सभी रिश्तेदारों को देती हूँ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review2.jpg", name: "Jitendra Kumar Nigam, Resident - Gurugram, Haryana", date: "08/04/2024", review: " मैं ज्यादातर अपने सभी कार्य पंचांग में शुभ तिथि और समय देखकर ही करता हूँ। क्योंकि मेरा मानना है कि मेहनत के साथ साथ हमारे जीवन पर ग्रह, नक्षत्रों का भी प्रभाव पड़ता है । सनातन ज्योति के पंचांग के कारण मुझे सही समय व तिथि का पता चलने लगा जिससे हमारे सभी महत्त्वपूर्ण कार्य सही मुहूर्त और समय के अनुसार हो पाते हैं। मैं सनातन ज्योति का धन्यवाद करता हूँ कि उन्होंने हमारे लिए इतना उपयोगी पंचांग बनाया ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review3.jpg", name: "Satish Kumar Narayanan, Resident-  Pune , Maharastra", date: "13/04/2024", review: "This Anushthan was journey of the positive vibration and spirituality for all the days….  Wonderful, ‘atma’, touching experience while the Vedic recitations were recited by the Panditji…  The orange and the yellow flowers blossomed my spirit. The Panchaamrit process upgraded my spirit…  I felt enhanced by the names of all the Gods…said in my presence, even though I was sitting so far.  What a holy, clean mind and heart absorbing of positivity….  I did it late, but experience was beyond words with the help of ‘Sanatan Jyoti’. Thanks to the team of Sanatan Jyoti, to make me live this experience!!" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review1.jpg", name: "Sarika, Resident - Amrapali Sapphire, Noida, Uttar Pradesh", date: "04/04/2024", review: "वैसे तो पंचांग को समझना बहुत कठिन होता है परंतु सनातन ज्योति के पंचांग की सरलता और सटीकता ने मुझे काफी प्रभावित किया है। इसमें पूरे साल के लिए मिलने वाली समय, तिथि, और मुहूर्त की जानकारी वास्तव में बिल्कुल सही होती है, जिससे मुझे अपने धार्मिक और सांस्कृतिक कार्यों की सही तिथि व समय के लिए इधर उधर भटकना नहीं पड़ता है। अब तो मेरे लिए यह मेरा विश्वसनीय स्रोत बन चुका है साथ ही अब मैं इस पंचांग का प्रयोग करने की सलाह अपने सभी रिश्तेदारों को देती हूँ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review2.jpg", name: "Jitendra Kumar Nigam, Resident - Gurugram, Haryana", date: "08/04/2024", review: " मैं ज्यादातर अपने सभी कार्य पंचांग में शुभ तिथि और समय देखकर ही करता हूँ। क्योंकि मेरा मानना है कि मेहनत के साथ साथ हमारे जीवन पर ग्रह, नक्षत्रों का भी प्रभाव पड़ता है । सनातन ज्योति के पंचांग के कारण मुझे सही समय व तिथि का पता चलने लगा जिससे हमारे सभी महत्त्वपूर्ण कार्य सही मुहूर्त और समय के अनुसार हो पाते हैं। मैं सनातन ज्योति का धन्यवाद करता हूँ कि उन्होंने हमारे लिए इतना उपयोगी पंचांग बनाया ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review3.jpg", name: "Satish Kumar Narayanan, Resident-  Pune , Maharastra", date: "13/04/2024", review: "This Anushthan was journey of the positive vibration and spirituality for all the days….  Wonderful, ‘atma’, touching experience while the Vedic recitations were recited by the Panditji…  The orange and the yellow flowers blossomed my spirit. The Panchaamrit process upgraded my spirit…  I felt enhanced by the names of all the Gods…said in my presence, even though I was sitting so far.  What a holy, clean mind and heart absorbing of positivity….  I did it late, but experience was beyond words with the help of ‘Sanatan Jyoti’. Thanks to the team of Sanatan Jyoti, to make me live this experience!!" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review1.jpg", name: "Sarika, Resident - Amrapali Sapphire, Noida, Uttar Pradesh", date: "04/04/2024", review: "वैसे तो पंचांग को समझना बहुत कठिन होता है परंतु सनातन ज्योति के पंचांग की सरलता और सटीकता ने मुझे काफी प्रभावित किया है। इसमें पूरे साल के लिए मिलने वाली समय, तिथि, और मुहूर्त की जानकारी वास्तव में बिल्कुल सही होती है, जिससे मुझे अपने धार्मिक और सांस्कृतिक कार्यों की सही तिथि व समय के लिए इधर उधर भटकना नहीं पड़ता है। अब तो मेरे लिए यह मेरा विश्वसनीय स्रोत बन चुका है साथ ही अब मैं इस पंचांग का प्रयोग करने की सलाह अपने सभी रिश्तेदारों को देती हूँ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review2.jpg", name: "Jitendra Kumar Nigam, Resident - Gurugram, Haryana", date: "08/04/2024", review: " मैं ज्यादातर अपने सभी कार्य पंचांग में शुभ तिथि और समय देखकर ही करता हूँ। क्योंकि मेरा मानना है कि मेहनत के साथ साथ हमारे जीवन पर ग्रह, नक्षत्रों का भी प्रभाव पड़ता है । सनातन ज्योति के पंचांग के कारण मुझे सही समय व तिथि का पता चलने लगा जिससे हमारे सभी महत्त्वपूर्ण कार्य सही मुहूर्त और समय के अनुसार हो पाते हैं। मैं सनातन ज्योति का धन्यवाद करता हूँ कि उन्होंने हमारे लिए इतना उपयोगी पंचांग बनाया ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review3.jpg", name: "Satish Kumar Narayanan, Resident-  Pune , Maharastra", date: "13/04/2024", review: "This Anushthan was journey of the positive vibration and spirituality for all the days….  Wonderful, ‘atma’, touching experience while the Vedic recitations were recited by the Panditji…  The orange and the yellow flowers blossomed my spirit. The Panchaamrit process upgraded my spirit…  I felt enhanced by the names of all the Gods…said in my presence, even though I was sitting so far.  What a holy, clean mind and heart absorbing of positivity….  I did it late, but experience was beyond words with the help of ‘Sanatan Jyoti’. Thanks to the team of Sanatan Jyoti, to make me live this experience!!" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review1.jpg", name: "Sarika, Resident - Amrapali Sapphire, Noida, Uttar Pradesh", date: "04/04/2024", review: "वैसे तो पंचांग को समझना बहुत कठिन होता है परंतु सनातन ज्योति के पंचांग की सरलता और सटीकता ने मुझे काफी प्रभावित किया है। इसमें पूरे साल के लिए मिलने वाली समय, तिथि, और मुहूर्त की जानकारी वास्तव में बिल्कुल सही होती है, जिससे मुझे अपने धार्मिक और सांस्कृतिक कार्यों की सही तिथि व समय के लिए इधर उधर भटकना नहीं पड़ता है। अब तो मेरे लिए यह मेरा विश्वसनीय स्रोत बन चुका है साथ ही अब मैं इस पंचांग का प्रयोग करने की सलाह अपने सभी रिश्तेदारों को देती हूँ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review2.jpg", name: "Jitendra Kumar Nigam, Resident - Gurugram, Haryana", date: "08/04/2024", review: " मैं ज्यादातर अपने सभी कार्य पंचांग में शुभ तिथि और समय देखकर ही करता हूँ। क्योंकि मेरा मानना है कि मेहनत के साथ साथ हमारे जीवन पर ग्रह, नक्षत्रों का भी प्रभाव पड़ता है । सनातन ज्योति के पंचांग के कारण मुझे सही समय व तिथि का पता चलने लगा जिससे हमारे सभी महत्त्वपूर्ण कार्य सही मुहूर्त और समय के अनुसार हो पाते हैं। मैं सनातन ज्योति का धन्यवाद करता हूँ कि उन्होंने हमारे लिए इतना उपयोगी पंचांग बनाया ।" },
    { image: "https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/review3.jpg", name: "Satish Kumar Narayanan, Resident-  Pune , Maharastra", date: "13/04/2024", review: "This Anushthan was journey of the positive vibration and spirituality for all the days….  Wonderful, ‘atma’, touching experience while the Vedic recitations were recited by the Panditji…  The orange and the yellow flowers blossomed my spirit. The Panchaamrit process upgraded my spirit…  I felt enhanced by the names of all the Gods…said in my presence, even though I was sitting so far.  What a holy, clean mind and heart absorbing of positivity….  I did it late, but experience was beyond words with the help of ‘Sanatan Jyoti’. Thanks to the team of Sanatan Jyoti, to make me live this experience!!" },
   
  ]
  const SanatanText = "The meaning of 'Sanatan' is that which has no beginning or end, it is eternal. In Sanatan, all the qualities of creation are encompassed; scientists have been researching in their respective fields since ancient times and have unraveled the mysteries hidden in this creation. Their influence affects all living beings. Scientists of the eternal era and astronomers have discovered the secrets of the universe. It is a mystery that they had the resources to explore because their calculations were absolutely accurate. They have accurately calculated the influence of the sun, moon, planets, and 28 constellations on all living beings on Earth.In our modern era, various kinds of research are being conducted that have completely transformed our lives. However, it does not mean that we should forget the research of scientists from the ancient era, as it forms the foundation of our modern times. They extensively studied the influence of all planets and stars on all living beings and developed the process of creating astrological charts. Astrology explains the qualities and characteristics of individuals based on their birth charts. Just as we use modern calendars today, in ancient times, the creation of a Panchang (traditional Almanac) was based on the movement of the moon, and it is still in use today and holds great significance. Furthermore, from the ancient era, we have gained extensive knowledge about the impact of different elements of the Earth on our lives, which greatly influence our daily lives. Sanatan Jyoti is an initiative through which we can utilize the knowledge obtained from ancient research in our modern lives. For example, we can use astrology charts, Kundali matching, Panchang for success in business and career, and incorporate ancient stories and knowledge to bring happiness into our lives. We can also seek insights into future events, enabling us to make informed decisions that yield positive outcomes in the future. There is no sectarianism in Sanatan Dharma. It is associated with human values. Sanatan allows everyone the freedom to choose their own faith based on human principles. Sanatan Jyoti is an initiative for the welfare of humanity.The teachings passed down by our ancestors are not connected to any specific sect. It grants every individual the freedom to choose and perform actions according to their own thoughts. Sanatan Dharma teaches the art of living, shows the structure of society, and guides us on how our family should be organized to bring happiness into our lives. It explains the abstract Brahman as easily as the manifest forms and leaves it to the individual to decide their path.The ancient scriptures and folk tales written in ancient times still show us the way in our lives. Even today, amidst the worries of our fast-paced life, those same old mythological stories provide us relief. The aim of Sanatan Jyoti is to bring solace to society from the anxieties prevalent in today's hectic life. I urge all of you to come together for the welfare of society and become a part of it."
  const BlogText = "The ancient tradition (Sanatan tradition) of India, a vital aspect of Indian culture and civilization, has been passed down through generations for centuries. It is based on teachings found in the Vedas, Upanishads, Puranas, and religious scriptures. These teachings contain messages of rules, education, and guidance for every aspect of life, helping our society to prosper, stay balanced, and continuously develop.In ancient times, sages and monks conducted various experiments and research through their meditation and efforts, leading to many discoveries. Some of these discoveries are still beyond the scope of modern science today. The traditions followed by these ancient sages and ascetics still appear important for the welfare, health, and prosperity of our society today. Due to the advancement of modernization over generations, many beneficial teachings for human welfare, mentioned in the Vedas, Upanishads, and Puranas, have been somewhat overlooked within the ancient tradition (Sanatan tradition). ";
  const KundaliText = "The science of making Kundli (Astrological chart) and reading Horoscope is called Astrology. Astrology is also called Jyoti Shastra, Jyoti means light and the scripture which illuminates our life is called Jyotish Shastra. When a newborn baby is born, the map of the sky is called a horoscope, at that time which planet is where, all these are described in the horoscope. The human body is formed by the effects of these planets only. And the activities in his life are the result of a complex action of his karma and the movements of the planets. Kundli describes a person from birth to death.";
  const MatchMakingText = "Horoscope matching is the actually matching of human qualities. Every human has its own qualities, which are divided into 36 types in astrology. The more qualities a boy and a girl have, the closer they can be. The matching of these 36 qualities of a boy and a girl is called Kundli Matching. The more qualities a boy and a girl get, the more likely their pair will remain in love. The marriage is not approved by astrologers if qualities of Boy-Girl matches less than 18. Some types of defects are also taken care of in horoscope matching like Nadi Dosha,Mangal Dosha etc. It is the endeavor of SanatanJyoti to match the Kundli of the boy and the girl in the right way which is flawless so that they can spend their married life very lovingly.";
  const AnushthanText = "The literal meaning of 'Anushthan' is a ritualistic practice aimed at achieving desired results, and it involves performing auspicious actions and worshiping divine elements for success and fruitful outcomes.An 'Anushthan' assists in reducing physical ailments, mental unrest, pain, fear, and obstacles encountered in life. Many people face domestic troubles, harmful effects of unfavorable planets, legal issues, continuous losses in business, incurable diseases, fear of untimely death, etc. In such situations, Anushthan undoubtedly helps alleviate the fear of these upheavals in a person's life. Therefore, Anushthan provides maximum relief to individuals by addressing various problems, fears, stress, etc., in their lives. However, Anushthan is akin to awakening divine elements to attain one's desired outcome (blessing). Therefore, performing this ritual under the guidance of Vedic rituals and proficient Acharyas ensures complete benefits. If the Anushthan ritual is not conducted according to Vedic rituals or if errors occur in it, it certainly has adverse effects. Particularly in Sanatan Dharma, Anushthan rituals are conducted by proficient Acharyas trained in Gurukuls, who are skilled and proficient in performing Anushthan through Vedic rituals.There are different types of rituals for different problems which you can know in detail below:-";
  const FestivalText = "Festivals are very important in Sanatan Samaj.Festivals fill new energy in our life with joy and gaiety. Irrespective of the period, the importance of ancient or modern festivals is the same. It gives us a break from the routine of everyday life,inspires us to spend some time with our friends and family.Sanatan Samaj believes that no moment should be wasted and social reform and religious work should continue parallel to our daily work. For the same joy and happiness in Sanatan society,festivals have been made in such a way that every person spends some time in charity, religion and social work, so that he gets peace of mind which is the ultimate happiness. It has been saidin the scriptures that Karma, Artha, Dharma,Moksha is the goal of a human being. There is no progress of man without salvation, that's why our festivals are made in such a way that we do religious work and get this supreme happiness.The health of body, mind and intellect has also been taken care of in the festivals of Sanatan Samaj. For this, many types of fasts such as Ekadashi, Pradosh, Navratri etc., so that our daily routine also continues and the health of body and mind is also maintained.In Sanatan Samaj, taking the name of God or remembering Him always is paramount. Sanatan Samaj believes that God is in every element, Hehas no shape, He is above all properties and characteristics. That's why we should celebrate festivals in one way or the other, so that there will always be ultimate joy in our life. Sanatan Jyoti endeavors that you should know and take advantage of all the festivals of Sanatan Samaj."
  
  // ----------------------------Profile Data------------------------
  // var IdStore = localStorage.getItem("id")
  // useEffect(() => {
  //   if (IdStore) {
  //     const url = `/api/get_User_By_Id?userId=${IdStore}`
  //     axios.get(url)
  //       .then((res) => {
  //         localStorage.setItem('firstName', res.data.data.firstName);
  //         localStorage.setItem('lastName', res.data.data.lastName);
  //         localStorage.setItem('location', res.data.data.location);

  //         const requestOptions = {
  //           method: 'POST',
  //           headers: {
  //             'Authorization': "Basic " + btoa(userId + ":" + apiKey),
  //             'Content-Type': 'application/json',
  //             'Accept-Language': languageForApi
  //           },
  //           body: JSON.stringify(
  //             {
  //               "day": moment(date).format('DD'),
  //               "month": moment(date).format('M'),
  //               "year": moment(date).format('yy'),
  //               "hour": 0,
  //               "min": 1,
  //               "lat": res?.data?.data.lat || 19.0759837,
  //               "lon": res?.data?.data.lon || 72.8776559,
  //               "tzone": res?.data?.data.tzone || 5.5
  //             })
  //         };
  //         dispatch(additionalPanchang(requestOptions))

  //       })
  //   } else {
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': "Basic " + btoa(userId + ":" + apiKey),
  //         'Content-Type': 'application/json',
  //         'Accept-Language': languageForApi
  //       },
  //       body: JSON.stringify(
  //         {
  //           "day": moment(date).format('DD'),
  //           "month": moment(date).format('M'),
  //           "year": moment(date).format('yy'),
  //           "hour": 0,
  //           "min": 1,
  //           "lat": 19.0759837,
  //           "lon": 72.8776559,
  //           "tzone": 5.5
  //         })
  //     };
  //     dispatch(additionalPanchang(requestOptions))
  //   }

  // }, [])
  // ----------------------------Panchang api-------------------------------
  // var language;
  // if (LocalStore == "hi") {
  //   language = false;
  // }
  // else {
  //   language = true;
  // }
  // useEffect(() => {
  //   const fetchAllPosts = async () => {
  //     let OPTIONS = {

  //       url: `/article/get_All_Blogs?articleType=PUBLISH&festivalStatus=${language}&page=0&size=30&status=true`,
  //       method: "get",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     };
  //     axios(OPTIONS)
  //       .then((res) => {

  //         setAllPosts(res.data.data)

  //       })
  //   }
  //   fetchAllPosts()
  // }, [])

  // -------------------------------------------------western Horoscope-------------------------
  // const onSubmit = async (e, value) => {
  //   mixpanel.track('getWesternHoroscopeClicked', { buttonName: 'getWesternHoroscopeClicked' });
  //   e.preventDefault()
  //   setName(value.name)
  //   setImage(value.image)
  //   let OPTIONS = {
  //     url: `/api/sun_sign_prediction/daily/${value.value}/${languageForApi}`,
  //     method: "Post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };
  //   axios(OPTIONS)
  //     .then((res) => {
  //       mixpanel.track('getWesternHoroscopeSuccess', { success: true });
  //       setStoreResp(res.data)
  //       setVisible(!visible)
  //       handleOpen()
  //     })
  //     .catch((error) => {
  //       mixpanel.track('getWesternHoroscopeFailed', { success: false });
  //     })
  // }
  // -------------------------------------------------western Horoscope End-------------------------

  
  // const [isTextClosed, setIsTextClosed] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile screens
  //   };

  //   // Listen for window resize events to determine screen size
  //   window.addEventListener('resize', handleResize);
  //   handleResize(); // Call initially to set the initial screen size

  //   return () => {
  //     window.removeEventListener('resize', handleResize); // Cleanup on unmount
  //   };
  // }, []);
  const handleCloseText = () => {
    isTextClosed = !isTextClosed; // Toggle the state

  };
  var show = 0;
  const handleClickOne = () => {
    show = 1;
  }
  const handleClickZero = () => {
    show = 0;
  }
  var isTextClosed = false;
  var isMobile= false;
  const handleImageClick = () => {
    if (isTextClosed) {
      // If the text is closed, open it
      iTextClosed = false;
      window.open('http://www.youtube.com/@sanatanjyoti2895', '_blank');
      // mixpanel.track('youtubeLinkClicked', { buttonName: 'youtubeLinkClicked' });
    }
    if (isMobile) {
      window.open('http://www.youtube.com/@sanatanjyoti2895', '_blank');  // Navigate to another link on mobile
      // mixpanel.track('youtubeLinkClicked', { buttonName: 'youtubeLinkClicked' });
    } else {
      isTextClosed = !isTextClosed; // Toggle the visibility of text on desktop
    }
  };
  // // const handleMixPanelClick = (linkName) => {
  // //   mixpanel.track(linkName, { buttonName: linkName });

  // // };
  var showStickyNote = true;
  const onClose = () => {
    showStickyNote= false;
  };
  const colors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#8B00FF', // Violet
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#8B00FF'  // Violet
  ];
  
  const text = 'Exclusive';
  return (
    <div className='landingPageMain wrapper1'>
      {/* <LocationComponent /> */}
      <marquee width="100%" direction="left" height="60px" className="mt-3">
        {/* <h2 className='mt-2'>{t('Date')} &rArr; {formattedDate} || {t('Day')} &rArr; {advancePanchangData ? advancePanchangData?.day : "Empty Data"} || {t('Sunrise')} &rArr; {advancePanchangData ? advancePanchangData?.sunrise : "Empty Data"} || {t('Sunset')} &rArr; {advancePanchangData ? advancePanchangData?.sunset : "Empty Data"} || {t('Nakshatra')} &rArr; {advancePanchangData ? advancePanchangData?.nakshatra?.details?.nak_name : 'Empty Data'}  {advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.second : 'Empty Data'} ({t('Till')}) || {t('Tithi')} &rArr; {advancePanchangData ? advancePanchangData?.tithi?.details?.tithi_name : 'Empty Data'} {advancePanchangData ? advancePanchangData?.tithi?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.tithi?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.tithi?.end_time?.second : 'Empty Data'} || {t('Rahu kalm')} &rArr; {advancePanchangData ? advancePanchangData?.rahukaal?.start : 'Empty Data'}  | {advancePanchangData ? advancePanchangData?.rahukaal?.end : 'Empty Data'} || {t('Sun sign')} &rArr; {advancePanchangData ? advancePanchangData?.sun_sign : "Empty Data"} || {t('Moon sign')} &rArr; {advancePanchangData ? advancePanchangData?.moon_sign : "Empty Data"}</h2> */}
      </marquee>
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          {showStickyNote && (
            <div className="sticky-note">
              <h4 className="content1">
                {/* {t('Advance Panchang is our exclusive feature')}  */}
                Advance Panchang is our exclusive feature where you can check Panchang according to Date And Time
                </h4>
              <button className="close-button" 
              // onClick={onClose}
              >
                &#10006;
              </button>
            </div>
           )} 
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9 col-xl-8">
          <div className="exText">
          <center style={{ fontSize: '2em', fontWeight: 'bold' }} className=''>
            
            {text.split('').map((char, index) => (
              <span key={index} style={{ color: colors[index % colors.length] }}>
                {char}
              </span>
            ))}
          </center>
          <center className="text-stroke" >
          <div className="elementor-heading-title" style={{ color: "orange" }}>~ CHECK ADVANCE PANCHANG ~ </div>
           
             {/* <NavLink className="text-deco" exact to={`/Panchang/PanchangAdditional`} target="_blank" onClick={() => handleMixPanelClick("checkAdvancePanchangAccordingToDateAndTimeClicked")}> */}
              {/* <div className={LocalStore === "hi" ? "elementor-heading-title1" : "elementor-heading-title"} style={{ color: "orange" }}>~ CHECK ADVANCE PANCHANG ~ </div> */}
            {/* </NavLink>  */}
          </center>
          </div>          
        </div>
      </div>
      <div class="centeredLp">
        <div className="container">
          <section className="hero">
            {/* {(LocalStore == 'en') || (LocalStore == null) ?
              <Image src={guruGeetaEng} alt="" onClick={handleImageClick} /> :
              <Image src={guruGeetaHin} alt="" onClick={handleImageClick} />
            } */}
              <Image src={guruGeetaEng} alt=""
              //  onClick={handleImageClick}
                />

            <div className={`text ${isTextClosed ? 'closed' : ''}`}>
              <h1 className='headingLp'>Latest Video</h1>
              <ul className='ulLp'>
                <li><a href="http://www.youtube.com/@sanatanjyoti2895" target="_blank" rel="noreferrer"
                //  onClick={() => handleMixPanelClick("youtubeLinkClicked")}
                  ><Image src={youtube} alt="" /></a></li>
                <li><a href="https://www.instagram.com/sanatan.jyoti?igsh=aWpvMW02dHpqc2xl" target="_blank" rel="noreferrer"
                //  onClick={() => handleMixPanelClick("instagramLinkClicked")}
                 ><Image src={instagram} alt="" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100080094303765&mibextid=ZbWKwL" target="_blank" rel="noreferrer" 
                // onClick={() => handleMixPanelClick("facebookLinkClicked")}
                ><Image src={facebook} alt="" /></a></li>

              </ul>

              <a href="/Home" className="subscribe">Subscribe our channel</a>
            </div>
            {!isTextClosed && (
              <div className="link imageTxt" 
              // onClick={handleCloseText}
              >
                {/* <Image src="images/hero-devaider.png" alt="" /> */}
              </div>
            )}

          </section>
          {/* <!-- hero end --> */}

          {/* <!-- text sec start --> */}
          <div class="textSec">
            <h2 className='headingLp'>
              {/* {(LocalStore == 'en') || (LocalStore == null) ?
                <img src={santanTextEng} alt="Sanatan" /> :
                <img src={sanatantextHin} alt="Sanatan" />
              } */}
                <Image src={santanTextEng} alt="Sanatan" /> 
            </h2>

            {/* <p> */}
             
            <ReadMoreReadLess text={SanatanText} maxLength={300} />
            {/* </p> */}
          </div>
          {/* <!-- text sec end --> */}

          {/* <!-- panchang sec start --> */}
          <div class="panchangSec">
            <h2 className='headingLp'>Today Panchang</h2>


            <div class="date">
              {/* <strong>{advancePanchangData ? advancePanchangData?.day : "Empty Data"} - {formattedDate}</strong> */}
              </div>

            <ul class="list ulLp">
              <li>
                <div class="icon">
                  <Image src={sunrise} alt="" />
                </div>
                Sunrise
                {/* : {advancePanchangData ? advancePanchangData?.sunrise : "Empty Data"} */}
              </li>
              <li>
                <div class="icon">
                  <Image src={sunset} alt="" />
                </div>
                Sunset
                {/* : {advancePanchangData ? advancePanchangData?.sunset : "Empty Data"} */}
              </li>
              <li>
                <div class="icon">
                  <Image src={moonrise} alt="" />
                </div>
                Moonrise
                 {/* : {advancePanchangData ? advancePanchangData?.moonrise : "Empty Data"} */}
              </li>
              <li>
                <div class="icon">
                  <Image src={moonset} alt="" />
                </div>
                Moonset 
                {/* : {advancePanchangData ? advancePanchangData?.moonset : "Empty Data"} */}
              </li>
              <li>
                <div class="icon">
                  <Image src={rahukaal} alt="" />
                </div>
                Rahu kalm
                 {/* : {advancePanchangData ? advancePanchangData?.rahukaal?.start : 'Empty Data'}  | {advancePanchangData ? advancePanchangData?.rahukaal?.end : 'Empty Data'} */}
              </li>
              <li>
                <div class="icon">
                  <Image src={nakshatra} alt="" />
                </div>
                Nakshatra 
                {/* : {advancePanchangData ? advancePanchangData?.nakshatra?.details?.nak_name : 'Empty Data'} {advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.nakshatra?.end_time?.second : 'Empty Data'} ({t('Till')}) */}
              </li>
              <li>
                <div class="icon">
                  <Image src={tithi} alt="" />
                </div>
                Tithi
                {/* : {advancePanchangData ? advancePanchangData?.tithi?.details?.tithi_name : 'Empty Data'} {advancePanchangData ? advancePanchangData?.tithi?.end_time?.hour : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.tithi?.end_time?.minute : 'Empty Data'}:{advancePanchangData ? advancePanchangData?.tithi?.end_time?.second : 'Empty Data'} ({t('Till')}) */}
              </li>
            </ul>
            <div className='mt-4'>
              <center>
                <Link className='btnLp btn control_for_btns text-white' href="/Panchang" 
                // onClick={() => handleMixPanelClick("seePanchangInDetailClicked")} 
                >See Panchang in Detail</Link>
              </center>
            </div>
          </div>
          {/* <!-- panchang sec end --> */}

          {/* <!-- Western sec start --> */}
          <div class="WesternSec">
            {show === 0 ?
              <div>
                <div className="row">
                  <h2 className='headingLp'>Western Zodiac</h2>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4">

                  </div>
                  <div className="col-sm-12 col-md-4 col-xl-4 col-lg-4">
                    <center>
                      <div className="div pencilSign text-center cursor-pointer">

                        <div className="dropdown set_dropdown ">
                          <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>See Indian Zodiac<i className="fa-solid fa-pencil " ></i> </h6>
                          </div>
                          <ul className="dropdown-menu" >
                            <li><span className="dropdown-item" href="#"
                            //  onClick={handleClickZero}
                             >Western</span></li>
                            <li><span className="dropdown-item" href="#"
                            //  onClick={handleClickOne}
                             >Indian</span></li>
                          </ul>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="col-sm-12 col-md-4">
                  </div>
                </div>
                <div className="row mt-2">
                  <p className='card-text text-center'>
                  Sanatan means that which has no beginning and no end, it is eternal. All the qualities of this Universe are included in Sanatan.
                  </p>
                </div>
                <div className='row  WesternZodiacSignsImages '>
                  {zodiacSignConstant.map((item) => {
                    return (
                      <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 planImgBoxRows ">
                        <center>
                          <div className="img zoom cursor-pointer"><Image src={item.image} alt='hii' width="90px" 
                          // onClick={e => onSubmit(e, item)} 
                          /></div>
                          <h4>{item.name}</h4>
                          <div className="date" >{item.date}</div>
                        </center>
                      </div>
                    )
                  })}
                </div>
                <div className="row zodiacSignCrousel">
                   <div className="swiper-container">
                   {/* <Swiper 
                                        className="custom-swiper"
                                        modules={[Navigation, Pagination, Autoplay]}
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
                                            slidesPerView: 4,
                                            spaceBetween: 25,
                                        },
                                        }}
                                        >
                    {zodiacSignConstant.map((item) => {
                      return (
                        <SwiperSlide>                       
                          <div className='homezoom' >
                          <center>
                            <Image type="text" id='western' onClick={e => onSubmit(e, item)} src={item.image} alt='hii' width="90px" className='carouselZodiacImages'></Image>
                            <h4><b>{item.name}</b></h4>
                            <div className='date'><b>{item.date}</b></div>
                          </center>
                        </div>
                        </SwiperSlide>
 
                      )
                    })}
                  </Swiper> */}
                  </div>
                </div>
              </div>
              : ""}

            {show === 1 ? <>
              <div className="mt-2">
                <div className="row">
                  <h5 className="card-title  text-center" ><b className='homeCardsHeading'>Indian Zodiac</b></h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4 ">
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <center>
                      <div className="div pencilSign text-center">
                        <div className="dropdown set_dropdown ">
                          <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>See Western Zodiac<i className="fa-solid fa-pencil " ></i> </h6>
                          </div>
                          <ul className="dropdown-menu" >
                            <li><span className="dropdown-item" href="#"
                            //  onClick={handleClickZero}
                             >Western</span></li>
                            <li><span className="dropdown-item" href="#" 
                            // onClick={handleClickOne}
                            >Indian</span></li>
                          </ul>
                        </div>
                      </div>
                    </center>
                  </div>
                  <div className="col-sm-12 col-md-4">
                  </div>
                </div>
                <IndianZodiac data='data' />
                <br />
              </div>

              <br />
            </> : null}

          </div>

          {/* <!-- Western sec end --> */}
        </div>
      </div>

      <div className="container-fluid">
        {/* <!-- blog sec start --> */}
        <div class="blogSec centeredLp">
          <h2 className='headingLp'>Our Blogs</h2>

          {/* <p className='card-text text-center'> */}
            
          <ReadMoreReadLess text={BlogText} maxLength={300} />
          {/* </p> */}
        
          <div className="swiper-container">
                       {/* <Swiper
                       className="custom-swiper"
                                        modules={[Navigation, Pagination, Autoplay]}
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
                                            slidesPerView: 4,
                                            spaceBetween: 25,
                                        },
                                        }}
                                        >
                                        {allPosts.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <Link onClick={() => handleMixPanelClick("getBlogClicked")} to={`/blog/${item?.articleId}`}>
                                                    <div className="carousel-card">
                                                        <img src={item?.imageUrl} alt={item?.imageName} />
                                                    </div>
                                                    </Link>
                                                </SwiperSlide>
                                         ))}
                                </Swiper> */}
                                </div>    
        </div>
        
        {/* <!-- blog sec end --> */}
      </div>
      

      <div className="container">
        <div class="centeredLp">
          {/* <!-- content sec start --> */}
          <div class="contentSec">
            <div class="text">
              <h2 className='headingLp'>Kundli</h2>
              {/* <p> */}
              <ReadMoreReadLess text={KundaliText} maxLength={300} />
              {/* </p> */}
              <center className='btnLp btn control_for_btns text-white'>
                {/* <Link className='btnLp btn control_for_btns text-white' onClick={() => handleMixPanelClick("getYourFreeKundliNowClicked")} to="/Kundali"> */}
                {/* {t('kundliNow')} */}
                Get Your Free Kundli Now
                {/* </Link> */}
              </center>
            </div>

            <div class="text">
              <h2 className='headingLp'>Match Making</h2>
              {/* <p> */}
              <ReadMoreReadLess text={MatchMakingText} maxLength={300} />
              {/* </p> */}
              <center className='btnLp  btn control_for_btns text-white'>
                 {/* <Link className='btnLp  btn control_for_btns text-white' onClick={() => handleMixPanelClick("getYourFreeMatchingDetailsClicked")} to="/MatchMaking"> */}
                Get Your Matching Details Now
                 {/* </Link>  */}
              </center>
            </div>
          </div>
          {/* <!-- content sec end --> */}

          {/* <!-- anushthan sec start --> */}
          <div class="anushthanSec">
            <div class="leftLp">

              <div class="img one">
                 {/* <Link onClick={() => handleMixPanelClick("anushthanImageClicked")} to="/AnusthanFront"><Image src={laghuRudra} alt="" /> */}
                  <h5 className='headingLp' >Laghu Rudra Anushthan </h5>
                {/* </Link>  */}
              </div>
              <div class="img two">
                 {/* <Link onClick={() => handleMixPanelClick("anushthanImageClicked")} to="/AnusthanFront"> */}
                  <Image src={vishnuSahas} alt="" />

                  <h5 className='headingLp' >Vishnu Sahastranaam</h5>
                {/* </Link>  */}

              </div>
              <div class="img three">
                 {/* <Link onClick={() => handleMixPanelClick("anushthanImageClicked")} to="/AnusthanFront"> */}
                  <Image src={rudrabhishek} alt="" />

                  <h5 className='headingLp' >Rudrabhishek</h5>
                {/* </Link>  */}

              </div>
              <div class="img four">
                 {/* <Link onClick={() => handleMixPanelClick("anushthanImageClicked")} to="/AnusthanFront"> */}
                  <Image src={sriSuktam} alt="" />

                  <h5 className='headingLp' >Sri Suktam</h5>
                {/* </Link> */}

              </div>
              <div class="img five">
                 {/* <Link onClick={() => handleMixPanelClick("anushthanImageClicked")} to="/AnusthanFront"> */}
                  <Image src={kanakaDhara} alt="" />

                  <h5 className='headingLp' >Kanaka Dhara Stotram</h5>
                {/* </Link>  */}

              </div>
              <div class="img six">
                {/* <Link to="/AnusthanFront" onClick={() => handleMixPanelClick("anushthanImageClicked")}> */}
                  <Image src={atiRudra} alt="" />

                  <h5 className='headingLp' >Ati Rudra Anushthan</h5>
                {/* </Link> */}

              </div>
            </div>

            <div class="rightLp">
              <h2 className='headingLp'>Anushthan</h2>
              {/* <p> */}
              <ReadMoreReadLess text={AnushthanText} maxLength={300} />
              {/* </p> */}

              {/* <Link class="btnLp  btn control_for_btns text-white" onClick={() => handleMixPanelClick("bookNowAnushthanClicked")} to="/AnusthanFront">{t('Book Now')}</Link> */}
             </div>
          </div>
          {/* <!-- anushthan sec end --> */}
        </div>
      </div>

      <div className="container-fluid">
        {/* <!-- review sec start --> */}
        <div class="reviewSec centeredLp">
          <h2 className='headingLp'>Customer Reviews</h2>


          <p className='card-text text-center'>Client review</p>
          
             <div className="swiper-container">
                                    {/* <Swiper
                                        modules={[Navigation, Pagination, Autoplay]}
                                        pagination={{ clickable: true }}
                                        // navigation
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
                                            slidesPerView: 4,
                                            spaceBetween: 25,
                                        },
                                        }}
                                    >
              {slides?.map((option, index) => {
                return <>
                <SwiperSlide>
                  <div className="carousel-margin ">
                    <div class=" card cardReview ">
                      <div class="topLp">
                        <div class="img">
                          <img src={option.image} alt="" />
                        </div>

                        <div class="review">
                          <div class="date">{option.name}</div>
                          <div class="rating">
                            <img src="images/star.png" alt="" />
                            <img src="images/star.png" alt="" />
                            <img src="images/star.png" alt="" />
                            <img src="images/star.png" alt="" />
                            <img src="images/star.png" alt="" />
                          </div>
                          <div class="date">{option.date}</div>
                        </div>
                      </div>

                      <p>
                      //    <ReactReadMoreReadLess
                      //   charLimit={100}
                      //   readMoreText='Read more ▼'
                      //   readLessText='Read less ▼'
                      // > 
                        {option.review}
                      </ReactReadMoreReadLess>
                      </p>
                    </div>
                  </div>

                  </SwiperSlide> 
                </>
              })}
              
            
            </Swiper>*/}
          </div>


        </div>
        {/* <!-- review sec end --> */}
      </div>
      <div className="container">
        <div class="centeredLp">
          {/* <!-- fastival sec start --> */}
          <div class="fastivalSec">
            <div class="block">
              <h2 className='headingLp'>Festival, 2024</h2>
              {/* <p className='card-text text-center'> */}
              <ReadMoreReadLess text={FestivalText} maxLength={300} />
              {/* </p> */}
            </div>


            {<CommonCalendar />}
            
          </div>
          {/* <!-- fastival sec end --> */}
        </div>
      </div>

      <div className='row '>
        {/* <CModal className='zodiacModal  zodiacModal_for_width' fullscreen="sm" scrollable visible={visible} onClose={() => setVisible(false)}>
          
          <CModalHeader className='cModalHeaderCSS'>

             <div className='zodiacFlex'>
            <img src={image} alt='Profile'  />
            <center className='centerZodiac'><h6>{name}<br></br>{date1}</h6></center>
            </div> 
           
          </CModalHeader>
          <CModalBody className='HoroscopeModalBody'>
            <div className="row borderBottom">
              <div className="col-sm-6 modalData1">
                <h5 className='text-center  mt-1 horoHeadingColor'><b>  Personal Life</b> </h5>
                //  <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .{StoreResp ? StoreResp.data.prediction.personal_life : "Empty"} </p>
                <p className=''>{StoreResp?.prediction?.personal_life}</p>
              </div>
              <div className="col-sm-6">
                <h5 className='text-center  mt-1 horoHeadingColor'><b>Health</b></h5>
               comment <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .{StoreResp ? StoreResp.data.prediction.health : "Empty"}</p>
                <p className=''>{StoreResp?.prediction?.health}</p>
              </div>
            </div>
            //  <hr className='for_lineModal'></hr> 
            <div className="row borderBottom">
              <div className="col-sm-6 modalData1">
                <h5 className='text-center  mt-1 horoHeadingColor'><b>  Travel</b></h5>
               comment <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit..{StoreResp ? StoreResp.data.prediction.travel : "Empty"}</p>
                <p className=''>{StoreResp?.prediction?.travel}</p>
              </div>
              <div className="col-sm-6">
                <h5 className='text-center  mt-1 horoHeadingColor'><b>  Luck</b></h5>
               comment <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit..{StoreResp ? StoreResp.data.prediction.luck : "Empty"}</p>
                <p className=''>{StoreResp?.prediction?.luck}</p>
              </div>
            </div>
            //  <hr className='for_lineModal'></hr> 
            <div className="row">
              <div className="col-sm-6 modalData1">
                <h5 className='text-center  mt-1 horoHeadingColor'><b>  Emotions</b></h5>
                comment <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .{StoreResp ? StoreResp.data.prediction.emotions : "Empty"}</p> 
                <p className=''>{StoreResp?.prediction?.emotions}</p>
              </div>
              <div className="col-sm-6">
                <h5 className='text-center mt-1 horoHeadingColor'><b>Profession</b></h5>
                <p className=''>{StoreResp?.prediction?.profession}</p>
              </div>
            </div>
          </CModalBody>
        </CModal> */}
      </div>
    </div>
  )
}

export default HomePage




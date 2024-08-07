
"use client"
import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import ReadMoreReact from "read-more-react";
import ReactReadMoreReadLess from "react-read-more-read-less";
// import mixpanel from 'mixpanel-browser';

const About = () => {
  // useEffect(() => {
  //   mixpanel.track('aboutUsPageViewed');
  // }, []);
  const { t } = useTranslation();
  return (
    <div>
      <div className="container-fluid wrapper1">
        <div className="">
          <div className="row inspirationBox">
            <div className="col-sm-1 col-md-1 mt-2"></div>
            <div className="col-sm-7 col-md-12 col-lg-7 inspText">
              <h2 className="why_we_start_about ">{t("Inspiration")}</h2>
              <h2 className="guruName">
                <b> {t("Guru Name")}</b>
              </h2>
              <span>
                <p className='for_paragraph textAlignment resText'>
                  {/* <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={t('Read more ▼')}
                    readLessText={t('Read less ▼')}
                  >
                   
                  {t('InspirationDesc')}
                  </ReactReadMoreReadLess> */}
                </p>
                <p className='for_paragraph textAlignment fullText'>
                  {/* {t('InspirationDesc')} */}
                  First, I bow to the feet of my Guru. I pay my respects to Guru ji who has enlightened millions of people with their profound knowledge, showing thedirection in life where there was darkness. It is only by seeking refuge in the Guru that one can attain enlightenment.The word 'Guru' means 'the one who dispels darkness and shows the path of light.'.'Sanatan Jyoti' is an initiative inspired by our Guru ji towards social welfare. It is a stream of organized knowledge that can bring transformation in our lives and inspire us towards success. Our Guru ji dedicated his entire life to the welfare of society and continuously guided all his disciples on the right path.The Guru inspires us to fulfill our duties and attain peace, prosperity, and contentment in life. They work towards making us symbols of truth, justice, righteousness, and higher values. The inspiration from the Guru ji makes us cultured and compassionate human beings. A true Guru not only provides us with new ideologies but also influences our inner selves, showing us the path to self-improvement.One significant contribution of the Guru is that they help us recognize our potential and capabilities. They motivate us to awaken our competitiveness and willpower. When we learn from the Guru, we get an opportunity to explore and develop our hidden tendencies and abilities. The true inspiration from the Guru helps us awaken our limitless power and motivates us to strive for new heights.In summary, through the inspiration received from the Guru, we attain knowledge, success, competitiveness, positivity, and the highest human values. The Guru's inspiration propels us towards progress and provides us with the possibility to experience brightness, abundance, and joy in life. By seeking inspiration from the Guru, we inaugurate our lives and construct a great and influential personality.
                  //                            
                </p>

              </span>
              <center>
                <h5>
                  &#2384; {t("Shanti")} &#127800; &#2384; {t("Shanti")}{" "}
                  &#127800; &#2384; {t("Shanti")} &#127800; &#2384;{" "}
                  {t("Shanti")} &#127800; &#2384; {t("Shanti")}
                </h5>
              </center>
            </div>
            <div className="col-sm-4 col-md-12 col-lg-4 shree_krishna">
              <img src="https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/AboutGuruJI.svg" alt="hi" width="100%"/>
            </div>
          </div>

          <div className="row inspirationBox1">
            <div className="col-sm-1"></div>
            <div className="col-sm-4 col-md-12 col-lg-4 mt-4 mb-4">
              <img
                src="https://sanatanapi-files.s3.ap-south-1.amazonaws.com/static-images/AboutBankeyBihariJi.png"
                alt="bihariJi"
                className="bankeBihariImage"
                width="100%"
              />
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6 bihariJiBg mt-5 mb-5">
              <h2 className="why_we_start_about ">{t("Kindness")}</h2>
              <span>
                <p className='for_paragraph textAlignment resText'>
                  {/* <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={t('Read more ▼')}
                    readLessText={t('Read less ▼')}
                  >
                    {t('KindnessDesc')}
                                   
                  </ReactReadMoreReadLess> */}
                </p>
                <p className='for_paragraph textAlignment fullText'>
                  {/* {t('KindnessDesc')} */}
                  Shri Banke Bihari is the divine Lord Krishna Himself, who still performs His divine pastimes (Leelas) in Vrindavan. All the devotees who visit Him are like the Gopis (cowherd maidens) and are spiritually connected with Shri Banke Bihari Ji. Shri Banke Bihari guides all His devotees, speaks to them, relieves their sorrows, and inspires them to lead a righteous life. He is the foundation of Sanatana Dharma (eternal religion). Shri Banke Bihari Ji is a symbol of love. Through the life and divine pastimes (Leelas) of Lord Krishna, we learn the importance of spirituality, love, compassion, self-control, righteousness, and mental peace. By having Bake Bihari sacred sight and serving him, we can incorporate these essential principles into our lives and attain the highest levels of spirituality, balance, and joy. Lord Shri Krishna has defined religion as a humane and social concept that is eternal and not sectarian. Religion can never be sectarian; it is eternal. Sanatan Jyoti is an inspiration derived from the teachings of Lord Krishna Himself, and its guidance is in the hands of Shri Banke Bihari Ji.
                                   
                </p>

              </span>
              <center>
                <h5>
                   {t("Radhe Krishna")} &#127800;  {t("Radhe Krishna")}{" "}
                  &#127800;  {t("Radhe Krishna")} &#127800; {" "}
                  {t("Radhe Krishna")} &#127800;  {t("Radhe Krishna")}
                </h5>
              </center>
              <br />
              <br />
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row visionBg ">
            <center>
              <h2 className="why_we_start_about">{t("Vision")}</h2>
              <span>
                <p className='for_paragraph textAlignment resText'>
                  {/* <ReactReadMoreReadLess
                    charLimit={200}
                    readMoreText={t('Read more ▼')}
                    readLessText={t('Read less ▼')}
                  >
                    {t('VisionDesc')}
                                  
                  </ReactReadMoreReadLess> */}
                </p>
                <p className='for_paragraph textAlignment fullText'>
                  {/* {t('VisionDesc')} */}
                  The main objective of Sanatan Jyoti is to easily convey the complete knowledge, traditions and beliefs contained in the Sanatan system to the public. In fact, Sanatan does not belong to any sect, rather it is a comprehensive system in which all the work done selflessly for auspicious works i.e. human welfare and environmental protection, which does not harm anyone and is also acceptable to the society and environment. All those activities come under religion. On the contrary, all selfish and unacceptable actions for society come under injustice. Thus, Sanatan is a system which is not communal, which does not disregard any specific sect but inspires everyone to do the work of religion. The fundamental objective of Sanatan Jyoti is to bring those systems of ancient times back to the civilization and ideas of the new era which were added by the sages of ancient times for social welfare and to protect the environment i.e. to keep the environment clean, green and for the protection of living beings and keeping rivers clean. These systems teach us how we can do religious work through our daily activities and by recognizing the God element in everything, we can make life happy or enjoy life completely. In today's New Age, this is a special initiative of Sanatan Jyoti towards saving the people from the feeling of unhappiness despite of being full of wealth. Sanatan Jyoti wants to present the systems made in ancient times for human welfare and protection of living beings in a new way which can be beneficial for the system of the new era.
                    
                </p>

              </span>
            </center>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default About;

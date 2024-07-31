
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const SwiperComponent = ({ allPosts }) => {
  return (
    <div className="swiper-container">
      <Swiper
        className="custom-swiper"
        modules={[Navigation, Autoplay, Pagination]}
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
        {allPosts.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={`${item?.articleId}`}>
              <div className="carousel-card">
                <img src={item?.imageUrl} alt={item?.title} />
                <div className="textCarousel">
                  <h5><b>{item?.title}</b></h5>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

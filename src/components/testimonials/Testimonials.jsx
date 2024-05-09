import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Navigation, Scrollbar, A11y, EffectCube, Pagination } from 'swiper/modules';


const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title"></h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        loop={true}
        navigation={false}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          }
        }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

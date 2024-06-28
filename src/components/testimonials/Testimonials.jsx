import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from "react-i18next";
import { Navigation, Scrollbar, A11y, EffectCube, Pagination } from 'swiper/modules';


const Testimonials = () => {
  const { t } = useTranslation('common');

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">{t('testimonial.title')}</h2>
      <span className="section__subtitle">{t('testimonial.subtitle')}</span>

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
        {Data.map(({ id, image, title, status, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <div className="testimonial__header">
                <img src={image} alt="" className="testimonial__img" />
                <h3 className="testimonial__name">{title}</h3>
              </div>

              <h3 className="testimonial__profession">{t(`testimonial.testimonial-${id}.status`)}</h3>
              <p className="testimonial__description">{t(`testimonial.testimonial-${id}.description`)}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

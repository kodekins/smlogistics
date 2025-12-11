import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import brand images
import brand1 from "../../assets/images/brand/brand-v1-img1.png";
import brand2 from "../../assets/images/brand/brand-v1-img2.png";
import brand3 from "../../assets/images/brand/brand-v1-img3.png";
import brand4 from "../../assets/images/brand/brand-v1-img4.png";
import brand5 from "../../assets/images/brand/brand-v1-img5.png";
import brand6 from "../../assets/images/brand/brand-v1-img6.png";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 3 },
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 5 },
    1350: { slidesPerView: 5 },
  },
};

const Brand = () => {
  const brandImages = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className="brand-one">
      <div className="container">
        <Swiper {...swiperOptions} className="brand-one__carousel">
          {brandImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="brand-one__single">
                <div className="brand-one__single-inner">
                  <Link to="#">
                    <img src={img} alt={`Brand ${index + 1}`} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Brand;

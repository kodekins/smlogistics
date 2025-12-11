import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import testimonialImg1 from "../../assets/images/testimonial/testimonial-v2-img1.png";
import testimonialImg2 from "../../assets/images/testimonial/testimonial-v2-img2.png";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
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
    575: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 2 },
    1350: { slidesPerView: 2 },
  },
};

const Testimonial = () =>{
  const testimonials = [
    {
      img: testimonialImg1,
      name: "Leslie Alexander",
      role: "MANAGER",
      text: "A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.",
    },
    {
      img: testimonialImg2,
      name: "Ronald Richards",
      role: "MANAGER",
      text: "A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.",
    },
  ];

return (
  <section className="testimonial-two">
    <div className="container clearfix">
      <div className="row">
        {/* Left Content */}
        <div className="col-xl-4">
          <div className="testimonial-two__content">
            <div className="sec-title tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text tg-element-title">
                  <h4>Client Testimonial</h4>
                </div>
                <div className="icon">
                  <span className="icon-plane2 float-bob-x3"></span>
                </div>
              </div>
              <h2 className="sec-title__title tg-element-title">
                Our Customers <br /> <span>Reviews</span>
              </h2>
            </div>

            <div className="testimonial-two__content-text">
              <p>
                A logistic service provider company plays a pivotal role in
                the global supply chain A logistic service provider company.
              </p>
            </div>

            <div className="testimonial-two__content-btn">
              <Link className="thm-btn" to="#">
                See All Reviews
                <i className="icon-right-arrow21"></i>
                <span className="hover-btn hover-bx"></span>
                <span className="hover-btn hover-bx2"></span>
                <span className="hover-btn hover-bx3"></span>
                <span className="hover-btn hover-bx4"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Swiper */}
        <div className="col-xl-8">
          <div className="testimonial-two__right">
            <Swiper
              {...swiperOptions}
              className="testimonial-two__carousel"
            >
              {Array.from({ length: 6 }).map((_, index) => {
                const t = testimonials[index % testimonials.length];
                return (
                  <SwiperSlide key={index}>
                    <div className="testimonial-two__single">
                      <div className="testimonial-two__single-inner">
                        <div className="testimonial-two__single-top">
                          <div className="img-box">
                            <img src={t.img} alt={t.name} />
                          </div>
                          <div className="title-box">
                            <h2>{t.name}</h2>
                            <span>{t.role}</span>
                          </div>
                        </div>

                        <div className="testimonial-two__single-text">
                          <p>{t.text}</p>
                        </div>

                        <div className="rating-box">
                          {[...Array(5)].map((_, i) => (
                            <i className="icon-star" key={i}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
export default Testimonial;

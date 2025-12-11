import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import all images
import shape1 from '../../assets/images/shapes/quote-v1-shape1.png';
import testimonialImg1 from '../../assets/images/testimonial/testimonial-v3-img1.jpg';
import testimonialImg2 from '../../assets/images/testimonial/testimonial-v3-img2.jpg';
import testimonialImg3 from '../../assets/images/testimonial/testimonial-v3-img3.jpg';
import testimonialImg4 from '../../assets/images/testimonial/testimonial-v3-img4.jpg';
import testimonialImg5 from '../../assets/images/testimonial/testimonial-v3-img5.jpg';
import testimonialImg6 from '../../assets/images/testimonial/testimonial-v3-img6.jpg';
import testimonialImg7 from '../../assets/images/testimonial/testimonial-v3-img7.jpg';
import testimonialImg8 from '../../assets/images/testimonial/testimonial-v3-img8.jpg';
import testimonialImg9 from '../../assets/images/testimonial/testimonial-v3-img9.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
};

const Testimonial = () => {
    return (
        <section className="testimonial-three">
            <div className="shape1 float-bob-x3"><img src={shape1} alt="quote shape" /></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>testimonials</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">What Client's say about <br />
                        Our <span>Services</span></h2>
                </div>

                <div className="testimonial-three__inner">
                    <div className="testimonial-three__img1 float-bob-y3">
                        <img src={testimonialImg5} alt="testimonial" />
                    </div>

                    <div className="testimonial-three__img2 float-bob-y3">
                        <img src={testimonialImg7} alt="testimonial" />
                    </div>

                    <div className="testimonial-three__img3 float-bob-x3">
                        <img src={testimonialImg8} alt="testimonial" />
                    </div>

                    <div className="testimonial-three__img4 float-bob-y3">
                        <img src={testimonialImg9} alt="testimonial" />
                    </div>

                    <div className="testimonial-three__img5 float-bob-y3">
                        <img src={testimonialImg6} alt="testimonial" />
                    </div>

                    <div className="testimonial-three__img6 float-bob-x3">
                        <img src={testimonialImg4} alt="testimonial" />
                    </div>

                    <Swiper {...swiperOptions} className="testimonial-three__carousel">
                        <SwiperSlide>
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__single-img">
                                    <img src={testimonialImg1} alt="client" />
                                </div>

                                <div className="testimonial-three__single-title text-center">
                                    <h2>A logistic service provider company plays a pivotal role in the
                                        global supply chain A logistic service provider companyA logistic service
                                        provider.</h2>
                                </div>

                                <div className="testimonial-three__single-author text-center">
                                    <h2>Leslie Alexander</h2>
                                    <p>Military Man, Member for 5 Years.</p>
                                </div>

                                <div className="testimonial-three__single-rating">
                                    <div className="icon">
                                        <span className="icon-star"></span>
                                    </div>
                                    <h4>5 out of 5</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__single-img">
                                    <img src={testimonialImg2} alt="client" />
                                </div>

                                <div className="testimonial-three__single-title text-center">
                                    <h2>A logistic service provider company plays a pivotal role in the
                                        global supply chain A logistic service provider companyA logistic service
                                        provider.</h2>
                                </div>

                                <div className="testimonial-three__single-author text-center">
                                    <h2>Leslie Alexander</h2>
                                    <p>Military Man, Member for 5 Years.</p>
                                </div>

                                <div className="testimonial-three__single-rating">
                                    <div className="icon">
                                        <span className="icon-star"></span>
                                    </div>
                                    <h4>5 out of 5</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-three__single">
                                <div className="testimonial-three__single-img">
                                    <img src={testimonialImg3} alt="client" />
                                </div>

                                <div className="testimonial-three__single-title text-center">
                                    <h2>A logistic service provider company plays a pivotal role in the
                                        global supply chain A logistic service provider companyA logistic service
                                        provider.</h2>
                                </div>

                                <div className="testimonial-three__single-author text-center">
                                    <h2>Leslie Alexander</h2>
                                    <p>Military Man, Member for 5 Years.</p>
                                </div>

                                <div className="testimonial-three__single-rating">
                                    <div className="icon">
                                        <span className="icon-star"></span>
                                    </div>
                                    <h4>5 out of 5</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
export default Testimonial;
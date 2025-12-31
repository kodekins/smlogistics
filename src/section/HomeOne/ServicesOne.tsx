'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images - Using consistent sized images from smlogistics series
import serviceImg1 from '/smlogistics-1.jpg';
import serviceImg2 from '/smlogistics-2.jpg';
import serviceImg3 from '/smlogistics-3.jpg';
import patternBg from '../../assets/images/pattern/service-v1-pattern.jpg';





const ServicesOne = () => {

    const services = [
        {
            id: 1,
            title: "LTL (Less Than Truckload)",
            description: "Cost-effective option for smaller shipments. Share trailer space and pay only for the space you need.",
            image: serviceImg1,
            icon: "icon-delivery-man",
            link: "track-transport"
        },
        {
            id: 2,
            title: "FTL (Full Truckload)",
            description: "Dedicated trucks for large shipments. Direct routes with priority delivery for your full loads.",
            image: serviceImg2,
            icon: "icon-shipment",
            link: "international-transport"
        },
        {
            id: 3,
            title: "Reefer Transport",
            description: "Temperature-controlled shipments for perishables. Climate-controlled delivery for sensitive goods.",
            image: serviceImg3,
            icon: "icon-international-shipping",
            link: "ocean-transport"
        }
    ];

    // Duplicate services for carousel effect (as in original code)
    const duplicatedServices = [...services, ...services, ...services];



    return (

        <>

            <section className="service-one">
                <div
                    className="service-one__pattern"
                    style={{
                        backgroundImage: `url(${patternBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                <div className="container">
                    <div className="sec-title center text-center tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <div className="line"></div>
                            <div className="text tg-element-title">
                                <h4>Our Service</h4>
                            </div>
                            <div className="icon">
                                <span className="icon-plane2 float-bob-x3"></span>
                            </div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">
                            Comprehensive Shipping
                            <br /> Solutions for <span>Your Business</span>
                        </h2>
                    </div>

                    <div className="row">
                        <div className="service-one__carousel">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="owl-theme owl-dot-style1"
                            >
                                {duplicatedServices.map((service, index) => (
                                    <SwiperSlide key={`${service.id}-${index}`}>
                                        <div className="service-one__single">
                                            <div className="service-one__single-inner">
                                                <div className="service-one__single-img">
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        style={{
                                                            width: '100%',
                                                            height: '350px',
                                                            objectFit: 'cover',
                                                            display: 'block'
                                                        }}
                                                        onError={(e) => {
                                                            e.target.src = 'https://via.placeholder.com/400x350/cccccc/666666?text=No+Image';
                                                        }}
                                                    />
                                                </div>

                                                <div className="service-one__single-content">
                                                    <h2>
                                                        <a href={service.link}>{service.title}</a>
                                                    </h2>
                                                    <p>{service.description}</p>
                                                    <div className="btn-box">
                                                        <a href={service.link}>
                                                            Read More <span className="icon-right-arrow21"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="icon">
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation Buttons */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
export default ServicesOne;
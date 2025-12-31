import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import truck images from public folder - using consistent sized images
import ltlImg from '/smlogistics-1.jpg';
import ftlImg from '/smlogistics-6.jpg';
import reeferImg from '/smlogistics-2.jpg';
import flatbedImg from '/smlogistics-3.jpg';
import interstateImg from '/smlogistics-4.jpg';
import dryVanImg from '/smlogistics-5.jpg';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
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
    991: { slidesPerView: 3 },
    1199: { slidesPerView: 4 },
  },
};

const FeaturesTwo = () => {
  const featuresData = [
    {
      img: ltlImg,
      tag: "Cost-Effective",
      title: "LTL (Less Than Truckload)",
      text: "Share trailer space and pay only for what you need. Perfect for smaller shipments with flexible scheduling.",
      link: "/track-transport",
    },
    {
      img: ftlImg,
      tag: "Priority Delivery",
      title: "FTL (Full Truckload)",
      text: "Dedicated trucks for large shipments with direct routes and faster delivery times for your full loads.",
      link: "/international-transport",
    },
    {
      img: reeferImg,
      tag: "Temperature-Controlled",
      title: "Reefer Transport",
      text: "Climate-controlled delivery for perishables, pharmaceuticals, and temperature-sensitive goods.",
      link: "/ocean-transport",
    },
    {
      img: flatbedImg,
      tag: "Interstate Routes",
      title: "Interstate Transport",
      text: "Efficient long-distance trucking across state lines with reliable delivery schedules and tracking.",
      link: "/personal-delivery",
    },
    {
      img: interstateImg,
      tag: "Local Delivery",
      title: "Intrastate Transport",
      text: "Fast regional deliveries within state boundaries for quick turnaround and local distribution needs.",
      link: "/warehouse-facility",
    },
    {
      img: dryVanImg,
      tag: "General Freight",
      title: "Dry Van Transport",
      text: "Standard enclosed trailers protecting your general cargo from weather and road elements.",
      link: "/services",
    },
  ];

  return (
    <section className="features-two">
      <div className="features-two__top">
        <div className="container">
          <div className="features-two__top-inner">
            <div className="sec-title tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text tg-element-title">
                  <h4>Our Shipping Solutions</h4>
                </div>
                <div className="icon">
                  <span className="icon-plane2 float-bob-x3"></span>
                </div>
              </div>
              <h2 className="sec-title__title tg-element-title">
                Trustworthy, Swift, and Safe <br /> Logistics{" "}
                <span>Options</span>
              </h2>
            </div>

            <div className="btn-box">
              <Link className="thm-btn" to="/services">
                Our Solutions
                <i className="icon-right-arrow21"></i>
                <span className="hover-btn hover-bx"></span>
                <span className="hover-btn hover-bx2"></span>
                <span className="hover-btn hover-bx3"></span>
                <span className="hover-btn hover-bx4"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <Swiper {...swiperOptions} className="features-two__carousel">
          {featuresData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="features-two__single">
                <div className="features-two__single-img">
                  <div className="features-two__single-img-inner">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '560px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div className="features-two__single-content">
                      <span>{item.tag}</span>
                      <h2>
                        <Link to={item.link}>{item.title}</Link>
                      </h2>
                      <div className="features-two__single-content-bottom">
                        <p>{item.text}</p>
                        <div className="btn-box">
                          <Link to={item.link}>
                            <span className="icon-right-arrow21"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesTwo;

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import featuresImg1 from "../../assets/images/resources/features-v2-img1.jpg";
import featuresImg2 from "../../assets/images/resources/features-v2-img2.jpg";
import featuresImg3 from "../../assets/images/resources/features-v2-img3.jpg";
import featuresImg4 from "../../assets/images/resources/features-v2-img4.jpg";

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
      img: featuresImg1,
      tag: "Fast & Efficient",
      title: "Aviation Freight",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
    {
      img: featuresImg2,
      tag: "Cost-effective",
      title: "Rail Freight",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
    {
      img: featuresImg3,
      tag: "Sea Transport",
      title: "Ocean Freight",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
    {
      img: featuresImg4,
      tag: "Trucks & Lorries",
      title: "Roadway Cargo",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
      {
      img: featuresImg1,
      tag: "Fast & Efficient",
      title: "Aviation Freight",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
      {
      img: featuresImg2,
      tag: "Cost-effective",
      title: "Rail Freight",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
        {
      img: featuresImg3,
      tag: "Sea Transport",
      title: "Ocean Freight",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
    },
      {
      img: featuresImg4,
      tag: "Trucks & Lorries",
      title: "Roadway Cargo",
      text: "It is a long established fact that a reader will be distracted by the readable...",
      link: "#",
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
                  <h4>Fleet Management</h4>
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
              <Link className="thm-btn" to="/about">
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
                    <img src={item.img} alt={item.title} />
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

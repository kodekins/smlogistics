import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import images from your assets folder
import sliderImg1 from "/smlogistics-6.jpg";
import sliderImg2 from "/smlogistics-3.jpg";
import sliderImg3 from "/smlogistics-1.jpg";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    freightType: "Freight Type",
    load: "Load",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Static slider data with imported images
  const sliderData = [
    {
      id: 1,
      image: sliderImg1,
      tagline: "Welcome to Star MS Logistics",
      title: "We Provide Global",
      titleHighlight: "Logistic",
      description:
        "Take your business to the next level with Loraic new business management tools. Loraic will open a new horizon for us.",
      buttonText: "Explore More",
      buttonLink: "/about",
    },
    {
      id: 2,
      image: sliderImg2,
  tagline: "Welcome to Star MS Logistics",
      title: "Fast & Reliable",
      titleHighlight: "Shipping",
      description:
        "Professional logistics solutions designed to streamline your supply chain and boost your business efficiency.",
      buttonText: "Our Services",
      buttonLink: "/services",
    },
    {
      id: 3,
      image: sliderImg3,
  tagline: "Welcome to Star MS Logistics",
      title: "Worldwide",
      titleHighlight: "Network",
      description:
        "Connect with our global network of trusted partners and experience seamless logistics management worldwide.",
      buttonText: "Get Quote",
      buttonLink: "/contact",
    },
    {
      id: 4,
      image: sliderImg2,
  tagline: "Welcome to Star MS Logistics",
      title: "Worldwide",
      titleHighlight: "Network",
      description:
        "Connect with our global network of trusted partners and experience seamless logistics management worldwide.",
      buttonText: "Get Quote",
      buttonLink: "/contact",
    },
    {
      id: 5,
      image: sliderImg1,
  tagline: "Welcome to Star MS Logistics",
      title: "We Provide Global",
      titleHighlight: "Logistic",
      description:
        "Take your business to the next level with Loraic new business management tools. Loraic will open a new horizon for us.",
      buttonText: "Explore More",
      buttonLink: "/about",
    },
    {
      id: 6,
      image: sliderImg2,
  tagline: "Welcome to Star MS Logistics",
      title: "Fast & Reliable",
      titleHighlight: "Shipping",
      description:
        "Professional logistics solutions designed to streamline your supply chain and boost your business efficiency.",
      buttonText: "Our Services",
      buttonLink: "/services",
    },
    {
      id: 7,
      image: sliderImg3,
  tagline: "Welcome to Star MS Logistics",
      title: "Worldwide",
      titleHighlight: "Network",
      description:
        "Connect with our global network of trusted partners and experience seamless logistics management worldwide.",
      buttonText: "Get Quote",
      buttonLink: "/contact",
    },
  ];

  return (
    <section className="slider-one">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={sliderData.length > 2}
        speed={800}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className="slider-one__carousel"
      >
        {sliderData.map((slide, i) => (
          <SwiperSlide key={slide.id || i}>
            <div className="slider-one__single">
              <div
                className="slider-one__single-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="shape1"></div>
              <div className="shape2"></div>
              <div className="shape3"></div>
              <div className="shape4"></div>
              <div className="container">
                <div className="slider-one__single-inner">
                  <div className="slider-one__single-content">
                    <div className="tagline">
                      <div className="round"></div>
                      <div className="text">
                        <span>Welcome to Star MS Logistics</span>
                      </div>
                    </div>

                    <div className="title-box">
                      <h2>
                        We Provide Global <br /> <span>Logistic</span>
                      </h2>
                    </div>

                    <div className="text-box">
                      <p>
                        Take your business to the next level with Loraic new
                        business management tools. Loraic will open a new
                        horizon for us.
                      </p>
                    </div>

                    <div className="btn-box">
                      <a className="thm-btn" href="about.html">
                        Explore More
                        <i className="icon-right-arrow21">→</i>
                        <span className="hover-btn hover-bx"></span>
                        <span className="hover-btn hover-bx2"></span>
                        <span className="hover-btn hover-bx3"></span>
                        <span className="hover-btn hover-bx4"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-one__form-box">
        <div className="contact-form-validated slider-one__form">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <div className="icon">
                  <span className="icon-user"></span>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <div className="icon">
                  <span className="icon-phone2"></span>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="input-box">
                <div className="select-box">
                  <select
                    className="selectmenu wide"
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleInputChange}
                  >
                    <option value="Freight Type">Freight Type</option>
                    <option value="Freight Type 01">Freight Type 01</option>
                    <option value="Freight Type 02">Freight Type 02</option>
                    <option value="Freight Type 03">Freight Type 03</option>
                    <option value="Freight Type 04">Freight Type 04</option>
                    <option value="Freight Type 05">Freight Type 05</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="input-box">
                <div className="select-box">
                  <select
                    className="selectmenu wide"
                    name="load"
                    value={formData.load}
                    onChange={handleInputChange}
                  >
                    <option value="Load">Load</option>
                    <option value="Rail">Rail</option>
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Ocean">Ocean</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="input-box">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <div className="icon style2">
                  <span className="icon-pen"></span>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="slider-one__form-btn">
                <button
                  type="submit"
                  className="thm-btn"
                  onClick={handleSubmit}
                >
                  Submit Request
                  <i className="icon-right-arrow21">→</i>
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="result"></div>
      </div>
    </section>
  );
};

export default Banner;

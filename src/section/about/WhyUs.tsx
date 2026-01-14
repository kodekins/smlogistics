import React, { useState } from "react";
import patternBg from "../../assets/images/pattern/why-choose-v1-pattern.png";

const WhyUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    freightType: "Freight Type",
    load: "Load",
  });

  const [distanceRange, setDistanceRange] = useState({ min: 0, max: 10000 });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="why-choose-one">
      <div className="why-choose-one__pattern">
        <img src={patternBg} alt="Pattern Background" />
      </div>
      <div className="container">
        <div className="row">
          {/* Start Why Choose One Content */}
          <div className="col-xl-6">
            <div className="why-choose-one__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Why Choose us</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-shipment float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  Reliable Trucking With <br /> Industry-Leading
                  Performance!
                </h2>
              </div>

              <div className="why-choose-one__content-list">
                <ul>
                  <li>
                    <p>
                      <span className="icon-shipment"></span> Expertise & Experience: Years of experience in the logistics and freight industry.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-shipment"></span> Reliable Partners: We work with trusted carriers and partners to ensure smooth operations.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-shipment"></span> Cost-Effective Solutions: Competitive pricing without compromising service quality.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-shipment"></span> Customer-Centric Approach: Dedicated support to handle all queries and concerns.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-shipment"></span> End-to-End Tracking: Monitor your shipments at every step for peace of mind.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="btn-box">
                <a className="thm-btn" href="#contact">
                  Contact Us
                  <i className="icon-right-arrow21"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Why Choose One Content */}

          {/* Start Why Choose One Form */}
          <div className="col-xl-6">
            <div className="why-choose-one__form-box wow fadeInRight">
              <div className="title-box">
                <h2>Request a Quote</h2>
              </div>

              <div className="contact-form-validated why-choose-one__form">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="icon">
                        <span className="icon-phone2"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Select Date"
                      />
                      <div className="icon">
                        <span className="icon-calendar"></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="why-choose-one__form-distance">
                      <div className="title">
                        <p>
                          Distance (Miles): {distanceRange.min} -{" "}
                          {distanceRange.max}
                        </p>
                      </div>
                      <div className="why-choose-one__form-distance-inner">
                        <div className="price-ranger">
                          <div className="slider-container">
                            <input
                              type="range"
                              className="range-slider"
                              min="0"
                              max="10000"
                              value={distanceRange.max}
                              onChange={(e: any) =>
                                setDistanceRange((prev) => ({
                                  ...prev,
                                  max: parseInt(e.target.value),
                                }))
                              }
                            />
                          </div>
                          <div className="ranger-min-max-block">
                            <input
                              type="text"
                              readOnly
                              className="min"
                              value={distanceRange.min}
                            />
                            <span>-</span>
                            <input
                              type="text"
                              readOnly
                              className="max"
                              value={distanceRange.max}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <div className="select-box">
                        <select
                          className="custom-select"
                          value={formData.freightType}
                          onChange={(e) =>
                            handleSelectChange("freightType", e.target.value)
                          }
                        >
                          <option disabled>Freight Type</option>
                          <option value="Full Truckload (FTL)">
                            Full Truckload (FTL)
                          </option>
                          <option value="Less Than Truckload (LTL)">
                            Less Than Truckload (LTL)
                          </option>
                          <option value="Refrigerated">Refrigerated</option>
                          <option value="Flatbed">Flatbed</option>
                          <option value="Hazmat">Hazmat</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <div className="select-box">
                        <select
                          className="custom-select"
                          value={formData.load}
                          onChange={(e) =>
                            handleSelectChange("load", e.target.value)
                          }
                        >
                          <option disabled>Load</option>
                          <option value="Light Load">Light Load</option>
                          <option value="Medium Load">Medium Load</option>
                          <option value="Heavy Load">Heavy Load</option>
                          <option value="Extra Heavy Load">
                            Extra Heavy Load
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="why-choose-one__form-btn">
                      <button type="submit" className="thm-btn">
                        Get Quote Now
                        <i className="icon-right-arrow21"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="result"></div>
            </div>
          </div>
          {/* End Why Choose One Form */}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

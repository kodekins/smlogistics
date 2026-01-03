import React, { useState, ChangeEvent } from "react";
import patternBg from "../../assets/images/pattern/why-choose-v1-pattern.png";
import shape1 from "../../assets/images/shapes/why-choose-v1-shape1.png";

// 🔹 Form data type
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  freightType: string;
  load: string;
}

// 🔹 Distance range type
interface DistanceRange {
  min: number;
  max: number;
}

const WhyChooseOne: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    freightType: "Freight Type",
    load: "Load",
  });

  const [distanceRange, setDistanceRange] = useState<DistanceRange>({ min: 0, max: 1000 });

  // 🔹 Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Handle select change
  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="why-choose-one">
      <div className="why-choose-one__pattern">
        <img src={patternBg} alt="Pattern Background" />
      </div>
      <div className="shape1 float-bob-y">
        <img src={shape1} alt="Floating Shape" />
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
                    <h4>Why Choose Us</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  Why Choose <br /> Star MS
                  Logistics?
                </h2>
              </div>

              <div className="why-choose-one__content-list">
                <ul>
                  <li>
                    <p>
                      <span className="icon-plane2"></span> <strong>Expertise & Experience:</strong> Years of experience in the logistics and freight industry
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-plane2"></span> <strong>Reliable Partners:</strong> We work with trusted carriers and partners to ensure smooth operations
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-plane2"></span> <strong>Cost-Effective Solutions:</strong> Competitive pricing without compromising service quality
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-plane2"></span> <strong>Customer-Centric Approach:</strong> Dedicated support to handle all queries and concerns
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-plane2"></span> <strong>End-to-End Tracking:</strong> Monitor your shipments at every step for peace of mind
                    </p>
                  </li>
                </ul>
              </div>

              <div className="btn-box">
                <a className="thm-btn" href="/contact">
                  Request a Quote
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
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
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

                  {/* Date */}
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

                  {/* Distance Range */}
                  <div className="col-xl-12">
                    <div className="why-choose-one__form-distance">
                      <div className="title">
                        <p>
                          Distance (Miles): {distanceRange.min} - {distanceRange.max}
                        </p>
                      </div>
                      <div className="why-choose-one__form-distance-inner">
                        <div className="price-ranger">
                          <div className="slider-container">
                            <input
                              type="range"
                              className="range-slider"
                              min={0}
                              max={10000}
                              value={distanceRange.max}
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setDistanceRange((prev) => ({
                                  ...prev,
                                  max: parseInt(e.target.value),
                                }))
                              }
                            />
                          </div>
                          <div className="ranger-min-max-block">
                            <input type="text" readOnly className="min" value={distanceRange.min} />
                            <span>-</span>
                            <input type="text" readOnly className="max" value={distanceRange.max} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Freight Type */}
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <div className="select-box">
                        <select
                          className="custom-select"
                          value={formData.freightType}
                          onChange={(e) => handleSelectChange("freightType", e.target.value)}
                        >
                          <option disabled>Freight Type</option>
                          <option value="Freight Type 01">Freight Type 01</option>
                          <option value="Freight Type 02">Freight Type 02</option>
                          <option value="Freight Type 03">Freight Type 03</option>
                          <option value="Freight Type 04">Freight Type 04</option>
                          <option value="Freight Type 05">Freight Type 05</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Load */}
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <div className="select-box">
                        <select
                          className="custom-select"
                          value={formData.load}
                          onChange={(e) => handleSelectChange("load", e.target.value)}
                        >
                          <option disabled>Load</option>
                          <option value="Light Load">Light Load</option>
                          <option value="Medium Load">Medium Load</option>
                          <option value="Heavy Load">Heavy Load</option>
                          <option value="Extra Heavy Load">Extra Heavy Load</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-xl-12">
                    <div className="why-choose-one__form-btn">
                      <button type="submit" className="thm-btn">
                        Contact Us
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

export default WhyChooseOne;

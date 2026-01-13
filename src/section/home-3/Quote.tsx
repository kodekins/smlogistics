import React, { useState } from "react";

// Import background images
import quoteBg from "../../assets/images/backgrounds/quote-v1-bg4.jpg";
import quoteBg1 from "../../assets/images/backgrounds/quote-v1-bg2.jpg";
import quoteBg2 from "../../assets/images/backgrounds/quote-v1-bg.jpg";

const Quote = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    freight: "",
    weight: "",
    length: "",
    deliveryOption: "",
  });

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      deliveryOption: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="quote-one">
      <div
        className="quote-one__bg"
        style={{ backgroundImage: `url(${quoteBg})` }}
      ></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title center text-center tg-heading-subheading animation-style2">
              <div className="sec-title__tagline">
                <div className="line"></div>
                <div className="text tg-element-title">
                  <h4>Shipping</h4>
                </div>
                <div className="icon">
                  <span className="icon-shipment float-bob-x3"></span>
                </div>
              </div>
              <h2 className="sec-title__title tg-element-title">
                Request For A <span>Qoute</span>
              </h2>
            </div>

            <div className="quote-tab wow fadeInUp" data-wow-delay="100ms">
              <div className="quote-tab__button">
                <ul className="tabs-button-box clearfix">
                  <li
                    className={
                      activeIndex === 1
                        ? "tab-btn-item active-btn-item"
                        : "tab-btn-item"
                    }
                    onClick={() => handleOnClick(1)}
                  >
                    <div className="quote-tab__button-inner">
                      <h3>Request A Quote</h3>
                    </div>
                  </li>
                  <li
                    className={
                      activeIndex === 2
                        ? "tab-btn-item active-btn-item"
                        : "tab-btn-item"
                    }
                    onClick={() => handleOnClick(2)}
                  >
                    <div className="quote-tab__button-inner">
                      <h3>Track & Trace</h3>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Tabs Content Box */}
              <div className="tabs-content-box">
                {/* Quote Request Tab */}
                <div
                  className={
                    activeIndex === 1
                      ? "tab-content-box-item fadeInUp animated show tab-content-box-item-active"
                      : "tab-content-box-item fadeInUp animated"
                  }
                >
                  <div className="quote-tab-content-box-item">
                    <div
                      className="tab-content-box-item-img"
                      style={{ backgroundImage: `url(${quoteBg1})` }}
                    ></div>
                    <div className="quotes-wrapper">
                      <div className="quotes-wrapper-inner">
                        <div className="title-box">
                          <h2>Shipment Point</h2>
                        </div>

                        <div className="quotes-weight">
                          <form
                            className="contact-form-validated quote-one__form"
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="input-box">
                                  <label htmlFor="nam">Name</label>
                                  <input
                                    type="text"
                                    id="nam"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter Name"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="input-box">
                                  <label htmlFor="email">Email</label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email address"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="input-box">
                                  <label htmlFor="phone">Phone Number</label>
                                  <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Mobile Num"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="input-box">
                                  <label>Freight</label>
                                  <div className="select-box">
                                    <select
                                      className="selectmenu wide"
                                      name="freight"
                                      value={formData.freight}
                                      onChange={handleInputChange}
                                    >
                                      <option value="">Freight Type</option>
                                      <option value="Freight Type 01">
                                        Freight Type 01
                                      </option>
                                      <option value="Freight Type 02">
                                        Freight Type 02
                                      </option>
                                      <option value="Freight Type 03">
                                        Freight Type 03
                                      </option>
                                      <option value="Freight Type 04">
                                        Freight Type 04
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="input-box">
                                  <label>Weight</label>
                                  <input
                                    type="text"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    placeholder="Weight"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="input-box">
                                  <label htmlFor="Length">Length</label>
                                  <input
                                    type="number"
                                    name="length"
                                    id="Length"
                                    value={formData.length}
                                    onChange={handleInputChange}
                                    placeholder="Length"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xl-12">
                                <div className="quote-redio-box">
                                  <div className="quote-redio">
                                    {[
                                      "Express Delivery",
                                      "Insurance",
                                      "Packaging",
                                      "Incoterms",
                                    ].map((option) => (
                                      <label
                                        key={option}
                                        className="custom-rario"
                                      >
                                        <input
                                          type="radio"
                                          name="deliveryOption"
                                          checked={
                                            formData.deliveryOption === option
                                          }
                                          onChange={() =>
                                            handleRadioChange(option)
                                          }
                                        />
                                        <span className="radio-dot"></span>
                                        <span className="radio-text">
                                          {option}
                                        </span>
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xl-12">
                                <div className="quote-two__btn">
                                  <button type="submit" className="thm-btn">
                                    Request For A Quote
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Track & Trace Tab */}
                <div
                  className={
                    activeIndex === 2
                      ? "tab-content-box-item fadeInUp animated show tab-content-box-item-active"
                      : "tab-content-box-item fadeInUp animated"
                  }
                >
                  <div className="quote-tab-content-box-item">
                    <div
                      className="tab-content-box-item-img"
                      style={{ backgroundImage: `url(${quoteBg2})` }}
                    ></div>
                    <div className="quotes-wrapper">
                      <div className="quotes-wrapper-inner">
                        <div className="title-box">
                          <h2>Track Your Shipment</h2>
                        </div>

                        <div className="quotes-weight">
                          <form
                            className="contact-form-validated quote-one__form"
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="input-box">
                                  <label htmlFor="trnum">Tracking Number</label>
                                  <input
                                    type="text"
                                    id="trnum"
                                    name="trackingNumber"
                                    placeholder="Enter Tracking Number"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="input-box">
                                  <label htmlFor="Email">Email</label>
                                  <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    placeholder="Email address"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xl-12">
                                <div className="quote-two__btn">
                                  <button type="submit" className="thm-btn">
                                    Track Shipment
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Quote;

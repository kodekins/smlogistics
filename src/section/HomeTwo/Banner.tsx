import React, { useState } from "react";
import bannerImg1 from "../../assets/images/banner/banner-v2-img1.jpg";
import bannerImg2 from "../../assets/images/banner/banner-v2-img2.png";
import shape1 from "../../assets/images/shapes/banner-v2-shape1.png";
import shape2 from "../../assets/images/shapes/banner-v2-shape2.png";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <section className="banner-two">
                <div className="banner-two__img1 float-bob-y">
                    <div className="inner">
                        <img src={bannerImg1} alt="" />
                    </div>
                </div>
                <div className="banner-two__img2 float-bob-x">
                    <img src={bannerImg2} alt="" />
                </div>
                <div className="shape1 float-bob-y">
                    <img src={shape1} alt="" />
                </div>
                <div className="shape2">
                    <img src={shape2} alt="" />
                </div>
                <div className="container clearfix">
                    <div className="banner-two__content">
                        <div className="banner-two__content-top wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2>EXPERT TRANSPORTATION <br /> <span>SALUTATION</span></h2>
                            </div>
                        </div>

                        <div className="banner-two__content-bottom wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="text-box">
                                <p>If you have a parcel and want to know its latest update, then check the latest update
                                    with your parcel ID in the form below. Don't forget to select the correct category to
                                    search. Thank You.</p>
                            </div>

                            <div className="banner-two__tab-box tabs-box">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                        <p>Air Freight</p>
                                    </li>
                                    <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                        <p>Road Freight</p>
                                    </li>
                                    <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                        <p>Ocean Freight</p>
                                    </li>
                                </ul>

                                <div className="tabs-content">
                                    {/*tab*/}
                                    <div className={activeIndex === 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="banner-two__tab-form-box">
                                            <form onSubmit={(e) => {
                                                return (
                                                    e.preventDefault(),
                                                    alert("Submited")
                                                )
                                            }}
                                                className="banner-two__tab-form mc-form">
                                                <div className="banner-two__tab-form-input-box">
                                                    <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                                                    <button type="submit" className="banner-two__tab-form-btn">
                                                        <span className="icon-search"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/*tab*/}

                                    {/*tab*/}
                                    <div className={activeIndex === 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="banner-two__tab-form-box">
                                            <form
                                                onSubmit={(e) => {
                                                    return (
                                                        e.preventDefault(),
                                                        alert("Submited")
                                                    )
                                                }}

                                                className="banner-two__tab-form mc-form">
                                                <div className="banner-two__tab-form-input-box">
                                                    <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                                                    <button type="submit" className="banner-two__tab-form-btn">
                                                        <span className="icon-search"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/*tab*/}

                                    {/*tab*/}
                                    <div className={activeIndex === 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="banner-two__tab-form-box">
                                            <form onSubmit={(e) => {
                                                return (
                                                    e.preventDefault(),
                                                    alert("Submited")
                                                )
                                            }}
                                                className="banner-two__tab-form mc-form">
                                                <div className="banner-two__tab-form-input-box">
                                                    <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                                                    <button type="submit" className="banner-two__tab-form-btn">
                                                        <span className="icon-search"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/*tab*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Banner;
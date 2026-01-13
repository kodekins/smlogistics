import { useState } from "react";
import bannerImg1 from "/sm-home3.png";
import bannerImg2 from "/sm-home4.png";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index: number) => {
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
                <div className="container clearfix">
                    <div className="banner-two__content">
                        <div className="banner-two__content-top wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2 style={{ fontSize: '64px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--logistiq-white)' }}>
                                    Reliable Freight Brokerage <br />
                                    Solutions Across the USA
                                </h2>
                                <h3 style={{ fontSize: '36px', fontWeight: '900', color: 'var(--logistiq-white)', marginTop: '20px' }}>
                                    DELIVERING THE TRUST
                                </h3>
                            </div>
                        </div>

                        <div className="banner-two__content-bottom wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="text-box">
                                <p style={{ fontSize: '20px', lineHeight: '1.4', color: 'var(--logistiq-white)' }}>
                                    Connecting shippers with trusted carriers for safe, <br />
                                    on-time, and cost-effective freight movement.
                                </p>
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
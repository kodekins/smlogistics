'use client'
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import servicePattern from '../../assets/images/pattern/service-v1-pattern.jpg';
import serviceImg1 from '/smlogistics-6.jpg';
import serviceImg2 from '/smlogistics-3.jpg';
import serviceImg3 from '/smlogistics-4.jpg';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 2,

        },
        767: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 2,

        },
        1199: {
            slidesPerView: 3,

        },
        1350: {
            slidesPerView: 3,

        },
    }



}

const ServicesOne = () => {
    return (
        <>

            <section className="service-one">
                <div className="service-one__pattern"
                    style={{ backgroundImage: `url(${servicePattern})` }} ></div>
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
                        <h2 className="sec-title__title tg-element-title">Provide Efficient Logistics
                            <br /> Solutions <span>Business</span></h2>
                    </div>

                    <div className="row">
                        <Swiper {...swiperOptions} className="service-one__carousel">
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg1} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">Fast Personal Delivery </Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg2} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">Local Truck Transport</Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg3} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">International Transport</Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg1} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">Fast Personal Delivery </Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg2} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">Local Truck Transport</Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg3} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">International Transport</Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg1} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">Fast Personal Delivery </Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg2} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">Local Truck Transport</Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/*Start Service One Single*/}
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src={serviceImg3} alt="#" />
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link to="international-transport">International Transport</Link></h2>
                                            <p>A logistic service provider company plays
                                                a pivotal role in the global supply chain logistic service.</p>
                                            <div className="btn-box">
                                                <Link to="international-transport">Read More <span
                                                    className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                </div>
                                {/*End Service One Single*/}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ServicesOne;

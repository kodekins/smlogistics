'use client'
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import serviceImg1 from '../../assets/images/services/services-v2-img1.jpg';
import serviceImg2 from '../../assets/images/services/services-v2-img2.jpg';
import serviceImg3 from '../../assets/images/services/services-v2-img3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
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
            slidesPerView: 1,
            
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

const  Services = () => {
    return (
        <>
        
        <section className="service-two">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Our Service</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-shipment float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Efficient Logistics Services <br/>
                        for Your <span>Business</span></h2>
                </div>

                <Swiper {...swiperOptions} className="service-two__carousel">
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg1} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-worldwide-shipping"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">International <br/>
                                        Transport</Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg2} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">Local Truck <br/>
                                        Transport</Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg3} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-courier-services"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">Fast Personal <br/>
                                        Delivery </Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg1} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-worldwide-shipping"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">International <br/>
                                        Transport</Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg2} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">Local Truck <br/>
                                        Transport</Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg3} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-courier-services"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">Fast Personal <br/>
                                        Delivery </Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg1} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-worldwide-shipping"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">International <br/>
                                        Transport</Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg2} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">Local Truck <br/>
                                        Transport</Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Start Service Two Single*/}
                    <div className="service-two__single">
                        <div className="service-two__single-img">
                            <div className="inner">
                                <img src={serviceImg3} alt=""/>
                            </div>
                        </div>

                        <div className="service-two__single-content">
                            <div className="icon">
                                <span className="icon-courier-services"></span>
                            </div>
                            <div className="service-two__single-content-inner text-center">
                                <h2><Link to="international-transport">Fast Personal <br/>
                                        Delivery </Link></h2>
                                <p>A logistic service provider company plays a pivotal role in the global supply
                                    chain logistic service.</p>
                                <div className="btn-box">
                                    <Link to="international-transport">Read More <span
                                            className="icon-right-arrow21"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service Two Single*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        
        </>
    )
}
export default Services;
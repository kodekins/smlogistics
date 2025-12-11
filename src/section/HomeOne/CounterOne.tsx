import React from 'react';
import CountUp from 'react-countup';

const CounterOne = () => {
    return (
        <section className="counter-one">
            <div className="container">
                <div className="row">
                    {/* Start Counter One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-box"></span>
                                </div>
                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3>
                                            <CountUp start={0} end={541} duration={2.5} separator="," />
                                        </h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Trucks In Fleet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    {/* End Counter One Single */}

                    {/* Start Counter One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-location"></span>
                                </div>
                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3>
                                            <CountUp start={0} end={350000} duration={2.5} separator="," />
                                        </h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Deliveries Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    {/* End Counter One Single */}

                    {/* Start Counter One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-customer-loyalty"></span>
                                </div>
                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3>
                                            <CountUp start={0} end={22} duration={2.5} separator="," />
                                        </h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Years Of Experience</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    {/* End Counter One Single */}
                </div>
            </div>
        </section>
    );
}
export default CounterOne;
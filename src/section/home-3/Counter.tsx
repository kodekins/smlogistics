import React, { useEffect, useRef, useState, useCallback } from 'react';
import counterPattern from '../../assets/images/pattern/counter-v3-pattern.png';

// Counter Component
function Counter({ end, duration }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const increment = end / duration;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCount();
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + increment;
                if (newCount >= end) {
                    clearInterval(interval);
                    return end;
                } else {
                    return newCount;
                }
            });
        }, 1000 / duration);

        return () => {
            clearInterval(interval);
        };
    }, [end, increment, duration]);  // Added duration here

    const startCount = () => {
        setCount(0);
    };

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    );
}

// CounterUp Component
function CounterUp({ end }) {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = useCallback(() => {
        const elements = document.getElementsByClassName('count-text');
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    }, [inViewport]);  // wrapped in useCallback with inViewport as dependency

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Run once on mount in case already visible
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);  // added handleScroll here

    return (
        <span className="count-text">{inViewport && <Counter end={end} duration={20} />}</span>
    );
}

// Main Funfacts Component
const Funfacts = () => {
    return (
        <section className="counter-one counter-one--three">
            <div className="counter-one--three__pattern"
                style={{ backgroundImage: `url(${counterPattern})` }}></div>
            <div className="container">
                <div className="row">
                    {/*Start Counter One Single*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-box"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3><CounterUp end={541} /></h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Distribution Center</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    {/*End Counter One Single*/}

                    {/*Start Counter One Single*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-location"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3><CounterUp end={766} /></h3>
                                        <span className="plus">+</span>
                                    </div>
                                    <div className="text-box">
                                        <p>Countries & Regions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="shape1"></div>
                        </div>
                    </div>
                    {/*End Counter One Single*/}

                    {/*Start Counter One Single*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="counter-one__single">
                            <div className="counter-one__single-inner">
                                <div className="icon">
                                    <span className="icon-customer-loyalty"></span>
                                </div>

                                <div className="content-box">
                                    <div className="count-text-box count-box">
                                        <h3><CounterUp end={25} /></h3>
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
                    {/*End Counter One Single*/}
                </div>
            </div>
        </section>
    );
}
export default Funfacts;

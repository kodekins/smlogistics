import React, { useEffect, useRef, useState } from 'react';

// Counter Component
function Counter({ end, duration = 2 }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

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
        let startTime;
        let animationFrameId;

        const updateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressInSeconds = progress / 1000;

            if (progressInSeconds < duration) {
                const newCount = Math.min(end, progressInSeconds * (end / duration));
                setCount(newCount);
                animationFrameId = requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        const startAnimation = () => {
            animationFrameId = requestAnimationFrame(updateCount);
        };

        if (countRef.current) {
            startAnimation();
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [end, duration]);

    const startCount = () => {
        setCount(0);
    };

    return (
        <span ref={countRef}>
            {Math.round(count)}
        </span>
    );
}


// Funfacts Component
const Funfacts = () => {
    return (
        <>
            <section className="counter-one counter-one--two">
                <div className="big-title wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <h2>ROAD FRIGHT</h2>
                </div>
                <div className="container clearfix">
                    <div className="counter-one--two__inner">
                        <ul>
                            {/*Start Counter Two Single*/}
                            <li className="counter-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="counter-one__single-inner">
                                    <div className="content-box">
                                        <div className="count-text-box count-box">
                                            <h3><Counter end={541} duration={2} /></h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <div className="text-box">
                                            <p>Distribution Center</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/*End Counter Two Single*/}

                            {/*Start Counter Two Single*/}
                            <li className="counter-one__single wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="counter-one__single-inner">
                                    <div className="content-box">
                                        <div className="count-text-box count-box">
                                            <h3><Counter end={54} duration={2} /></h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <div className="text-box">
                                            <p>Years Of Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/*End Counter Two Single*/}

                            {/*Start Counter Two Single*/}
                            <li className="counter-one__single wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="counter-one__single-inner">
                                    <div className="content-box">
                                        <div className="count-text-box count-box">
                                            <h3><Counter end={50} duration={2} /></h3>
                                            <span className="plus">+</span>
                                        </div>
                                        <div className="text-box">
                                            <p>Countries & Regions</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/*End Counter Two Single*/}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Funfacts;
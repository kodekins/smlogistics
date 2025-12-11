import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import ctaImg from '../../assets/images/resources/cta-v1-img1.png';
import ctaPattern from '../../assets/images/pattern/cta-v1-pattern.png';
import shape1 from '../../assets/images/shapes/cta-v1-shape1.png';
import shape2 from '../../assets/images/shapes/cta-v1-shape2.png';
import shape3 from '../../assets/images/shapes/cta-v1-shape3.png';

const Cta = () => {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <img src={ctaImg} alt="Call to action" />
                    </div>
                    <div className="cta-one__pattern">
                        <img src={ctaPattern} alt="Pattern" />
                    </div>
                    <div className="shape1 float-bob-x">
                        <img src={shape1} alt="Shape decoration" />
                    </div>
                    <div className="shape2">
                        <img src={shape2} alt="Shape decoration" />
                    </div>
                    <div className="shape3">
                        <img src={shape3} alt="Shape decoration" />
                    </div>
                    <div className="cta-one__content">
                        <h2>Recognized as One of The <br /> Leading <span>Company!</span></h2>
                        <p>Logistic service provider company plays a pivotal <br />
                            role in the global supply chain ecosystem.</p>
                        <div className="btn-box">
                            <Link className="thm-btn" to="#">
                                Book Your Parcel
                                <i className="icon-right-arrow21"></i>
                                <span className="hover-btn hover-bx"></span>
                                <span className="hover-btn hover-bx2"></span>
                                <span className="hover-btn hover-bx3"></span>
                                <span className="hover-btn hover-bx4"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Cta;
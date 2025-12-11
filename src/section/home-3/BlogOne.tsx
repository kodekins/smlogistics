import React from 'react';
import { Link } from 'react-router-dom';
import blogImg1 from '../../assets/images/blog/blog-v3-img1.jpg';
import blogImg2 from '../../assets/images/blog/blog-v3-img2.jpg';
import blogImg3 from '../../assets/images/blog/blog-v3-img3.jpg';

const Blog = () => {
    return (
        <section className="blog-three">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Latest Blogs</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Latest Blogs & <span>News</span></h2>
                </div>

                <div className="row">
                    {/* Blog Post 1 */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="00ms">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src={blogImg1} alt="Truckload Transportation" />
                                    <img src={blogImg1} alt="Truckload Transportation" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <ul className="meta-box">
                                    <li><i className="icon-user"></i> Admin</li>
                                    <li className="bg2"><i className="icon-clock"></i> 20 Jan 2024</li>
                                </ul>

                                <h2>
                                    <Link to="/blog-details">What is the Future of Truckload <br /> Transportation?</Link>
                                </h2>
                                <p>Phosfluorecent synergize holistic leadership skills before effective technology.</p>

                                <div className="btn-box">
                                    <Link className="thm-btn" to="/blog-details">
                                        Read More
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

                    {/* Blog Post 2 */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src={blogImg2} alt="Cargo Supply" />
                                    <img src={blogImg2} alt="Cargo Supply" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <ul className="meta-box">
                                    <li><i className="icon-user"></i> Admin</li>
                                    <li className="bg2"><i className="icon-clock"></i> 20 Jan 2024</li>
                                </ul>

                                <h2>
                                    <Link to="/blog-details">Cargo Follow Through the <br /> Best Supply Your Metal</Link>
                                </h2>
                                <p>Phosfluorecent synergize holistic leadership skills before effective technology.</p>

                                <div className="btn-box">
                                    <Link className="thm-btn" to="/blog-details">
                                        Read More
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

                    {/* Blog Post 3 */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                        <div className="blog-three__single">
                            <div className="blog-three__single-img">
                                <div className="inner">
                                    <img src={blogImg3} alt="Shipping Guarantee" />
                                    <img src={blogImg3} alt="Shipping Guarantee" />
                                </div>
                            </div>

                            <div className="blog-three__single-content">
                                <ul className="meta-box">
                                    <li><i className="icon-user"></i> Admin</li>
                                    <li className="bg2"><i className="icon-clock"></i> 20 Jan 2024</li>
                                </ul>

                                <h2>
                                    <Link to="/blog-details">Fast and Reliable Shipping <br /> Guarantee Trusted</Link>
                                </h2>
                                <p>Phosfluorecent synergize holistic leadership skills before effective technology.</p>

                                <div className="btn-box">
                                    <Link className="thm-btn" to="/blog-details">
                                        Read More
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
                </div>
            </div>
        </section>
    );
}
export default Blog;
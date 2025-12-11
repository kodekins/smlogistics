import React from "react";
import { Link } from "react-router-dom";

// Import images from your local assets folder
import blogImg1 from "../../assets/images/blog/blog-v1-img1.jpg";
import blogImg2 from "../../assets/images/blog/blog-v1-img2.jpg";
import blogImg3 from "../../assets/images/blog/blog-v1-img3.jpg";

const Blog = () => {
  return (
    <>
      <section className="blog-one blog-one--two" id="blog">
        <div className="container">
          <div className="sec-title center text-center tg-heading-subheading animation-style2">
            <div className="sec-title__tagline">
              <div className="line"></div>
              <div className="text tg-element-title">
                <h4>Blog & News</h4>
              </div>
              <div className="icon">
                <span className="icon-plane2 float-bob-x3"></span>
              </div>
            </div>
            <h2 className="sec-title__title tg-element-title">
              Latest Industry Updates <br /> From Our <span>Blog</span>
            </h2>
          </div>
          <div className="row">
            {/* Blog One Single */}
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src={blogImg1} alt="Blog 1" />
                </div>

                <div className="blog-one__single-content">
                  <div className="date-box">
                    <h2>05</h2>
                    <p>FEB</p>
                  </div>
                  <div className="blog-one__single-content-inner">
                    <ul className="meta-box">
                      <li>
                        <div className="icon">
                          <span className="icon-user"></span>
                        </div>

                        <div className="text-box">
                          <p><Link to="#">Robert Fox</Link></p>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-chat"></span>
                        </div>

                        <div className="text-box">
                          <p><Link to="#">2 Comment</Link></p>
                        </div>
                      </li>
                    </ul>

                    <h2>
                      <Link to="/blog-details">
                        Top 10 Tips for Choosing <br /> the Right Freight Carrier
                      </Link>
                    </h2>
                    <p>
                      Selecting the right freight partner is crucial for your business. 
                      Learn the key factors to consider when evaluating carriers...
                    </p>

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

            {/* Blog One Single */}
            <div className="col-xl-4 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src={blogImg2} alt="Blog 2" />
                </div>

                <div className="blog-one__single-content">
                  <div className="date-box">
                    <h2>05</h2>
                    <p>FEB</p>
                  </div>
                  <div className="blog-one__single-content-inner">
                    <ul className="meta-box">
                      <li>
                        <div className="icon">
                          <span className="icon-user"></span>
                        </div>

                        <div className="text-box">
                          <p><Link to="#">Robert Fox</Link></p>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-chat"></span>
                        </div>

                        <div className="text-box">
                          <p><Link to="#">2 Comment</Link></p>
                        </div>
                      </li>
                    </ul>

                    <h2>
                      <Link to="/blog-details">
                        The Future of Autonomous <br /> Trucks in Freight Transport
                      </Link>
                    </h2>
                    <p>
                      Explore how self-driving technology is revolutionizing the 
                      trucking industry and what it means for logistics...
                    </p>

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

            {/* Blog One Single */}
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src={blogImg3} alt="Blog 3" />
                </div>

                <div className="blog-one__single-content">
                  <div className="date-box">
                    <h2>05</h2>
                    <p>FEB</p>
                  </div>
                  <div className="blog-one__single-content-inner">
                    <ul className="meta-box">
                      <li>
                        <div className="icon">
                          <span className="icon-user"></span>
                        </div>

                        <div className="text-box">
                          <p><Link to="#">Robert Fox</Link></p>
                        </div>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-chat"></span>
                        </div>

                        <div className="text-box">
                          <p><Link to="#">2 Comment</Link></p>
                        </div>
                      </li>
                    </ul>

                    <h2>
                      <Link to="/blog-details">
                        Reducing Carbon Emissions <br /> in Long-Haul Trucking
                      </Link>
                    </h2>
                    <p>
                      Discover sustainable practices and green technologies that are 
                      helping trucking companies reduce their environmental impact...
                    </p>

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
            {/* End Blog One Single */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
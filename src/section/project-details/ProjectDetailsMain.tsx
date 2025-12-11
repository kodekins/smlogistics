import React from "react";
import { Link } from "react-router-dom";

// Images
import ProjectImg1 from "../../assets/images/project/project-details-img1.jpg";
import ProjectImg2 from "../../assets/images/project/project-details-img2.jpg";
import ProjectImg3 from "../../assets/images/project/project-details-img3.jpg";
import RelatedImg1 from "../../assets/images/project/project-v1-img6.jpg";
import RelatedImg2 from "../../assets/images/project/project-v1-img7.jpg";
import RelatedImg3 from "../../assets/images/project/project-v1-img8.jpg";

const ProjectDetailsMain = () => {
  return (
    <>
      {/* Start Project Details */}
      <section className="project-details">
        <div className="container">
          <div className="project-details__inner">
            {/* Main Image and Info */}
            <div className="project-details__img1">
              <div className="inner">
                <img src={ProjectImg1} alt="" />
              </div>

              <div
                className="project-details__img1-content wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="title-box">
                  <h2>Project Details</h2>
                </div>
                <div className="project-details__img1-content-list">
                  <ul className="clearfix">
                    <li>
                      <div className="title">
                        <h2>Category:</h2>
                      </div>
                      <div className="text">
                        <p>Quality Equipment</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h2>Client:</h2>
                      </div>
                      <div className="text">
                        <p>Mack Straing</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h2>Location:</h2>
                      </div>
                      <div className="text">
                        <p>USA</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h2>Value:</h2>
                      </div>
                      <div className="text">
                        <p>$500K</p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h2>Website:</h2>
                      </div>
                      <div className="text">
                        <p>
                          <Link to="https://www.google.com/">
                            www.google.com
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <h2>Share:</h2>
                      </div>
                      <div className="social-links">
                        <Link to="#">
                          <span className="icon-facebook-f"></span>
                        </Link>
                        <Link to="#">
                          <span className="icon-instagram"></span>
                        </Link>
                        <Link to="#">
                          <span className="icon-twitter1"></span>
                        </Link>
                        <Link to="#">
                          <span className="icon-linkedin"></span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Text Section 1 */}
            <div className="project-details__text1">
              <h2>Here to Know About This Project</h2>
              <p>
                With a focus on safety, efficiency, and cost-effectiveness, we
                offer a range of tailored services to meet the unique needs of
                our clients, from air and sea freight to road transportation...
              </p>
            </div>

            {/* Image and Objectives */}
            <div className="project-details__text2">
              <div className="row">
                <div className="col-xl-6">
                  <div className="project-details__text2-img">
                    <div className="inner">
                      <img src={ProjectImg2} alt="" />
                      <div className="project-details__video-link">
                        <Link
                          to="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
                          className="video-popup"
                        >
                          <div className="project-details__video-icon">
                            <span className="icon-video"></span>
                            <i className="ripple"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="project-details__text2-content">
                    <h2>Key Objectives:</h2>
                    <p>
                      As a premier international transport service provider, we
                      specialize in seamlessly connecting businesses and
                      individuals...
                    </p>
                    <ul>
                      <li>
                        <p>
                          <span className="icon-arrow-right-circle"></span>{" "}
                          Develop recommendations for process improvements
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="icon-arrow-right-circle"></span>{" "}
                          Create a roadmap for proposed changes.
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="icon-arrow-right-circle"></span>{" "}
                          Provide consultation support during implementation.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Section 2 */}
            <div className="project-details__text3">
              <p>
                With a focus on safety, efficiency, and cost-effectiveness, we
                offer a range of tailored services to meet the unique needs of
                our clients...
              </p>
              <div className="img-box">
                <img src={ProjectImg3} alt="" />
              </div>
            </div>

            {/* Previous / Next Navigation */}
            <div className="project-details__previous-next">
              <ul>
                <li>
                  <div className="icon">
                    <Link to="#">
                      <span className="icon-right-arrow2"></span>
                    </Link>
                  </div>
                  <div className="text-box">
                    <Link to="#">Previous Project</Link>
                  </div>
                </li>
                <li>
                  <div className="text-box">
                    <Link to="#">Next Project</Link>
                  </div>
                  <div className="icon">
                    <Link to="#">
                      <span className="icon-right-arrow2"></span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="project-one project-one--project-details">
        <div className="container">
          <div className="title-box text-center">
            <h2>Related Work</h2>
          </div>
          <div className="row">
            {[RelatedImg1, RelatedImg2, RelatedImg3].map((img, index) => (
              <div
                className={`col-xl-4 col-lg-4 wow ${
                  index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                }`}
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
                key={index}
              >
                <div className="project-one__single">
                  <div className="project-one__single-img">
                    <div className="inner">
                      <img src={img} alt="Related Work" />
                      <div className="project-one__overlay-content">
                        <div className="text-box">
                          <p>Logistic</p>
                          <h2>
                            <Link to="#">Warehouse Inventory</Link>
                          </h2>
                        </div>
                        <div className="icon">
                          <Link to="#">
                            <span className="icon-right-arrow21"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsMain;

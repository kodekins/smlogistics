import React from "react";
import { Link } from "react-router-dom";

// Import all images
import BlogDetailsImg1 from "../../assets/images/blog/blog-details-img1.jpg";
import BlogDetailsImg2 from "../../assets/images/blog/blog-details-img2.jpg";
import BlogDetailsImg3 from "../../assets/images/blog/blog-details-img3.jpg";
import BlogDetailsImg4 from "../../assets/images/blog/blog-details-img4.jpg";
import BlogDetailsImg5 from "../../assets/images/blog/blog-details-img5.jpg";
import BlogDetailsImg6 from "../../assets/images/blog/blog-details-img6.jpg";
import BlogDetailsImg7 from "../../assets/images/blog/blog-details-img7.jpg";
import BlogDetailsImg8 from "../../assets/images/blog/blog-details-img8.jpg";
import RecentPostImg1 from "../../assets/images/blog/recent-post-img1.jpg";
import RecentPostImg2 from "../../assets/images/blog/recent-post-img2.jpg";
import RecentPostImg3 from "../../assets/images/blog/recent-post-img3.jpg";

const BlogDetailsMain = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const Search = e.target.search.value;
  };
  const handleReplay = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const agree = form.agree.value;
  };
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="blog-details__content">
              {/* Main Blog Image */}
              <div className="blog-details__content-img1">
                <div className="inner">
                  <img src={BlogDetailsImg1} alt="Blog main" />
                </div>
              </div>

              {/* Meta Info */}
              <div className="blog-details__content-meta-box">
                <ul>
                  <li>
                    <div className="img-box">
                      <img src={BlogDetailsImg8} alt="Author" />
                    </div>
                    <div className="text-box">
                      <p>BY-Admin</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-calendar"></span>
                    </div>
                    <div className="text-box">
                      <p>October 8,2023</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-chat"></span>
                    </div>
                    <div className="text-box">
                      <p>Comment(5)</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Blog Content */}
              <div className="blog-details__content-text1">
                <h2>We Ensure Best Quality Logistic Service</h2>
                <p>
                  Your team's brilliance, determination, and confidence will
                  drive you to conquer new frontiers; greatness lies within you.
                  greatnes lies within w ill driveYour team's brilliance,
                  determination, and confidence will drive you to conquer new
                  frontiers; greatness lies within you. greatnes lies within w
                  ill driveYour team's brilliance, determination, and confidence
                  will drive you to conquer new frontiers; greatness lies within
                  you.
                </p>
              </div>

              {/* Two Column Images */}
              <div className="blog-details__content-img2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={BlogDetailsImg2} alt="Blog detail 1" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={BlogDetailsImg3} alt="Blog detail 2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* More Content */}
              <div className="blog-details__content-text2">
                <h2>How Are Federal Contractors Expected.</h2>
                <p>
                  Your team's brilliance, determination, and confidence will
                  drive you to conquer new frontiers; greatness lies within you.
                  greatnes lies within driveYour team's brilliance,
                  determination, and confidence will drive you to conquer new
                  frontiers; greatness lies within you. greatnes lies within w
                  ill driveYour team's brilliance, determination, and confidence
                  will drive you to conquer new frontiers; greatness lies within
                  you. greatnes lies within w ill drive
                </p>
              </div>

              {/* List and Video Section */}
              <div className="blog-details__content-text3">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="blog-details__content-text3-text">
                      <ul>
                        <li>
                          <p>
                            <span className="icon-right-arrow41"></span> Sed ut
                            perspiciatis unde omniccusantium
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-right-arrow41"></span> Ut enim
                            ad minima veniam, quis nostrum exercita
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-right-arrow41"></span> Quis
                            autem vel eum iure reprehenderit qui in ea
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-right-arrow41"></span>{" "}
                            Excepteur sint occaecat cupidatat
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-right-arrow41"></span>{" "}
                            Excepteur sint occaecat cupidatat non proident
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="icon-right-arrow41"></span> Quis
                            autem vel eum iure reprehenderit
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="blog-details__content-text3-img">
                      <div className="inner">
                        <div className="blog-details__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
                            className="video-popup"
                          >
                            <div className="blog-details__video-icon">
                              <span className="icon-video"></span>
                              <i className="ripple"></i>
                            </div>
                          </a>
                        </div>
                        <img src={BlogDetailsImg4} alt="Video thumbnail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Text */}
              <div className="blog-details__content-text4">
                <p>
                  Your team's brilliance, determination, and confidence will
                  drive you to conquer new frontiers; greatness lies within you.
                  greatnes lies within w ill driveYour team's brilliance,
                  determination, and confidence will drive you to conquer new
                  frontiers; greatness lies within you. greatnes lies within w
                  ill driveYour team's brilliance, determination, and confidence
                  will drive you to conquer new frontiers; greatness lies within
                  you. greatnes lies within w ill drive
                </p>
              </div>

              {/* Tags and Share */}
              <div className="blog-details__content-text5">
                <div className="blog-details__content-text5-tag">
                  <div className="title-box">
                    <h2>Tags:</h2>
                  </div>
                  <ul>
                    <li>
                      <Link to="#">#Logistics</Link>
                    </li>
                    <li>
                      <Link to="#">#Transport</Link>
                    </li>
                  </ul>
                </div>

                <div className="blog-details__content-text5-share">
                  <div className="title-box">
                    <p>Share Now</p>
                  </div>
                  <ul>
                    <li>
                      <Link to="#">
                        <span className="icon-facebook-f"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-linkedin"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Author Info */}
              <div className="blog-details__content-text6">
                <div className="img-box">
                  <img src={BlogDetailsImg5} alt="Author" />
                </div>
                <div className="content-box">
                  <h2>Alex Micle</h2>
                  <p>
                    Your team's brilliance, determination, and confidence will
                    drive you to conquer new frontiers; greatness lies within
                    you. greatnes lies within will driveYour team's brilliance,
                    determination, and confidence will drive you
                  </p>
                  <div className="social-links">
                    <Link to="#">
                      <span className="icon-facebook-f"></span>
                    </Link>
                    <Link to="#">
                      <span className="icon-instagram"></span>
                    </Link>
                    <Link to="#">
                      <span className="icon-twitter"></span>
                    </Link>
                    <Link to="#">
                      <span className="icon-linkedin"></span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="comment-one">
                <div className="title-box">
                  <h2>2 Comments</h2>
                </div>

                <div className="comment-one__single">
                  <div className="comment-one__single-inner">
                    <div className="comment-one__img">
                      <img src={BlogDetailsImg6} alt="Commenter" />
                    </div>
                    <div className="comment-one__content">
                      <div className="comment-one__content-title">
                        <h2>Cameron Williamson</h2>
                        <p>3 Hours Ago</p>
                      </div>
                      <p>
                        Your team's brilliance, determination, and confidence
                        will drive you to conquer new frontiers; greatness lies
                        within you. greatnes lies.
                      </p>
                      <div className="btn-box">
                        <Link to="#">Reply</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comment-one__single style2">
                  <div className="comment-one__single-inner">
                    <div className="comment-one__img">
                      <img src={BlogDetailsImg7} alt="Commenter" />
                    </div>
                    <div className="comment-one__content">
                      <div className="comment-one__content-title">
                        <h2>Jons kihan</h2>
                        <p>3 Hours Ago</p>
                      </div>
                      <p>
                        Your team's brilliance, determination, and confidence
                        will drive you to conquer new frontiers; greatness lies
                        within you. greatnes lies within w ill driveYour team's
                        brilliance
                      </p>
                      <div className="btn-box">
                        <Link to="#">Reply</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="comment-form">
                <div className="title-box">
                  <h2>Leave a Reply</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>

                <form
                  onSubmit={handleReplay}
                  className="contact-form-validated why-choose-one__form"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                        <div className="icon">
                          <span className="icon-user"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <div className="icon">
                          <span className="icon-email"></span>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="input-box">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <div className="icon style2">
                          <span className="icon-pen"></span>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="comment-form__checkbox">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree"
                          defaultChecked
                        />
                        <label htmlFor="agree">
                          <span></span>Save my name, email, and website in this
                          browser for the next time I comment.
                        </label>
                      </div>

                      <div className="why-choose-one__form-btn">
                        <button type="submit" className="thm-btn">
                          Submit Now
                          <i className="icon-right-arrow21"></i>
                          <span className="hover-btn hover-bx"></span>
                          <span className="hover-btn hover-bx2"></span>
                          <span className="hover-btn hover-bx3"></span>
                          <span className="hover-btn hover-bx4"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4">
            <div className="sidebar">
              {/* Search Widget */}
              <div
                className="sidebar__single sidebar__search wow fadeInUp"
                data-wow-delay=".1s"
              >
                <form onSubmit={handleSearch} className="sidebar__search-form">
                  <input type="search" name="search" placeholder="Search..." />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories Widget */}
              <div
                className="sidebar__single sidebar__category wow fadeInUp"
                data-wow-delay=".1s"
              >
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list">
                  <li>
                    <Link to="#">
                      New Technologies <span>(12)</span>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="#">
                      Parallax Effect <span>(15)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Digital Marketing <span>(08)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Content Writting <span>(20)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      One Page Template <span>(14)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Relationship Buildup <span>(05)</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div
                className="sidebar__single sidebar__post wow fadeInUp"
                data-wow-delay=".1s"
              >
                <h3 className="sidebar__title">Recent Post</h3>
                <div className="sidebar__post-box">
                  <div className="sidebar__post-single">
                    <div className="sidebar-post__img">
                      <img src={RecentPostImg1} alt="Recent post" />
                    </div>
                    <div className="sidebar__post-content-box">
                      <h3>
                        <Link to="#">
                          Face eite mowl dirst dominon likeness meat a mornin.
                        </Link>
                      </h3>
                    </div>
                  </div>

                  <div className="sidebar__post-single">
                    <div className="sidebar-post__img">
                      <img src={RecentPostImg2} alt="Recent post" />
                    </div>
                    <div className="sidebar__post-content-box">
                      <h3>
                        <Link to="#">
                          Said dill under bielding over made spirit sea.
                        </Link>
                      </h3>
                    </div>
                  </div>

                  <div className="sidebar__post-single">
                    <div className="sidebar-post__img">
                      <img src={RecentPostImg3} alt="Recent post" />
                    </div>
                    <div className="sidebar__post-content-box">
                      <h3>
                        <Link to="#">
                          Face eite mowl dirst dominon likeness meat a mornin.
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Widget */}
              <div
                className="sidebar__single sidebar__tags wow fadeInUp"
                data-wow-delay=".1s"
              >
                <h3 className="sidebar__title">Tags Cloud</h3>
                <ul className="sidebar__tags-list clearfix">
                  <li>
                    <Link to="#">Carpet</Link>
                  </li>
                  <li>
                    <Link to="#">Office</Link>
                  </li>
                  <li>
                    <Link to="#">Agent</Link>
                  </li>
                  <li>
                    <Link to="#">Business</Link>
                  </li>
                  <li>
                    <Link to="#">Love</Link>
                  </li>
                  <li>
                    <Link to="#">Room</Link>
                  </li>
                  <li>
                    <Link to="#">Project</Link>
                  </li>
                  <li>
                    <Link to="#">Corporate</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsMain;

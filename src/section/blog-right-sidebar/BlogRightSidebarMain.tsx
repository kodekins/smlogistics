import React from "react";
import { Link } from "react-router-dom";

// Import all images
import BlogV1Img1 from "../../assets/images/blog/blog-v1-img1.jpg";
import BlogV1Img2 from "../../assets/images/blog/blog-v1-img2.jpg";
import BlogV1Img3 from "../../assets/images/blog/blog-v1-img3.jpg";
import BlogV1Img4 from "../../assets/images/blog/blog-v1-img4.jpg";
import BlogV1Img5 from "../../assets/images/blog/blog-v1-img5.jpg";
import BlogV1Img6 from "../../assets/images/blog/blog-v1-img6.jpg";
import BlogV1Img7 from "../../assets/images/blog/blog-v1-img7.jpg";
import BlogV1Img8 from "../../assets/images/blog/blog-v1-img8.jpg";
import BlogV1Img9 from "../../assets/images/blog/blog-v1-img9.jpg";
import BlogV1Img10 from "../../assets/images/blog/blog-v1-img10.jpg";
import RecentPostImg1 from "../../assets/images/blog/recent-post-img1.jpg";
import RecentPostImg2 from "../../assets/images/blog/recent-post-img2.jpg";
import RecentPostImg3 from "../../assets/images/blog/recent-post-img3.jpg";

// Blog post data
const blogPosts = [
  {
    id: 1,
    image: BlogV1Img1,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "How Will You Know Success When it Show Up?",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp",
  },
  {
    id: 2,
    image: BlogV1Img2,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Mastering Last Mile Delivery Strategies for Success",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInDown",
  },
  // Add all other blog posts in the same format
  {
    id: 3,
    image: BlogV1Img4,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Logistics Announces Launch of Greenhouse Gas",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp",
  },
  {
    id: 4,
    image: BlogV1Img5,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Mastering Last Mile Delivery Strategies for Success",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInDown",
  },
  {
    id: 5,
    image: BlogV1Img3,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Logistics Announces Launch of Greenhouse Gas",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp",
  },
  {
    id: 6,
    image: BlogV1Img6,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "How Will You Know Success When it Show Up?",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain cosystem by efficiently...",
    animation: "fadeInUp",
  },
  {
    id: 7,
    image: BlogV1Img7,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "How Will You Know Success When it Show Up?",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp",
  },
  {
    id: 8,
    image: BlogV1Img8,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Mastering Last Mile Delivery Strategies for Success",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInDown",
  },
  {
    id: 9,
    image: BlogV1Img9,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Logistics Announces Launch of Greenhouse Gas",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp",
  },
  {
    id: 10,
    image: BlogV1Img10,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "How Will You Know Success When it Show Up?",
    excerpt:
      "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp",
  },
];

// Blog post component
const BlogPost = ({ post }) => (
  <div
    className={`col-xl-6 col-lg-6 wow ${post.animation}`}
    data-wow-delay=".3s"
  >
    <div className="blog-one__single">
      <div className="blog-one__single-img">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-one__single-content">
        <div className="date-box">
          <h2>{post.date}</h2>
          <p>{post.month}</p>
        </div>
        <div className="blog-one__single-content-inner">
          <ul className="meta-box">
            <li>
              <div className="icon">
                <span className="icon-user"></span>
              </div>
              <div className="text-box">
                <p>
                  <Link to="#">{post.author}</Link>
                </p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-chat"></span>
              </div>
              <div className="text-box">
                <p>
                  <Link to="#">{post.comments} Comment</Link>
                </p>
              </div>
            </li>
          </ul>
          <h2>
            <Link to="/blog-details">{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
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
);

// Recent post component
const RecentPost = ({ image, title }) => (
  <div className="sidebar__post-single">
    <div className="sidebar-post__img">
      <img src={image} alt={title} />
    </div>
    <div className="sidebar__post-content-box">
      <h3>
        <Link to="#">{title}</Link>
      </h3>
    </div>
  </div>
);

const BlogPage = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const Search = e.target.search.value;
  };
  return (
    <section className="blog-page-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="row">
              {blogPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}

              {/* Pagination */}
              <ul className="styled-pagination text-center clearfix">
                <li className="arrow prev active">
                  <Link to="#">
                    <span className="icon-right-arrow3"></span>
                  </Link>
                </li>
                <li>
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li className="arrow next">
                  <Link to="#">
                    <span className="icon-right-arrow31"></span>
                  </Link>
                </li>
              </ul>
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
                  <RecentPost
                    image={RecentPostImg1}
                    title="Face eite mowl dirst dominon likeness meat a mornin."
                  />
                  <RecentPost
                    image={RecentPostImg2}
                    title="Said dill under bielding over made spirit sea."
                  />
                  <RecentPost
                    image={RecentPostImg3}
                    title="Face eite mowl dirst dominon likeness meat a mornin."
                  />
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

export default BlogPage;

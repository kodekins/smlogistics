import React from 'react';
import { Link } from 'react-router-dom';

// Import all images
import BlogV1Img1 from '../../assets/images/blog/blog-v1-img1.jpg';
import BlogV1Img2 from '../../assets/images/blog/blog-v1-img2.jpg';
import BlogV1Img3 from '../../assets/images/blog/blog-v1-img3.jpg';
import BlogV1Img4 from '../../assets/images/blog/blog-v1-img4.jpg';
import BlogV1Img5 from '../../assets/images/blog/blog-v1-img5.jpg';
import BlogV1Img6 from '../../assets/images/blog/blog-v1-img6.jpg';

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
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp"
  },
  {
    id: 2,
    image: BlogV1Img2,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Mastering Last Mile Delivery Strategies for Success",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInDown"
  },
  {
    id: 3,
    image: BlogV1Img3,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Logistics Announces Launch of Greenhouse Gas",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp"
  },
  {
    id: 4,
    image: BlogV1Img4,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Logistics Announces Launch of Greenhouse Gas",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp"
  },
  {
    id: 5,
    image: BlogV1Img5,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Mastering Last Mile Delivery Strategies for Success",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInDown"
  },
  {
    id: 6,
    image: BlogV1Img6,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "How Will You Know Success When it Show Up?",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently...",
    animation: "fadeInUp"
  }
];

// Blog post component
const BlogPost = ({ post }) => (
  <div className={`col-xl-4 col-lg-6 wow ${post.animation}`} data-wow-delay=".3s">
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
                <p><Link to="#">{post.author}</Link></p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-chat"></span>
              </div>
              <div className="text-box">
                <p><Link to="#">{post.comments} Comment</Link></p>
              </div>
            </li>
          </ul>
          <h2><Link to="/blog-details">{post.title}</Link></h2>
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

const BlogPage = () => {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="row">
          {blogPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <ul className="styled-pagination text-center clearfix">
          <li className="arrow prev active">
            <Link to="#"><span className="icon-right-arrow3"></span></Link>
          </li>
          <li><Link to="#">1</Link></li>
          <li><Link to="#">2</Link></li>
          <li><Link to="#">3</Link></li>
          <li className="arrow next">
            <Link to="#">
              <span className="icon-right-arrow31"></span>
            </Link>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default BlogPage;
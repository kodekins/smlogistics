import React from 'react';
import { Link } from 'react-router-dom';

// Import all images
import BlogStandardImg1 from '../../assets/images/blog/blog-standard-img1.jpg';
import BlogStandardImg2 from '../../assets/images/blog/blog-standard-img2.jpg';
import BlogStandardImg3 from '../../assets/images/blog/blog-standard-img3.jpg';
import BlogStandardImg4 from '../../assets/images/blog/blog-standard-img4.jpg';
import RecentPostImg1 from '../../assets/images/blog/recent-post-img1.jpg';
import RecentPostImg2 from '../../assets/images/blog/recent-post-img2.jpg';
import RecentPostImg3 from '../../assets/images/blog/recent-post-img3.jpg';

// Blog post data
const blogPosts = [
  {
    id: 1,
    image: BlogStandardImg1,
    date: "05",
    month: "FEB",
    author: "Floyd Miles",
    comments: 2,
    title: "We Ensures That Best Quality Logistic Services Provides.",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently..."
  },
  {
    id: 2,
    image: BlogStandardImg2,
    date: "05",
    month: "FEB",
    author: "Floyd Miles",
    comments: 2,
    title: "The Advantages of a Digital Supply Strategy",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently..."
  },
  {
    id: 3,
    image: BlogStandardImg3,
    date: "05",
    month: "FEB",
    author: "Floyd Miles",
    comments: 2,
    title: "Logistics Announces Launch of The Safe Greenhouse Gas",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently..."
  },
  {
    id: 4,
    image: BlogStandardImg4,
    date: "05",
    month: "FEB",
    author: "Robert Fox",
    comments: 2,
    title: "Mastering Last Mile Delivery Strategies for Success",
    excerpt: "Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently..."
  }
];

// Categories data
const categories = [
  { name: "New Technologies", count: 12, active: false },
  { name: "Parallax Effect", count: 15, active: true },
  { name: "Digital Marketing", count: 8, active: false },
  { name: "Content Writting", count: 20, active: false },
  { name: "One Page Template", count: 14, active: false },
  { name: "Relationship Buildup", count: 5, active: false }
];

// Recent posts data
const recentPosts = [
  {
    image: RecentPostImg1,
    title: "Face eite mowl dirst dominon likeness meat a mornin."
  },
  {
    image: RecentPostImg2,
    title: "Said dill under bielding over made spirit sea."
  },
  {
    image: RecentPostImg3,
    title: "Face eite mowl dirst dominon likeness meat a mornin."
  }
];

// Tags data
const tags = [
  "Carpet", "Office", "Agent", "Business",
  "Love", "Room", "Project", "Corporate"
];

// Blog post component
const BlogPost = ({ post }) => (
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
);

// Category component
const CategoryItem = ({ category }) => (
  <li className={category.active ? "active" : ""}>
    <Link to="#">
      {category.name} <span>({category.count})</span>
    </Link>
  </li>
);

// Recent post component
const RecentPostItem = ({ post }) => (
  <div className="sidebar__post-single">
    <div className="sidebar-post__img">
      <img src={post.image} alt={post.title} />
    </div>
    <div className="sidebar__post-content-box">
      <h3><Link to="#">{post.title}</Link></h3>
    </div>
  </div>
);

// Tag component
const TagItem = ({ tag }) => (
  <li><Link to="#">{tag}</Link></li>
);

const BlogStandardPage = () => {
  return (
    <section className="blog-standard-page">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-xl-8">
            <div className="row">
              {blogPosts.map(post => (
                <BlogPost key={post.id} post={post} />
              ))}

              {/* Pagination */}
              <ul className="styled-pagination text-center clearfix">
                <li className="arrow prev active">
                  <Link to="#"><span className="icon-right-arrow3"></span></Link>
                </li>
                <li><Link to="#">1</Link></li>
                <li><Link to="#">2</Link></li>
                <li><Link to="#">3</Link></li>
                <li className="arrow next">
                  <Link to="#"><span className="icon-right-arrow31"></span></Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4">
            <div className="sidebar">
              {/* Search Widget */}
              <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                <form onSubmit={(e) => {
                  return (
                    e.preventDefault()
                    
                  )
                }} className="sidebar__search-form">
                  <input type="search" placeholder="Search..." />
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>
              </div>

              {/* Categories Widget */}
              <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".1s">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list">
                  {categories.map((category, index) => (
                    <CategoryItem key={index} category={category} />
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="sidebar__single sidebar__post wow fadeInUp" data-wow-delay=".1s">
                <h3 className="sidebar__title">Recent Post</h3>
                <div className="sidebar__post-box">
                  {recentPosts.map((post, index) => (
                    <RecentPostItem key={index} post={post} />
                  ))}
                </div>
              </div>

              {/* Tags Widget */}
              <div className="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".1s">
                <h3 className="sidebar__title">Tags Cloud</h3>
                <ul className="sidebar__tags-list clearfix">
                  {tags.map((tag, index) => (
                    <TagItem key={index} tag={tag} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStandardPage;
import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import projectImg1 from '../../assets/images/project/project-v1-img1.jpg';
import projectImg2 from '../../assets/images/project/project-v1-img2.jpg';
import projectImg3 from '../../assets/images/project/project-v1-img3.jpg';
import projectImg4 from '../../assets/images/project/project-v1-img4.jpg';

const projects = [
  {
    id: 1,
    image: projectImg1,
    category: "Logistic",
    title: "Warehouse Inventory",
    colClass: "col-xl-7 col-lg-7",
    animation: "fadeInRight"
  },
  {
    id: 2,
    image: projectImg2,
    category: "Logistic",
    title: "Warehouse Inventory",
    colClass: "col-xl-4 col-lg-4",
    animation: "fadeInLeft"
  },
  {
    id: 3,
    image: projectImg3,
    category: "Logistic",
    title: "Warehouse Inventory",
    colClass: "col-xl-4 col-lg-4",
    animation: "fadeInRight"
  },
  {
    id: 4,
    image: projectImg4,
    category: "Logistic",
    title: "Warehouse Inventory",
    colClass: "col-xl-4 col-lg-4",
    animation: "fadeInLeft"
  }
];
const Projects = () => {
  return (
    <section className="project-one project-one--two">
      <div className="container">
        <div className="row">
          {/* Left Title Section */}
          <div className="col-xl-5 col-lg-5 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="project-one__title">
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Latest Project</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  The Achievement <br />
                  of Our <span>Project</span>
                </h2>
              </div>

              <div className="btn-box">
                <Link className="thm-btn" to="/project">
                  See All Project
                  <i className="icon-right-arrow21"></i>
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Items */}
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.colClass} wow ${project.animation}`}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={project.image} alt={project.title} />
                    <div className="project-one__overlay-content">
                      <div className="text-box">
                        <p>{project.category}</p>
                        <h2><Link to="/project-details">{project.title}</Link></h2>
                      </div>
                      <div className="icon">
                        <Link to="/project-details">
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
  );
}
export default Projects
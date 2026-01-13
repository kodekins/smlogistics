import React from "react";
import { Link } from "react-router-dom";

import ProjectImg1 from "/smlogistics-4.jpg";
import ProjectImg2 from "/smlogistics-3.jpg";
import ProjectImg3 from "/smlogistics-6.jpg";
import ProjectImg4 from "/smlogistics-2.jpg";

// 🔹 Project data type
interface ProjectItem {
  img: string;
  category: string;
  title: string;
  link: string;
  classes: string;
}

// 🔹 Array with type safety
const projectData: ProjectItem[] = [
  {
    img: ProjectImg1,
    category: "Logistics",
    title: "Advanced Warehouse Operations",
    link: "/project-details",
    classes: "col-xl-7 col-lg-7 wow fadeInRight",
  },
  {
    img: ProjectImg2,
    category: "Freight",
    title: "Ocean & Port Transport",
    link: "/project-details",
    classes: "col-xl-4 col-lg-4 wow fadeInLeft",
  },
  {
    img: ProjectImg3,
    category: "Transport",
    title: "Fleet Management Solutions",
    link: "/project-details",
    classes: "col-xl-4 col-lg-4 wow fadeInRight",
  },
  {
    img: ProjectImg4,
    category: "Technology",
    title: "Real-Time Tracking Systems",
    link: "/project-details",
    classes: "col-xl-4 col-lg-4 wow fadeInLeft",
  },
];

// 🔹 React.FC type for functional component
const ProjectOne: React.FC = () => {
  return (
    <section className="project-one">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div
            className="col-xl-5 col-lg-5 wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="project-one__title">
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Latest Project</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-shipment float-bob-x3"></span>
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
          {projectData.map((project: ProjectItem, index: number) => (
            <div
              key={index}
              className={project.classes}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={project.img} alt={project.title} />
                    <div className="project-one__overlay-content">
                      <div className="text-box">
                        <p>{project.category}</p>
                        <h2>
                          <Link to={project.link}>{project.title}</Link>
                        </h2>
                      </div>
                      <div className="icon">
                        <Link to={project.link}>
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
};

export default ProjectOne;

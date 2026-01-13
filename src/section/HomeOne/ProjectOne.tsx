import React from 'react';
import { Link } from 'react-router-dom';
// Image imports
import projectImg1 from '/smlogistics-4.jpg';
import projectImg2 from '/smlogistics-3.jpg';
import projectImg3 from '/smlogistics-6.jpg';
import projectImg4 from '/smlogistics-2.jpg';

const ProjectOne = () => {
  const projects = [
    {
      id: 1,
      image: projectImg1,
      category: 'Logistics',
      title: 'Advanced Warehouse Operations',
      link: 'project-details',
      colClass: 'col-xl-7 col-lg-7',
    },
    {
      id: 2,
      image: projectImg2,
      category: 'Freight',
      title: 'Ocean & Port Transport',
      link: 'project-details',
      colClass: 'col-xl-4 col-lg-4',
    },
    {
      id: 3,
      image: projectImg3,
      category: 'Transport',
      title: 'Fleet Management Solutions',
      link: 'project-details',
      colClass: 'col-xl-4 col-lg-4',
    },
    {
      id: 4,
      image: projectImg4,
      category: 'Technology',
      title: 'Real-Time Tracking Systems',
      link: 'project-details',
      colClass: 'col-xl-4 col-lg-4',
    },
  ];

  return (
    <section className="project-one" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
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
                  Recent Successful <br /> Trucking <span>Projects</span>
                </h2>
              </div>
              <div className="btn-box">
                <Link className="thm-btn" to="/project">
                  View All Projects
                  <i className="icon-right-arrow21"></i>
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </Link>
              </div>
            </div>
          </div>

          {projects.map((project) => (
            <div key={project.id} className={project.colClass}>
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="project-one__overlay-content">
                      <div className="text-box">
                        <p>{project.category}</p>
                        <h2>
                          <a href={project.link}>{project.title}</a>
                        </h2>
                      </div>
                      <div className="icon">
                        <a href={project.link}>
                          <span className="icon-right-arrow21"></span>
                        </a>
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
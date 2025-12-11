import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../assets/images/project/project-v1-img5.jpg';
import Img2 from '../../assets/images/project/project-v1-img1.jpg';
import Img3 from '../../assets/images/project/project-v1-img2.jpg';
import Img4 from '../../assets/images/project/project-v1-img3.jpg';
import Img5 from '../../assets/images/project/project-v1-img4.jpg';

const projectItems = [
  {
    id: 1,
    colClass: 'col-xl-5 col-lg-5',
    animation: 'fadeInLeft',
    img: Img1,
    title: 'Warehouse Inventory',
    category: 'Logistic',
  },
  {
    id: 2,
    colClass: 'col-xl-7 col-lg-7',
    animation: 'fadeInRight',
    img: Img2,
    title: 'Warehouse Inventory',
    category: 'Logistic',
  },
  {
    id: 3,
    colClass: 'col-xl-4 col-lg-4',
    animation: 'fadeInLeft',
    img: Img3,
    title: 'Warehouse Inventory',
    category: 'Logistic',
  },
  {
    id: 4,
    colClass: 'col-xl-4 col-lg-4',
    animation: 'fadeInRight',
    img: Img4,
    title: 'Warehouse Inventory',
    category: 'Logistic',
  },
  {
    id: 5,
    colClass: 'col-xl-4 col-lg-4',
    animation: 'fadeInLeft',
    img: Img5,
    title: 'Warehouse Inventory',
    category: 'Logistic',
  },
];

const ProjectOneMain = () => {
  return (
    <section className="project-one project-one--project">
      <div className="container">
        <div className="row">
          {projectItems.map((item) => (
            <div
              className={`${item.colClass} wow ${item.animation}`}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              key={item.id}
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={item.img} alt={item.title} />
                    <div className="project-one__overlay-content">
                      <div className="text-box">
                        <p>{item.category}</p>
                        <h2>
                          <Link to="/project-details">{item.title}</Link>
                        </h2>
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
};

export default ProjectOneMain;

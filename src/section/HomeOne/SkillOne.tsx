import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import images
import skillShape1 from '../../assets/images/shapes/skill-v1-shape1.png';
import skillShape2 from '../../assets/images/shapes/skill-v1-shape2.png';
import skillImg1 from '/flatbed-3.jpeg';
import skillImg2 from '/dumptrucks-2.jpeg';

const SkillOne = () => {
  // Progress bar animation (will run when component mounts)
  useEffect(() => {
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('.count-bar');
      progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
      });
    };

    animateProgressBars();
  }, []);

  const skills = [
    { id: 1, name: 'On-Time Delivery Rate', percent: '99%' },
    { id: 2, name: 'Fleet Management', percent: '95%' },
    { id: 3, name: 'Customer Satisfaction', percent: '98%' }
  ];

  return (
    <section className="skill-one">
      <div className="container">
        <div className="row">
          {/* Skill Images Section */}
          <div className="col-xl-5">
            <div className="skill-one__img">
              <div className="shape1 float-bob-y">
                <img src={skillShape1} alt="Decorative shape" />
              </div>
              <div className="shape2 float-bob-y">
                <img src={skillShape2} alt="Decorative shape" />
              </div>
              <div className="skill-one__img1">
                <img 
                  src={skillImg1} 
                  alt="Skill demonstration"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div className="skill-one__img2">
                <div className="inner">
                  <img 
                    src={skillImg2} 
                    alt="Skill demonstration"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Skill Content Section */}
          <div className="col-xl-7">
            <div className="skill-one__content">
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Our Skills</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  Professional Trucking <br /> Excellence In Every Mile
                </h2>
              </div>

              <div className="skill-one__content-text">
                <p>
                  With over 22 years in the trucking industry, we've built our reputation on reliability, 
                  safety, and exceptional service. Our modern fleet of 500+ trucks and experienced drivers 
                  ensure your freight arrives on time, every time.
                </p>
              </div>

              <ul className="skill-one__progress">
                {skills.map(skill => (
                  <li key={skill.id}>
                    <div className="skill-one__progress-single">
                      <div className="title-box">
                        <p>{skill.name}</p>
                      </div>
                      <div className="bar">
                        <div 
                          className="bar-inner count-bar" 
                          data-percent={skill.percent}
                          style={{ width: skill.percent }}
                        >
                          <div className="count-text">{skill.percent}</div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="skill-one__content-btn">
                <Link className="thm-btn" to="/contact">
                  Request Quote
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
    </section>
  );
};

export default SkillOne;
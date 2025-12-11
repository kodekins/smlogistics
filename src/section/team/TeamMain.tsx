import React from 'react';
import { Link } from 'react-router-dom';

import Img1 from '../../assets/images/team/team-v1-img1.jpg';
import Img2 from '../../assets/images/team/team-v1-img2.jpg';
import Img3 from '../../assets/images/team/team-v1-img3.jpg';
import Img4 from '../../assets/images/team/team-v1-img4.jpg';
import Img5 from '../../assets/images/team/team-v1-img5.jpg';
import Img6 from '../../assets/images/team/team-v1-img6.jpg';
import Shape1 from '../../assets/images/pattern/team-page-pattern.png';

const teamMembers = [
  { id: 1, img: Img1, name: 'Courtney Henry', title: 'FOUNDER', delay: '.1s' },
  { id: 2, img: Img2, name: 'Jane Cooper', title: 'FOUNDER', delay: '.3s' },
  { id: 3, img: Img3, name: 'Marvin McKinney', title: 'FOUNDER', delay: '.5s' },
  { id: 4, img: Img4, name: 'Jacob Jones', title: 'FOUNDER', delay: '.1s' },
  { id: 5, img: Img5, name: 'Darrell Steward', title: 'FOUNDER', delay: '.3s' },
  { id: 6, img: Img6, name: 'Theresa Webb', title: 'FOUNDER', delay: '.5s' },
];

const TeamCard = ({ member }) => (
  <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={member.delay}>
    <div className="team-one__single">
      <div className="team-one__single-img">
        <div className="inner">
          <img src={member.img} alt={member.name} />
        </div>
      </div>
      <div className="team-one__single-content">
        <ul className="social-links">
          <li><Link to="#"><span className="icon-linkedin"></span></Link></li>
          <li><Link to="#"><span className="icon-twitter1"></span></Link></li>
          <li><Link to="#"><span className="icon-instagram"></span></Link></li>
          <li><Link to="#"><span className="icon-facebook-f"></span></Link></li>
        </ul>
        <span>{member.title}</span>
        <h2><Link to="/team-details">{member.name}</Link></h2>
        <p>Logistic service provider company plays a pivotal role in the global supply chain</p>
        <div className="btn-box">
          <Link to="/contact">
            Contact Me <i className="icon-right-arrow21"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TeamOneMain = () => {
  return (
    <section className="team-one team-one--two team-one--two--team">
      <div className="shape1">
        <img src={Shape1} alt="Pattern" />
      </div>
      <div className="container">
        <div className="row">
          {teamMembers.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOneMain;

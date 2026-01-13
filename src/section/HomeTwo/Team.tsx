import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import teamPattern from '../../assets/images/pattern/team-v2-pattern.png';
import teamImg1 from '../../assets/images/team/team-v1-img1.jpg';
import teamImg2 from '../../assets/images/team/team-v1-img2.jpg';
import teamImg3 from '../../assets/images/team/team-v1-img3.jpg';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.srn',
    prevEl: '.srp',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  }
};

const teamMembers = [
  {
    id: 1,
    image: teamImg1,
    name: "Courtney Henry",
    position: "FOUNDER",
    description: "Logistic service provider company plays a pivotal role in the global supply chain"
  },
  {
    id: 2,
    image: teamImg2,
    name: "Jane Cooper",
    position: "FOUNDER",
    description: "Logistic service provider company plays a pivotal role in the global supply chain"
  },
  {
    id: 3,
    image: teamImg3,
    name: "Marvin McKinney",
    position: "FOUNDER",
    description: "Logistic service provider company plays a pivotal role in the global supply chain"
  }
];

const Team = () => {
  return (
    <section className="team-one team-one--two">
      <div className="team-one--two__pattern">
        <img src={teamPattern} alt="Team background pattern" />
      </div>
      <div className="container">
        <div className="sec-title center text-center tg-heading-subheading animation-style2">
          <div className="sec-title__tagline">
            <div className="line"></div>
            <div className="text tg-element-title">
              <h4>Team member</h4>
            </div>
            <div className="icon">
              <span className="icon-shipment float-bob-x3"></span>
            </div>
          </div>
          <h2 className="sec-title__title tg-element-title">
            Introduce Our Expert <br />
            Logistic <span>Teams</span>
          </h2>
        </div>

        <Swiper {...swiperOptions} className="team-one__carousel">
          {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
            <SwiperSlide key={`${member.id}-${index}`}>
              <div className="team-one__single">
                <div className="team-one__single-img">
                  <div className="inner">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>

                <div className="team-one__single-content">
                  <ul className="social-links">
                    <li><Link to="#"><span className="icon-linkedin"></span></Link></li>
                    <li><Link to="#"><span className="icon-twitter1"></span></Link></li>
                    <li><Link to="#"><span className="icon-instagram"></span></Link></li>
                    <li><Link to="#"><span className="icon-facebook-f"></span></Link></li>
                  </ul>
                  <span>{member.position}</span>
                  <h2><Link to="/team-details">{member.name}</Link></h2>
                  <p>{member.description}</p>
                  <div className="btn-box">
                    <Link to="/contact">
                      Contact Me <i className="icon-right-arrow21"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Team;
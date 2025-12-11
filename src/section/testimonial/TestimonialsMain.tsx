import React from 'react';
import Img1 from '../../assets/images/testimonial/testimonial-v2-img1.png';
import Img2 from '../../assets/images/testimonial/testimonial-v2-img2.png';
import Img3 from '../../assets/images/testimonial/testimonial-v2-img3.png';
import Img4 from '../../assets/images/testimonial/testimonial-v2-img4.png';
import Img5 from '../../assets/images/testimonial/testimonial-v2-img5.png';
import Img6 from '../../assets/images/testimonial/testimonial-v2-img6.png';
import BgShape from '../../assets/images/pattern/testimonial-page-pattern.png';

const testimonials = [
  {
    name: 'Leslie Alexander',
    position: 'MANAGER',
    text: 'A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.',
    image: Img3,
    delay: '.1s',
  },
  {
    name: 'Ronald Richards',
    position: 'MANAGER',
    text: 'A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.',
    image: Img2,
    delay: '.3s',
  },
  {
    name: 'Ronald Richards',
    position: 'MANAGER',
    text: 'A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.',
    image: Img4,
    delay: '.5s',
  },
  {
    name: 'Leslie Alexander',
    position: 'MANAGER',
    text: 'A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.',
    image: Img1,
    delay: '.1s',
  },
  {
    name: 'Ronald Richards',
    position: 'MANAGER',
    text: 'A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.',
    image: Img5,
    delay: '.3s',
  },
  {
    name: 'Ronald Richards',
    position: 'MANAGER',
    text: 'A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider.',
    image: Img6,
    delay: '.5s',
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-two testimonial-two--testimonial">
      <div className="shape1">
        <img src={BgShape} alt="Pattern" />
      </div>
      <div className="container clearfix">
        <div className="row">
          {testimonials.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
              key={index}
            >
              <div className="testimonial-two__single">
                <div className="testimonial-two__single-inner">
                  <div className="testimonial-two__single-top">
                    <div className="img-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="title-box">
                      <h2>{item.name}</h2>
                      <span>{item.position}</span>
                    </div>
                  </div>

                  <div className="testimonial-two__single-text">
                    <p>{item.text}</p>
                  </div>

                  <div className="rating-box">
                    {[...Array(5)].map((_, i) => (
                      <i className="icon-star" key={i}></i>
                    ))}
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

export default TestimonialSection;

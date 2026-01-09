import React, { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';

// Import images
import testimonialPattern from '../../assets/images/pattern/testimonial-v1-pattern.png';
import testimonialShape from '../../assets/images/shapes/testimonial-v1-shape1.png';
import testimonialAuthor from '../../assets/images/testimonial/testimonial-v1-img1.png';
import testimonialMainImg from '/sm-home2.jpg';
import customer1 from '/sm-home3.png';
import customer2 from '/sm-home4.png';
import customer3 from '/sm-home1.png';
const TestimonialOne = () => {
  useEffect(() => {
    const slider = tns({
      container: '.testimonial-one__carousel',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      mouseDrag: true,
      gutter: 30,
      nav: false,
      controls: false,
      autoplayButtonOutput: false,
    });

    return () => {
      slider.destroy();
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ronald Richards",
      position: "MANAGER",
      text: "A logistic service provider company plays a pivotal role in the global supply chain A logistic service provider companyA logistic service provider company plays a pivotal role in the global supply chain A logistic service provider company",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CEO",
      text: "Excellent service! The logistics team handled our international shipments with great care and professionalism. Highly recommended for anyone needing reliable transportation services.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Operations Director",
      text: "Their attention to detail and customer service is outstanding. We've been working with them for years and they consistently deliver on time and with care.",
      rating: 5
    }
  ];

  const customers = [
    { id: 1, image: customer1 },
    { id: 2, image: customer2 },
    { id: 3, image: customer3 }
  ];

  return (
    <section className="testimonial-one">
      <div 
        className="testimonial-one__pattern"
        style={{ backgroundImage: `url(${testimonialPattern})` }}
      ></div>
      
      <div className="container">
        <div className="row">
          {/* Testimonial Content */}
          <div className="col-xl-6">
            <div className="testimonial-one__content">
              <div className="big-title">
                <h2>TESTIMONIALS</h2>
              </div>
              
              <div className="sec-title tg-heading-subheading animation-style2">
                <div className="sec-title__tagline">
                  <div className="line"></div>
                  <div className="text tg-element-title">
                    <h4>Client Testimonial</h4>
                  </div>
                  <div className="icon">
                    <span className="icon-plane2 float-bob-x3"></span>
                  </div>
                </div>
                <h2 className="sec-title__title tg-element-title">
                  What Our Customers <br />
                  Say About Us
                </h2>
              </div>

              <div className="testimonial-one__carousel">
                {testimonials.map((testimonial) => (
                  <div className="testimonial-one__single" key={testimonial.id}>
                    <div className="icon">
                      <span className="icon-quote1"></span>
                    </div>
                    <div className="testimonial-one__single-inner">
                      <div className="shape1">
                        <img src={testimonialShape} alt="Testimonial shape" />
                      </div>
                      <div className="author-box">
                        <div className="img-box">
                          <img src={testimonialAuthor} alt={testimonial.name} />
                        </div>
                        <div className="author-info">
                          <h2>{testimonial.name}</h2>
                          <div className="bottom-text">
                            <p>{testimonial.position}</p>
                            <div className="rating-box">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <i key={i} className="icon-star"></i>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-box">
                        <p>{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Images */}
          <div className="col-xl-6">
            <div className="testimonial-one__img">
              <div className="testimonial-one__img1">
                <img src={testimonialMainImg} alt="Happy customers" />
              </div>

              <div className="testimonial-one__img-author">
                <ul>
                  {customers.map((customer) => (
                    <li key={customer.id}>
                      <div className="img-box">
                        <img src={customer.image} alt={`Customer ${customer.id}`} />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-box">
                  <h2>Customer Satisfied</h2>
                  <p>4.8 (15k Reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
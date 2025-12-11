import React from 'react';
import PricingImg1 from '../../assets/images/resources/pricing-v1-img1.jpg';
import PricingImg2 from '../../assets/images/resources/pricing-v1-img2.jpg';
import PricingImg3 from '../../assets/images/resources/pricing-v1-img3.jpg';
import PricingBg from '../../assets/images/pattern/pricing-v1-pattern.png';
import { Link } from 'react-router-dom';

const pricingData = [
  {
    id: 1,
    title: 'Road Cargo',
    price: '$99',
    unit: '/50kg',
    image: PricingImg1,
    animation: 'fadeInUp',
    features: [
      'Pickup and delivery',
      'Custom coverage',
      'Customer Management',
      'Deliver in 2-3 days',
      '24 Hours Support',
    ],
  },
  {
    id: 2,
    title: 'Sea Freight',
    price: '$199',
    unit: '/50kg',
    image: PricingImg2,
    animation: 'fadeInDown',
    features: [
      'Pickup and delivery',
      'Custom coverage',
      'Customer Management',
      'Deliver in 2-3 days',
      '24 Hours Support',
    ],
  },
  {
    id: 3,
    title: 'Ship Cargo',
    price: '$250',
    unit: '/100kg',
    image: PricingImg3,
    animation: 'fadeInUp',
    features: [
      'Pickup and delivery',
      'Custom coverage',
      'Customer Management',
      'Deliver in 2-3 days',
      '24 Hours Support',
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-one pricing-one--pricing">
      <div
        className="pricing-one__pattern"
        style={{ backgroundImage: `url(${PricingBg})` }}
      ></div>
      <div className="container">
        <div className="row">
          {pricingData.map((plan, index) => (
            <div
              key={plan.id}
              className={`col-xl-4 col-lg-4 wow ${plan.animation}`}
              data-wow-delay=".3s"
            >
              <div className="pricing-one__single">
                <div className="pricing-one__single-inner">
                  <div className="table-header">
                    <div className="img-box">
                      <img src={plan.image} alt={plan.title} />
                    </div>
                    <div className="title-box">
                      <h2>{plan.title}</h2>
                      <h3>
                        {plan.price} <span>{plan.unit}</span>
                      </h3>
                    </div>
                  </div>

                  <div className="table-content">
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <div className="icon">
                            <span className="fa fa-check-circle"></span>
                          </div>
                          <div className="text-box">
                            <p>{feature}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="table-footer">
                    <div className="btn-box">
                      <Link className="thm-btn" to="#">
                        Choose Plan
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

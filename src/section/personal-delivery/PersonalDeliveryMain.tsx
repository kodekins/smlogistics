import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import serviceSidebarImg from '../../assets/images/resources/service-details-sidebar-img.png';
import serviceDetailsImg1 from '/overload.jpeg';
import serviceDetailsImg2 from '/smlogistics-2.jpg';
import serviceDetailsImg3 from '/smlogistics-5.jpg';
import serviceDetailsImg4 from '/flatbed-3.jpeg';

interface ServiceDetailsProps {
  serviceType?: string;
}

const ServiceDetails = ({ serviceType = 'interstate' }: ServiceDetailsProps) => {
  
  const serviceContent = {
    interstate: {
      title: 'Interstate Transport',
      subtitle: 'Efficient trucking services across states',
      description: 'Our interstate transport service provides reliable long-distance freight solutions connecting businesses across state lines throughout the United States. We specialize in coordinating seamless cross-state shipments with experienced carriers who understand regional regulations and routing.',
      whyChoose: 'Star MS Logistics interstate transport connects major commercial hubs across America with efficient, compliant freight services. Our network of vetted interstate carriers ensures your shipments move smoothly across state borders while adhering to all DOT regulations.'
    },
    oversized: {
      title: 'Oversize/Overweight Transport',
      subtitle: 'Specialized hauling for oversized loads',
      description: 'Our oversize/overweight transport service handles freight that exceeds standard legal dimensions or weight limits. We manage all permitting, route planning, pilot car coordination, and compliance requirements for your oversized loads.',
      whyChoose: 'Star MS Logistics specializes in complex oversized load logistics with experienced specialists who handle permit procurement, route surveys, and escort coordination. We ensure your oversize freight moves legally and safely with full compliance to state and federal regulations.'
    }
  };
  
  const content = serviceContent[serviceType as keyof typeof serviceContent] || serviceContent.interstate;

  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-4">
            <div className="service-details__sidebar">
              {/* Services List */}
              <div className="service-details__sidebar-single">
                <div className="title-box">
                  <h2>Our Service</h2>
                </div>
                <div className="service-details__sidebar-single-service">
                  <ul className="clearfix">
                    <li><Link to="/track-transport">LTL (Less Than Truckload) <span className="icon-right-arrow21"></span></Link></li>
                    <li><Link to="/international-transport">FTL (Full Truckload) <span className="icon-right-arrow21"></span></Link></li>
                    <li><Link className="active" to="#">Interstate Transport <span className="icon-right-arrow21"></span></Link></li>
                    <li><Link to="/warehouse-facility">Intrastate Transport <span className="icon-right-arrow21"></span></Link></li>
                    <li><Link to="/ocean-transport">Reefer Transport <span className="icon-right-arrow21"></span></Link></li>
                    <li><Link to="/emergency-transport">Air-Conditioned Transport <span className="icon-right-arrow21"></span></Link></li>
                  </ul>
                </div>
              </div>

              {/* Download Section */}
              <div className="service-details__sidebar-single">
                <div className="title-box">
                  <h2>Download</h2>
                </div>
                <div className="service-details__sidebar-single-download">
                  <ul className="clearfix">
                    {[1, 2, 3].map((item, idx) => (
                      <li key={idx}>
                        <div className="content-box">
                          <div className="icon"><span className="icon-pdf"></span></div>
                          <div className="text-box">
                            <h2><Link to="#">Pdf Download</Link></h2>
                            <p><Link to="#">Download</Link></p>
                          </div>
                        </div>
                        <div className="btn-box">
                          <Link to="#"><span className="icon-download"></span></Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Box */}
              <div className="service-details__sidebar-contact text-center">
                <div className="service-details__sidebar-contact-img">
                  <div className="inner">
                    <img src={serviceSidebarImg} alt="Contact" />
                  </div>
                </div>
                <div className="service-details__sidebar-contact-content">
                  <div className="icon"><span className="icon-phone"></span></div>
                  <h2><Link to="tel:+923313435042">+92 331 343 5042</Link></h2>
                  <h3>If You Need Any Help <br /> Contact With Us</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-xl-8">
            <div className="service-details__content">
              {/* Top Image */}
              <div className="service-details__content-img1">
                <div className="inner">
                  <img src={serviceDetailsImg1} alt="International Transport" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              {/* Main Content */}
              <div className="service-details__content-text1">
                <h2>{content.title}</h2>
                <p>
                  {content.subtitle}. {content.description}
                </p>
              </div>

              <div className="service-details__content-text2">
                <h2>Why Choose Our {content.title} Service</h2>
                <p>
                  {content.whyChoose}
                </p>
              </div>

              {/* 2 Images */}
              <div className="service-details__content-img2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={serviceDetailsImg2} alt="Service Detail" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={serviceDetailsImg3} alt="Service Detail" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>
                </div>
                <p>
                  This business idea leverages the growing demand for virtual experiences and the need
                  for professional support in navigating the virtual event landscape.
                </p>
              </div>

              {/* Bottom Image */}
              <div className="service-details__content-img3">
                <img src={serviceDetailsImg4} alt="Logistics" style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;

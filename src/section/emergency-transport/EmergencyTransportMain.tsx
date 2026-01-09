// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import serviceSidebarImg from '/sm-contact.png';
import serviceDetailsImg1 from '/sm-flatbed1.jpg';
import serviceDetailsImg2 from '/sm-flatbed2.jpg';
import serviceDetailsImg3 from '/sm-flatbed3.jpg';
import serviceDetailsImg4 from '/sm-flatbed4.jpg';

interface ServiceDetailsProps {
  serviceType?: string;
}

const ServiceDetails = ({ serviceType = 'flatbed' }: ServiceDetailsProps) => {
  // const [activeIndex, setActiveIndex] = useState(0); // First item open by default
  
  const serviceContent = {
    flatbed: {
      title: 'Flatbed Transport',
      subtitle: 'Specialized solution for oversized and overweight freight',
      description: 'Flatbed transport is the preferred solution for moving oversized, overweight, and irregularly shaped freight that cannot be accommodated in enclosed trailers. With open-deck trailers and flexible loading options, flatbeds allow cargo to be loaded from the top, sides, or rear, making them ideal for heavy and non-standard shipments.',
      mainContent: 'Flatbed services are commonly used for transporting construction materials, machinery, steel, lumber, pipes, and large equipment. For oversized or overweight freight, flatbeds provide the structural strength and accessibility required to secure loads that exceed standard trailer dimensions or weight limits.',
      additionalContent: 'At Star MS Logistics, we operate as a licensed freight broker, specializing in coordinating flatbed and heavy-haul shipments through a trusted network of experienced carriers. We ensure that oversized and overweight loads are matched with the right equipment and carriers who understand securement requirements, route planning, and regulatory compliance.',
      closingStatement: 'Oversized and overweight shipments often require special handling, including proper load securement, route coordination, and adherence to state-specific transportation regulations. As a freight broker, Star MS Logistics manages this complexity on your behalf—connecting your freight with qualified flatbed carriers and ensuring shipments move safely, efficiently, and in compliance with applicable regulations.',
      whyChooseTitle: 'Why Choose Our Flatbed Services?',
      benefits: [
        'Ideal for oversized and overweight freight',
        'Open-deck trailers for flexible loading and unloading',
        'Access to experienced flatbed and heavy-haul carriers',
        'Proper coordination for securement and routing',
        'Compliance-focused brokerage support for complex shipments'
      ],
      whyChoose: 'Whether you\'re moving heavy equipment, industrial materials, or oversized cargo, Star MS Logistics provides reliable flatbed freight solutions backed by professional carrier coordination and industry expertise—ensuring your freight is delivered safely and on time.'
    }
  };
  
  const content = serviceContent[serviceType as keyof typeof serviceContent] || serviceContent.flatbed;


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
                    <li><Link to="/personal-delivery">Interstate Transport <span className="icon-right-arrow21"></span></Link></li>
                    <li><Link to="/ocean-transport">Reefer Transport <span className="icon-right-arrow21"></span></Link></li>
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
                    {[1, 2, 3].map((_item, idx) => (
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
                  <img 
                    src={serviceDetailsImg1} 
                    alt="International Transport"
                    style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="service-details__content-text1">
                <h2>{content.title}</h2>
                <p>
                  {content.description}
                </p>
                {content.mainContent && (
                  <p style={{ marginTop: '15px' }}>
                    {content.mainContent}
                  </p>
                )}
                {content.additionalContent && (
                  <p style={{ marginTop: '15px' }}>
                    {content.additionalContent}
                  </p>
                )}
                {content.closingStatement && (
                  <p style={{ marginTop: '15px' }}>
                    {content.closingStatement}
                  </p>
                )}
              </div>

              <div className="service-details__content-text2">
                <h2>{content.whyChooseTitle || `Why Choose Our ${content.title} Service`}</h2>
                {content.benefits && (
                  <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
                    {content.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>{benefit}</li>
                    ))}
                  </ul>
                )}
                <p>
                  {content.whyChoose}
                </p>
              </div>

              {/* 2 Images */}
              <div className="service-details__content-img2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img 
                        src={serviceDetailsImg2} 
                        alt="Service Detail"
                        style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img 
                        src={serviceDetailsImg3} 
                        alt="Service Detail"
                        style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="service-details__content-img3">
                <img 
                  src={serviceDetailsImg4} 
                  alt="Logistics"
                  style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;

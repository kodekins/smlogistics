import { Link } from 'react-router-dom';
import serviceSidebarImg from '/sm-contact.png';
import serviceDetailsImg1 from '/sm-interstate1.jpg';
import serviceDetailsImg2 from '/sm-interstate2.png';
import serviceDetailsImg3 from '/sm-interstate3.jpg';
import serviceDetailsImg4 from '/sm-interstate4.jpg';

interface ServiceDetailsProps {
  serviceType?: string;
}

const ServiceDetails = ({ serviceType = 'interstate' }: ServiceDetailsProps) => {
  
  const serviceContent = {
    interstate: {
      title: 'Interstate Transport',
      subtitle: 'Long-distance freight solutions across state lines',
      description: 'At Star MS Logistics, we provide long-distance freight solutions connecting businesses across state lines throughout the United States. We specialize in coordinating seamless cross-state shipments with experienced carriers who understand regional regulations, routing requirements, and interstate compliance standards.',
      mainContent: 'Our interstate transport services are backed by full federal authorization. Star MS Logistics is licensed by the FMCSA and registered with USDOT, allowing us to legally and confidently manage interstate freight movements across multiple U.S. states while meeting all federal safety and operational requirements.',
      additionalContent: 'Star MS Logistics interstate transport connects major commercial hubs across America with efficient and compliant freight services. Through our network of vetted interstate carriers, we ensure your shipments move smoothly across state borders while strictly adhering to all DOT regulations.',
      closingStatement: 'Whether you require regional state-to-state transportation or long-haul, cross-country freight solutions, our team focuses on reliability, proper coordination, and timely delivery. From route planning to carrier management, we handle every aspect of interstate transportation with precision and professionalism.',
      whyChooseTitle: 'Why Choose Our Interstate Transport Service?',
      benefits: [
        'Fully licensed and authorized by FMCSA & USDOT',
        'Reliable long-distance and cross-state freight solutions',
        'Access to experienced and vetted interstate carriers',
        'Compliance with all federal and state DOT regulations',
        'Efficient routing and on-time delivery performance'
      ],
      whyChoose: 'Our interstate transport solutions are designed for businesses that need dependable freight movement beyond local and regional boundaries. With Star MS Logistics, your cargo is managed by a licensed, compliance-focused team committed to keeping your supply chain moving efficiently across the United States.'
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
                  <img src={serviceDetailsImg1} alt="International Transport" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
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
                      <img src={serviceDetailsImg2} alt="Service Detail" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={serviceDetailsImg3} alt="Service Detail" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>
                </div>
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

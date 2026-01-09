
import { Link } from 'react-router-dom';
import serviceSidebarImg from '/sm-contact.png';
import serviceDetailsImg1 from '/sm-dry van1.png';
import serviceDetailsImg2 from '/sm-dry van2.jpg';
import serviceDetailsImg3 from '/sm-dry van3.jpg';
import serviceDetailsImg4 from '/flatbed-4.jpeg';

interface ServiceDetailsProps {
  serviceType?: string;
}

const ServiceDetails = ({ serviceType = 'ftl' }: ServiceDetailsProps) => {
  
  const serviceContent = {
    ftl: {
      title: 'FTL (Full Truckload)',
      subtitle: 'Dedicated trucks for large shipments',
      description: 'Our FTL service provides you with exclusive use of an entire trailer for your freight, ensuring direct routes, faster transit times, and priority handling for your large-volume shipments across the United States.',
      mainContent: 'Full Truckload shipping with Star MS Logistics means your cargo travels directly from pickup to delivery without stops or transfers, reducing handling and transit time.',
      additionalContent: '',
      whyChooseTitle: 'Why Choose Our FTL (Full Truckload) Service?',
      benefits: [
        'Exclusive use of entire trailer for your freight',
        'Direct routes with no stops or transfers',
        'Faster transit times for urgent shipments',
        'Priority handling for large-volume loads',
        'Ideal for time-sensitive deliveries'
      ],
      whyChoose: 'Ideal for high-volume shipments, time-sensitive deliveries, or freight requiring special handling with dedicated transport solutions.'
    },
    dryvan: {
      title: 'Dry Van Transport',
      subtitle: 'Reliable freight solutions for non-temperature-sensitive cargo',
      description: 'Dry Van transport is one of the most common and reliable freight solutions in the United States, ideal for shipping goods that do not require temperature control. Dry vans are fully enclosed trailers designed to protect cargo from weather, road debris, and external damage during transit.',
      mainContent: 'At Star MS Logistics, we provide dependable Dry Van freight services for both regional and long-haul shipments. Our extensive carrier network allows us to move a wide range of commodities efficiently while ensuring safe handling, proper loading, and on-time delivery.',
      additionalContent: 'Dry Van shipping is a cost-effective solution for palletized, boxed, or packaged goods and is widely used across multiple industries. Whether you need full truckload or partial capacity, our Dry Van services are tailored to meet your transportation needs with consistency and reliability.',
      whyChooseTitle: 'Why Choose Our Dry Van Services?',
      benefits: [
        'Secure, enclosed trailers for cargo protection',
        'Cost-effective solution for non-temperature-sensitive freight',
        'Suitable for regional and interstate shipments',
        'Access to experienced and vetted carriers',
        'Reliable transit times and professional coordination'
      ],
      whyChoose: 'From consumer goods to industrial products, Star MS Logistics ensures your Dry Van shipments move smoothly through a trusted, compliance-focused transportation process.'
    }
  };
  
  const content = serviceContent[serviceType as keyof typeof serviceContent] || serviceContent.ftl;

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
                    <li><Link className="active" to="#">FTL (Full Truckload) <span className="icon-right-arrow21"></span></Link></li>
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

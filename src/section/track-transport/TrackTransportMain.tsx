
import { Link } from 'react-router-dom';
import serviceSidebarImg from '/sm-contact.png';
import serviceDetailsImg1 from '/sm-ltl1.jpg';
import serviceDetailsImg2 from '/sm-ltl3.jpg';
import serviceDetailsImg3 from '/sm-ltl4.jpg';
import serviceDetailsImg4 from '/sm-ltl5.jpg';

interface ServiceDetailsProps {
  serviceType?: string;
}

const ServiceDetails = ({ serviceType = 'ltl' }: ServiceDetailsProps) => {
  
  const serviceContent = {
    ltl: {
      title: 'LTL (Less Than Truckload)',
      subtitle: 'Cost-effective option for smaller shipments',
      description: 'LTL (Less Than Truckload) is a cost-effective option for smaller shipments that do not require a full truck. Our LTL service allows you to share trailer space with other shipments, so you only pay for the space you need. This makes it an ideal solution for businesses looking to optimize shipping costs while maintaining reliable delivery schedules.',
      mainContent: 'At Star MS Logistics, our LTL services give you the flexibility to move smaller freight volumes without the expense of booking an entire truck. Through our extensive carrier network, your cargo is consolidated efficiently, handled with care, and delivered on time across regional and interstate routes.',
      whyChooseTitle: 'Why Choose Our LTL (Less Than Truckload) Service?',
      benefits: [
        'Cost-effective shipping for smaller freight volumes',
        'Access to a reliable and extensive carrier network',
        'Efficient consolidation and secure handling',
        'Flexible pickup and delivery options',
        'Consistent, on-time deliveries'
      ],
      whyChoose: 'Whether you\'re shipping pallets, cartons, or partial loads, our LTL solutions are designed to keep your supply chain moving smoothly while helping you control logistics costs.'
    },
    dumptruck: {
      title: 'Dump Truck Services',
      subtitle: 'Bulk material transport and delivery',
      description: 'Our dump truck services specialize in transporting and delivering bulk materials including gravel, sand, dirt, demolition debris, and construction materials. Perfect for construction sites, landscaping projects, and material supply operations.',
      mainContent: 'Star MS Logistics dump truck fleet provides reliable bulk material transport with experienced operators who understand proper loading, safe transport, and precise placement at delivery sites.',
      whyChooseTitle: 'Why Choose Our Dump Truck Services?',
      benefits: [
        'Specialized equipment for various material types',
        'Experienced operators',
        'Safe transport and precise placement',
        'Reliable service for construction and landscaping projects'
      ],
      whyChoose: 'We handle various material types with appropriate equipment for your specific needs, ensuring efficient delivery to your construction sites, landscaping projects, or material supply operations.'
    }
  };
  
  const content = serviceContent[serviceType as keyof typeof serviceContent] || serviceContent.ltl;

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
                    <li><Link className="active" to="#">LTL (Less Than Truckload) <span className="icon-right-arrow21"></span></Link></li>
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
                  <img src={serviceDetailsImg1} alt="International Transport" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              {/* Main Content */}
              <div className="service-details__content-text1">
                <h2>{content.title}</h2>
                <p>
                  {content.description}
                </p>
                <p style={{ marginTop: '15px' }}>
                  {content.mainContent}
                </p>
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

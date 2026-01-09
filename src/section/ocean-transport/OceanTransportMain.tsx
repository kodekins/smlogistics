
import { Link } from 'react-router-dom';
import serviceSidebarImg from '/sm-contact.png';
import serviceDetailsImg1 from '/reefer-1.jpeg';
import serviceDetailsImg2 from '/reefer-2.jpeg';
import serviceDetailsImg3 from '/reefer-3.jpeg';
import serviceDetailsImg4 from '/reefer-4.jpeg';

interface ServiceDetailsProps {
  serviceType?: string;
}

const ServiceDetails = ({ serviceType = 'reefer' }: ServiceDetailsProps) => {
  
  const serviceContent = {
    reefer: {
      title: 'Reefer Transport',
      subtitle: 'Temperature-controlled shipments for perishables',
      description: 'Our refrigerated transport service provides climate-controlled delivery for temperature-sensitive goods including food, pharmaceuticals, and other perishable items that require precise temperature management throughout transit.',
      whyChoose: 'Star MS Logistics refrigerated transport ensures your perishable goods maintain optimal temperature from origin to destination. Our reefer carriers are equipped with advanced temperature monitoring systems, providing real-time alerts and maintaining strict cold chain integrity.'
    },
    container: {
      title: 'Container Drayage',
      subtitle: 'Efficient port-to-warehouse container transport',
      description: 'Our container drayage service provides seamless transportation of shipping containers between ports, rail yards, and warehouses. We specialize in intermodal freight solutions, ensuring your containers move efficiently through the supply chain.',
      whyChoose: 'Star MS Logistics container drayage offers reliable port pickup and delivery services with experienced drivers who understand port protocols and timing requirements. We handle both import and export containers, providing real-time tracking and efficient coordination.'
    }
  };
  
  const content = serviceContent[serviceType as keyof typeof serviceContent] || serviceContent.reefer;

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
                    <li><Link className="active" to="#">Reefer Transport <span className="icon-right-arrow21"></span></Link></li>
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
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
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
                      <img 
                        src={serviceDetailsImg2} 
                        alt="Service Detail"
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img 
                        src={serviceDetailsImg3} 
                        alt="Service Detail"
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
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
                <img 
                  src={serviceDetailsImg4} 
                  alt="Logistics"
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
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

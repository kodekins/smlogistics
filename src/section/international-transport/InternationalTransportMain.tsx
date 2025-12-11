
import { Link } from 'react-router-dom';
import serviceSidebarImg from '../../assets/images/resources/service-details-sidebar-img.png';
import serviceDetailsImg1 from '../../assets/images/services/service-details-img5.jpg';
import serviceDetailsImg2 from '../../assets/images/services/service-details-img2.jpg';
import serviceDetailsImg3 from '../../assets/images/services/service-details-img3.jpg';
import serviceDetailsImg4 from '../../assets/images/services/service-details-img4.jpg';
import ServiceFaq from '../../components/elements/ServiceFaq';
const faqQuestion = [
  {
    title: 'Is my technology allowed on tech?',
    text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
  },
  {
    title: 'What types of cargo can your service handle?',
    text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
  },
  {
    title: 'What are the typical stages of a logistic project?',
    text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
  },
  {
    title: 'Is my technology allowed on tech?',
    text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
  },
  {
    title: 'Can you assist with customs clearance procedures?',
    text: `As a premier international transport service provider, we specialize in
            seamlessly connecting businesses and individuals with efficient and
            reliable transportation solutions across borders.`
  }
];
const ServiceDetails = () => {
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
                  <img src={serviceDetailsImg1} alt="International Transport" />
                </div>
              </div>

              {/* Main Content */}
              <div className="service-details__content-text1">
                <h2>FTL (Full Truckload)</h2>
                <p>
                  Dedicated trucks for large shipments. Our FTL service provides you with exclusive use 
                  of an entire trailer for your freight, ensuring direct routes, faster transit times, 
                  and priority handling for your large-volume shipments across the United States.
                </p>
              </div>

              <div className="service-details__content-text2">
                <h2>Why Choose Our FTL Service</h2>
                <p>
                  Full Truckload shipping with Star MS Logistics means your cargo travels directly from 
                  pickup to delivery without stops or transfers, reducing handling and transit time. 
                  Ideal for high-volume shipments, time-sensitive deliveries, or freight requiring 
                  special handling. We partner with vetted carriers to ensure your full loads are 
                  transported safely, securely, and on schedule every time.
                </p>
              </div>

              {/* 2 Images */}
              <div className="service-details__content-img2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={serviceDetailsImg2} alt="Service Detail" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-img">
                      <img src={serviceDetailsImg3} alt="Service Detail" />
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
                <img src={serviceDetailsImg4} alt="Logistics" />
              </div>

              {/* FAQ Accordion */}
              <ServiceFaq faqQuestions={faqQuestion} />

            </div>
          </div>
        </div>
      </div>
    </section>



  );
};

export default ServiceDetails;

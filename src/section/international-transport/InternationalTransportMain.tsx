
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import serviceDetailsImg1 from '/sm-dry van1.png';
import serviceDetailsImg2 from '/sm-flatbed1.jpg';
import serviceDetailsImg3 from '/sm-flatbed2.jpg';
import serviceDetailsImg4 from '/flatbed-4.jpeg';

// Import commodity and section images
import containerDrayageImg from '/smlogistics-2.jpg';
import dryVanImg from '/sm-dry van2.jpg';
import flatbedImg from '/flatbed-2.jpeg';
import foodAgriImg from '/ms-toc3.jpeg';
import industrialImg from '/ms-toc2.jpeg';
import constructionImg from '/ms-toc4.jpeg';
import vehiclesImg from '/ms-toc1.jpeg';
import oversizedImg from '/ms-toc4.jpeg';
import chemicalsImg from '/ms-toc3.jpeg';
import bulkImg from '/ms-toc2.jpeg';

interface ServiceDetailsProps {
  serviceType?: string;
}

interface CommodityItem {
  name: string;
  items: string[];
  note?: string;
  image?: string;
}

interface ServiceSection {
  title: string;
  description: string;
  benefits?: string[];
  commodities?: CommodityItem[];
  image?: string;
}

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  mainContent: string;
  additionalContent: string;
  whyChooseTitle: string;
  benefits: string[];
  whyChoose: string;
  sections?: ServiceSection[];
}

const ServiceDetails = ({ serviceType = 'ftl' }: ServiceDetailsProps) => {
  
  const serviceContent: { [key: string]: ServiceContent } = {
    ftl: {
      title: 'FTL (Full Truckload)',
      subtitle: 'Dedicated trucks for large shipments',
      description: 'Our FTL service provides you with exclusive use of an entire trailer for your freight, ensuring direct routes, faster transit times, and priority handling for your large-volume shipments across the United States.',
      mainContent: 'Full Truckload shipping with Star MS Logistics means your cargo travels directly from pickup to delivery without stops or transfers, reducing handling and transit time. We offer multiple trailer types including Dry Van, Flatbed, and Container Drayage to meet your specific shipping needs.',
      additionalContent: 'Whether you need standard enclosed trailers, open flatbeds for oversized loads, or efficient port-to-warehouse container transport, our FTL solutions provide dedicated capacity with priority handling for your time-sensitive and high-volume shipments.',
      whyChooseTitle: 'Why Choose Our FTL (Full Truckload) Service?',
      benefits: [
        'Exclusive use of entire trailer for your freight',
        'Direct routes with no stops or transfers',
        'Faster transit times for urgent shipments',
        'Priority handling for large-volume loads',
        'Multiple trailer options: Dry Van, Flatbed, Container Drayage',
        'Ideal for time-sensitive deliveries'
      ],
      whyChoose: 'Ideal for high-volume shipments, time-sensitive deliveries, or freight requiring special handling with dedicated transport solutions.',
      sections: [
        {
          title: 'Container Drayage',
          description: 'Efficient transport of shipping containers from ports to warehouses, distribution centers, or rail yards. Our container drayage services ensure seamless intermodal connectivity and reliable first-mile/last-mile solutions for your imported or exported cargo.',
          image: containerDrayageImg,
          benefits: [
            'Port-to-warehouse container transport',
            'Intermodal rail connectivity',
            'First-mile and last-mile delivery',
            'Experienced with 20ft, 40ft, and 45ft containers',
            'Coordination with customs and port operations'
          ]
        },
        {
          title: 'Dry Van Transport',
          description: 'Standard enclosed trailers ideal for protecting non-temperature-sensitive cargo from weather elements. Dry Van transport is the most common freight solution, suitable for palletized goods, boxed products, and general merchandise.',
          image: dryVanImg,
          benefits: [
            'Secure, enclosed trailers for cargo protection',
            'Cost-effective solution for general freight',
            'Suitable for regional and interstate shipments',
            'Standard 53ft trailers with full load capacity',
            'Versatile for various commodity types'
          ]
        },
        {
          title: 'Flatbed Transport',
          description: 'Open trailers designed for oversized, heavy, or irregularly shaped cargo that requires easy top or side loading. Flatbed services are essential for construction materials, machinery, steel products, and other specialized freight.',
          image: flatbedImg,
          benefits: [
            'Open trailers for easy loading from top or sides',
            'Ideal for oversized and heavy cargo',
            'Suitable for construction materials and machinery',
            'Step-deck and double-drop options available',
            'Experienced with securing and tarping cargo'
          ]
        },
        {
          title: 'Commodities We Handle in FTL',
          description: 'Our Full Truckload services accommodate a wide range of commodities requiring dedicated trailer space:',
          commodities: [
            {
              name: 'Food & Agricultural Products',
              image: foodAgriImg,
              items: [
                'Fresh fruits & vegetables',
                'Meat, poultry & seafood (reefer)',
                'Dairy products',
                'Frozen foods',
                'Packaged and processed food',
                'Grains and agricultural produce'
              ]
            },
            {
              name: 'Industrial & Commercial Freight',
              image: industrialImg,
              items: [
                'Machinery & equipment',
                'Industrial parts & spares',
                'Manufacturing materials',
                'Tools & commercial supplies',
                'Raw and semi-finished goods'
              ]
            },
            {
              name: 'Construction & Building Materials',
              image: constructionImg,
              items: [
                'Steel & metal products',
                'Cement, tiles & stone',
                'Lumber & plywood',
                'Pipes, fittings & roofing materials',
                'Insulation and construction supplies'
              ]
            },
            {
              name: 'Vehicles & Heavy Equipment',
              image: vehiclesImg,
              items: [
                'New & used automobiles',
                'Motorcycles',
                'Construction machinery',
                'Farm equipment',
                'Forklifts, generators & heavy units'
              ]
            },
            {
              name: 'Oversized & Overweight Cargo',
              image: oversizedImg,
              items: [
                'Oilfield equipment',
                'Industrial structures',
                'Large steel components',
                'Project cargo & special loads'
              ],
              note: '(Permits, routing and compliance handled through specialized carriers)'
            },
            {
              name: 'Chemicals & Special Freight',
              image: chemicalsImg,
              items: [
                'Non-hazardous chemicals',
                'Industrial liquids',
                'Cleaning agents',
                'Manufacturing chemicals',
                'Regulated cargo (through approved carriers only)'
              ]
            },
            {
              name: 'Bulk & Recyclable Materials',
              image: bulkImg,
              items: [
                'Scrap metal',
                'Plastic',
                'Paper rolls',
                'Bulk raw materials'
              ]
            }
          ]
        }
      ]
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
          <div className="col-xl-4 order-2 order-xl-1">
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

              {/* Contact Box - Redesigned as a Professional Card */}
              <div 
                className="service-details__sidebar-contact" 
                style={{ 
                  backgroundColor: '#1a1a1a', 
                  borderRadius: '20px', 
                  padding: '40px 30px', 
                  position: 'relative', 
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  marginTop: '40px'
                }}
              >
                {/* Background Pattern/Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  borderRadius: '50%',
                  zIndex: '0'
                }}></div>

                <div style={{ position: 'relative', zIndex: '1' }}>
                  <div 
                    className="icon" 
                    style={{ 
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: '#ff6b35', 
                      borderRadius: '15px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 10px 20px rgba(255, 107, 53, 0.3)'
                    }}
                  >
                    <span className="icon-phone" style={{ fontSize: '30px', color: '#fff' }}></span>
                  </div>
                  
                  <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', lineHeight: '1.4', marginBottom: '15px' }}>
                    Need Expert Logistics Advice?
                  </h3>
                  
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                    Our dedicated team is ready to help you with your shipping needs 24/7.
                  </p>
                  
                  <div style={{ marginBottom: '30px' }}>
                    <p style={{ color: '#ff6b35', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>
                      Call us anytime
                    </p>
                    <h2>
                      <Link 
                        to="tel:+18477891170" 
                        style={{ color: '#fff', fontSize: '26px', fontWeight: '800', textDecoration: 'none' }}
                      >
                        847-789-1170
                      </Link>
                    </h2>
                </div>
                  
                  <Link 
                    to="/contact" 
                    className="thm-btn"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '15px',
                      backgroundColor: '#fff',
                      color: '#1a1a1a',
                      borderRadius: '10px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-xl-8 order-1 order-xl-2">
            <div className="service-details__content">
              {/* Top Image */}
              <div className="service-details__content-img1">
                <div className="inner">
                  <img src={serviceDetailsImg1} alt="International Transport" style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              {/* Main Content */}
              <div className="service-details__content-text1" style={{ textAlign: 'left', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a' }}>{content.title}</h2>
                <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#444' }}>
                  {content.description}
                </p>
                {content.mainContent && (
                  <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.7', color: '#666' }}>
                    {content.mainContent}
                  </p>
                )}
                {content.additionalContent && (
                  <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.7', color: '#666' }}>
                    {content.additionalContent}
                  </p>
                )}
              </div>

              <div className="service-details__content-text2" style={{ backgroundColor: '#fdf2ee', padding: '40px', borderRadius: '12px', marginBottom: '50px', borderLeft: '5px solid #ff6b35' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px', color: '#1a1a1a' }}>{content.whyChooseTitle || `Why Choose Our ${content.title} Service`}</h2>
                {content.benefits && (
                  <ul className="list-unstyled" style={{ marginBottom: '25px' }}>
                    {content.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontSize: '16px', color: '#333' }}>
                        <span className="icon-right-arrow21" style={{ color: '#ff6b35', fontSize: '14px', marginTop: '6px', marginRight: '12px' }}></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
                <p style={{ fontSize: '16px', fontStyle: 'italic', color: '#555' }}>
                  {content.whyChoose}
                </p>
              </div>

              {/* Additional Sections for FTL */}
              <div className="ftl-special-sections">
                {content.sections && content.sections.map((section: any, idx: number) => (
                  <div key={idx} style={{ marginBottom: '50px' }}>
                    {!section.commodities ? (
                      // Service sections with alternating layout
                      <div 
                        className="row align-items-center" 
                        style={{ 
                          backgroundColor: idx % 2 === 0 ? '#fcfcfc' : '#ffffff',
                          padding: '30px 15px',
                          borderRadius: '15px',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                          border: '1px solid #eee',
                          margin: '0 5px 20px 5px'
                        }}
                      >
                        {/* Image Column */}
                        <div className={`col-xl-6 col-lg-6 ${idx % 2 === 0 ? 'order-1' : 'order-2'}`}>
                          {section.image && (
                            <div style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '20px' }}>
                              <img 
                                src={section.image} 
                                alt={section.title}
                                style={{
                                  width: '100%',
                                  height: '280px', // Slightly smaller for mobile, desktop will override if needed but Bootstrap grid handles it
                                  objectFit: 'cover',
                                  display: 'block',
                                  transition: 'transform 0.5s ease'
                                }}
                                className="service-section-img"
                              />
                            </div>
                          )}
                        </div>
                        
                        {/* Content Column */}
                        <div className={`col-xl-6 col-lg-6 ${idx % 2 === 0 ? 'order-2' : 'order-1'}`}>
                          <div className="service-section-content" style={{ padding: '10px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a' }}>
                              {section.title}
                            </h2>
                            <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#555', marginBottom: '20px' }}>
                              {section.description}
                            </p>
                            {section.benefits && (
                              <ul className="list-unstyled">
                                {section.benefits.map((benefit: string, i: number) => (
                                  <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'flex-start', fontSize: '14px', color: '#444' }}>
                                    <span className="icon-right-arrow21" style={{ color: '#ff6b35', fontSize: '11px', marginTop: '5px', marginRight: '10px' }}></span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                      ) : (
                      // Commodities section
                      <div style={{ marginTop: '60px' }}>
                        <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
                            {section.title}
                          </h2>
                          <div style={{ width: '80px', height: '4px', backgroundColor: '#ff6b35', margin: '0 auto 25px' }}></div>
                          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
                            {section.description}
                          </p>
                        </div>
                        
                        {/* Commodities Section with Slider (Both Desktop & Mobile) */}
                        <div style={{ marginTop: '40px' }}>
                          <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation={true}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                              768: {
                                slidesPerView: 2,
                              },
                              1200: {
                                slidesPerView: 2,
                              }
                            }}
                            style={{ padding: '10px 10px 60px 10px' }}
                          >
                            {section.commodities.map((commodity: any, i: number) => (
                              <SwiperSlide key={i}>
                                <div 
                                  style={{ 
                                    backgroundColor: '#ffffff',
                                    padding: '30px',
                                    borderRadius: '20px',
                                    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                    border: '1px solid #f0f0f0',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                  {commodity.image && (
                                    <div style={{ overflow: 'hidden', borderRadius: '15px', marginBottom: '25px', position: 'relative' }}>
                                      <img 
                                        src={commodity.image} 
                                        alt={commodity.name}
                                        style={{
                                          width: '100%',
                                          height: '260px',
                                          objectFit: 'cover',
                                          display: 'block'
                                        }}
                                      />
                                      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)' }}></div>
                                    </div>
                                  )}
                                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ width: '25px', height: '2px', backgroundColor: '#ff6b35', marginRight: '15px' }}></span>
                                    {commodity.name}
                                  </h3>
                                  <ul className="list-unstyled" style={{ flex: '1' }}>
                                    {commodity.items.map((item: string, j: number) => (
                                      <li key={j} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start', fontSize: '15px', color: '#444' }}>
                                        <span className="icon-right-arrow21" style={{ color: '#ff6b35', fontSize: '12px', marginTop: '6px', marginRight: '12px' }}></span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                  {commodity.note && (
                                    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff4f0', borderRadius: '10px', borderLeft: '4px solid #ff6b35' }}>
                                      <p style={{ fontStyle: 'italic', fontSize: '13px', marginBottom: '0', color: '#d35400', lineHeight: '1.5' }}>
                                        <strong>Note:</strong> {commodity.note}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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

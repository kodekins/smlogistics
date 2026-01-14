
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import serviceDetailsImg1 from '/sm-ltl1.jpg';
import serviceDetailsImg2 from '/sm-ltl3.jpg';
import serviceDetailsImg3 from '/sm-ltl4.jpg';
import serviceDetailsImg4 from '/sm-ltl5.jpg';

// Import commodity images for LTL
import apparelImg from '/ms-toc1.jpeg';
import homeGoodsImg from '/ms-toc3.jpeg';
import retailImg from '/ms-toc5.jpeg';
import ecommerceImg from '/ms-toc2.jpeg';
import householdImg from '/ms-toc4.jpeg';

interface ServiceDetailsProps {
  serviceType?: string;
}

interface CommodityItem {
  name: string;
  items: string[];
  image?: string;
}

interface ServiceSection {
  title: string;
  description: string;
  commodities?: CommodityItem[];
}

interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  mainContent: string;
  whyChooseTitle: string;
  benefits: string[];
  whyChoose: string;
  sections?: ServiceSection[];
}

const ServiceDetails = ({ serviceType = 'ltl' }: ServiceDetailsProps) => {
  
  const serviceContent: { [key: string]: ServiceContent } = {
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
      whyChoose: 'Whether you\'re shipping pallets, cartons, or partial loads, our LTL solutions are designed to keep your supply chain moving smoothly while helping you control logistics costs.',
      sections: [
        {
          title: 'Consumer & Retail Goods Commodities in LTL Service',
          description: 'Our LTL service is perfectly suited for moving consumer and retail goods across the United States. We handle everyday commercial products for retail and e-commerce supply chains efficiently and cost-effectively.',
          commodities: [
            {
              name: 'Apparel & Fashion Products',
              image: apparelImg,
              items: [
                'Clothing and garments',
                'Footwear and accessories',
                'Fashion merchandise',
                'Seasonal apparel'
              ]
            },
            {
              name: 'Home Goods & Furniture',
              image: homeGoodsImg,
              items: [
                'Home décor items',
                'Small furniture pieces',
                'Kitchen and dining products',
                'Bedding and linens'
              ]
            },
            {
              name: 'Retail Merchandise',
              image: retailImg,
              items: [
                'Packaged retail products',
                'Store inventory replenishment',
                'Display fixtures and POP materials',
                'Promotional items'
              ]
            },
            {
              name: 'E-commerce Fulfillment',
              image: ecommerceImg,
              items: [
                'Direct-to-consumer shipments',
                'Distribution center transfers',
                'Return merchandise handling',
                'Multi-channel retail support'
              ]
            },
            {
              name: 'Household & Lifestyle Products',
              image: householdImg,
              items: [
                'Personal care items',
                'Cleaning supplies',
                'Pet products',
                'Sporting goods and recreation items',
                'Toys and games'
              ]
            }
          ]
        }
      ]
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
          <div className="col-xl-4 order-2 order-xl-1">
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
                <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.7', color: '#666' }}>
                  {content.mainContent}
                </p>
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

              {/* Additional Sections for LTL */}
              <div className="ltl-special-sections">
                {content.sections && content.sections.map((section: any, idx: number) => (
                  <div key={idx} style={{ marginTop: '60px' }}>
                    <div className="sec-title text-center" style={{ marginBottom: '50px' }}>
                      <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
                        {section.title}
                      </h2>
                      <div style={{ width: '80px', height: '4px', backgroundColor: '#ff6b35', margin: '0 auto 25px' }}></div>
                      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
                        {section.description}
                      </p>
                    </div>
                    
                    {section.commodities && (
                    <div style={{ marginTop: '20px' }}>
                      {/* Commodities Section with Slider (Both Desktop & Mobile) */}
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
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
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

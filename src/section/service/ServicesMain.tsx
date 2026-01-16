import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import DumpTruckImg from '/dumptrucks-1.jpeg';
import TruckImg1 from '/sm-ltl1.jpg';
import TruckImg3 from '/sm-interstate1.jpg';
import TruckImg4 from '/reefer-2.jpeg';
import TruckImg6 from '/smlogistics-6.jpg';

const services = [
  {
    title: 'LTL (Less Than Truckload)',
    desc: 'Cost-effective option for smaller shipments. Share trailer space and pay only for what you need.',
    image: TruckImg1,
    iconClass: 'icon-delivery-man',
    link: '/track-transport',
  },
  {
    title: 'FTL (Full Truckload)',
    desc: 'Dedicated trucks for large shipments with direct routes and priority delivery.',
    image: TruckImg6,
    iconClass: 'icon-shipment',
    link: '/international-transport',
  },
  {
    title: 'Interstate Transport',
    desc: 'Efficient trucking services across states with reliable long-distance solutions.',
    image: TruckImg3,
    iconClass: 'icon-international-shipping',
    link: '/personal-delivery',
  },
  {
    title: 'Reefer Transport',
    desc: 'Temperature-controlled shipments for perishables and climate-sensitive goods.',
    image: TruckImg4,
    iconClass: 'icon-storehouse',
    link: '/ocean-transport',
  },
  {
    title: 'Dump Truck',
    desc: 'Transport for bulk materials like sand, gravel, or construction waste.',
    image: DumpTruckImg,
    iconClass: 'icon-ship-1',
    link: '/track-transport',
  },
];

const ServiceOne = () => {
  return (
    <section className="service-one service-one--service" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Desktop View: Alternating Rows */}
        <div className="d-none d-md-block">
          {services.map((service, index) => (
            <div
              className={`row align-items-center wow ${
                index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'
              }`}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              key={index}
              style={{ 
                marginBottom: index !== services.length - 1 ? '60px' : '0',
                backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                padding: '40px 30px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
            >
              {/* Image Column */}
              <div 
                className={`col-xl-6 col-lg-6 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '8px'
                    }}
                  />
                  <div 
                    className="icon"
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#ff6b35',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
                    }}
                  >
                    <span className={service.iconClass} style={{ fontSize: '32px', color: '#fff' }}></span>
                  </div>
                </div>
                  </div>

              {/* Content Column */}
              <div 
                className={`col-xl-6 col-lg-6 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                style={{ 
                  paddingLeft: index % 2 === 0 ? '40px' : '20px',
                  paddingRight: index % 2 === 0 ? '20px' : '40px'
                }}
              >
                <div>
                  <h2 style={{ 
                    fontSize: '32px', 
                    fontWeight: '700', 
                    marginBottom: '20px',
                    color: '#1a1a1a'
                  }}>
                    <Link 
                      to={service.link}
                      style={{ color: '#1a1a1a', textDecoration: 'none' }}
                    >
                      {service.title}
                    </Link>
                    </h2>
                  <p style={{ 
                    fontSize: '16px', 
                    lineHeight: '1.8', 
                    color: '#666',
                    marginBottom: '30px'
                  }}>
                    {service.desc}
                  </p>
                    <div className="btn-box">
                    <Link 
                      to={service.link}
                      className="thm-btn"
                      style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        backgroundColor: '#ff6b35',
                        color: '#fff',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '600'
                      }}
                    >
                      Learn More <span className="icon-right-arrow21"></span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Slider */}
        <div className="d-md-none">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            style={{ paddingBottom: '50px' }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div 
                  style={{ 
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', marginBottom: '20px' }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '260px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)' }}></div>
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        width: '55px',
                        height: '55px',
                        backgroundColor: '#ff6b35',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(255, 107, 53, 0.3)'
                      }}
                    >
                      <span className={service.iconClass} style={{ fontSize: '22px', color: '#fff' }}></span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '15px', color: '#1a1a1a' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#666', marginBottom: '25px', flex: '1' }}>
                    {service.desc}
                  </p>
                  <Link 
                    to={service.link}
                    className="thm-btn"
                    style={{
                      display: 'inline-block',
                      padding: '12px 30px',
                      backgroundColor: '#ff6b35',
                      color: '#fff',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '15px',
                      textAlign: 'center'
                    }}
                  >
                    Learn More <span className="icon-right-arrow21"></span>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;

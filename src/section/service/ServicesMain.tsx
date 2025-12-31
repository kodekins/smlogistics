import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImg1 from '../../assets/images/services/services-v1-img1.jpg';
import ServiceImg2 from '../../assets/images/services/services-v1-img2.jpg';
import ServiceImg3 from '../../assets/images/services/services-v1-img3.jpg';
import ReeferImg from '/reefer-1.jpeg';
import FlatbedImg from '/flatbed-1.jpeg';
import DumpTruckImg from '/dumptrucks-1.jpeg';
import OverloadImg from '/overload.jpeg';
import TruckImg1 from '/smlogistics-1.jpg';
import TruckImg2 from '/smlogistics-2.jpg';
import TruckImg3 from '/smlogistics-3.jpg';
import TruckImg4 from '/smlogistics-4.jpg';
import TruckImg5 from '/smlogistics-5.jpg';
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
    title: 'Intrastate Transport',
    desc: 'Reliable local/statewide deliveries for fast regional distribution.',
    image: TruckImg4,
    iconClass: 'icon-ship-1',
    link: '/warehouse-facility',
  },
  {
    title: 'Reefer Transport',
    desc: 'Temperature-controlled shipments for perishables and climate-sensitive goods.',
    image: ReeferImg,
    iconClass: 'icon-storehouse',
    link: '/ocean-transport',
  },
  {
    title: 'Air-Conditioned Transport',
    desc: 'Safe and climate-controlled delivery for sensitive goods like electronics and pharmaceuticals.',
    image: ReeferImg,
    iconClass: 'icon-humanitarian-aid',
    link: '/emergency-transport',
  },
  {
    title: 'Container Drayage',
    desc: 'Efficient transport of containers from ports to warehouses or other destinations.',
    image: TruckImg2,
    iconClass: 'icon-delivery-man',
    link: '/ocean-transport',
  },
  {
    title: 'Dry Van',
    desc: 'Standard enclosed trailer for general cargo protection from weather elements.',
    image: TruckImg5,
    iconClass: 'icon-shipment',
    link: '/international-transport',
  },
  {
    title: 'Flat Bed',
    desc: 'Open trailers for oversized or irregularly shaped cargo that needs easy loading.',
    image: FlatbedImg,
    iconClass: 'icon-international-shipping',
    link: '/emergency-transport',
  },
  {
    title: 'Dump Truck',
    desc: 'Transport for bulk materials like sand, gravel, or construction waste.',
    image: DumpTruckImg,
    iconClass: 'icon-ship-1',
    link: '/track-transport',
  },
  {
    title: 'Oversize/Overweight',
    desc: 'Specialized transport for cargo exceeding standard size or weight limits.',
    image: OverloadImg,
    iconClass: 'icon-storehouse',
    link: '/personal-delivery',
  },
  {
    title: 'Warehousing & Storage',
    desc: 'Safe storage facilities for short or long-term needs with inventory management.',
    image: ServiceImg3,
    iconClass: 'icon-humanitarian-aid',
    link: '/warehouse-facility',
  },
];

const ServiceOne = () => {
  return (
    <section className="service-one service-one--service">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div
              className={`col-xl-4 col-lg-6 col-md-6 wow ${
                index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'
              }`}
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              key={index}
            >
              <div className="service-one__single">
                <div className="service-one__single-inner">
                  <div className="service-one__single-img">
                    <img src={service.image} alt={service.title} />
                  </div>

                  <div className="service-one__single-content">
                    <h2>
                      <Link to={service.link}>{service.title}</Link>
                    </h2>
                    <p>{service.desc}</p>
                    <div className="btn-box">
                      <Link to={service.link}>
                        Read More <span className="icon-right-arrow21"></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="icon">
                  <span className={service.iconClass}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;

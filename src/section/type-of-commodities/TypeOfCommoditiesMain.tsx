import React from 'react';
import { Link } from 'react-router-dom';

// Import images from public folder
const ConsumerGoodsImg = '/ms-toc1.jpeg';
const ElectronicsImg = '/ms-toc5.jpeg';
const FoodAgriImg = '/ms-toc3.jpeg';
const IndustrialImg = '/ms-toc2.jpeg';
const ConstructionImg = '/ms-toc4.jpeg';
const VehiclesImg = '/ms-toc1.jpeg';
const OversizedImg = '/ms-toc4.jpeg';
const ChemicalsImg = '/ms-toc3.jpeg';
const BulkRecycleImg = '/ms-toc2.jpeg';
const GeneralFreightImg = '/ms-toc5.jpeg';

const commodities = [
  {
    title: 'Consumer & Retail Goods',
    desc: 'We move everyday commercial products for retail and e-commerce supply chains, including apparel, footwear, home goods, and furniture.',
    image: ConsumerGoodsImg,
    iconClass: 'icon-delivery-man',
    list: [
      'Apparel, footwear & fashion products',
      'Home goods & furniture',
      'Packaged retail merchandise',
      'E-commerce fulfillment shipments',
      'Household & lifestyle products'
    ]
  },
  {
    title: 'Electronics & High-Value Cargo',
    desc: 'Through verified carriers, we arrange transportation for high-value electronics including mobile phones, laptops, and electrical components.',
    image: ElectronicsImg,
    iconClass: 'icon-shipment',
    list: [
      'Mobile phones & tablets',
      'Laptops & computer equipment',
      'TVs & appliances',
      'Electrical components',
      'Communication equipment'
    ]
  },
  {
    title: 'Food & Agricultural Products',
    desc: 'We coordinate both dry and temperature-controlled transportation for fresh produce, dairy, frozen foods, and grains.',
    image: FoodAgriImg,
    iconClass: 'icon-storehouse',
    list: [
      'Fresh fruits & vegetables',
      'Meat, poultry & seafood',
      'Dairy products',
      'Frozen foods',
      'Packaged and processed food',
      'Grains and agricultural produce'
    ],
    note: '(Reefer trucks are used when temperature control is required)'
  },
  {
    title: 'Industrial & Commercial Freight',
    desc: 'Our carrier network supports the movement of machinery, industrial parts, and manufacturing materials across the country.',
    image: IndustrialImg,
    iconClass: 'icon-international-shipping',
    list: [
      'Machinery & equipment',
      'Industrial parts & spares',
      'Manufacturing materials',
      'Tools & commercial supplies',
      'Raw and semi-finished goods'
    ]
  },
  {
    title: 'Construction & Building Materials',
    desc: 'We arrange trucking for steel, cement, lumber, and other essential construction supplies to job sites and warehouses.',
    image: ConstructionImg,
    iconClass: 'icon-ship-1',
    list: [
      'Steel & metal products',
      'Cement, tiles & stone',
      'Lumber & plywood',
      'Pipes, fittings & roofing materials',
      'Insulation and construction supplies'
    ]
  },
  {
    title: 'Vehicles & Heavy Equipment',
    desc: 'Using flatbeds, step-decks and specialized trailers, we broker transportation for automobiles, machinery, and heavy units.',
    image: VehiclesImg,
    iconClass: 'icon-delivery-man',
    list: [
      'New & used automobiles',
      'Motorcycles',
      'Construction machinery',
      'Farm equipment',
      'Forklifts, generators & heavy units'
    ]
  },
  {
    title: 'Oversized & Overweight Cargo',
    desc: 'We coordinate project and heavy haul shipments such as oilfield equipment and large industrial structures.',
    image: OversizedImg,
    iconClass: 'icon-shipment',
    list: [
      'Oilfield equipment',
      'Industrial structures',
      'Large steel components',
      'Project cargo & special loads'
    ],
    note: '(Permits, routing and compliance handled through specialized carriers)'
  },
  {
    title: 'Chemicals & Special Freight',
    desc: 'We broker compliant transportation for non-hazardous chemicals, industrial liquids, and other regulated cargo.',
    image: ChemicalsImg,
    iconClass: 'icon-storehouse',
    list: [
      'Non-hazardous chemicals',
      'Industrial liquids',
      'Cleaning agents',
      'Manufacturing chemicals',
      'Regulated cargo (through approved carriers only)'
    ]
  },
  {
    title: 'Bulk & Recyclable Materials',
    desc: 'Efficient transport solutions for scrap metal, plastics, paper rolls, and other bulk raw materials.',
    image: BulkRecycleImg,
    iconClass: 'icon-international-shipping',
    list: [
      'Scrap metal',
      'Plastic',
      'Paper rolls',
      'Bulk raw materials'
    ]
  },
  {
    title: 'General Truckload & LTL Freight',
    desc: 'We arrange Full Truckload (FTL) and Less-than-Truckload (LTL) shipments for palletized and mixed commodity cargo.',
    image: GeneralFreightImg,
    iconClass: 'icon-ship-1',
    list: [
      'Full Truckload (FTL)',
      'Less-than-Truckload (LTL)',
      'Palletized cargo',
      'Mixed commodity shipments',
      'Dry van, reefer and flatbed freight'
    ]
  }
];

const TypeOfCommoditiesMain = () => {
  return (
    <section className="service-one service-one--service">
      <div className="container">
        <div className="sec-title center text-center tg-heading-subheading animation-style2">
          <div className="sec-title__tagline">
            <div className="line" />
            <div className="text tg-element-title">
              <h4>Our Expertise</h4>
            </div>
            <div className="icon">
              <span className="icon-shipment float-bob-x3" />
            </div>
          </div>
          <h2 className="sec-title__title tg-element-title">
            Types of Commodities <br /> We Handle
          </h2>
          <p className="mt-3">
            At Star MS Logistics, we operate as a U.S.-based freight brokerage, connecting shippers with licensed and insured trucking carriers across the United States.
            We coordinate the transportation of a wide range of commodities using Dry Van, Reefer, Flatbed, Step-Deck and specialized trailers, based on cargo requirements.
          </p>
        </div>
        <div className="row">
          {commodities.map((item, index) => (
            <div
              className={`col-xl-4 col-lg-6 col-md-6 wow ${
                index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'
              }`}
              data-wow-delay={`${index * 100}ms`}
              data-wow-duration="1500ms"
              key={index}
              style={{ marginBottom: '30px' }}
            >
              <div className="service-one__single" style={{ height: '100%' }}>
                <div className="service-one__single-inner" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="service-one__single-img">
                    <img src={item.image} alt={item.title} style={{ height: '250px', objectFit: 'cover' }} />
                  </div>

                  <div className="service-one__single-content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <h2>
                      {item.title}
                    </h2>
                    <p>{item.desc}</p>
                    <ul className="list-unstyled mt-3" style={{ fontSize: '14px', textAlign: 'left' }}>
                      {item.list.map((li, i) => (
                        <li key={i} style={{ marginBottom: '5px' }}>
                          <span className="icon-right-arrow21" style={{ fontSize: '10px', marginRight: '5px' }}></span>
                          {li}
                        </li>
                      ))}
                    </ul>
                    {item.note && (
                      <p className="mt-2" style={{ fontStyle: 'italic', fontSize: '13px' }}>{item.note}</p>
                    )}
                  </div>
                </div>

                <div className="icon">
                  <span className={item.iconClass}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypeOfCommoditiesMain;


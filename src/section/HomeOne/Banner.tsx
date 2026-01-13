import HeroShape1 from '../../assets/images/pattern/banner-v1-pattern.png';
import HeroImg1 from '../../assets/images/pattern/banner-v1-pattern2.png';
import HeroImg2 from '../../assets/images/banner/banner-v1-img1.png';
import HeroImg3 from '../../assets/images/banner/banner-v1-img5.png';
import HeroImg5 from '../../assets/images/banner/banner-v1-flag1.png';
import HeroImg6 from '/smlogistics-6.jpg';
import HeroImg7 from '/smlogistics-5.jpg';
import HeroImg8 from '/smlogistics-1.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      {/*Start Banner One*/}
      <section className="banner-one" id="home">
        <div
          className="banner-one__pattern"
          style={{ backgroundImage: `url(${HeroShape1})` }}
        />
        <div className="banner-one__pattern2">
          <img src={HeroImg1} alt="#" />
        </div>
        <div className="banner-one__img1">
          <img
            className="float-bob-x"
            src={HeroImg2}
            alt="#"
          />
        </div>
        <div className="banner-one__img5">
          <img
            className="float-bob-y"
            src={HeroImg3}
            alt="#"
          />
        </div>
        <div className="container">
          <div className="banner-one__location clearfix">
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style1">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>London</h4>
                  <p>
                    Distribution <br /> Hub{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Start Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style2">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>Alexander City</h4>
                  <p>
                    Trucking <br /> Terminal{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*End Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style3">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>Birmingham</h4>
                  <p>
                    Freight <br /> Center{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* End Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style4">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>Guntersville</h4>
                  <p>
                    Warehouse <br /> Facility{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* End Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style5">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>Montgomery</h4>
                  <p>
                    Shipping <br /> Depot{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* End Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style6">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>California</h4>
                  <p>
                    Port <br /> Terminal{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* End Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style7">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>Colorado</h4>
                  <p>
                    Logistics <br /> Center{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* End Banner One Location single */}
            {/* Start Banner One Location single */}
            <div className="banner-one__location-single style8">
              <div className="round-box">
                <div className="bdr" />
              </div>
              <div className="content-box">
                <div className="img-box">
                  <img src={HeroImg5} alt="" />
                </div>
                <div className="text-box">
                  <h4>Berlin</h4>
                  <p>
                    International <br /> Hub{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Banner One Location single */}
          <div className="banner-one__content">
            <div
              className="banner-one__content-left wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <h2 style={{ fontSize: '72px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--logistiq-white)' }}>
                DELIVERING <br />
                THE TRUST
              </h2>
              <p>
                Reliable Freight <br /> Brokerage Solutions Across the USA{" "}
              </p>
            </div>
            <div
              className="banner-one__content-right wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="banner-one__content-right-text">
                <p>
                  Connecting shippers with trusted carriers for safe, <br />
                  on-time, and cost-effective freight movement.
                </p>
              </div>
              <div className="banner-one__content-right-middle">
                <ul className="clearfix">
                  <li>
                    <div className="img-box">
                      <img src={HeroImg6} alt="Freight Truck" />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src={HeroImg7} alt="Logistics Team" />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img src={HeroImg8} alt="Warehouse Operations" />
                    </div>
                  </li>
                </ul>
                <div className="text-box">
                  <h2>Trusted Partners</h2>
                  <p>Nationwide Coverage</p>
                </div>
              </div>
              <div className="banner-one__content-right-btn">
                <Link className="thm-btn" to="/contact">
                  Request A Quote
                  <i className="icon-right-arrow21" />
                  <span className="hover-btn hover-bx" />
                  <span className="hover-btn hover-bx2" />
                  <span className="hover-btn hover-bx3" />
                  <span className="hover-btn hover-bx4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner One*/}
    </>
  );
}

export default Banner;

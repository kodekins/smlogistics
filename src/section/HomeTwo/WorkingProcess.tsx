import React from "react";
import { Link } from 'react-router-dom';

// Import images
import pattern from '../../assets/images/pattern/working-process-v1-pattern.jpg';
import shape1 from '../../assets/images/shapes/working-process-v1-shape1.png';

const WorkingProcess = () => {
  return (
    <>
      {/*Start Working Process One*/}
      <section className="working-process-one">
        <div
          className="working-process-one__pattern"
          style={{ backgroundImage: `url(${pattern})` }}
        ></div>

        <div className="container">
          <div className="shape1">
            <img src={shape1} alt="" />
          </div>

          <div className="sec-title center text-center tg-heading-subheading animation-style2">
            <div className="sec-title__tagline">
              <div className="line"></div>
              <div className="text tg-element-title">
                <h4>Working Process</h4>
              </div>
              <div className="icon">
                <span className="icon-plane2 float-bob-x3"></span>
              </div>
            </div>
            <h2 className="sec-title__title tg-element-title">
              How We Deliver <br />
              Your <span>Parcel</span>
            </h2>
          </div>

          <div className="row">
            {/*Start Working Process One Single*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="working-process-one__single">
                <div className="icon">
                  <div className="count-box">01</div>
                  <span className="icon-quote"></span>
                </div>
                <div className="content-box">
                  <h2>
                    <Link to="#">Request A Quote</Link>
                  </h2>
                  <p>
                    Logistic service provider company <br />
                    plays a role global chain
                  </p>
                </div>
                <div className="plane-icon">
                  <span className="icon-plane"></span>
                </div>
              </div>
            </div>
            {/*End Working Process One Single*/}

            {/*Start Working Process One Single*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="working-process-one__single">
                <div className="icon">
                  <div className="count-box">02</div>
                  <span className="icon-protection"></span>
                </div>
                <div className="content-box">
                  <h2>
                    <Link to="#">Product Receiving</Link>
                  </h2>
                  <p>
                    Logistic service provider company <br />
                    plays a role global chain
                  </p>
                </div>
                <div className="plane-icon">
                  <span className="icon-plane"></span>
                </div>
              </div>
            </div>
            {/*End Working Process One Single*/}

            {/*Start Working Process One Single*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="working-process-one__single">
                <div className="icon">
                  <div className="count-box">03</div>
                  <span className="icon-service"></span>
                </div>
                <div className="content-box">
                  <h2>
                    <Link to="#">Send The Parcel</Link>
                  </h2>
                  <p>
                    Logistic service provider company <br />
                    plays a role global chain
                  </p>
                </div>
                <div className="plane-icon">
                  <span className="icon-plane"></span>
                </div>
              </div>
            </div>
            {/*End Working Process One Single*/}

            {/*Start Working Process One Single*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="working-process-one__single">
                <div className="icon">
                  <div className="count-box">04</div>
                  <span className="icon-new-product"></span>
                </div>
                <div className="content-box">
                  <h2>
                    <Link to="#">Deliver Packages</Link>
                  </h2>
                  <p>
                    Logistic service provider company <br />
                    plays a role global chain
                  </p>
                </div>
              </div>
            </div>
            {/*End Working Process One Single*/}
          </div>
        </div>
      </section>
      {/*End Working Process One*/}
    </>
  );
};

export default WorkingProcess;

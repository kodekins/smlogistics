import React from 'react';
import { Link } from 'react-router-dom';
import pattern3 from '../../assets/images/shapes/footer-v2-shape1.png';
import pattern4 from '../../assets/images/shapes/footer-v2-shape2.png';

const CTABrokering = () => {
  return (
    <section className="cta-brokering" style={{ 
      backgroundColor: '#0A4D68', 
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="cta-brokering__inner" style={{
          background: 'linear-gradient(90deg, #E63946 0%, #D62828 100%)',
          borderRadius: '10px',
          padding: '50px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          {/* Decorative Shapes */}
          
          <div style={{
            position: 'absolute',
            right: '30px',
            bottom: '20px',
            zIndex: 1
          }}>
            <img
              className="float-bob-y"
              src={pattern4}
              alt=""
              style={{ width: '100px', opacity: 0.3 }}
            />
          </div>

          {/* Text Content */}
          <div style={{ 
            flex: '1 1 auto',
            maxWidth: '700px',
            position: 'relative',
            zIndex: 2
          }}>
            <h2 style={{
              color: '#ffffff',
              fontSize: '42px',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: '0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Reliable Brokering With Industry-Leading Performance!
            </h2>
          </div>

          {/* Button */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '20px'
          }}>
            <Link 
              className="thm-btn" 
              to="/contact"
              style={{
                backgroundColor: '#ffffff',
                color: '#E63946',
                padding: '18px 40px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '5px',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
            >
              Contact with Us
              <i className="icon-right-arrow21" style={{ marginLeft: '10px' }} />
              <span className="hover-btn hover-bx" />
              <span className="hover-btn hover-bx2" />
              <span className="hover-btn hover-bx3" />
              <span className="hover-btn hover-bx4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABrokering;


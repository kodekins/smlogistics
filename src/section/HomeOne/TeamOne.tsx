
import React from 'react';
import ownerImg from '/owner.jpg';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <section className="team-one">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Brokerage Leader</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-shipment float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">
                        Meet Our Brokerage Leader
                    </h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="leader-profile-card" style={{ 
                            textAlign: 'center', 
                            padding: '50px 40px', 
                            background: '#fff', 
                            borderRadius: '20px', 
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '1px solid #f0f0f0',
                            position: 'relative',
                            marginTop: '20px'
                        }}>
                            <div className="leader-profile-img" style={{ 
                                margin: '0 auto 35px', 
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '8px solid #ff6b35',
                                boxShadow: '0 15px 30px rgba(255, 107, 53, 0.2)'
                            }}>
                                <img 
                                    src={ownerImg} 
                                    alt="Muzaffar A. Shaikh" 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover' 
                                    }} 
                                />
                            </div>

                            <div className="leader-profile-content">
                                <span style={{ 
                                    color: '#ff6b35', 
                                    fontWeight: '700', 
                                    fontSize: '14px', 
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    display: 'block',
                                    marginBottom: '12px'
                                }}>
                                    Managing Director – Star MS Logistics
                                </span>
                                <h2 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
                                    Muzaffar A. Shaikh
                                </h2>
                                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '35px', maxWidth: '600px', margin: '0 auto 35px' }}>
                                    With a vision to redefine freight brokerage through trust and reliability, 
                                    Muzaffar A. Shaikh leads Star MS Logistics with a commitment to excellence, 
                                    ensuring every shipment is managed with the highest level of accountability and care.
                                </p>
                                <div className="btn-box">
                                    <Link to="/contact" className="thm-btn" style={{ 
                                        padding: '16px 45px',
                                        borderRadius: '10px',
                                        display: 'inline-block'
                                    }}>
                                        Contact Me <i className="icon-right-arrow21"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;

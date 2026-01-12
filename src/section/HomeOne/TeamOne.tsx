
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import your images and icons (adjust paths as needed)
import teamImg1 from '/sm-home3.png';
import teamImg2 from '/sm-home4.png';
import teamImg3 from '/sm-home1.png';
import teamImg4 from '/sm-home2.jpg';
import { Link } from 'react-router-dom';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Courtney Henry",
            position: "OPERATIONS DIRECTOR",
            description: "Expert in fleet management and route optimization with 15+ years in the trucking industry.",
            image: teamImg1,
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            id: 2,
            name: "Jane Cooper",
            position: "DISPATCH MANAGER",
            description: "Specializes in coordinating shipments and ensuring on-time deliveries nationwide.",
            image: teamImg2,
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            id: 3,
            name: "Marvin McKinney",
            position: "SAFETY DIRECTOR",
            description: "Ensures compliance and safety standards across all operations and driver training.",
            image: teamImg3,
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        },
        {
            id: 4,
            name: "Nura McKinney",
            position: "CUSTOMER SUCCESS",
            description: "Dedicated to providing exceptional service and support to all our trucking clients.",
            image: teamImg4,
            socialLinks: {
                linkedin: "#",
                twitter: "#",
                instagram: "#",
                facebook: "#"
            }
        }
    ];

    // Swiper configuration
    const swiperConfig = {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    };







    return (
        <>

            <section className="team-one">
                <div className="container">
                    <div className="sec-title center text-center tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <div className="line"></div>
                            <div className="text tg-element-title">
                                <h4>Team member</h4>
                            </div>
                            <div className="icon">
                                <span className="icon-shipment float-bob-x3"></span>
                            </div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">
                            Meet Our Professional <br />
                            Trucking Team
                        </h2>
                    </div>

                    <div className="team-one__carousel">
                        <Swiper {...swiperConfig}>
                            {teamMembers.map((member) => (
                                <SwiperSlide key={member.id}>
                                    <div className="team-one__single">
                                        <div className="team-one__single-img">
                                            <div className="inner">
                                                <img src={member.image} alt={member.name} />
                                            </div>
                                        </div>

                                        <div className="team-one__single-content">
                                            <ul className="social-links">
                                                <li>
                                                    <a href={member.socialLinks.linkedin}>
                                                        <span className="icon-linkedin"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={member.socialLinks.twitter}>
                                                        <span className="icon-twitter1"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={member.socialLinks.instagram}>
                                                        <span className="icon-instagram"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={member.socialLinks.facebook}>
                                                        <span className="icon-facebook-f"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <span>{member.position}</span>
                                            <h2>
                                                <Link to="/team-details">{member.name}</Link>
                                            </h2>
                                            <p>{member.description}</p>
                                            <div className="btn-box">
                                                <Link to="/contact">
                                                    Contact Me <i className="icon-right-arrow21"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>

                        {/* Pagination */}
                        <div className="swiper-pagination"></div>

                    </div>
                </div>
            </section>


        </>
    )
}
export default Team;
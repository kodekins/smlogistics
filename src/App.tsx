import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/index";
import HomeTwo from "./pages/home-2";
import HomeThree from "./pages/home-3";
import About from "./pages/about";
import Service from './pages/service';
import InternationalTransport from "./pages/international-transport";
import TrackTransport from "./pages/track-transport";
import PersonalDelivery from "./pages/personal-delivery";
import OceanTransport from "./pages/ocean-transport";
import WarehouseFacility from "./pages/warehouse-facility";
import EmergencyTransport from "./pages/emergency-transport";
import Team from "./pages/team";
import TeamDetails from "./pages/team-details";
import Project from "./pages/project";
import ProjectDetails from "./pages/project-details";
import Testimonial from "./pages/testimonial";
import Pricing from "./pages/pricing";
import Faq from "./pages/faq";
import NoPage from "./pages/NoPage";
import Products from "./pages/products";
import ProductDetails from "./pages/product-details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Wishlist from "./pages/wishlist";
import SignUp from "./pages/sign-up";
import Login from "./pages/login";
import Blog from "./pages/blog";
import BlogStandard from "./pages/blog-standard";
import BlogLeftSidebar from "./pages/blog-left-sidebar";
import BlogRightSidebar from "./pages/blog-right-sidebar";
import BlogDetails from "./pages/blog-details";
import Contact from "./pages/contact";
import WhyUsPage from "./pages/why-us";
import TypesOfCommodities from "./pages/types-of-commodities";
import { useEffect, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeOne isVisible={isVisible} />} />
        <Route path="home-2" element={<HomeTwo isVisible={isVisible} />} />
        <Route path="home-3" element={<HomeThree />} />
        <Route path="about" element={<About isVisible={isVisible} />} />
        <Route path="service" element={<Service isVisible={isVisible} />} />
        <Route path="international-transport" element={<InternationalTransport isVisible={isVisible} />} />
        <Route path="track-transport" element={<TrackTransport isVisible={isVisible} />} />
        <Route path="personal-delivery" element={<PersonalDelivery isVisible={isVisible} />} />
        <Route path="ocean-transport" element={<OceanTransport isVisible={isVisible} />} />
        <Route path="warehouse-facility" element={<WarehouseFacility isVisible={isVisible} />} />
        <Route path="emergency-transport" element={<EmergencyTransport isVisible={isVisible} />} />
        <Route path="team" element={<Team isVisible={isVisible} />} />
        <Route path="team-details" element={<TeamDetails isVisible={isVisible} />} />
        <Route path="project" element={<Project isVisible={isVisible} />} />
        <Route path="project-details" element={<ProjectDetails isVisible={isVisible} />} />
        <Route path="testimonial" element={<Testimonial isVisible={isVisible} />} />
        <Route path="pricing" element={<Pricing isVisible={isVisible} />} />
        <Route path="faq" element={<Faq isVisible={isVisible} />} />
  <Route path="why-us" element={<WhyUsPage isVisible={isVisible} />} />
        <Route path="types-of-commodities" element={<TypesOfCommodities isVisible={isVisible} />} />
        <Route path="*" element={<NoPage isVisible={isVisible} />} />
        <Route path="products" element={<Products isVisible={isVisible} />} />
        <Route path="product-details" element={<ProductDetails isVisible={isVisible} />} />
        <Route path="cart" element={<Cart isVisible={isVisible} />} />
        <Route path="checkout" element={<Checkout isVisible={isVisible} />} />
        <Route path="wishlist" element={<Wishlist isVisible={isVisible} />} />
        <Route path="sign-up" element={<SignUp isVisible={isVisible} />} />
        <Route path="login" element={<Login isVisible={isVisible} />} />
        <Route path="blog" element={<Blog isVisible={isVisible} />} />
        <Route path="blog-standard" element={<BlogStandard isVisible={isVisible} />} />
        <Route path="blog-left-sidebar" element={<BlogLeftSidebar isVisible={isVisible} />} />
        <Route path="blog-right-sidebar" element={<BlogRightSidebar isVisible={isVisible} />} />
        <Route path="blog-details" element={<BlogDetails isVisible={isVisible} />} />
        <Route path="contact" element={<Contact isVisible={isVisible} />} />
      </Routes>
    </Router>
  );
}

export default App;

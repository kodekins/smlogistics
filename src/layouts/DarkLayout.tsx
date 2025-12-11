import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";

// Import all footer components
import Footer from "../components/Footers/FooterOne";
import Footer2 from "../components/Footers/FooterTwo";
import Footer3 from "../components/Footers/FooterThree";
import Footer4 from "../components/Footers/FooterFour";
import Footer5 from "../components/Footers/FooterFive";

// Import all header components
import Header from "../components/Headers/HeaderOne";
import HeaderOneSingle from "../components/Headers/HeaderOneSingle";

import HeaderTwo from "../components/Headers/HeaderTwo";
import HeaderTwoSingle from "../components/Headers/HeaderTwoSingle";

import HeaderThree from "../components/Headers/HeaderThree";
import HeaderThreeSingle from "../components/Headers/HeaderThreeSingle";

import HeaderFour from "../components/Headers/HeaderFour";
import HeaderFourSingle from "../components/Headers/HeaderFourSingle";

import HeaderFive from "../components/Headers/HeaderFive";
import HeaderFiveSingle from "../components/Headers/HeaderFiveSingle";

const DarkLayout = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    useEffect(() => {        
        import("../assets/css/style-dark.css");
        if (styleMode === "Dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [styleMode]);

    // **Header Selection**
    const renderHeader = () => {
        switch (HeaderStyle) {
            case "one": return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "one-single": return <HeaderOneSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "two": return <HeaderTwo handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "two-single": return <HeaderTwoSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "three": return <HeaderThree handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "three-single": return <HeaderThreeSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "four": return <HeaderFour handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "four-single": return <HeaderFourSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "five": return <HeaderFive handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "five-single": return <HeaderFiveSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            default: return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
        }
    };

    // **Footer Selection**
    const renderFooter = () => {
        switch (FooterStyle) {
            case "two": return <Footer2 />;
            case "three": return <Footer3 />;
            case "four": return <Footer4 />;
            case "five": return <Footer5 />;
            default: return <Footer />;
        }
    };
    
    return (
        <>
            {renderHeader()}
            {children}
            {renderFooter()}
            <BackToTop />
        </>
    );
};

export default DarkLayout;

import { useEffect, useState } from "react";
import Header from "../components/Header/Header";


// interface LayoutProps {
//     children: ReactNode;
//     HeaderStyle: any;   // a React component
//     FooterStyle: any;   // a React component
// }
interface LayoutProps {
    children: React.ReactNode;
    HeaderStyle: React.ComponentType;
    FooterStyle: React.ComponentType;
}
// Import all header components 
const Layout = ({ children, HeaderStyle, FooterStyle }: LayoutProps) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState<number>(0);

    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck: any = window.scrollY > 100;
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


    // **Header Selection**
    const renderHeader = () => {
        switch (HeaderStyle) {
            case "one": return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;

            default: return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
        }
    };

    // **Footer Selection**
    const renderFooter = () => {
        switch (FooterStyle) {
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

export default Layout;

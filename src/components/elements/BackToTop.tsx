// BackToTop.tsx
import React from "react";
import { Link } from "react-router-dom";

// Props interface
interface BackToTopProps {
  scroll: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({ scroll }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("html")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll && (
        <Link
          to="#"
          onClick={handleClick}
          className="scroll-to-target scroll-to-top"
        >
          <span className="scroll-to-top__wrapper">
            <span className="scroll-to-top__inner"></span>
          </span>
          <span className="scroll-to-top__text">Go Back Top</span>
        </Link>
      )}
    </>
  );
};

export default BackToTop;

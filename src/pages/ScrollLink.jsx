import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ScrollLink = ({ to, children, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSamePage = location.pathname === "/";

  const handleClick = (e) => {
    if (!isSamePage) {
      e.preventDefault();
      navigate("/" + to); // go to homepage + section
    }
  };

  return (
    <HashLink
      smooth
      to={isSamePage ? to : "/" + to}
      onClick={handleClick}
      {...props}
    >
      {children}
    </HashLink>
  );
};

export default ScrollLink;

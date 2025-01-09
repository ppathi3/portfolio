import React from "react";
import "./../styles/Header.css";

const Header = ({id}) => {
  return (
    <header className="header" id={id}>
      <div className="header-content">
        <h1 className="logo">Pooja Pathi</h1>
        <p className="tagline">Software Engineer | Tech Enthusiast | Art Lover</p>
      </div>
    </header>
  );
};

export default Header;

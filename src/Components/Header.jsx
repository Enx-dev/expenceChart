import React from "react";
import logoIcon from "../images/logo.svg";
const Header = () => {
  return (
    <div className='Header'>
      <span className='Header_info'>
        <h5>My balance</h5>
        <h1>$921.48</h1>
      </span>
      <span className='Header_logo'>
        <img src={logoIcon} alt='Brand Logo' />
      </span>
    </div>
  );
};

export default Header;

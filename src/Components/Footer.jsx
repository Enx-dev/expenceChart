import React from "react";
import Charts from "./Charts";

const Footer = () => {
  return (
    <div className='Charts_Container'>
      <Charts />
      <hr className='Charts_Container_line' />
      <div className='Charts_Container-footer'>
        <span className='Charts_Container-footer-total'>
          <h5>Total this month</h5>
          <h1>$456.05</h1>
        </span>
        <span className='Charts_Container-footer-diff'>
          <h1>+3.7%</h1>
          <h5>From last month</h5>
        </span>
      </div>
    </div>
  );
};

export default Footer;

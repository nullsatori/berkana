import React from 'react';
import Image from "next/image";

const Menu = () => {
  return (
    <div className='menu'>
      <div className="wrapper">
        <div className="head">
          <Image src='/logo.png' alt="logo"/>
          <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.765549" y1="66.3466" x2="65.8194" y2="1.29278" stroke="#D4A95A" stroke-width="2"/>
            <line x1="2.17976" y1="1.76604" x2="67.2336" y2="66.8199" stroke="#D4A95A" stroke-width="2"/>
          </svg>
        </div>
        <div className="left">

        </div>
        <div className="right">

        </div>
      </div>
    </div>
  );
};

export default Menu;
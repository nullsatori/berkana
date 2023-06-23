import React, { useEffect, useState } from "react";
import Header from "@/components/general/header";
import Footer from "@/components/general/footer";
import Menu from "@/components/general/menu";

const Layout = ({ children } : any) => {
  const [menuActive, setMenuActive] = useState(false);

  // useEffect(() => {
  //   const html = document.querySelector('html');
  //   const fcMenu = document.querySelector('.fc-menu');
  //   if (menuActive && html){
  //     html.style.overflow = 'hidden';
  //     fcMenu.style.overflow = 'scrolls';
  //   }
  //   else{
  //     html.style.overflow = 'visible';
  //   }
  // })
  return (
    <>
      <Header setMenuActive={setMenuActive} />
      {children}
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <Footer />
    </>
  );
};

export default Layout;

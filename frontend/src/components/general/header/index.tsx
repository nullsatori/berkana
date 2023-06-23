import React, { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "@/components/general/menu";

const Header = ({ setMenuActive }) => {
  // const [url, setUrl] = useState({});
  // useEffect(() => {
  //   const getUrl = async() => {
  //     const res = await fetch("http://localhost:1337/api/upload/files/");
  //     const json = await res.json();
  //     for (let i = 0; i < json.length; i++){
  //       console.log(json[i]);
  //       if(json[i].name === "logo.png") {
  //         setUrl(json[i].url);
  //         break;
  //       }
  //     }
  //   }
  //   getUrl();
  // }, []);         фукционал для парсинга картинок с бэкенда

  return (
    <div className="header">
      <Link href={"/"}>
        <img src="/logo.png" alt="logo" className="logo" />
      </Link>
      <div className="wrapper">
        <div className="temp">
          <Link href={"/szr"}>
            <p className="header-text">СЗР</p>
          </Link>
          <Link href={"/seeds"}>
            <p className="header-text">Семена</p>
          </Link>
          <Link href={"/services"}>
            <p className="header-text">Услуги</p>
          </Link>
        </div>
        <Link href={"/agro-project"}>
          <p className="header-text project">АгроПроект</p>
        </Link>
        <div className="language">
          <p className="header-text">РУС</p>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5C3.90433 5 3.81178 4.98092 3.72233 4.94275C3.63241 4.90458 3.55755 4.85369 3.49776 4.79008L0.197309 1.27863C0.0657695 1.13868 0 0.960559 0 0.744274C0 0.527989 0.0657695 0.349872 0.197309 0.209923C0.328849 0.0699743 0.496263 0 0.699551 0C0.90284 0 1.07025 0.0699743 1.20179 0.209923L4 3.18702L6.79821 0.209923C6.92975 0.0699743 7.09716 0 7.30045 0C7.50374 0 7.67115 0.0699743 7.80269 0.209923C7.93423 0.349872 8 0.527989 8 0.744274C8 0.960559 7.93423 1.13868 7.80269 1.27863L4.50224 4.79008C4.43049 4.86641 4.35277 4.92036 4.26906 4.95191C4.18535 4.98397 4.09566 5 4 5Z"
              fill="#F7F7F7"
            />
          </svg>
        </div>
        <p className="header-text phone">+7 437 300 39 14</p>
        <img
          src="/menu.png"
          alt="menu"
          className="menu"
          onClick={() => setMenuActive(true)}
        />
      </div>
    </div>
  );
};

export default Header;

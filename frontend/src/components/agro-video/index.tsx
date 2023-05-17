import React from 'react';
import Carousel from "nuka-carousel";

const AgroVideo = () => {


  return (
    <div className='about'>
      <div className="wrapper top">
        <div className="head">
          <p className='underscored'>О компании</p>
        </div>
      </div>
      <div className="wrapper middle">
        <div className="info">
          <p>
            Мы гарантируем Вам индивидуальные,
            профессиональный подход к решению задач
            по повышению конкурентоспособности Вашего предприятия.
            В будущем году мы будем рады предложить
            Вам услуги по внесению удобрений и
            обработок посевов средствами защиты растений.
          </p>
          <div className="btn">
            Узнать больше
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.552 1.55215L10.552 9.69538C10.552 9.81876 10.529 9.92939 10.4829 10.0273C10.4364 10.1247 10.3721 10.2146 10.2898 10.2969C10.2076 10.3791 10.1177 10.4435 10.0202 10.49C9.92233 10.536 9.8117 10.5591 9.68832 10.5591L1.54509 10.5591C1.31889 10.5591 1.11839 10.477 0.943599 10.3129C0.768807 10.148 0.681412 9.94214 0.681412 9.69537C0.67113 9.45889 0.748038 9.25325 0.912137 9.07846C1.07706 8.90367 1.2829 8.81628 1.52966 8.81628L7.5754 8.81628L0.681411 1.92229C0.50662 1.7475 0.419018 1.54186 0.418607 1.30538C0.419018 1.0689 0.50662 0.86326 0.681411 0.688469C0.856203 0.513677 1.06163 0.426282 1.29771 0.426282C1.5346 0.426282 1.74044 0.513677 1.91523 0.688469L8.80922 7.58245L8.80922 1.53672C8.80922 1.31052 8.89394 1.10735 9.06339 0.927214C9.23324 0.747487 9.43641 0.662765 9.67289 0.673047C9.90938 0.662766 10.115 0.745019 10.2898 0.919811C10.4646 1.0946 10.552 1.30538 10.552 1.55215Z" fill="#1E1E1E"/>
            </svg>

          </div>
        </div>
        <div className="slider">
          <Carousel slideWidth={'39.5vw'}
                    cellSpacing={40}
                    cellAlign={"right"}
                    slideIndex={1}
                    defaultControlsConfig={
                      {
                        pagingDotsStyle: {display: 'none'},
                        prevButtonText: "←",
                        nextButtonText: "→",
                        prevButtonStyle: {background: "#1E1E1E"}
                      }
                    }
          >
            <div className='item partners'>
              <img src="/Bayer_Cross_1_.png" alt="bayer-logo"/>
            </div>
            <div className='item'>
              <img src="/Rectangle 434.png" alt="bayer-logo"/>
            </div>
            <div className='item partners'>
              <img src="/Bayer_Cross_1_.png" alt="bayer-logo"/>
            </div>
            <div className='item partners'>
              <img src="/Bayer_Cross_1_.png" alt="bayer-logo"/>
            </div>
            <div className='item partners test'>
              <img src="/Bayer_Cross_1_.png" alt="bayer-logo"/>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AgroVideo;
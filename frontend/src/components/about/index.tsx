import React from 'react';
import Carousel from "nuka-carousel";

const About = () => {


  return (
    <div className='about'>
      <div className="wrapper top">
        <p className='underscored'>О компании</p>
        <div className="head">
          <p>
            БЕРКАНАБИО©
          </p>
          <span>&mdash;</span>
        </div>
        <div className="text">
          <p>
            новейшие разработки <br/>
            и технологиями в сфере <br/>
            сельскогохозяйства <br/>
          </p>
        </div>
      </div>
      <div className="wrapper middle">
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
                        prevButtonStyle: {background: "#1E1E1E"},
                        nextButtonStyle: {background: "#1E1E1E"}
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
        <div className="info">
          <p>
            Мы гарантируем Вам индивидуальные,
            профессиональный подход к решению задач
            по повышению конкурентоспособности Вашего предприятия.
            В будущем году мы будем рады предложить
            Вам услуги по внесению удобрений и
            обработок посевов средствами защиты растений.
          </p>
          <div className="mobile-partners">
            <img src="/Bayer_Cross_1_.png" alt=""/>
            <p className="underscored">Партнеры</p>
          </div>
          <div className="btn">
            Узнать больше
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.552 1.55215L10.552 9.69538C10.552 9.81876 10.529 9.92939 10.4829 10.0273C10.4364 10.1247 10.3721 10.2146 10.2898 10.2969C10.2076 10.3791 10.1177 10.4435 10.0202 10.49C9.92233 10.536 9.8117 10.5591 9.68832 10.5591L1.54509 10.5591C1.31889 10.5591 1.11839 10.477 0.943599 10.3129C0.768807 10.148 0.681412 9.94214 0.681412 9.69537C0.67113 9.45889 0.748038 9.25325 0.912137 9.07846C1.07706 8.90367 1.2829 8.81628 1.52966 8.81628L7.5754 8.81628L0.681411 1.92229C0.50662 1.7475 0.419018 1.54186 0.418607 1.30538C0.419018 1.0689 0.50662 0.86326 0.681411 0.688469C0.856203 0.513677 1.06163 0.426282 1.29771 0.426282C1.5346 0.426282 1.74044 0.513677 1.91523 0.688469L8.80922 7.58245L8.80922 1.53672C8.80922 1.31052 8.89394 1.10735 9.06339 0.927214C9.23324 0.747487 9.43641 0.662765 9.67289 0.673047C9.90938 0.662766 10.115 0.745019 10.2898 0.919811C10.4646 1.0946 10.552 1.30538 10.552 1.55215Z" fill="#1E1E1E"/>
            </svg>

          </div>
        </div>
      </div>
      <div className="wrapper bottom">
        <p className="title underscored">
          Семена
        </p>
        <Carousel
          slideWidth={'calc(100vw - 120px)'}
          defaultControlsConfig={
            {
              pagingDotsStyle: {display: 'none'},
              prevButtonText: "⟵",
              nextButtonText: "⟶",
              prevButtonStyle: {background: "#1E1E1E"},
              nextButtonStyle: {background: "#1E1E1E"}
            }
          }>
          <div className="item">
            <div className="info">
              <h1>Кукуруза</h1>
              <p>
                Оптимальным вариантом на наш взгляд являются специально выведенные гибридные сорта. Они более устойчивы к изменениям погодных условий, быстрее растут и дают лучше урожай.
              </p>
              <div className="btn">
                ПОДРОБНЕЕ
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z" fill="#202020"/>
                </svg>
              </div>
            </div>
            <div className="image">
              <img src="/corn-modified.png" alt=""/>
              <img src="/syngenta.png" alt="logo"/>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="mobile-seeds">
        <div className="head">
          <p className="underscored">
            Семена
          </p>
          <div>
            <img src="/corn-modified.png" alt=""/>

          </div>

        </div>
        <div className="info">
          <h1>Кукуруза</h1>
          <p>
            Оптимальным вариантом на
            наш взгляд являются специально
            выведенные гибридные сорта.
            Они более устойчивы к изменениям погодных условий,
            быстрее растут и дают лучше урожай.
          </p>
        </div>
        <div className="controls">
          <div className="buttons">
            <span className="dot active"></span>
            <span className="dot" ></span>
            <span className="dot" ></span>
            <span className="dot" ></span>

          </div>
          <img src="/syngenta.png" alt="logo"/>
        </div>
      </div>
    </div>
  );
};

export default About;
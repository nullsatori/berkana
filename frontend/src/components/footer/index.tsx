import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="contact">
        <p>
          Написать нам
        </p>
        <svg width="49" height="44" viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5 34.2222L14.7 44V34.2222H4.9C3.60044 34.2222 2.3541 33.7071 1.43518 32.7903C0.516249 31.8735 0 30.6299 0 29.3333V4.88889C0 2.2 2.205 0 4.9 0H44.1C45.3996 0 46.6459 0.515078 47.5648 1.43192C48.4838 2.34877 49 3.59227 49 4.88889V29.3333C49 30.6299 48.4838 31.8735 47.5648 32.7903C46.6459 33.7071 45.3996 34.2222 44.1 34.2222H24.5ZM12.25 14.6667V19.5556H17.15V14.6667H12.25ZM22.05 14.6667V19.5556H26.95V14.6667H22.05ZM31.85 14.6667V19.5556H36.75V14.6667H31.85Z" fill="white"/>
        </svg>

      </div>
      <div className="flex">
        <div className="left">
          <div className="wrapper">
            <img src="/logo-footer.png" alt=""/>
            <div className='contacts'>
              <p>
                +7 437 300 39 14
              </p>
              <p>
                hello@berkanabio.ru
              </p>
            </div>
            <div className="links">
              <a href="">О компании</a>
              <a href="">Агропроект</a>
              <a href="">Новости</a>
              <a href="">Средства защиты</a>
              <a href="">Наши партнеры</a>
              <a href="">Семена</a>
              <a href="">Контакты</a>
              <a href="">Услуги</a>
            </div>
            <div className="bottom">
              <p>
                © 1996–2023 «Беркана»
              </p>
              <div className="social">
                <a href="">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7854 17.9538H12.9808C12.9808 17.9538 13.3418 17.9155 13.5264 17.724C13.6961 17.548 13.6907 17.2178 13.6907 17.2178C13.6907 17.2178 13.6673 15.6714 14.4117 15.4436C15.1457 15.2192 16.0881 16.9382 17.0869 17.5992C17.8422 18.0993 18.4162 17.9899 18.4162 17.9899L21.0871 17.9538C21.0871 17.9538 22.4842 17.8707 21.8217 16.8117C21.7675 16.7252 21.4357 16.0283 19.8358 14.5965C18.1609 13.0979 18.3854 13.3404 20.4028 10.7481C21.6313 9.1695 22.1224 8.20576 21.969 7.79304C21.8227 7.3998 20.9191 7.50367 20.9191 7.50367L17.9118 7.5216C17.9118 7.5216 17.6888 7.49231 17.5235 7.58763C17.3619 7.68087 17.2582 7.89869 17.2582 7.89869C17.2582 7.89869 16.782 9.12022 16.1475 10.1592C14.8084 12.3513 14.2729 12.4674 14.054 12.331C13.5447 12.0137 13.672 11.0567 13.672 10.3766C13.672 8.25207 14.0062 7.36632 13.0211 7.13699C12.6942 7.06095 12.4535 7.01065 11.6174 7.00243C10.5443 6.99192 9.63633 7.0056 9.12208 7.24848C8.77994 7.41002 8.51598 7.76988 8.67684 7.7906C8.87562 7.81611 9.32564 7.9077 9.56427 8.2207C9.87253 8.625 9.86175 9.53265 9.86175 9.53265C9.86175 9.53265 10.0389 12.0335 9.4482 12.3441C9.0429 12.5571 8.48679 12.1222 7.29293 10.1334C6.68132 9.11462 6.2194 7.98844 6.2194 7.98844C6.2194 7.98844 6.13045 7.77801 5.97158 7.66538C5.77888 7.52891 5.50962 7.48565 5.50962 7.48565L2.65188 7.50364C2.65188 7.50364 2.22296 7.5152 2.06536 7.69502C1.92515 7.85511 2.05416 8.18587 2.05416 8.18587C2.05416 8.18587 4.29132 13.232 6.8247 15.7751C9.14786 18.1069 11.7854 17.9538 11.7854 17.9538Z" fill="#BDBDBD"/>
                  </svg>
                </a>
                <a href="">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 5C13.5378 5 13.792 5.0075 14.5915 5.045C15.3903 5.0825 15.934 5.20775 16.4125 5.39375C16.9075 5.58425 17.3245 5.84225 17.7415 6.2585C18.1229 6.63342 18.418 7.08694 18.6063 7.5875C18.7915 8.06525 18.9175 8.60975 18.955 9.4085C18.9903 10.208 19 10.4622 19 12.5C19 14.5378 18.9925 14.792 18.955 15.5915C18.9175 16.3903 18.7915 16.934 18.6063 17.4125C18.4185 17.9133 18.1233 18.367 17.7415 18.7415C17.3665 19.1227 16.913 19.4178 16.4125 19.6063C15.9347 19.7915 15.3903 19.9175 14.5915 19.955C13.792 19.9903 13.5378 20 11.5 20C9.46225 20 9.208 19.9925 8.4085 19.955C7.60975 19.9175 7.066 19.7915 6.5875 19.6063C6.08674 19.4184 5.63315 19.1232 5.2585 18.7415C4.87705 18.3666 4.58195 17.9131 4.39375 17.4125C4.20775 16.9347 4.0825 16.3903 4.045 15.5915C4.00975 14.792 4 14.5378 4 12.5C4 10.4622 4.0075 10.208 4.045 9.4085C4.0825 8.609 4.20775 8.066 4.39375 7.5875C4.58143 7.08663 4.8766 6.63299 5.2585 6.2585C5.63325 5.87692 6.08682 5.5818 6.5875 5.39375C7.066 5.20775 7.609 5.0825 8.4085 5.045C9.208 5.00975 9.46225 5 11.5 5ZM11.5 8.75C10.5054 8.75 9.55161 9.14509 8.84835 9.84835C8.14509 10.5516 7.75 11.5054 7.75 12.5C7.75 13.4946 8.14509 14.4484 8.84835 15.1517C9.55161 15.8549 10.5054 16.25 11.5 16.25C12.4946 16.25 13.4484 15.8549 14.1517 15.1517C14.8549 14.4484 15.25 13.4946 15.25 12.5C15.25 11.5054 14.8549 10.5516 14.1517 9.84835C13.4484 9.14509 12.4946 8.75 11.5 8.75ZM16.375 8.5625C16.375 8.31386 16.2762 8.0754 16.1004 7.89959C15.9246 7.72377 15.6861 7.625 15.4375 7.625C15.1889 7.625 14.9504 7.72377 14.7746 7.89959C14.5988 8.0754 14.5 8.31386 14.5 8.5625C14.5 8.81114 14.5988 9.0496 14.7746 9.22541C14.9504 9.40123 15.1889 9.5 15.4375 9.5C15.6861 9.5 15.9246 9.40123 16.1004 9.22541C16.2762 9.0496 16.375 8.81114 16.375 8.5625ZM11.5 10.25C12.0967 10.25 12.669 10.4871 13.091 10.909C13.5129 11.331 13.75 11.9033 13.75 12.5C13.75 13.0967 13.5129 13.669 13.091 14.091C12.669 14.5129 12.0967 14.75 11.5 14.75C10.9033 14.75 10.331 14.5129 9.90901 14.091C9.48705 13.669 9.25 13.0967 9.25 12.5C9.25 11.9033 9.48705 11.331 9.90901 10.909C10.331 10.4871 10.9033 10.25 11.5 10.25Z" fill="#BDBDBD"/>
                  </svg>

                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="right">
          <div className="wrapper">
            <h1>
              <b>Подписаться </b>
              на e-mail рассылку
            </h1>
            <p>
              Получайте по электронной почте обновления о том, о чем Вы захотите узнать, включая продукты, запуски и события. <b>Отпиcаться можно в любое время.</b>
            </p>
            <form>
              <input type="text" placeholder='Введите ваш e-mail адрес'/>
              <input type="submit" value='→'/>
            </form>

            <div className="bottom">
              <p>
                Поддержка сайта <u>maxpryadkin.ru</u>
              </p>
              <p>
                Дизайн <u>Никита Рыжков</u>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
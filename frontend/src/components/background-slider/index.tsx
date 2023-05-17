import React, {useEffect, useRef, useState} from 'react';

const BackgroundSlider = () => {
  const [slide, setSlide] = useState(1);
  const slideImages = [
    "/first-slide.png",
    "/second-slide.png",
    "/third-slide.png",
    "/fourth-slide.png"
  ];
  const slideText = [
    <div className='firstSlide' key='firstSlide'>
      <p>современные</p>
      <div>
        <p>технологии</p>
        <span>для <br/> сельского <br/> хозяйства</span>
      </div>
    </div>
    ,
    <div className='secondSlide' key='secondSlide'>
      <div>
        <p>обработка</p>
        <span>сверхнизкое <br/> давление <br/> на почву</span>
      </div>
      <p>пневмоходами</p>
    </div>
    ,
    <div className='thirdSlide' key='thirdSlide'>
      <div>
        <p>аренда</p>
        <span>храним ваш <br/> урожай <br/> как свой</span>
      </div>
      <p>элеваторов</p>
    </div>
    ,
    <div className='fourthSlide' key='fourthSlide'>
      <div>
        <p>официальный</p>
        <img src="/bash-logo.png" alt="bash-logo"/>
      </div>
      <p>представитель</p>
    </div>
  ]


  const handleClick = (number: number) => {
    const buttons = document.getElementsByClassName('dot');
    for(let i = 0; i < buttons.length; i++)
      buttons[i].classList.remove('active');
    buttons[number].classList.add('active');
    setSlide(number);
    console.log(slide, ' after')
  }

  useEffect(() =>{

  })

  return (
    <div className='backgroundSlider' style={{background: ` no-repeat center url(${slideImages[slide]})`, backgroundSize: 'cover'}}>
      <div className="wrapper">
        {slideText[slide]}
        <div className="buttons">
          <span className="dot active" onClick={() => handleClick(0)}></span>
          <span className="dot" onClick={() => handleClick(1)}></span>
          <span className="dot" onClick={() => handleClick(2)}></span>
          <span className="dot" onClick={() => handleClick(3)}></span>
        </div>
      </div>

      <div className="slider-footer">
        <p className='copyright'>
          © 1996–2023 «Беркана»
        </p>
        <div className="temp">
          <p>
            О компании
          </p>
          <p>
            Партнёры
          </p>
          <p>
            Контакты
          </p>
        </div>
        <div className="info">
          <p>
            Поддержка сайта
            <span>
              maxpryadkin.ru
            </span>
          </p>
          <p>
            Дизайн
            <span>
              Никита Рыжков
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
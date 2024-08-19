import './Flowers.css';
import 'bootstrap/dist/css/bootstrap.css';
import Img0 from '../assets/img0.png';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';

import Svetok0 from '../assets/svetok2.png';
import Svetok1 from '../assets/svetok3.png';
import Svetok2 from '../assets/svetok4.png';
import Svetok3 from '../assets/svetok5.png';

import { gsap } from 'gsap';
import { useEffect } from 'react';

function Flowers() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, duration: 0.3, delay: 0.1 });
        }
      });
    }, { threshold: 1 });

    const boxes = document.querySelectorAll('.boxFlow, .boxFlow1, .boxFlow2');
    boxes.forEach((element) => observer.observe(element));
  }, []);

  return (
    <>
      <h1 className='Mi'>Почему именно мы?</h1>

      <div className='boxFlow' style={{ opacity: 0 }}>
        <img src={Img0} alt="" />
        <div className='info'>
          <p>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант. Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
        </div>
      </div>
      <div className='boxFlow1' style={{ opacity: 0 }}>
        <img src={Img1} alt="" />
        <div className='info1'>
          <p>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
        </div>
      </div>
      <div className='boxFlow2' style={{ opacity: 0 }}>
        <img src={Img2} alt="" />
        <div className='info2'>
          <p>Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
        </div>
      </div>
    </>
  );
}

export default Flowers;
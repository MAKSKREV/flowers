import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import './App.css'
import Logo from './assets/logo.png';
import Skidki from './components/skidki';
import Svetok from './assets/svetok.png';
import Svetok1 from './assets/svetok1.png';
import Lupa from './assets/lupa.png'
import Korzina from './assets/korzina.png'
import User from './assets/user.png'
import Flowers from './components/flowers.jsx';
import Dostavka from './components/dostavkaa.jsx';
import Forma from './components/forma.jsx';
import Kontakt from './components/kontakt.jsx';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const p = document.querySelector('p')
    document.title = 'Flowers';
    const h1 = document.querySelector('h1')
    const button = document.querySelector('button')

    gsap.set([p, h1, button], { opacity: 0 })

    gsap.timeline()
      .to("#p11", { opacity: 1, duration: 0.5, delay: 0.1, x: 100, })
      .to("#h11", { opacity: 1, duration: 0.5, delay: 0.1, x: 100, })
      .to(".knopka", { opacity: 1, duration: 0.5, delay: 0.1, x: 100, })

    const tlbtn = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    tlbtn
      .to(".knopka", { rotate: 5 })
      .to(".knopka", { rotate: -5 })
      .to(".knopka", { rotate: 5 })
      .to(".knopka", { rotate: 0 });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, duration: 0.5, delay: 0.1 });
        }
      });
    }, { threshold: 0.5 });

    const becc = document.querySelector('.becc');
    const becc2 = document.querySelector('.becc2');

    observer.observe(becc);
    observer.observe(becc2);
  }, [])

  return (
    <>
      <header> 
        <img id='Logo' src={Logo} alt="" />
        <div className='pool'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='iconss'>
        <img src={Lupa} alt="" />
        <img src={Korzina} alt="" />
        <img src={User} alt="" />
        </div>
      </header>
      <div className='main'>
        <div className='box'>
          <p id='p11'>Подарите ощущение праздника</p>
          <h1 id='h11'>Собираем букеты, созданные для Вас</h1>
            <button className='knopka'><h2>Выбрать букет</h2></button>
        </div>
        <img className='Svetok0' src={Svetok}alt="" />
      <img className='Svetok1' src={Svetok1}alt="" />
      <h1 className='opa'>Скидки</h1>
        <div className='becc' style={{ opacity: 0 }}>
          <Skidki/>
        </div>
        <div className='becc2'>
          <Flowers/>
        </div>
        <Dostavka/>
        <Forma/>
        <Kontakt/>
      <div>
      </div>
      </div>
    </>
  )
}

export default App
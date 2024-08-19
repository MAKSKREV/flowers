import './dostavkastyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import './dostavkastyle.css';
import Bec from '../assets/bec2.png';
import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';

function Dostavka() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 1.0 });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref]);

  useEffect(() => {
    if (isVisible) {
      gsap.from(['#dostavka', '#privet'], {
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power3.inOut',
      });
    }
  }, [isVisible]);

  return (
    <div className='Dostavka'>
      <div ref={ref} className={`boxxx ${isVisible ? 'animate' : ''}`}>
        <img src={Bec} alt="" />
        <h1 id='dostavka'>Доставка</h1>
        <p id='privet'>Возьмём на себя все заботы по созданию, оформлению и доставке корпоративных букетов в обычные и праздничные дни за разумные деньги</p>
      </div>
    </div>
  );
}

export default Dostavka;
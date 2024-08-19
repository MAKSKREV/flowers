import './dostavkastyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import './kontaktstyle.css';
import Img0 from '../assets/wauber.png';
import Img1 from '../assets/fac.png';
import Img2 from '../assets/what.png';
import Img3 from '../assets/inst.png';



function Dostavka() {
  return (
    <div className='Kontakt'>
        <h1>Контакты:</h1>
        <p id='pp1'>+749500000000</p>
        <p id='pp2'>VozmiteMenyaNaStzhiRovkU@gmail.com</p>
        <div className='icons'>
  <img src={Img0} alt="" style={{ marginRight: 20 }} />
  <img src={Img1} alt="" style={{ marginRight: 20 }} />
  <img src={Img2} alt="" style={{ marginRight: 20 }} />
  <img src={Img3} alt="" />
</div>
        <p id='prava'>©2024. Все права защищены </p>
        
    </div>
  );
}

export default Dostavka;
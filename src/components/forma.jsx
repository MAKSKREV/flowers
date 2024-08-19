import './dostavkastyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import './formastyle.css';
import Img from '../assets/flowerform.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Dostavka() {
  const [formData, setFormData] = useState({});

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios.post(`https://api.telegram.org/bot7253744037:AAEbo772K93kWWEv_6DRkwlUrqRzIay7zQc/sendMessage`, {
      chat_id: '5176998143',
      text: `Предложили свой букет\nИмя: ${formData.name}\nНомер: ${formData.phone}\nИдея: ${formData.idea}`,
      photo: Img,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='Forma'>
      <h1>Предложи свой букет</h1>
      <div className='inputi'>
        <input className='form-control' placeholder='Имя' type="text" name="name" onChange={handleFormChange} />
        <input className='form-control'  placeholder='Телефон' type="text" name="phone" onChange={handleFormChange} />
        <textarea className='form-control' id='inutt' placeholder='Ваша идея' rows={5} name="idea" onChange={handleFormChange} />
      </div>
      <img src={Img} alt="" />
      <button onClick={handleFormSubmit}>Отправить</button>
    </div>
  );
}

export default Dostavka;
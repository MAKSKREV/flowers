import { useState, useEffect } from 'react';
import axios from 'axios';
import image1 from '../assets/rozi.jpg';
import image2 from '../assets/rozi2.jpg';
import image3 from '../assets/rozi3.webp';
import '../App.css'
import { text } from '@fortawesome/fontawesome-svg-core';

function Skidki() {
  const components = [
    { key: 1, src: image1, alt: "Image 1" },
    { key: 2, src: image2, alt: "Image 2" },
    { key: 3, src: image3, alt: "Image 3" },
    { key: 4, src: image1, alt: "Image 4" },
    { key: 5, src: image2, alt: "Image 5" },
    { key: 6, src: image3, alt: "Image 6" },
    { key: 7, src: image2, alt: "Image 7" },
    { key: 8, src: image1, alt: "Image 8" },
    { key: 9, src: image3, alt: "Image 9" },
    { key: 10, src: image2, alt: "Image 10" },
    { key: 11, src: image3, alt: "Image 11" },
    { key: 12, src: image1, alt: "Image 12" },
  ];

  const [visibleComponents, setVisibleComponents] = useState(components.slice(0, 4));
  const [currentPage, setCurrentPage] = useState(1);
  const [transition, setTransition] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const handlePageChange = (page) => {
    setTransition(true);
    setTimeout(() => {
      const startIndex = (page - 1) * 4;
      const endIndex = startIndex + 4;
      setVisibleComponents(components.slice(startIndex, endIndex));
      setCurrentPage(page);
      setTransition(false);
    }, 500);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  
    axios.post(`https://api.telegram.org/bot7253744037:AAEbo772K93kWWEv_6DRkwlUrqRzIay7zQc/sendMessage`, {
      chat_id: '5176998143',
      text: `Заказ на цветы\nИмя: ${formData.name}\nНомер: ${formData.phone}`,
      photo: formData.flowerImage,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOrder = (component) => {
    setFormData({ ...formData, flowerImage: component.src });
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="becc">
      <div className="skidkii">
        {visibleComponents.map((component) => (
          <div key={component.key} className={transition ? 'fade-out' : 'fade-in'}>
            <div className="boxx">
              <img src={component.src} alt={component.alt} />
              <div className="Xit">
                <p style={{ backgroundColor: "#FD4F79" }}>ХИТЫ ПРОДАЖ</p>
                <p style={{ backgroundColor: "#4AE950" }}>НОВИНКА</p>
                <p style={{ backgroundColor: "#FD984F" }}>БУКЕТ ДНЯ</p>
              </div>
              <button
                className="zakaz"
                onClick={() => handleOrder(component)}
              >
                <p>Заказать</p>
              </button>
              {showForm && (
                <form
                  onSubmit={handleFormSubmit}
                  style={{
                    position: 'fixed',
                    top: '50%',
                    width:'30%',
                    height:'35%',
                    zIndex:'999999999',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 10,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    animation: showForm ? 'fadeIn 0.5s' : 'fadeOut 0.5s',
                  }}
                >
                  <button className='krest' onClick={handleCloseForm}>✕</button>
                  <h1 className='ostavte'>Оставьте заявку на заказ♡</h1>
                  <img  className='cvat' src={formData.flowerImage} alt={component.alt} style={{ width: 250, height:250,position:'relative',left:'-10%' }} />
                  <label>
                    <input  placeholder='Имя:' className='namee' type="text" name="name" onChange={handleFormChange} />
                  </label>
                  <br />
                  <label>
                    <input className='tele' placeholder='Телефон:' type="tel" name="phone" onChange={handleFormChange} />
                  </label>
                  <br />

                  <br />
                  <button className='subb' type="submit">Отправить</button>
                </form>
              )}
              <p className="imazakaza">№225 “Ромашки для Наташки” </p>
              <p className="full">5 400 rub</p>
              <p className="skidka">3 700 rub</p>
            </div>
          </div>
        ))}
      </div>
      <div className="knopki">
        <button
          className={`pink-button ${currentPage === 1 ? 'gray-background' : ''}`}
          onClick={() => handlePageChange(1)}
        ></button>
        <button
          className={`pink-button ${currentPage === 2 ? 'gray-background' : ''}`}
          onClick={() => handlePageChange(2)}
        ></button>
        <button
          className={`pink-button ${currentPage === 3 ? 'gray-background' : ''}`}
          onClick={() => handlePageChange(3)}
        ></button>
      </div>
    </div>
  );
}

export default Skidki;
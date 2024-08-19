import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChevronDown);

function Menu() {
  const [show, setShow] = useState(false);
  const [category1Expanded, setCategory1Expanded] = useState(false);
  const [category2Expanded, setCategory2Expanded] = useState(false);

  const handleToggle = () => {
    setShow(!show);
    if (show) {
      setTimeout(() => {
        setCategory1Expanded(false);
        setCategory2Expanded(false);
      }, 500);
    }
  };

  const handleCategory1Click = () => {
    setCategory1Expanded(!category1Expanded);
  };

  const handleCategory2Click = () => {
    setCategory2Expanded(!category2Expanded);
  };

  return (
    <div className="menu slow-reveal-box">
      <button className="burger" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`nav ${show ? 'show' : 'hide'}`}>
        <ul>
          <li data-mdb-sidenav-toggler data-mdb-sidenav-toggler-target="#sidenav-1">
            <a href="#">Home</a>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li className="sidenav-item">
            <a
              className="sidenav-link"
              onClick={handleCategory1Click}
            >
              <i className="fas fa-grin fa-fw me-3"></i>
              <span>Category 1</span>
              <FontAwesomeIcon icon={faChevronDown} className={`${category1Expanded ? 'up' : 'down'}`} />
            </a>
            <ul
              className={`sidenav-collapse ${category1Expanded ? 'show' : ''}`}
            >
              <li className="sidenav-item">
                <a className="sidenav-link">Link 1</a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link">Link 2</a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link">Link 3</a>
              </li>
            </ul>
          </li>
          <li className="sidenav-item">
            <a
              className="sidenav-link"
              onClick={handleCategory2Click}
            >
              <i className="fas fa-grin-wink fa-fw me-3"></i>
              <span>Category 2</span>
              <FontAwesomeIcon icon={faChevronDown} className={`${category2Expanded ? 'up' : 'down'}`} />
            </a>
            <ul
              className={`sidenav-collapse ${category2Expanded ? 'show' : ''}`}
            >
              <li className="sidenav-item">
                <a className="sidenav-link">Link 4</a>
              </li>
              <li className="sidenav-item">
                <a className="sidenav-link">Link 5</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
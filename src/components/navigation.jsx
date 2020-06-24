import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ArrowLeft from '../assets/svg/arrow-left-circle.svg'
import ArrowRight from '../assets/svg/arrow-right-circle.svg'

class Navigation extends Component {
  render() {
    return (
      <div className="nav-container">
        <NavLink className="nav-links" to="/nike">Nike's</NavLink>
        <img className="arrows"  src={ArrowLeft}  alt="left-arrow"/>
        <img className="arrows" src={ArrowRight}  alt="right-arrow"/>
        <NavLink className="nav-links" to="/adidas">Adidas</NavLink>
      </div>
    )
  }
}


export default Navigation;
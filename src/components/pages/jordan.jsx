import React, { Component } from 'react';

import Jordan1 from '../../assets/jordan/air-jordan-1.jpg';

import Jordan1mid from '../../assets/jordan/air-jordan-1-mid.jpg';
import Jordan1midSE from '../../assets/jordan/air-jordan-1-mid-se-.jpg';
import Jordan3 from '../../assets/jordan/air-jordan-3.jpg';
import Jordanxxx from '../../assets/jordan/air-jordan-xxxiv.jpg';
import Jordandelta from '../../assets/jordan/jordan-delta.jpg';
import Jordanzero from '../../assets/jordan/jordan-why-not-zero.jpg';
import Jordanmax200 from '../../assets/jordan/jordan-max-200.jpg';
import Jordandub from '../../assets/jordan/air-jordan-dub.jpg';
import Jordanaerospace from '../../assets/jordan/jordan-aerospace-720.jpg';
import Jordanmaxin from '../../assets/jordan/jordan-maxin-200.jpg';
import JordanlowSE from '../../assets/jordan/air-jordan-1-low-se.jpg';

class Jordan extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="content-box">
          <div className="content-header">
            <h1>Nike Jordan's Storage</h1>
            <p>Click for more info.</p>
          </div>
        </div>
        <div className="cards">
        <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-jordan-1-mid-shoe-1zMCFJ/554724-067">
                <img src={Jordan1mid} alt="" />
              </a>
              <h3>Air Jordan 1 Mid</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-max-2090-betrue-mens-shoe-vR9RlQ/CZ4090-900">
                <img src={Jordan1} alt="" />
              </a>
              <h3>Air Jordan 1 Low</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-jordan-1-mid-shoe-1zMCFJ/554724-067">
                <img src={Jordan1midSE} alt="" />
              </a>
              <h3>Air Jordan 1 Mid SE</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-jordan-3-retro-se-shoe-gt1c9k/CV3583-003">
                <img src={Jordan3} alt="" />
              </a>
              <h3>Air Jordan 3 Retro SE</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-jordan-xxxiv-basketball-shoe-RG4jCV/AR3240-101">
                <img src={Jordanxxx} alt="" />
              </a>
              <h3>Air Jordan XXXIV</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/jordan-delta-mens-shoe-jpSKRQ/CD6109-001">
                <img src={Jordandelta} alt="" />
              </a>
              <h3>Jordan Delta</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/jordan-why-not-zer03-basketball-shoe-LJCLGj/CD3003-600">
                <img src={Jordanzero} alt="" />
              </a>
              <h3>Jordan Why Not? Zer0.3</h3>
            </div>
          </div>

          
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/jordan-max-200-mens-shoe-GJqQKz/CD6105-601">
                <img src={Jordanmax200} alt="" />
              </a>
              <h3>Jordan Max 200</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-jordan-dub-zero-mens-shoe-vYVG0Z/311046-116">
                <img src={Jordandub} alt="" />
              </a>
              <h3>Air Jordan Dub Zero</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/jordan-aerospace-720-mens-shoe-dBclR3/BV5502-101">
                <img src={Jordanaerospace} alt="" />
              </a>
              <h3>Jordan Aerospace 720</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/jordan-maxin-200-mens-shoe-Zk8N14/CD6107-106">
                <img src={Jordanmaxin} alt="" />
              </a>
              <h3>Jordan Maxin 200</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.nike.com/t/air-jordan-1-low-se-shoe-nXwv4t/CW5564-001">
                <img src={JordanlowSE} alt="" />
              </a>
              <h3>Air Jordan 1 Low SE</h3>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default Jordan;
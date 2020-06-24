import React, { Component } from 'react';


import Boost350 from '../../assets/yeezy/boost350.png';
import Boost350V2 from '../../assets/yeezy/boost350v2.png';
import Boost380 from '../../assets/yeezy/boost380.jpg';
import Boost500 from '../../assets/yeezy/boost500.png';
import Boost700 from '../../assets/yeezy/boost700.png';
import Boost700V2 from '../../assets/yeezy/boost700v2.png';
import Boost750 from '../../assets/yeezy/boost750.png';


class Yeezy extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="content-header">
          <h1>Adidas Yeezy's Storage</h1>
          <p>Click for more info.</p>
        </div>
        <div className="cards">
          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-350/">
                <img src={Boost350} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 350</h3>
            </div>
          </div>

          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-350-v2/">
                <img src={Boost350V2} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 350 V2</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-380/">
                <img src={Boost380} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 380</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-500/">
                <img src={Boost500} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 500</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-700/">
                <img src={Boost700} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 700</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-700-v2/">
                <img src={Boost700V2} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 700 V2</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://yeezyen.com/product-category/boost-750/">
                <img src={Boost750} alt="" />
              </a>
              <h3>Adidas Yeezy Boost 750</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Yeezy;
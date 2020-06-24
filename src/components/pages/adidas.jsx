import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Run4D from '../../assets/adidas/4drun.jpg';
import Nmdr1 from '../../assets/adidas/nmdr1.jpg';
import Matchbreaksuper from '../../assets/adidas/matchbreaksuper.jpg';
import Nizza from '../../assets/adidas/nizza.jpg';
import Ultraboost20 from '../../assets/adidas/ultraboost20.jpg';
import Stan from '../../assets/adidas/stan.jpg';
import Superstarpride from '../../assets/adidas/superstarpride.jpg';
import Nitejogger from '../../assets/adidas/nitejogger.jpg';
import Climacool from '../../assets/adidas/climacool.jpg';
import CrazyBYW from '../../assets/adidas/crazybyw.jpg';
import CodeChaos from '../../assets/adidas/codechaos.jpg';
import Adilette from '../../assets/adidas/adilette.jpg';


class Adidas extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="content-box">
          <div className="content-header">
            <h1>Yeezy's Storage</h1>
            <p>Click for more info.</p>
          </div>
            <Link className="content-jordan" to="/yeezy">Yezzy's</Link>
        </div>
        <div className="cards">
          <div className="card">
              <div>
                <a href="https://www.adidas.com/us/stan-smith-shoes/EH2237.html">
                  <img src={Stan} alt="" />
                </a>
                <h3>STAN SMITH SHOES</h3>
              </div>
            </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/4d-run-1.0-shoes/FW1229.html">
                <img src={Run4D} alt="" />
              </a>
              <h3>4D RUN 1.0 SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/nmd_r1-shoes/FV8729.html">
                <img src={Nmdr1} alt="" />
              </a>
              <h3>NMD_R1 SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/matchbreak-super-shoes/FV5973.html">
                <img src={Matchbreaksuper} alt="" />
              </a>
              <h3>MATCHBREAK SUPER SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/nizza-trefoil-shoes/FW5184.html">
                <img src={Nizza} alt="" />
              </a>
              <h3>NIZZA TREFOIL SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/ultraboost-20-shoes/EF1042.html">
                <img src={Ultraboost20} alt="" />
              </a>
              <h3>ULTRABOOST 20 SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/superstar-pride-shoes/FY9022.html">
                <img src={Superstarpride} alt="" />
              </a>
              <h3>SUPERSTAR PRIDE SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/nite-jogger-pride-shoes/FY9023.html">
                <img src={Nitejogger} alt="" />
              </a>
              <h3>NITE JOGGER PRIDE SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/climacool-vento-shoes/FX4730.html">
                <img src={Climacool} alt="" />
              </a>
              <h3>CLIMACOOL VENTO SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/crazy-byw-lvl-x-pharrell-williams-shoes/G27805.html">
                <img src={CrazyBYW} alt="" />
              </a>
              <h3>CRAZY BYW LVL X PHARRELL</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/codechaos-golf-shoes/FU7491.html">
                <img src={CodeChaos} alt="" />
              </a>
              <h3>CODECHAOS GOLF SHOES</h3>
            </div>
          </div>
          <div className="card">
            <div>
              <a href="https://www.adidas.com/us/adilette-boost-slides/EH2256.html">
                <img src={Adilette} alt="" />
              </a>
              <h3>ADILETTE BOOST SLIDES</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Adidas;
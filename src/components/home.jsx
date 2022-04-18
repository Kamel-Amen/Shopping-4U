import React from 'react';
import Navbar from './Navbar';
import onlineS from '../img/Home/aboutUs.jpg';
import onlineText from '../data/data.json';
import getImg from './../data/images';
import '../Files/comp.scss';

class Home extends React.Component {
  state = {
    margins: [75, 302, 530, 751, 981, 1209],
    images: getImg(),
  };

  createLamp() {
    return (
      <div className='lamp position-relative'>
        <div className='position-absolute' id='circle'></div>
        <span className='position-absolute' id='string'></span>
      </div>
    );
  }

  shapes() {
    return (
      <div>
        <div className='div1' id='one'></div>
        <div className='div1' id='two'></div>
        <div className='div2' id='three'></div>
        <div className='div2' id='four'></div>
      </div>
    );
  }

  render() {
    const { images, margins } = this.state;
    return (
      <div>
        <Navbar />
        <div className='home-page' id='home'>
          <a
            className='btn btn-danger position-fixed btn-lg top-50 px-4'
            href='#home'
          >
            UP
          </a>
          <div className='sec-1 position-relative'>
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
              <h1>Easy & Completable Shopping</h1>
              <h5 className='text-capitalize'>
                Your comfort and meeting your needs are our goals
              </h5>
              <a className='btn btn-warning px-5 mt-4 fs-4' href='#contact'>
                Contact Us
              </a>
            </div>
          </div>
          <div className='sec-2 row m-0 overflow-hidden'>
            <div className='col-6 leftSide p-5'>
              <header className='fs-2 mt-5 mb-3'>Online Shopping</header>
              <p>
                &nbsp;&nbsp;{onlineText.homeOnlineShopping}{' '}
                <span>'Shopping 4U'.</span>
              </p>
            </div>
            <div className='col-6 rightSide pt-5'>
              <div className='mx-auto'>
                <img src={onlineS} alt='online' />
              </div>
            </div>
          </div>
          <div className='sec-3 py-3'>
            <header className='text-center fs-1'>Why Us ?!</header>
            <div className='row m-0 mt-5 position-relative'>
              {margins.map((e) => {
                return (
                  <div className='slide col ms-1 me-3' key={e}>
                    <header
                      className='fs-1 text-center position-absolute'
                      style={{ left: e + 'px' }}
                    >
                      A
                    </header>
                    <p className='mt-4 pb-4 fs-4 fw-lighter text-center'>
                      {onlineText.lorem}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='sec-4 p-5'>
            <header className='fs-1 text-center mb-5'>Brands</header>
            {Object.values(images).map((e) => {
              return (
                <div
                  className='sponsor d-inline-block p-1 m-2'
                  key={e}
                  onClick={() => alert('Welcome :)')}
                >
                  <img src={e} alt='apple' />
                </div>
              );
            })}
          </div>
          <div className='sec-5 position-relative overflow-hidden' id='contact'>
            <header className='position-absolute top-50 start-50 translate-middle fs-1 text-uppercase'>
              Animation Side
            </header>
            {this.createLamp()}
            {this.createLamp()}
            {this.createLamp()}
            <div className='shapes position-absolute top-50 start-0 translate-middle'>
              {this.shapes()}
            </div>
            <div className='shapes position-absolute top-50 start-50 translate-middle'>
              {this.shapes()}
            </div>
            <div className='shapes position-absolute top-50 start-100 translate-middle'>
              {this.shapes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

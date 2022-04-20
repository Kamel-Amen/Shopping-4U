import React from 'react';
import Navbar from './Navbar';

class About extends React.Component {
  render() {
    let link = 'https://completeportofolio.000webhostapp.com/';
    return (
      <div>
        <Navbar />
        <div className='about position-relative'>
          <a className='btn btn-dark btn-lg position-absolute' href={link}>
            Contact Me
          </a>
        </div>
      </div>
    );
  }
}

export default About;

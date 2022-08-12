import React from 'react';

import './styles.css';
import ClockIcon from '../../assets/icons/clock.svg';
import PeopleIcon from '../../assets/icons/people.svg';
import HandIcon from '../../assets/icons/hand.svg';
import CutIcon from '../../assets/icons/cut.svg';
import ColorIcon from '../../assets/icons/color.svg';
import HoneyIcon from '../../assets/icons/honey.svg';

import gallery from '../../constants/gallery';

import NavBar from '../../components/NavBar';
import Banner from '../../assets/images/banner.png';
import Button from '../../components/Button';
import PunchlineCard from '../../components/Cards/PunchlineCard';
import ServiceCard from '../../components/Cards/ServiceCard';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <div className='header'>
        <NavBar />
        <div className='banner'>
          <div className='banner-details'>
            <h1>A Smooth <span>BarberShop</span> Experience in Tunisia.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button text='Appointment' />
          </div>
          <img 
            alt='banner'
            src={Banner}  />
        </div>
      </div>

      {/* Punchlines */}
      <div className='block-container'>
        <div className='punchlines'>
          <PunchlineCard
            icon={ClockIcon}
            title='24/7 Opened'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          <PunchlineCard
            icon={PeopleIcon}
            title='Professional Staff'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
          <PunchlineCard
            icon={HandIcon}
            title='Fair Prices'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
        </div>
      </div>

      {/* Services */}
      <div className='block-container'>
        <div className='block-header'>
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='services'>
          <ServiceCard
            icon={CutIcon}
            title="Style Hair Cut"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          <ServiceCard
            active={true}
            icon={ColorIcon}
            title="Hair Color"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          <ServiceCard
            icon={HoneyIcon}
            title="Honey Treatment"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        </div>
      </div>

      {/* Gallery */}
      <div className='block-container'>
        <div className='block-header'>
          <h1>Our Gallery</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='gallery'>
          {gallery.slice(0.2).map((item, index) => (
            <img src={item.picture} alt={item.id} key={index} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className='block-container'>
        <div className='newsletter'>
          <h3>Our Newsletter</h3>
          <h1>Subscribe and get your first haircut for free !</h1>
          <div className='input-container'>
            <input 
              type='text'
              placeholder='Enter your email..' />
            <Button text='Subscribe' />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
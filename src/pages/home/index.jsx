import React from 'react';
import Header from '../../components/home/Header';
import StartWatching from '../../components/home/StartWatching';
import Feature from '../../components/home/Feature';
const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className='hero-section'>
          <div className='home-header-image'>
            <img src={require(`../../assets/images/home-header.jpg`)} alt="HomeHeader"/>
          </div>
          <StartWatching/>

        </div>

      <Feature
        title="Enjoy on your TV"
        desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image='tv.png'
        video='tv-video.m4v'
        reverse='true'
      />
    </div>
  );

}
export default HomePage;

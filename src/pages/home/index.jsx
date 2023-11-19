import React from 'react';
import Header from '../../components/home/Header';
import HomeHeader from '../../assets/images/home-header.jpg'
const HomePage = () => {
    return (
        <div>
            <Header />
            <div className='hero-section'>
                <div className='home-header-image'>
                    <img src={HomeHeader} alt="HomeHeader" />
                </div>
                <h1>Home Page</h1>
            </div>
            
        </div>
    );

}
export default HomePage;

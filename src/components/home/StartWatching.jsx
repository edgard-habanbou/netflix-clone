import React from 'react';
import '../../pages/home/home.css';
import Input from '../../components/common/Input';
import GetStarted from '../../components/home/GetStarted';

const StartWatching = () => {
  return (
    <div className="start-watching">
      <div>
        <h2 className='txt-xl'>Unlimited movies, TV shows, and more</h2>
      </div>
      <div>
        <h2 className='txt-md'>Watch anywhere. Cancel anytime.</h2>
      </div>
      <div>
        <h2 className='txt-md'>Ready to watch? Enter your email to create or restart your membership.</h2>
      </div>
      <div className='get-started'>
        <Input placeholder="Email address"/>
        <GetStarted />
      </div>
    </div>

  );
}

export default StartWatching;
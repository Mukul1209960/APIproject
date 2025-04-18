import React from 'react';
import UserInfo from '../Components/UserInfo';
import profileBig from '../assets/profileBig.png'
import Notes from '../Components/Notes';
import Weather from '../Components/Weather';
import News from '../Components/News';

const Display = () => {
  return (
    <div className="flex justify-start items-start gap-5 ">
      <img src={profileBig} alt="profileBig" />

      <UserInfo />
      <Notes />
      
      <News />
      
    </div>
  )
}

export default Display

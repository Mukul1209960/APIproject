import React from 'react';
import UserInfo from '../Components/UserInfo';
import profileBig from '../assets/profileBig.png'
import Notes from '../Components/Notes';

const Display = () => {
  return (
    <div className="flex justify-start items-start gap-5 ">
      <img src={profileBig} alt="profileBig" />

      <UserInfo />
      <Notes />
      
    </div>
  )
}

export default Display

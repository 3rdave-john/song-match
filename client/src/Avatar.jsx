import React from 'react';
import avatar from './assets/images/samsung1.gif';
import './Avatar.css';

const Avatar = () => (
  <div className="albums">
    <div className="album">
      <img className="album__artwork" alt="" src={avatar} />
    </div>
  </div>
);

export default Avatar;

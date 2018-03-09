import React from 'react';
import avatar from './assets/images/samsung1.gif';
import NameForm from './Form';

import './Avatar.css';

class Avatar extends React.Component {
  render() {
    return (
      <div className="albums">
        <div className="album">
          <img className="album__artwork" alt="" src={avatar} />
          <NameForm addUser={this.props.addUser} />
        </div>
      </div>
    );
  }
}
export default Avatar;

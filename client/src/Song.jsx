import React from 'react';
import NameForm from './Form';
import './Song.css';

class Song extends React.Component {
  render() {
    return (
      <div className="song">
        <h2>Song</h2>
        <NameForm addUser={this.props.addUser} />
        <button onClick={this.props.loadSampleSongs}>Load Sample Songs</button>
      </div>
    );
  }
}
export default Song;

import React from 'react';
import './App.css';
import Avatar from './Avatar';
import Song from './Song';
import NameForm from './Form';
import SampleSongs from './sample-songs';
import Header from './Header';
import Data from './Data';

class App extends React.Component {
// best to keep state based on whatever the shape of the value for example Arr, Obj, Num etc..
  state = {
    users: {},
    songs: {}
  };
// Anytime you create custom functions that update state.
// You need to use the same component where our state lives.
  addUser = user => {
    console.log('hello world')
    // 1. Take a copy of the existing state
    const users = {...this.state.users}
    // 2. Add our new user to that of users variable
    users[`user${Date.now()}`] = user;
    // 3. Set the new users object to state
    this.setState({
      users: users
    })
    // To update state you pass in const users, that will take our copied old users plus our new user
    // and overwrite the exisiting state which will then trigger a change in React
    // And if they're dispalyed anywhere on the page, then they will be able to show up.
    // So this has a state of users
    // if your property and value === same, ES6 you can just pass {users} instead of {users : users}
  };

  loadSampleSongs = () => {
    this.setState({ songs: SampleSongs })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <h1> Songs</h1>
            <ul className="songs">
            {Object.keys(this.state.songs).map(key => <Data key={key} details={this.state.songs[key]} />)}
            </ul>
        </div>
        <Avatar />
        <Song addUser={this.addUser} loadSampleSongs={this.loadSampleSongs}/>
      </div>
    );
  }
}

export default App;

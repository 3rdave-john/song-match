import React from 'react';
// import axios from 'axios';

/*eslint-disable*/
class NameForm extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();

  createUser = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    const user = {
      name: this.nameRef.value.value,
      email: this.emailRef.value.value
    };
    this.props.addUser(user);
    // refresh the form
    // calling "event.curentTarget" ==> will call the form itself <form></form>
    // event.currentTarget.reset();
  };

  render() {
    return (
      <form className="form" onSubmit={this.createUser}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        <input name="email" ref={this.emailRef} type="text" placeholder="Email"/>
        <button type="submit">+ Create User </button>
      </form>
    );
  }
}

export default NameForm;

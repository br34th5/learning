import React from 'react';

// Lets export this component and import to App.js
export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

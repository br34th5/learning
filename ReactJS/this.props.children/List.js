import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) { 
      /* if there's more than 1 children element, ReactJS will 
      return those children in array. 
      If this condition is met, give titleText "s" which will
      automatically pluralize the titles!
      In this case we'll see either Musician or Musicians
      as our title */
    	titleText += 's'; 
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
import React, { Component } from 'react';


export default class Customer extends Component {
  render() {
    return (
      <div>
          <p>{this.props.data.name}</p>
          <p>{this.props.data.phone}</p>
      </div>
    );
  }
}

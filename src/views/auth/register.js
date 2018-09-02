import React, { Component } from 'react';
import styles from '../../styles'
import { Link } from "react-router-dom";


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Register</h2>
        <input type="text" placeholder="Email or Username" style={styles.formControl}/>
        <input type="text" placeholder="Password" style={styles.formControl}/>
        <input type="button" style={styles.formControl} value="Register"/>
        <Link to="/">Login</Link>    
      </div>
    );
  }
}

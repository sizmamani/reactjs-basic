import React, { Component } from 'react';
import styles from '../../styles'
import { Link } from "react-router-dom";
import login from '../../service/axios'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    };
  }

  handleChangeValue(type, event){
    switch (type){
        case "username":
            this.setState({
                username : event.target.value
            })
            break
        case "password":
            this.setState({
                password : event.target.value
            })
            break
        default:
            break        
    }
  }

  handleLogin(){
      if (this.validateForm()) {
        if (this.state.username === '1' && this.state.password === '1'){
            login()
        }
      } else {
          console.log("invalid user entry")
      }
  }

  validateForm(){
      if (this.state.username === '' || this.state.password === '') {
          return 
      } else {
          return true
      }
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Login</h2>
        <input 
            type="text" 
            onChange={(event)=> this.handleChangeValue('username', event)} 
            placeholder="Email or Username" 
            style={styles.formControl}
        />
        <input 
            type="password" 
            onChange={(event)=> this.handleChangeValue('password', event)} 
            placeholder="Password" 
            style={styles.formControl}
        />
        <input type="button" style={styles.formControl} value="Login" onClick={()=>this.handleLogin()}/>
        <Link to="/register">Register</Link>


      </div>
    );
  }
}

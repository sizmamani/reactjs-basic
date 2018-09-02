// import React, {Component} from 'react'
// import Login from './Components/login'
// import Register from './Components/register'
// import styles from './Styles'

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       name : 'sajed',
//       formType: 'login'
//     }
//   }

//   componentWillMount(){
//     this.setState({
//       name: 'Component Will Mount'
//     })
//   }

//   componentDidMount(){
//     this.setState({
//       name: 'Component Did Mount'
//     })
//   }

//   componentWillUnmount(){

//   }

//   componentWillReceiveProps(){

//   }

//   componentDidCatch(){

//   }

//   changeName(name){
//     this.setState({
//       name : name
//     })
//   }

//   handleFormType(){
//     this.setState({
//       formType: (this.state.formType==='login') ? 'register': 'login'}
//     )
//   }
  

//   render(){
//     return (
//       <div>
//         { this.state.formType === 'login' &&
//         <Login />
//         }
//         { this.state.formType === 'register' &&
//         <Register/>
//         }
//         <div 
//           style={styles.bottomLink} 
//           onClick={()=>this.handleFormType()}>
//           click here to {(this.state.formType === 'login') ? 'Register' : 'Login'  }
//         </div>
//       </div>
//     )
//   }
// }

// export default App


import React from "react";
import Router from './router'

const App =()=>{
return (
  <Router />
);}
export default App;
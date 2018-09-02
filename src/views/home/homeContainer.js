import React, { Component } from 'react';
import HomeComponent from './homeComponent'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        customers: [
            {
                name: 'Customer 1',
                phone: '034556566'
            },
            {
                name: 'Customer 2',
                phone: '109328373'
            },
            {
                name: 'Customer 3',
                phone: '6465435345'
            },
            {
                name: 'Customer 4',
                phone: '534344344'
            }
        ],
        newCustomerName: '',
        newCustomerPhone: ''
    };
  }

  componentWillMount(){
      
  }

  setNewCustomerName(value){
    this.setState({
        newCustomerName: value
    })
  }

  setNewCustomerPhone(value){
    this.setState({
        newCustomerPhone: value
    })
  }

  
  addNewCustomer(){
      console.log("you are pressing me")
      var customers = this.state.customers  
      customers.push({
        name: this.state.newCustomerName,
        phone: this.state.newCustomerPhone
      })  
      this.setState({
          customers,
          newCustomerName: '',
          newCustomerPhone: '' 
      })

  }

  render() {
    return (
      <HomeComponent 
            setNewCustomerName={this.setNewCustomerName.bind(this)} 
            setNewCustomerPhone={this.setNewCustomerPhone.bind(this)} 
            addNewCustomer={()=>this.addNewCustomer()} 
            {...this.state} 
        />
    );
  }
}

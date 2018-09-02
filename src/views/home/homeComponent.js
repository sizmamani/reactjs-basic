import React from 'react'
import Customer from '../../components/customer'

export const HomeComponent = ({
    setNewCustomerName,
    setNewCustomerPhone,
    addNewCustomer,
    newCustomerName,
    newCustomerPhone,
    customers
}) => {
    return (
        <div className="row">{
            customers.map((customer, index) => {
                return <Customer key={index} data={customer} />
            })
        }
            <input
                type="text"
                value={newCustomerName}
                placeholder="name"
                onChange={(event) => setNewCustomerName(event.target.value)}
            />
            <input
                type="text"
                value={newCustomerPhone}
                placeholder="phone"
                onChange={(event) => setNewCustomerPhone(event.target.value)}
            />
            <button onClick={() => addNewCustomer()}>SAVE</button>
        </div>
    )
}

export default HomeComponent


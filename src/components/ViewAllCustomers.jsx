import React, { useEffect, useState } from 'react';
import CustomerServices from '../services/CustomerServices';
import "../static/css/ViewAllCustomers.css";

function ViewAllCustomers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerServices.getAllCustomers()
            .then(res => setCustomers(res.data))
            
    },[])


    return (
        <div className="viewAllCustomers">
            <table className="viewAllCustomers__table">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Purchases</th>
                    <th>Actions</th>
                </tr>
                {
                    customers ?
                    customers.map((customer, k) => (
                        <tr>
                            <td className="center">{customer.id}</td>
                            <td className="center">{customer.name}</td>
                            <td className="center">{customer.email}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))
                    :""
                }
            </table>
        </div>
    )
}

export default ViewAllCustomers

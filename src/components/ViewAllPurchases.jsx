import React, { useEffect, useState } from 'react';
import CustomerServices from '../services/CustomerServices';
import PurchaseServices from '../services/PurchaseServices';
import "../static/css/ViewAllPurchases.css";

function ViewAllPurchases() {
    const [purchases, setPurchases] = useState([]);
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        PurchaseServices.getAllPurchases()
            .then(res => setPurchases(res.data))

        CustomerServices.getAllCustomers()
            .then(res => setCustomers(res.data))
    },[])


    return (
        <div className="viewAllPurchases">
            <table className="viewAllPurchases__table">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Customer</th>
                    <th>Actions</th>
                </tr>

                {
                    purchases ?
                    purchases.map((purchase, k) => (

                        <tr>
                            <td className="align-center">{purchase.id}</td>
                            <td className="align-center">{purchase.title}</td>
                            <td className="align-center">{purchase.amount}</td>
                            
                                {
                                    customers ?
                                    customers.map((customer, key) => {
                                        if(purchase.customer_id === customer.id){
                                            return <td className="align-center">{customer.name}</td>
                                        }
                                    }):""
                                }
                            
                            <td>
                                <a 
                                    className="table__link"
                                    href="/"
                                >
                                    DELETE
                                </a>
                            </td>
                        </tr>

                    )):""
                }

            </table>
        </div>
    )
}

export default ViewAllPurchases

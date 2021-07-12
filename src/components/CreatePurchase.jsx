import React, { useState, useEffect } from 'react'
import CustomerServices from '../services/CustomerServices';
import { useHistory } from 'react-router-dom';
import PurchaseServices from '../services/PurchaseServices';

function CreatePurchase() {
    const history = useHistory();
    const [customers, setCustomers] = useState([]);
    const [purchase, setPurchase] = useState({
        title: "",
        amount: 0.01,
        customer_id: 0
    })

    useEffect(() => {
        CustomerServices.getAllCustomers()
            .then(res => setCustomers(res.data))
    },[customers])

    

    const changeHandler = e => {
        setPurchase({
            ...purchase,
            [e.target.name]: e.target.value
        })
    }

    const amountHandler = e => {
        setPurchase({
            ...purchase,
            [e.target.name]: parseFloat(e.target.value)
        })
    }

    const selectHandler = e => {
        setPurchase({
            ...purchase,
            customer_id: parseFloat(e.target.value)
        })
    }
    

    const submitHandler = e => {
        e.preventDefault();
        PurchaseServices.createPurchase(purchase);
        history.push("/");
    }

    return (
        <div className="createPurchase">
            <form>
                <input 
                    placeholder="Title..."
                    name="title"
                    onChange={changeHandler}
                    value={purchase.title}
                />

                <input 
                    type="number"
                    min="0.01"
                    step="0.01"
                    name="amount"
                    onChange={amountHandler}
                    value={purchase.amount}
                />  

                <select name="customer_id" onChange={selectHandler}>
                    {
                        customers ?
                        customers.map((customer, k) => (
                            <option 
                                value={parseFloat(customer.id)}
                            >
                                {customer.name}
                            </option>
                        ))
                        :""
                    }
                </select>

                <input type="submit" onClick={submitHandler} />    
            </form>
            
        </div>
    )
}

export default CreatePurchase

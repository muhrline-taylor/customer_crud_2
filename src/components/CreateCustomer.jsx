import React, { useState } from 'react';
import "../static/css/CreateCustomer.css";
import CustomerServices from '../services/CustomerServices';
import { useHistory } from 'react-router-dom';


function CreateCustomer() {
    const history = useHistory();
    const [form, setForm] = useState({
        name: "",
        email: ""
    })

    const changeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        CustomerServices.createCustomer(form);
        history.push("/");
    }


    return (
        <div className="createCustomer">
            <form onSubmit={submitHandler} enctype="multipart/form-data">
                <input 
                    placeholder="Name..." 
                    name="name"
                    value={form.name}
                    onChange={changeHandler}
                />
                <input 
                    placeholder="Email..." 
                    name="email" 
                    value={form.email}
                    onChange={changeHandler}
                />
                <input type="submit" onClick={submitHandler}/>
            </form>
        </div>
    )
}

export default CreateCustomer

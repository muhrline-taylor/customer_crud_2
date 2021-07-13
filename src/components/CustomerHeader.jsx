import React from 'react';
import "../static/css/CustomerHeader.css";

function CustomerHeader() {
    return (
        <div className="customerHeader">
            
            <div className="customerHeader__top">
                <h1>CustomerCRUD2</h1>
            </div>

            <div className="customerHeader__bottom">
                <div className="customerHeader__bottom__buttonContainer">
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/"
                    >
                        <p>Home</p>
                    </a>
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/customers/new"
                    >
                        <p>Create Customer</p>
                    </a>
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/customers"
                    >
                        <p>All Customers</p>
                    </a>
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/purchases/new"
                    >
                        <p>Create Purchase</p>
                    </a>
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/purchases"
                    >
                        <p>All Purchases</p>
                    </a>
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/products/new"
                    >
                        <p>Create Product</p>
                    </a>
                    <a 
                        className="customerHeader__bottom__buttonContainer__button"
                        href="/products"
                    >
                        <p>All Products</p>
                    </a>
                    
                </div>
            </div>


        </div>
    )
}

export default CustomerHeader

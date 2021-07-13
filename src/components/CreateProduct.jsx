import React, { useState } from 'react'
import ProductServices from '../services/ProductServices';
import { useHistory } from "react-router-dom";

function CreateProduct() {
    const history = useHistory();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0.01
    })

    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const priceHandler = e => {
        setProduct({
            ...product,
            price: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(product);
        ProductServices.createProduct(product);
        history.push("/");
    }


    return (
        <div className="createProduct">
            <form>

                <input 
                    placeholder="Name..."
                    value={product.name}
                    name="name"
                    onChange={changeHandler}
                />
                <input 
                    placeholder="Description..."
                    value={product.description}
                    name="description"
                    onChange={changeHandler}
                />
                <input 
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={product.price}
                    name="price"
                    onChange={priceHandler}
                />

                <input 
                    type="submit"
                    value="Submit"
                    onClick={submitHandler}
                />

            </form>
        </div>
    )
}

export default CreateProduct

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductServices from '../services/ProductServices';
import { useHistory } from 'react-router-dom';

function UpdateProduct({ ...props }) {
    const history = useHistory();
    const [product, setProduct] = useState({});

    useEffect(() => {
        ProductServices.getProductById(props.match.params.id)
            .then(res => {
                setProduct(res.data)
            })
    },[])


    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        ProductServices.updateProduct(product, props.match.params.id);
        history.push("/");
    }


    return (
        <div>
            
            <form>
                
                <input 
                    placeholder="Name..."
                    name="name"
                    value={product.name}
                    onChange={changeHandler}
                />

                <input 
                    placeholder="Description..."
                    name="description"
                    value={product.description}
                    onChange={changeHandler}
                />

                <input 
                    type="number"
                    name="price"
                    min="0.01"
                    step="0.01"
                    value={product.price}
                    onChange={changeHandler}
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

export default UpdateProduct

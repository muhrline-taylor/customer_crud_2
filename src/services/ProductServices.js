import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ProductServices {

    // API CALLS

    getAllProducts(){
        return axios.get(`${PRODUCT_API_BASE_URL}/`);
    }

    getProductById(id){
        return axios.get(`${PRODUCT_API_BASE_URL}/${id}`);
    }

    createProduct(reqBody){
        return axios.post(`${PRODUCT_API_BASE_URL}/new`, reqBody);
    }

    updateProduct(reqBody, id){
        console.log("working");
        console.log(reqBody);
        console.log(id);
        // UNFINISHED ------------- //
        return axios.put(`${PRODUCT_API_BASE_URL}/${id}/update`, reqBody);
    }

    deleteProduct(id){
        return axios.delete(`${PRODUCT_API_BASE_URL}/${id}`);
    }


}

export default new ProductServices();
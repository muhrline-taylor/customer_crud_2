import axios from 'axios';
import { navigate } from '@reach/router';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customers";

class CustomerServices {

    // API CALLS

    getAllCustomers(){
        return axios.get(`${CUSTOMER_API_BASE_URL}/`);
    }

    getCustomerById(id){
        return axios.get(`${CUSTOMER_API_BASE_URL}/${id}`);
    }

    createCustomer(reqBody){
        return axios.post(`${CUSTOMER_API_BASE_URL}/new`, reqBody);
    }

    deleteCustomer(id){
        return axios.delete(`${CUSTOMER_API_BASE_URL}/${id}`);
    }


    

}

export default new CustomerServices();
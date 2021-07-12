import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8080/purchases";

class PurchaseServices {
    // API CALLS

    getAllPurchases(){
        return axios.get(`${PURCHASE_API_BASE_URL}/`);
    }

    getPurchaseById(id){
        return axios.get(`${PURCHASE_API_BASE_URL}/${id}`);
    }

    createPurchase(reqBody){
        return axios.post(`${PURCHASE_API_BASE_URL}/new`, reqBody);
    }

    deletePurchase(id){
        return axios.delete(`${PURCHASE_API_BASE_URL}/${id}`);
    }

    




}

export default new PurchaseServices();
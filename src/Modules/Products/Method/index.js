import axios from "axios";
import { BASE_URL, BASE_URL2 } from "../../../url";


export const fetchAllProduct = async () => {

    const res = await fetch(`${BASE_URL}product`);
    return res.json();

}


export const fetchOneProduct = (id) => {

    const res = axios.get(`${BASE_URL}product/${id}`);

    return res;

}


export const fetchAllProductImage = async () => {

    const res = await fetch(`${BASE_URL}productimage`);
    return res.json();

}


export const fetchOneProductImage = (id) => {

    const res = axios.get(`${BASE_URL}productimage/${id}`);

    return res;

}

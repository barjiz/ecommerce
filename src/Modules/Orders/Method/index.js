import axios from "axios";
import { BASE_URL, BASE_URL2 } from "../../../url";


export const fetchAllOrders = () => {

    const res = axios.get(`${BASE_URL}order`);

    return res;

}


export const fetchAllProfile = () => {

    const res = axios.get(`${BASE_URL}user`);

    return res;

}

import axios from "axios";
import { BASE_URL } from "../../url";


export const fetchAllProduct = () => {

    const res = axios.get(`${BASE_URL}products`);

    return res;

}


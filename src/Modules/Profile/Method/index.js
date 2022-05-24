import axios from "axios";
import { BASE_URL } from "../../../url";


export const fetchProfile = (id) => {

    const res = axios.get(`${BASE_URL}user/${id}`);

    return res;

}



export const fetchAllProfile = () => {

    const res = axios.get(`${BASE_URL}user`);

    return res;

}



// export const fetchUserData = (id) => {

//     const res = axios.get(`${BASE_URL2}userdata`);

//     return res;

// }
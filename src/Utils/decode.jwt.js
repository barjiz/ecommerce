import jwt_decode from "jwt-decode";

export const decodeJwtToken = () => {

    var token = jwt_decode(localStorage.getItem("authToken"));

    return token.id;

}

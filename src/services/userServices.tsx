import axios from "axios";
const BASE_URL = "http://127.0.0.1:5000";

export const signin = (postData: object) => {
    return axios.post(`${BASE_URL}/signin`, postData);
};

export const signup = (postData: object) => {
    return axios.post(`${BASE_URL}/signup`, postData);
};

export const register = (postData: object) => {
    return axios.post(`${BASE_URL}/register`, postData);
};

export const get_register = (postData: object) => {
    return axios.post(`${BASE_URL}/register/data`, postData);
}

export const recommend = (postData: object) => {
    return axios.post(`${BASE_URL}/recommend`, postData);
}

export const get_recommend = () => {
    return axios.get(`${BASE_URL}/recommend/data`);
}

export const get_all = () => {
    return axios.get(`${BASE_URL}/all`);
}

export const get_adidas = () => {
    return axios.get(`${BASE_URL}/adidas`);
}

export const get_nike = () => {
    return axios.get(`${BASE_URL}/nike`);
}

export const get_puma = () => {
    return axios.get(`${BASE_URL}/puma`);
}

export const get_mizuno = () => {
    return axios.get(`${BASE_URL}/mizuno`);
}

export const get_others = () => {
    return axios.get(`${BASE_URL}/others`);
}

export const get_result = () => {
    return axios.get(`${BASE_URL}/result`);
}
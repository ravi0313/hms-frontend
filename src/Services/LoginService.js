import axios from "axios";


const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:56760' 
});

/** 

http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('apitoken');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
}, error => {
    Promise.reject(error);
});
*/
//http.interceptors.response.use()

const getLoginDetails = () => {
    return http.post('api/Signin');
}

let LoginService = { getLoginDetails };
export default LoginService;
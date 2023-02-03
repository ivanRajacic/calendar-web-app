import axios from "axios";

export const AxiosInstance = axios.create({ baseURL: 'https://api.github.com' });

AxiosInstance.interceptors.request.use(async request => {
    request.headers['Accept'] = 'application/vnd.github+json';
    request.headers['Authorization'] = 'Bearer' + process.env.GIT_API_TOKEN;

    return request;
})
import axios from "axios";

export const http = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: "http://localhost:5050",
});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

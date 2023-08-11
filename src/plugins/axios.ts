import { App, Plugin } from 'vue';
import axios, { AxiosInstance } from 'axios';

const config = {
    baseURL: process.env.VUE_APP_ENV,
    timeout: 60 * 1000,
};

const _axios: AxiosInstance = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

const axiosPlugin: Plugin = {
    install: function (app: App) {
        app.provide('axios', _axios); // 使用 'axios' 作为键名
    },
};

export default axiosPlugin;
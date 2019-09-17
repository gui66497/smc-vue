import axios from 'axios';
import router from '../router';

// axios 配置
axios.defaults.timeout = 8000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        //config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1Njc5MDc3NzQsImlhdCI6MTU2NzQ3NTc3NCwidXNlcm5hbWUiOiJ6aGFuZ3NhbiJ9.VQubPh4FI0nXCA4h2ZGzKz_Dv2-BlQX9imQWd3cUleaoMjeNaFYk03hwq44s2gWgg9tTco5z7GUqXdlomfXPVQ'
        if (localStorage.token) { //判断token是否存在
            config.headers.Authorization = localStorage.token;  //将token设置成请求头
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
/*axios.interceptors.response.use(
    response => {
        if (response.data.errno === 999) {
            router.replace('/');
            console.log("token过期");
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);*/
export default axios;

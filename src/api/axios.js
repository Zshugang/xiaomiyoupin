/* AXIOS的二次配置 */
import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';

axios.defaults.baseURL = "";//配置基础的URL
axios.defaults.withCredentials = true;//跨域请求 允许携带资源凭证
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";//设置请求头：post系列 一般传递个给服务器数据格式：x-www-form-urlencoded
axios.defaults.transformRequest = data => qs.stringify(data);
axios.interceptors.request.use(config => {
    //在登录成功后，把从服务器获取的TOKEN信息存储到本地，以后再发送请求的时候，一般会把TOKEN带上（自定义请求头携带）
    // let token = localStorage.getItem('token');
    // token && (config.headers['Authorization'] = token);
    return config;
   
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    console.log(response);
    if (response.code == 1) {
        Message.error({
            message: response.codeText,
            duration: 2000
        });
        return; 
    }
    return response.data;
}, reason => {
    let response = reason.response;
    if (response) {
        // 不同状态码下的统一操作
        switch (parseInt(response.status)) {
            case 400:
                break;
            case 401:
                // 一般情况是为登录
                break;
            case 403:
                // 一般情况是token过期
                break;
            case 404:
                //地址不存在
                // console.log(2)
                break;
        }
    } else {
        if (!window.navigator.onLine) {
            Message.error('系统繁忙 请稍后重试')
        }
    }
    return Promise.reject(reason);
});

export default axios;


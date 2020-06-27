/* AXIOS的二次配置 */
import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui'

axios.defaults.baseURL = "";//配置基础的URL
axios.defaults.withCredentials = true;//跨域请求 允许携带资源凭证
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";//设置请求头：post系列 一般传递个给服务器数据格式：x-www-form-urlencoded
axios.defaults.transformRequest = data => qs.stringify(data);
axios.interceptors.request.use(config => {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    if (response.code != 0) {
        Message.error({
            message: response.codeText,
            duration: 1000
        })
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
                break;
            case 403:
                break;
            case 404:
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


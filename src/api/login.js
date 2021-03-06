import axios from './axios';

//登录
function userLogin(options) {
    options = Object.assign({
        type: 1,
        account:'',
        password:''
    }, options)
    return axios.post('/user/login', options)
};

//校验是否登录

function loginOrnot() {
    return axios.get('/user/login')
};

//退出登录
function signout() {
    return axios.get('/user/signout')
};

//注册新用户
function register(options) {
    return axios.post('/user/register', options)
}

//获取用户信息
function getPersonalInfo(id) {
    return axios.get('/user/info', params={ id })
}

//验证手机号是否被注册
function phoneNumber(phone){
    return axios.post('/user/phone',{
        phone
    })
}

//发送短信验证码
function sendCaptcha(phone){
    return axios.post('/user/code',{
        phone
    })
}

//校验验证码是否正确
function captchaOront(options){
    options = Object.assign({
        phone:'',
        code:''
    },options)
    return axios.post('/user/checkCode',options)
}

export default {
    userLogin,
    loginOrnot,
    signout,
    register,
    getPersonalInfo,
    phoneNumber,
    sendCaptcha,
    captchaOront

};
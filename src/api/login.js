import axios from './axios';

//登录
function userLogin(options) {
    return axios.post('/login', options)
}
//校验是否登录

function loginOrnot() {
    return axios.get('/login')
}

//退出登录
function signout() {
    return axios.get('/signout')
}

//注册新用户
function register(options) {
    return axios.post('/register', options)
}

//获取用户信息
function getPersonalInfo(id) {
    return axios.get('/info', params={ id })
}

//验证手机号是否被注册
function phoneNumber(phone){
    return axios.post('/phone',{
        phone
    })
}

//发送短信验证码
function sendCaptcha(phone){
    return axios.post('/code',{
        phone
    })
}

//校验验证码是否正确
function captchaOront(options){
    return axios.post('/checkCode',options)
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
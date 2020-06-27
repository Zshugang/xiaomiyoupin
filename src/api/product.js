import axios from './axios';
//获取banner数据
function getBanner() {
    return axios.get('/banner')
}

//获取商品列表
function getProductlist(options) {
    options = Object.assign({
        type: '',
        recommend: false
    }, options)
    return axios.get('/list', options)
}

//获取限时抢购的商品 
function timeLimit(time) {
    return axios.get('/limited', time)
}

//获取商品信息
function productInfo(id) {
    return axios.get('/info', { id })
}

//获取类别
function getCategory(){
    return axios.get('/category')
}

//获取服务时间
function getServerTime(){
    return axios.get('/serverTime')
}

export default {
    getBanner,
    getProductlist,
    timeLimit,
    productInfo,
    getCategory,
    getServerTime


}
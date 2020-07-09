import axios from './axios';
//获取banner数据
function getBanner() {
    return axios.get('/product/banner')
}

//获取商品列表
function getProductlist(options) {
    options = Object.assign({
        type: '',
        recommend: false
    }, options)
    return axios.get('/product/list', options)
}

//获取限时抢购的商品 
function timeLimit(time) {
    return axios.get('/product/limited', time)
}

//获取商品信息
function productInfo(id) {
    return axios.get(`/product/info?id=`+`${id}`)
}

//获取类别
function getCategory() {
    return axios.get('/product/category')
}

//获取服务时间
function getServerTime() {
    return axios.get('/product/serverTime')
}

export default {
    getBanner,
    getProductlist,
    timeLimit,
    productInfo,
    getCategory,
    getServerTime

}
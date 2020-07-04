import axios from './axios';

//加入购物车
function addCart(options){
    options = Object.assign({
       pid:'',
       count:1
    },options)
    return axios.post('/cart/add',options)
}

//修改购物车某产品的数量
function changeCount(options){
    return axios.post('/cart/update',options)
}

//移除某产品
function removeProduct(id){
    return axios.get('/cart/remove',id)
}

//获取当前用户指定状态下的订单信息
function orderInfo(options){
    options = Object.assign({
        state:0
    },options)
    return axios.get('/cart/list',)
}

//修改订单状态
function modifyOrder(options){
    return axios.get('/cart/state',options)
}

export default{
    addCart,
    changeCount,
    removeProduct,
    orderInfo,
    modifyOrder
}
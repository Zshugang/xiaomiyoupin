/* 路由映射表 */
export default [{
    path: '/',
    name: 'Product',
    component: () => import('../views/Product.vue'),
},
{
    path: '/detailInfo/:id',
    name: 'detail',
    component: () => import('../views/goodsInfo.vue')
}, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    // children:[
    //     {
    //         path:'/login/register',
    //         name:'register',
    //         component:()=> import('../views/register.vue')
    //     }
    // ]
}, {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
}, {
    path: '*',
    redirect: {
        path: '/',
        query: {
            error: 404
        }
    },
    component: () => import('../views/Product.vue'),
}, {
    path: '/login/register',
    name: 'Register',
    component: () => import('../views/register.vue')
}, {
    path: '/login/checkPhone',
    name: 'CheckPhone',
    component: () => import('../views/checkPhone.vue')
}]
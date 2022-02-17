import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            meta: {title: '首页'},
            component: () => import('@/views/home/index')
        },
        {
            name: 'Login',
            path: '/login',
            meta: {title: '登录'},
            component: () => import('@/views/login/index')
        }
    ]
})
// 动态设置页面title
router.beforeEach((to,from,next) => {
    if(to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   //NProgress.start();
//   if (to.path === '/') {
//     next({ path: '/blackList',})
//   }
// });

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import HomePage from './components/HomePage';
import CertificatePage from './components/CertificatePage';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: HomePage
  }, {
    path: 'home',
    component: HomePage
  }, {
    path: 'certificate/:id',
    component: CertificatePage
  }]
}];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import storeConfig from './store/store';
import fontIcon from "./assets/js/fonticon";
import { Lazyload } from 'mint-ui';
import axios from 'axios';

Vue.prototype.$axios=axios;
Vue.use(Lazyload);
Vue.use(MintUI);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  storeConfig,
  template: '<App/>',
  components: { App }
})

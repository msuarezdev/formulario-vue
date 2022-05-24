import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';


Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

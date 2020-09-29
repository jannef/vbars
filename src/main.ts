import { createApp } from 'vue';
import VueQuagga from 'vue-quaggajs';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
  .use(VueQuagga)
  .use(store)
  .use(router)
  .mount('#app');

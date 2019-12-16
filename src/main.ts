import Vue from 'vue';
import Baseline from './components/ResponsiveDrawer.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(Baseline),
}).$mount('#app');

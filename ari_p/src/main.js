import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
// import '@/style.css'
import App from '@/App.vue'
import SvgIcon from 'vue3-icon'
import router from '@/routes/index.js'


const app = createApp(App);

app.component('svg-icon', SvgIcon)
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js'
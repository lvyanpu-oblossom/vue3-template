import { createApp } from 'vue';
import App from './App.vue';
import './theme/theme.css';
import pinia from './store';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');

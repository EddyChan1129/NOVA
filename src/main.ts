// main.ts
import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import i18n from './locales';
import store from './store';
import  '@/assets/style.scss';
const app = createApp(App);

// 使用 Vuex store
app.use(store);

// 使用国际化插件
app.use(i18n);

// 使用路由
app.use(router);

// 挂载应用程序
app.mount('#app');








import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosPlugin from './plugins/axios';


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

// 初始化默认语言
let defaultLanguage = "zh-cn"
if (localStorage.getItem('language')) {
    defaultLanguage = localStorage.getItem('language')
}
// 初始化默认主题
if (localStorage.getItem('theme')) {
    store.dispatch('index/setTheme', localStorage.getItem('theme'))
}

// 自定义国际化
import { createI18n} from 'vue-i18n';
import ZH from './language/zh-cn';
import EN from './language/en';
const messages = {
    'zh-cn': { ...ZH },
    en: { ...EN },
};
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: defaultLanguage,
    messages
});
store.dispatch('index/setLanguage', defaultLanguage)

const app = createApp(App)
app.use(store)
app.use(router)
app.use(axiosPlugin);
app.use(ElementPlus)
app.use(i18n)


app.mount('#app')
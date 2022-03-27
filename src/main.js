// #region vue
import { createApp } from 'vue';
import router from './router';
import axios from './components/tools/axios.js';
import App from './App.vue';
// import store from './store/index';
import { nanoid } from 'nanoid';
// #endregion

// #region vant
import { Button, ConfigProvider, Col, Row, Image, Icon, Popup, Field, CellGroup, Form, Divider, Swipe, SwipeItem, Sticky, Tab, Tabs
} from 'vant';
import '@vant/touch-emulator';
// #endregion

// #region element-ui
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// #endregion

// 生成app轻量vue实例
const app = createApp(App);
app.use(router);

app.config.globalProperties.$axios = axios;

// #region 加载第三方库组件
app.use(Button);
app.use(Col);
app.use(Row);
app.use(ConfigProvider);
app.use(Swipe);
app.use(SwipeItem);
app.use(Image);
app.use(Icon);
app.use(Popup);
app.use(Field);
app.use(Form);
app.use(CellGroup);
app.use(Divider);
app.use(nanoid);
app.use(Sticky);
app.use(Tab);
app.use(Tabs);
app.use(ElementPlus);
// #endregion

// #region 挂载主组件app
app.mount('#app');
// #endregion
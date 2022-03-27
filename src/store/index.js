// #region 引入必需文件
import { createStore } from 'vuex';
import global from './global';
// #endregion

export default createStore({
    // 全局模块
    ...global,
    // 局部模块
    modules:{
        // HxMenu
    }
})


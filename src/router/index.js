// #region 引入必要的文件
import { createRouter, createWebHistory } from 'vue-router';
// #endregion

// #region 获取需要路由服务的组件
import IndexPage from '@/components/index/index.vue';
import Course from '@/components/course/course.vue';
import Issue from '@/components/issue/issue.vue';
import Contest from '@/components/contest/contest.vue';
import Rank from '@/components/rank/rank.vue';
// #endregion

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name: 'indexPage',
            path: '/',
            component: IndexPage
        },
        {
            name: 'Course',
            path: '/Course',
            component: Course
        },
        {
            name: 'Issue',
            path: '/Issue',
            component: Issue
        },
        {
            name: 'Contest',
            path: '/Contest',
            component: Contest
        },
        {
            name: 'Rank',
            path: '/Rank',
            component: Rank
        }
    ]
})

export default router;
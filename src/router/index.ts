import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/level/:level_num',
            name: 'Level',
            component: () => import('@/views/LevelSelectView.vue'),
        },
        {
            path: '/level/:level_num',
            name: 'Level',
            component: () => import('@/views/BattleView.vue'),
            props: route => ({
                level: Number(route.params['level']),
                live: Number(route.query['live']),
                multiPlayer: route.query['multi-player'] === 'true'
            })
        }
    ]
})
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/level/:level_num',
      name: 'Level',
      component: () => import('@/views/GameView.vue'),
      props: route => ({
        levelNum: Number(route.params.level_num),
        live: route.query.live === 'true',
        multiPlayer: route.query['multi-player'] === 'true'
      })
    }
  ]
})
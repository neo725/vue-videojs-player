import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Player from '@/components/Player'
import LocalPlayer from '@/components/LocalPlayer'
import Active from '@/components/Active'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/play',
      name: 'Player',
      component: Player
    },
    {
      path: '/play-local',
      name: 'LocalPlayer',
      component: LocalPlayer
    },
    {
      path: '/active',
      name: 'ACTIVE',
      component: Active
    }
  ]
})

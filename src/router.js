import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ReportDetails from './views/ReportDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/reportDetails/:id',
      name: 'report-details',
      props: true,
      component: ReportDetails
    }
  ]
})

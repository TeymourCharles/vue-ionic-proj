import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/homepage'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/homepage'
      },
      {
        path: 'homepage',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'orderpage',
        component: () => import('@/views/OrderPage.vue')
      },
      {
        path: 'placeorderpage/:id',
        component: () => import('@/views/PlaceOrderPage.vue')
      },
      {
        path: 'ordersummary',
        component: () => import('@/views/OrderSummary.vue')
      },
      {
        path: 'receivedorder',
        component: () => import('@/views/ReceivedOrder.vue')
      },
      {
        path: 'loyaltypoints',
        component: () => import('@/views/LoyaltyPoints.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

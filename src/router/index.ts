import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Language } from '../LanguageEnum'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:lang',
      name: 'home-with-lang',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const lang = to.params.lang as string
        if (Object.values(Language).includes(lang as Language)) {
          // 言語をローカルストレージに保存してリダイレクト
          localStorage.setItem('preferred-language', lang)
          next('/')
        } else {
          next('/')
        }
      },
    },
    {
      path: '/:lang/about',
      name: 'about-with-lang',
      component: () => import('../views/AboutView.vue'),
      beforeEnter: (to, from, next) => {
        const lang = to.params.lang as string
        if (Object.values(Language).includes(lang as Language)) {
          // 言語をローカルストレージに保存してリダイレクト
          localStorage.setItem('preferred-language', lang)
          next('/about')
        } else {
          next('/about')
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

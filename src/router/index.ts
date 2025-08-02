import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Language } from '../LanguageEnum'
import i18n from '../i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        // クエリパラメータから言語を取得してi18nに設定
        const lang = to.query.lang as string
        if (lang && Object.values(Language).includes(lang as Language)) {
          i18n.global.locale.value = lang as Language
          localStorage.setItem('preferred-language', lang)
        }
        next()
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

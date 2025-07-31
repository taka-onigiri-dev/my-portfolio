import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import i18n from './i18n'
import * as bootstrap from 'bootstrap'
import { Language } from './LanguageEnum'
window.bootstrap = bootstrap

const app = createApp(App)
app.use(i18n)

app.use(createPinia())
app.use(router)

// クエリパラメータlangで言語を初期化し、適用後はクエリパラメータを消す
router.beforeEach((to, from, next) => {
  const lang = to.query.lang as string | undefined
  const validLangs = Object.values(Language)
  if (lang && validLangs.includes(lang as Language)) {
    i18n.global.locale.value = lang as Language
    // クエリパラメータを消してリダイレクト（履歴を汚さない）
    next({ path: to.path, query: {}, hash: to.hash, replace: true })
  } else {
    next()
  }
})

app.mount('#app')

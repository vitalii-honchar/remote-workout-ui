import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import StudentsPage from "@/components/page/StudentsPage";
import PricePlanPage from "@/components/page/PricePlanPage";
import WorkoutPage from "@/components/page/WorkoutPage";
import App from './components/App'

const routes = [
    { path: '/student', component: StudentsPage },
    { path: '/price', component: PricePlanPage },
    { path: '/workout', component: WorkoutPage },
    { path: '/', redirect: '/student' }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.mount('#app')

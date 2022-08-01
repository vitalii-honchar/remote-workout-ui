import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import StudentsPage from "@/components/page/StudentsPage";
import PricePlanPage from "@/components/page/PricePlanPage";
import WorkoutPage from "@/components/page/WorkoutPage";
import App from './components/App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCreditCard, faList, faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const routes = [
    { path: '/student', component: StudentsPage, name: 'student' },
    { path: '/price', component: PricePlanPage, name: 'price' },
    { path: '/workout', component: WorkoutPage, name: 'workout' },
    { path: '/', redirect: '/student' }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

library.add(faUsers, faCreditCard, faList, faPersonBiking)

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

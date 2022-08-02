import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import StudentsPage from "@/components/page/StudentsPage";
import PricePlanPage from "@/components/page/PricePlanPage";
import WorkoutPage from "@/components/page/WorkoutPage";
import App from './components/App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCreditCard, faList, faPersonBiking, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import authorizationService from './service/frontend/authentication-service.mjs'
import createAuthorizationStore from "@/service/frontend/authentication-store.mjs"
import createApiService from "@/service/backend/api-service.mjs"
import LoginPage from "@/components/page/LoginPage";

const routes = [
    { path: '/student', component: StudentsPage, name: 'student' },
    { path: '/price', component: PricePlanPage, name: 'price' },
    { path: '/workout', component: WorkoutPage, name: 'workout' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/', redirect: '/student', name: 'index' },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

library.add(faUsers, faCreditCard, faList, faPersonBiking, faRightFromBracket)

const authorizationStore = createAuthorizationStore(document)
const apiService = createApiService('/api', authorizationStore)

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .provide('authenticationService', authorizationService(authorizationStore, apiService))
    .mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import StudentsPage from "@/components/page/StudentsPage";
import PricePlansPage from "@/components/page/price/PricePlansPage";
import UpdatePricePlanPage from "@/components/page/price/UpdatePricePlanPage";
import CreatePricePlanPage from "@/components/page/price/CreatePricePlanPage";
import WorkoutsPage from "@/components/page/workout/WorkoutsPage";
import App from './components/App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCreditCard, faList, faPersonBiking, faRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import authorizationService from './service/frontend/authentication-service.mjs'
import createAuthorizationStore from "@/service/frontend/authentication-store.mjs"
import createApiService from "@/service/backend/api-service.mjs"
import LoginPage from "@/components/page/LoginPage";
import pricePlanService from "@/service/frontend/price-plan-service.mjs"
import workoutService from "@/service/frontend/workout-service.mjs"

const routes = [
    { path: '/student', component: StudentsPage, name: 'student' },
    { path: '/price/:name', component: UpdatePricePlanPage, name: 'price' },
    { path: '/price-create', component: CreatePricePlanPage, name: 'price-create' },
    { path: '/price', component: PricePlansPage, name: 'prices' },
    { path: '/workout', component: WorkoutsPage, name: 'workouts' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/', redirect: '/student', name: 'index' },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

library.add(faUsers, faCreditCard, faList, faPersonBiking, faRightFromBracket, faPlus)

const authorizationStore = createAuthorizationStore(document)
const apiService = createApiService('/api', authorizationStore)

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .provide('authenticationService', authorizationService(authorizationStore, apiService))
    .provide('pricePlanService', pricePlanService(apiService))
    .provide('workoutService', workoutService(apiService))
    .mount('#app')

import PricePlan from "@/domain/price-plan.mjs"

const PRICE_PLAN_ENDPOINT = 'price'

const pricePlanService = (apiService) => {

    const createPricePlan = (response) => {
        return new PricePlan(response.coach, response.name, response.price, response.workouts)
    }

    return {
        async getPricePlans() {
            const pricePlansJson = await apiService.get(PRICE_PLAN_ENDPOINT)
            return pricePlansJson.map(r => createPricePlan(r))
        },

        async getPricePlan(name) {
            const pricePlanJson = await apiService.get(`${PRICE_PLAN_ENDPOINT}/${encodeURIComponent(name)}`)
            return createPricePlan(pricePlanJson)
        },

        async updatePricePlan(pricePlan) {
            pricePlan.validate()
            return apiService.post(`${PRICE_PLAN_ENDPOINT}/${encodeURIComponent(pricePlan.name)}`, pricePlan)
        },
    }
}

export default pricePlanService

import {ValidationError} from "@/domain/errors.mjs"

export default class PricePlan {

    constructor(coach = null, name = null, price = null, workouts = null) {
        this.coach = coach
        this.name = name
        this.price = price
        this.workouts = workouts
    }

    toString() {
        return `PricePlan(coach="${this.coach}", name="${this.name}", price=${this.price}, workouts=${this.workouts})`
    }

    validate() {
        if (!this.name) {
            throw new ValidationError("Name must be specified")
        }
        if (!this.price || isNaN(this.price)) {
            throw new ValidationError("Price must be a number")
        }
        if (!this.workouts || isNaN(this.workouts)) {
            throw new ValidationError("Workouts must be a number")
        }
    }
}

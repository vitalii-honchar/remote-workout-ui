import {ValidationError} from "@/domain/errors.mjs"

class Student {

    constructor(id, coach, firstName, lastName, pricePlan, workouts) {
        this.id = id
        this.coach = coach
        this.firstName = firstName
        this.lastName = lastName
        this.pricePlan = pricePlan
        this.workouts = workouts
    }

    static createEmpty() {
        return new Student(null, null, null, null,
            null, [ScheduledWorkout.createEmpty()])
    }

    toString() {
        return `Student(id=${this.id}, coach=${this.coach}, firstName=${this.firstName}, lastName=${this.lastName}` +
            `, pricePlan=${this.pricePlan}, workouts=${this.workouts})`
    }

    validate() {
        if (!this.firstName) {
            throw new ValidationError("First name must be specified")
        }
        if (!this.lastName) {
            throw new ValidationError("Last name must be specified")
        }
        if (this.id != null && !this.pricePlan) {
            throw new ValidationError("Price plan must be specified")
        }
    }

    getCompletedWorkouts() {
        return this.workouts.filter(it => it.sent).length
    }
}


class WorkoutPricePlan {

    constructor(workouts, price, name) {
        this.workouts = workouts
        this.price = price
        this.name = name
    }

    static createEmpty() {
        return new WorkoutPricePlan(null, null, null)
    }

    toString() {
        return `WorkoutPricePlan(workouts=${this.workouts}, price=${this.price}, name=${this.name})`
    }
}

class ScheduledWorkout {

    constructor(workoutId, order, scheduledTime, sent) {
        this.workoutId = workoutId
        this.order = order
        this.scheduledTime = scheduledTime
        this.sent = sent
    }

    static createEmpty() {
        return new ScheduledWorkout(null, null, null, null)
    }

    toString() {
        return `ScheduledWorkout(workoutId=${this.workoutId}, order=${this.order},` +
            `scheduledTime=${this.scheduledTime}, sent=${this.sent})`
    }
}

export default Student
export {WorkoutPricePlan, ScheduledWorkout}

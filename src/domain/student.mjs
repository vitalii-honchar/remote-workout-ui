import {ValidationError} from "@/domain/errors.mjs"

class Student {

    constructor(id, coach, firstName, lastName) {
        this.id = id
        this.coach = coach
        this.firstName = firstName
        this.lastName = lastName
    }

    toString() {
        return `Student(id=${this.id}, coach=${this.coach}, firstName=${this.firstName}, lastName=${this.lastName})`
    }

    validate() {
        if (!this.firstName) {
            throw new ValidationError("First name must be specified")
        }
        if (!this.lastName) {
            throw new ValidationError("Last name must be specified")
        }
    }
}

export default Student

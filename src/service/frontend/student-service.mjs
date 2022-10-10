import Student from "@/domain/student.mjs"
import {WorkoutPricePlan, ScheduledWorkout} from "@/domain/student.mjs"

const STUDENT_ENDPOINT = 'student'

const studentService = (apiService) => {

    const createWorkoutPricePlan = (response) => {
        return new WorkoutPricePlan(
            response.pricePlan ? response.pricePlan.workouts : null,
            response.pricePlan ? response.pricePlan.price : null
        )
    }

    const createWorkouts = (response) => {
        if (response.workouts == null) {
            return []
        }
        return response.workouts.map(it =>
            new ScheduledWorkout(it.workoutId, it.order, new Date(it.scheduledTime), it.sent)
        )
    }

    const createStudent = (response) => {
        return new Student(
            response.id,
            response.coach,
            response.firstName,
            response.lastName,
            createWorkoutPricePlan(response),
            createWorkouts(response)
        )
    }

    return {

        async getStudents() {
            const workoutsJson = await apiService.get(STUDENT_ENDPOINT)
            return workoutsJson.map(createStudent)
        },

        async getStudent(id) {
            const json = await apiService.get(`${STUDENT_ENDPOINT}/${encodeURIComponent(id)}`)
            return createStudent(json)
        },

        async createStudent(student) {
            student.validate()
            return apiService.put(STUDENT_ENDPOINT, student)
        },

        async deleteStudent(student) {
            return apiService.delete(`${STUDENT_ENDPOINT}/${encodeURIComponent(student.id)}`)
        },

        async updateStudent(student) {
            student.validate()
            return apiService.post(`${STUDENT_ENDPOINT}/${encodeURIComponent(student.id)}`, student)
        }
    }
}

export default studentService

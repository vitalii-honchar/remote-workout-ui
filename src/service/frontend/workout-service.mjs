import {Workout, WorkoutVideo} from "@/domain/workout.mjs"

const WORKOUT_ENDPOINT = 'workout'

const workoutService = (apiService) => {

    const createWorkout = (response) => {
        return new Workout(response.coach, response.id, response.name,
            response.description, response.videos.map(v => new WorkoutVideo(v.link)))
    }

    return {

        async getWorkouts() {
            const workoutsJson = await apiService.get(WORKOUT_ENDPOINT)
            return workoutsJson.map(r => createWorkout(r))
        },

        async getWorkout(id) {
            const workoutJson = await apiService.get(`${WORKOUT_ENDPOINT}/${encodeURIComponent(id)}`)
            return createWorkout(workoutJson)
        },

        async createWorkout(workout) {
            workout.validate()
            return apiService.put(WORKOUT_ENDPOINT, workout)
        },

        async updateWorkout(workout) {
            workout.validate()
            return apiService.post(`${WORKOUT_ENDPOINT}/${encodeURIComponent(workout.id)}`, workout)
        }
    }
}

export default workoutService

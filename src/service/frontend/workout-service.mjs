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
        }
    }
}

export default workoutService

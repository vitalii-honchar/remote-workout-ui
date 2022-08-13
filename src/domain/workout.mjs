import {ValidationError} from "@/domain/errors.mjs"

class Workout {

    constructor(coach = null, id = null, name = null, description = null, videos = []) {
        this.coach = coach
        this.id = id
        this.name = name
        this.description = description
        this.videos = videos
    }

    toString() {
        return `Workout(coach=${this.coach}, id=${this.id}, name=${this.name}, description=${this.description}, videos=${this.videos})`
    }

    validate() {
        if (!this.name) {
            throw new ValidationError("Name must be specified")
        }
        if (!this.description) {
            throw new ValidationError("Description must be specified")
        }
        if (!this.videos || this.videos.length === 0) {
            throw new ValidationError("Videos can't be empty, please add at least one video")
        }
        this.videos.forEach(it => it.validate())
    }
}

class WorkoutVideo {
    constructor(link) {
        this.link = link
    }

    toString() {
        return `WorkoutVideo(link=${this.link})`
    }

    validate() {
        if (!this.link || this.link.length === 0) {
            throw new ValidationError("Video link must be specified")
        }
    }
}

export {Workout, WorkoutVideo}

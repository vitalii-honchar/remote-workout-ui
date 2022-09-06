import Student from "@/domain/student.mjs"

const STUDENT_ENDPOINT = 'student'

const studentService = (apiService) => {

    const createStudent = (response) => {
        return new Student(response.id, response.coach, response.firstName, response.lastName)
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

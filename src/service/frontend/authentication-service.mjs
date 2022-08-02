import {AuthenticationException} from '../backend/api-service.mjs'

const LOGIN_ENDPOINT = 'auth/login'

const authorizationService = (authorizationStore, apiService) => {
    const checkLogin = async (authorizationData) => {
        try {
            const response = await apiService.get(LOGIN_ENDPOINT, authorizationData)
            return response.success === true
        } catch (e) {
            if (e instanceof AuthenticationException) {
                return false
            } else {
                throw e
            }
        }
    }

    const createAuthorizationData = (username, password) => btoa(`${username}:${password}`)

    return {
        async isAuthorized() {
            const authorizationData = authorizationStore.get()
            if (!authorizationData) {
                return false
            }
            return await checkLogin(authorizationData)
        },

        async login(username, password) {
            const authorizationData = createAuthorizationData(username, password)
            if (await checkLogin(authorizationData)) {
                authorizationStore.store(authorizationData)
            } else {
                throw new InvalidUsernameOrPassword()
            }
        },

        async logout() {
            authorizationStore.clear()
        }
    }
}

class InvalidUsernameOrPassword extends Error {
    constructor() {
        super('Invalid username or password')
    }
}

export default authorizationService
export {InvalidUsernameOrPassword}

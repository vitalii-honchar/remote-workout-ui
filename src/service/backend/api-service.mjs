
class AuthenticationException extends Error {
    constructor() {
        super('Authentication error');
    }
}

const apiService = (url, authorizationStore) => {

    return {
        async get(endpoint, authorizationData = null) {
            if (authorizationData === null) {
                authorizationData = authorizationStore.get()
            }

            const result = await fetch(
                `${url}/${endpoint}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${authorizationData}`
                    }
                }
            )
            if (result.status === 401) {
                throw new AuthenticationException()
            }
            return await result.json()
        }
    }
}

export default apiService
export {AuthenticationException}


class AuthenticationException extends Error {
    constructor() {
        super('Authentication error');
    }
}

class UnexpectedResponseError extends Error {
    constructor() {
        super('Unexpected response error');
    }
}

const apiService = (url, authorizationStore) => {

    const getResponseBody = async (response) => {
        if (response.status === 401) {
            throw new AuthenticationException()
        } else if (response.status !== 200) {
            throw new UnexpectedResponseError()
        }
        return await response.json()
    }

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
            return await getResponseBody(result)
        },

        async post(endpoint, body) {
            const authorizationData = authorizationStore.get()

            const result = await fetch(
                `${url}/${endpoint}`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Basic ${authorizationData}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )
            return await getResponseBody(result)
        }
    }
}

export default apiService
export {AuthenticationException}

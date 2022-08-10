
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

    const createHeaders = (authorizationData) => {
        return {
            'Authorization': `Basic ${authorizationData}`,
            'Content-Type': 'application/json'
        }
    }

    const fetchOptions = (method, authorizationData, body) => {
        return {
            method: method,
            headers: createHeaders(authorizationData),
            body: JSON.stringify(body)
        }
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
            const result = await fetch(`${url}/${endpoint}`, fetchOptions('POST', authorizationData, body))
            return await getResponseBody(result)
        },

        async put(endpoint, body) {
            const authorizationData = authorizationStore.get()
            const result = await fetch(`${url}/${endpoint}`, fetchOptions('PUT', authorizationData, body))
            return await getResponseBody(result)
        },

        async delete(endpoint) {
            const authorizationData = authorizationStore.get()
            const result = await fetch(
                `${url}/${endpoint}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${authorizationData}`
                    }
                }
            )
            return await getResponseBody(result)
        }
    }
}

export default apiService
export {AuthenticationException}

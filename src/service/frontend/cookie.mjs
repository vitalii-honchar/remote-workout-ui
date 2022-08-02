
const cookieGetter = (document) => {
    return (name) => {
        const foundCookie = document.cookie.split(';')
            .filter(cookie => cookie.includes("="))
            .map(cookie => cookie.split('='))
            .find(cookie => cookie[0].trim() === name)
        return foundCookie ? foundCookie[1] : null
    }
}

const cookieSetter = (document) => {
    return (name, value) => {
        document.cookie = `${name}=${value}`
    }
}

export { cookieGetter, cookieSetter }

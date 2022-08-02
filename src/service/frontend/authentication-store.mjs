import {cookieGetter, cookieSetter} from "@/service/frontend/cookie.mjs"

const COOKIE_SESSION_ID = 'session_id'

const authenticationStore = (document) => {
    const getCookie = cookieGetter(document)
    const setCookie = cookieSetter(document)

    return {
        get() {
            return getCookie(COOKIE_SESSION_ID)
        },

        store(authorizationData) {
            setCookie(COOKIE_SESSION_ID, authorizationData)
        },

        clear() {
            setCookie(COOKIE_SESSION_ID, '')
        }
    }
}

export default authenticationStore

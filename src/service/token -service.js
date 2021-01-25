import config from "../config";

const TokenService = {
    getAuthToken(){
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken(){
        window.localStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthToken(){
        return !!TokenService.getAuthToken()
    },
    makeBasicAuthToken(userName, password){
        return window.btoa(`${userName}:${password}`)
    },
    saveAuthToken(token){
        window.localStorage.setItem(config.TOKEN_KEY, token)
    },
}

export default TokenService;
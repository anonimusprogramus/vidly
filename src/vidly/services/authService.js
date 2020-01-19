import jwtDecode from 'jwt-decode'
import http from './httpService'
import appStore from '../store'
import { apiUrl } from '../config.json'

const apiEndpoint = apiUrl + '/auth'
const tokenKey = 'token'

http.setJwt(getJwt())

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password })
  loginWithJwt(jwt)
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt)
  appStore.userIsLogged = true
}

export function logout() {
  localStorage.removeItem(tokenKey)
  appStore.userIsLogged = false
}

export function getCurrentUser() {
  try {
    const jwt = getJwt()
    const user = jwtDecode(jwt)
    return user
  } catch (ex) {
    return null
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
}

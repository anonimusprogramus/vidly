import { store } from 'react-easy-state'

const appStore = store({
  user: null,
  userIsLogged: false
})

export default appStore

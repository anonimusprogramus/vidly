import * as Sentry from '@sentry/browser'

function init() {
  Sentry.init({
    dsn: 'https://019c88811e014cd7a1a000bee4a688e0@sentry.io/1882849'
  })
}

function log(error) {
  Sentry.captureException(`Error: ${error}`)
}

export default {
  init,
  log
}

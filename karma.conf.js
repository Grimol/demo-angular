// karma.conf.js - ajouter la config headless
browsers: ['Chrome', 'ChromeHeadless'],
customLaunchers: {
  ChromeHeadless: {
    base: 'Chrome',
    flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
  }
}
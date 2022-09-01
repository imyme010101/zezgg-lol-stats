module.exports = {
  apps: [
    {
      name: 'LOL-CLIENT',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}

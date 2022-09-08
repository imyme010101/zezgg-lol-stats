module.exports = {
    apps: [
      {
        name: 'ZEM.GG-SERVER',
        script: './build/server.js',
        instances: 'max',
        exec_mode: 'cluster',
        max_memory_restart: '300M',
        autorestart: true,
      },
    ],
  }
  

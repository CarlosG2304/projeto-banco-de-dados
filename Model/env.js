module.exports = env = {
  local: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'myapp_test'
  },
  heroku: {
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }
}
const Express = require('express')
const path = require('path')
const app = Express()


app.use(Express.static(path.join(__dirname, 'public')))

app.listen(8080, '0.0.0.0', () => {
  console.log('server run at 127.0.0.1:8080')
})
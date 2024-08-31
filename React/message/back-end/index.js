const jsonServer = require('json-server')

const TodoServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middleWares = jsonServer.defaults()

const port = 8000 || process.env.PORT

TodoServer.use(middleWares)
TodoServer.use(router)

TodoServer.listen(port,()=>{
    console.log(`Todo server is running in port : ${port}`);
})
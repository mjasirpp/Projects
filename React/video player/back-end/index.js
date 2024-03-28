const jsonServer = require('json-server')

const mediaPlayerServer = jsonServer.create()

const router = jsonServer.router("db.json")

const middleWares = jsonServer.defaults()

const port = 4000 || process.env.PORT

mediaPlayerServer.use(middleWares)
mediaPlayerServer.use(router)

mediaPlayerServer.listen(port,()=>{
    console.log(`port : ${port}`);
})
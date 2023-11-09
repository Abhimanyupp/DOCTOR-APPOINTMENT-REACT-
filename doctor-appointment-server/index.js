//1 Import json server
const jsonServer=require('json-server')

//2 Create a server
const server=jsonServer.create()

//3 Set up path for db.json file
const router=jsonServer.router('db.json')

//4 Return middleware used by json-server
const middleware=jsonServer.defaults()

//5 Set up path for server
const port=process.env.port || 3001

//6 Use middleware and Router
server.use(middleware)
server.use(router)

//7 To Run the server
server.listen(port,()=>{
    console.log('Listening port'+port);
})
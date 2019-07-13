const jsonServer = require('json-server');
const auth = require('json-server-auth');
 
const app = jsonServer.create();
const router = jsonServer.router('db.json');
 
// /!\ Bind the router db to the app
app.db = router.db;
 
// You must apply the auth middleware before the router
app.use(auth);
app.use(router);
app.listen(3000);
/* const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port); */
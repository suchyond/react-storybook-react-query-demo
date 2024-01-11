const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  if (req.method === "PATCH" && req.path.includes("done")) {
    const body = req.body;
    if (body.done) {
      body.finishedAt = Date.now();
    } else {
      body.finishedAt = undefined;
    }
    
  }
  next();
});

server.use(jsonServer.rewriter({ "/items/done/:id": "/items/:id" }));

// Use default router
server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running at port: " + PORT);
});

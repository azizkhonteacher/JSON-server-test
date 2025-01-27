import jsonServer from "json-server";
import serverless from "serverless-http";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export const handler = serverless(server);

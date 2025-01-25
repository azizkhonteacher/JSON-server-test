const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Netlify'ga mos ravishda functionni export qilish
exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    server.handle(event, context, (response) => {
      resolve({
        statusCode: response.statusCode,
        body: JSON.stringify(response.body),
      });
    });
  });
};

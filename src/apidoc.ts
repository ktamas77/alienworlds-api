import openApi from './constants/openapi';

const fastify = require('fastify');
const fastifyStatic = require('fastify-static');
const path = require('path');
const oas = require('fastify-oas');
const app = fastify();

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/v1/alienworlds/docs',
});

fastify.get('/v1/alienworlds/docs', function (req, reply) {
  return reply.sendFile('buci.html');
});

app.register(oas, openApi);

app.ready(err => {
  if (err) throw err;
  app.oas();
});

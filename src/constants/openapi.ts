const config = require('../config');

const openApi = {
  routePrefix: '/v1/alienworlds/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Alien Worlds API',
      description: 'API for Alien Worlds information',
      version: '1.0.0',
    },
    host: config.docs_host || 'localhost',
    schemes: config.api.schemes || ['https'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};

export default openApi;

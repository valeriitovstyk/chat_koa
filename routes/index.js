const Router = require('koa-router');
const messageRouter = require('./messages');

const mainRouter = new Router();

mainRouter.use('/messages', messageRouter);


module.exports = mainRouter.routes();

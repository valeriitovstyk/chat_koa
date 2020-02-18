const Router = require('koa-router');
const messageRouter = require('./messages');

const mainRouter = new Router({
    prefix: '/api'
});

mainRouter.use('/messages', messageRouter);


module.exports = mainRouter.routes();

const Router = require('koa-router');
const MessageController = require('../controllers/MessageController');
const koaBody = require('koa-body');

const router = new Router();
router
    .get('/', MessageController.getMessagesList)
    .get('/list/:page', MessageController.getByPage)
    .get('/single/:message_id', MessageController.getById);


module.exports = router.routes();
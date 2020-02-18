const Router = require('koa-router');
const koaBody = require('koa-body');
const MessageController = require('../controllers/MessageController');

const router = new Router();
router
    .get('/', MessageController.getMessagesList)
    .get('/list/:page', MessageController.getByPage)
    .get('/single/:message_id', MessageController.getById)
    .post('/', koaBody(), MessageController.addMessage);

module.exports = router.routes();

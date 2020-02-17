const Router = require('koa-router');
const MessageController = require('../controllers/MessageController');
const koaBody = require('koa-body');

const router = new Router();
router
    .get('/', MessageController.getMessagesList);


module.exports = router.routes();
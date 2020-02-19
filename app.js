const Koa = require('koa');
const app = new Koa();
const db = require('./config/db');
const Message = require('./models/Message');

const mainRouter = require('./routes/index');

app.use(mainRouter);

app.listen(process.env.PORT || 5000, () => console.log('Server running on 5000 port'));
const Koa = require('koa');
const app = new Koa();
const db = require('./config/db');
const Message = require('./models/Message')

const mainRouter = require('./routes/index');

app.use(mainRouter);
/*

const message6 = new Message({
    message_text: "this is post16666",
    author_email: "asda6666",
    author_name: "asd6666"
})
message6.save()
    .then(doc => {
        console.log(doc)
})
    .catch(err => {
        console.error(err)
    })

const message2 = new Message({
    message_text: "post2222",
    author_email: "test2",
    author_name: "asd2ad2"
})
message2.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })
const message3 = new Message({
    message_text: "this is post13",
    author_email: "asda3",
    author_name: "asd3"
})
message3.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })
const message4 = new Message({
    message_text: "this is pos41",
    author_email: "as4da",
    author_name: "a4sd"
})
message4.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })
const message5 = new Message({
    message_text: "this is post555",
    author_email: "nmnn5",
    author_name: "asdnn,5"
})
message5.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })*/


app.listen(3000, () => console.log('Server running on https://localhost:3000'));
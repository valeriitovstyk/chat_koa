const Message = require('../models/Message');
const mongoose = require('mongoose');
const limit = 3;

const MessageController = {
/*    getMessagesList: async (ctx) => {
        console.log("all messages");
        Message.find({})
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },*/

    getMessagesList: async (ctx) => {
        try {
            ctx.body = await Message.find({});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    getByPage: async (ctx) => {
        console.log("list by page", ctx.params.page);
        Message.find({})
            .skip(ctx.params.page * limit)
            .limit(limit)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    getById: async (ctx) => {
        if (mongoose.Types.ObjectId.isValid(ctx.params.message_id)) {
            Message.findOne({_id: ctx.params.message_id})
                .then((doc) => {
                    if (doc) {
                        console.log(doc);
                    } else {
                        console.log("no data exist for this id");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("please provide correct id");
        }
    },
    addMessage: async (ctx) => {
        console.log("add new user");
        Message.collection.insertOne(
            {
                message_text: ctx.request.body.message_text,
                author_name: ctx.request.body.author_name,
                author_email: ctx.request.body.author_email
            }
        )
            .then((data) => {
                console.log(data);
            }).catch((err) => {
            console.log(err);
        })
    }


};

module.exports = MessageController;
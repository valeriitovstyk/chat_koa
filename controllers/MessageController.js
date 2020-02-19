const Message = require('../models/Message');
const mongoose = require('mongoose');
const limit = 10;

const MessageController = {
    getMessagesList: async (ctx) => {
        try {
            ctx.body = await Message.find({});
        } catch (err) {
            ctx.status = 204;
        }
    },

    getByPage: async (ctx) => {
        try {
            ctx.body = await Message.find({})
                .skip(ctx.params.page * limit)
                .limit(limit)
        } catch (err) {
            ctx.status = 204;
        }
    },
    getById: async (ctx) => {
        if (mongoose.Types.ObjectId.isValid(ctx.params.message_id)) {
            try {
                ctx.body = await Message.findOne({_id: ctx.params.message_id})
                    .skip(ctx.params.page * limit)
                    .limit(limit)
            } catch (err) {
                ctx.status = 204;
            }
        } else {
            console.log("please provide correct id");
        }
    },

    addMessage: async (ctx) => {
        try {
            const test = await Message.collection.insertOne(
                {
                    message_text: ctx.request.body.message_text,
                    author_name: ctx.request.body.author_name,
                    author_email: ctx.request.body.author_email
                }
            );

        } catch (err) {
            ctx.status = 204;
        }
    }
};

module.exports = MessageController;
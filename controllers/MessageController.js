const MessageController = {
    getMessagesList: async (ctx) => {
        console.log("all messages")
    },
    getByPage: async (ctx) => {
        console.log("list by page", ctx.params.page)
    }
};

module.exports = MessageController;
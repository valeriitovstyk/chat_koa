const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = async (ctx, next) => {
    const {message_text, author_name, author_email} = ctx.request.body;

    const emailIsValid = email_regex.test(author_email.toLowerCase());
    const textLengthIsValid = message_text.length > 0 && message_text.length < 100;

    if (emailIsValid && textLengthIsValid) {
        next()
    } else {
        console.log("err email")
    }

};

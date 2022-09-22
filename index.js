const TelegramApi = require('node-telegram-bot-api')
const token = '5459923367:AAHcglkd9C05lClYmRzLgQRYGhUiGBF6N0M';
const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
    const text = msg.text;
    const chat_id = msg.chat.id;
    bot.sendMessage(chat_id, "Your text 111: "+text);
});
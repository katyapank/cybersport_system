import telebot
from telebot import types
from config import TOKEN
import utils
bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start'])
def start_func(message):
    bot.send_message(message.chat.id, 'Добро пожаловать в ESPORTS Samara Region!\n\n🔹 Будь в курсе самых крупных киберспортивных событий Самарской области\n🔹 Участвуй в турнирах и забирай самые крупные денежные призы\n🔹 Первым узнавай о самых горячих новостях из мира киберспорта',
                     reply_markup=types.ReplyKeyboardRemove())
    markup = utils.add_init_btns(4, ['Матчи', 'Турниры', 'Команды', 'Игроки'])
    bot.send_message(message.chat.id, 'Выберите категорию:', reply_markup=markup)


@bot.message_handler(commands=['menu'])
def start_func(message):
    menu(message.chat.id)


@bot.message_handler(commands=['help'])
def start_func(message):
    bot.send_message(message.chat.id, 'Давайте я познакомлю Вас с основными командами, которые я знаю:\n/start - начать знакомство с ботом\n/menu - открыть главное меню\n\nМеню оснащено кнопками, которые расположены ниже поля ввода сообщения. \n\nЕсли возникли вопросы по корректности моей работы, пожалуйста, напишите на почту support_esport_sr@yandex.ru',
                     reply_markup=types.ReplyKeyboardRemove())
    markup = utils.add_btns(1, [])
    bot.send_message(message.chat.id, 'Выберите действие:', reply_markup=markup)


def menu(chat_id):
    markup = utils.add_init_btns(4, ['Матчи', 'Турниры', 'Команды', 'Игроки'])
    bot.send_message(chat_id, 'Выберите категорию:', reply_markup=markup)


@bot.message_handler(func=lambda message: True)
def text(message):
    bot.send_message(message.chat.id, 'Бот Вас не понимает. Попробуйте команды /menu или /help')


if __name__ == '__main__':
    bot.infinity_polling()
import telebot
from telebot import types
from config import TOKEN
import utils
import components
from datetime import datetime
bot = telebot.TeleBot(TOKEN)

tokens ={}
login = {}
user_states = {}


@bot.message_handler(commands=['start'])
def start_func(message):
    bot.send_message(message.chat.id, 'Добро пожаловать в Киберспорт в сердце России!\n\n🔹 Будь в курсе самых крупных киберспортивных событий Самарской области\n🔹 Участвуй в турнирах и забирай самые крупные денежные призы\n🔹 Первым узнавай о самых горячих новостях из мира киберспорта',
                     reply_markup=types.ReplyKeyboardRemove())
    markup = components.add_init_btns(4, ['Матчи', 'Турниры', 'Команды', 'Аккаунт'])
    bot.send_message(message.chat.id, 'Выберите категорию:', reply_markup=markup)


@bot.message_handler(commands=['menu'])
def start_func(message):
    menu(message.chat.id)


@bot.message_handler(commands=['help'])
def start_func(message):
    bot.send_message(message.chat.id, 'Давайте я познакомлю Вас с основными командами, которые я знаю:\n/start - начать знакомство с ботом\n/menu - открыть главное меню\n\nМеню оснащено кнопками, которые расположены ниже поля ввода сообщения. \n\nЕсли возникли вопросы по корректности моей работы, пожалуйста, напишите на почту support_esport_sr@yandex.ru',
                     reply_markup=types.ReplyKeyboardRemove())
    markup = components.add_btns(1, [])
    bot.send_message(message.chat.id, 'Выберите действие:', reply_markup=markup)


def menu(chat_id):
    markup = components.add_init_btns(4, ['Матчи', 'Турниры', 'Команды', 'Аккаунт'])
    bot.send_message(chat_id, 'Выберите категорию:', reply_markup=markup)


def get_profile_info(chat_id):
    response = utils.get_profile(tokens[chat_id])
    print(response.status_code)

    if response.status_code == 200:
        response_data = response.json()
        print(response_data)

        name = response_data['teamName']
        names = ""
        for num1, item1 in enumerate(response_data['teamUser']):
            names += item1['userLastName'] + item1['userFirstName'] + '\n'
        bot.send_message(chat_id, f'Команда "{name}"\nСостав участников:\n{names}')
        menu(chat_id)
    else:
        bot.send_message(chat_id, f'Произошла ошибка.')
        tokens[chat_id] = None
        menu(chat_id)


@bot.message_handler(func=lambda message: message.text == 'Аккаунт')
def profile(message):
    if message.chat.id in tokens:
        get_profile_info(message.chat.id)
    else:
        user_states[message.chat.id] = 'waiting_for_login'
        bot.send_message(message.chat.id, 'Укажите email команды:', reply_markup=types.ReplyKeyboardRemove())


@bot.message_handler(func=lambda message: message.text == 'Турниры')
def tournaments(message):
    msg = message
    response = utils.get_all()
    print(response.status_code)

    if response.status_code == 200:
        response_data = response.json()
        print(response_data)
        for num, item in enumerate(response_data):
            name = item['tournamentName']
            game = item['tournamentGame']['gameName']
            start_day = datetime.strptime(item['tournamentStartDay'], '%Y-%m-%d').strftime('%d.%m')
            end_day = datetime.strptime(item['tournamentEndDay'], '%Y-%m-%d').strftime('%d.%m')
            desc = item['tournamentDescription']
            bot.send_message(message.chat.id, f'{name} - {game}🔥\n{start_day}-{end_day}\n\n{desc}')
        menu(message.chat.id)

    else:
        bot.send_message(message.chat.id, f'Произошла ошибка.')
        menu(msg.chat.id)


@bot.message_handler(func=lambda message: message.text == 'Матчи')
def matches(message):
    msg = message
    response = utils.get_all_matches()
    print(response.status_code)

    if response.status_code == 200:
        response_data = response.json()
        print(response_data)
        for num, item in enumerate(response_data):
            name = item['matchTournament']['tournamentName']
            name_m = item['matchName']
            game = item['matchGame']['gameName']
            start_day = datetime.strptime(item['matchStartDay'], '%Y-%m-%d').strftime('%d.%m')
            bot.send_message(message.chat.id, f'{name_m}\n{name} - {game}🔥\n{start_day}')
        menu(message.chat.id)

    else:
        bot.send_message(message.chat.id, f'Произошла ошибка.')
        menu(msg.chat.id)


@bot.message_handler(func=lambda message: message.text == 'Команды')
def teams(message):
    msg = message
    response = utils.get_all_teams()
    print(response.status_code)

    if response.status_code == 200:
        response_data = response.json()
        print(response_data)
        for num, item in enumerate(response_data):
            name = item['teamName']
            names = ""
            for num1, item1 in enumerate(item['teamUser']):
                names += item1['userLastName']+item1['userFirstName']+'\n'
            bot.send_message(message.chat.id, f'Команда "{name}"\nСостав участников:\n{names}')
        markup = components.add_btns(2, ['Подробнее'])
        bot.send_message(msg.chat.id, 'Выберите действие:', reply_markup=markup)

    else:
        bot.send_message(message.chat.id, f'Произошла ошибка.')
        menu(msg.chat.id)


@bot.message_handler(func=lambda message: message.text == 'Подробнее')
def team_info(message):
    msg = message
    bot.send_message(message.chat.id, 'Укажите название команды, информацию о которой Вы хотите увидеть:', reply_markup=types.ReplyKeyboardRemove())
    user_states[msg.chat.id] = "waiting_for_name"


def auth(chat_id):
    bot.send_message(chat_id,
                     'Укажите адрес электронной почты, указанный в системе:',
                     reply_markup=types.ReplyKeyboardRemove())
    user_states[chat_id] = 'waiting_for_login'


@bot.message_handler(func=lambda message: True)
def text(message):
    if user_states.get(message.chat.id) == 'waiting_for_login':
        login[message.chat.id] = message.text
        user_states[message.chat.id] = 'waiting_for_password'
        bot.send_message(message.chat.id, 'Введите Ваш пароль:')
    elif user_states.get(message.chat.id) == 'waiting_for_password':
        msg = message
        password = message.text
        user_states[message.chat.id] = None
        bot.send_message(message.chat.id, 'Спасибо!')

        response = utils.auth_signin(login[message.chat.id], password)
        login[message.chat.id] = None
        print(response.status_code)

        if response.status_code == 200:
            response_data = response.json()
            access_token = response_data['token']
            tokens[msg.chat.id] = access_token
            # token_type = response_data['token_type']
            #role[message.chat.id] = utils.users_profile(access_token).json()['role_id']
            bot.send_message(message.chat.id, f'Вы успешно вошли в аккаунт.')
            menu(message.chat.id)

        else:
            bot.send_message(message.chat.id, f'Произошла ошибка.')
            menu(msg.chat.id)

    elif user_states.get(message.chat.id) == 'waiting_for_name':
        response = utils.get_team_by_name(message.text)
        print(response.status_code)

        if response.status_code == 200:
            response_data = response.json()
            print(response_data)

            name = response_data['teamName']
            names = ""
            for num1, item1 in enumerate(response_data['teamUser']):
                names += item1['userLastName'] + item1['userFirstName'] + '\n'
                bot.send_message(message.chat.id, f'Команда "{name}"\nСостав участников:\n{names}')
            menu(message.chat.id)
        else:
            bot.send_message(message.chat.id, f'Произошла ошибка.')
            menu(message.chat.id)
    else:
        bot.send_message(message.chat.id, 'Бот Вас не понимает. Попробуйте команды /menu или /help')


if __name__ == '__main__':
    bot.infinity_polling()
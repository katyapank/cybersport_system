from telebot import types


def btns_to_markup(btns):
    for btn in btns:
        btn = types.KeyboardButton(btn)


def add_btns(num, btns):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    back = types.KeyboardButton('На главную')
    btns_to_markup(btns)
    if num == 1:
        markup.add(back)
    if num == 2:
        markup.add(btns[0])
        markup.add(back)
    elif num == 3:
        markup.row(btns[0], btns[1])
        markup.row(back)
    elif num == 4:
        markup.row(btns[0], btns[1], btns[2])
        markup.row(back)
    return markup


def add_init_btns(num, btns):
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    btns_to_markup(btns)
    if num == 2:
        markup.add(btns[0])
        markup.add(btns[1])
    elif num == 3:
        markup.row(btns[0], btns[1])
        markup.row(btns[2])
    elif num == 4:
        markup.row(btns[0], btns[1])
        markup.row(btns[2], btns[3])
    return markup

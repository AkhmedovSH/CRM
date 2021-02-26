from telegram import Bot
from telegram.ext import Dispatcher

def setup(token):
    # Create bot, update queue and dispatcher instances
    bot = Bot(token)
    
    dispatcher = Dispatcher(bot, None, workers=0)
    
    ##### Register handlers here #####
    
    return dispatcher
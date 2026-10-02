import json
from datetime import datetime


prices = {datetime(2026,9,8,12,0,0) : { "magic_adulte_CHF": 524, "magic_adulte_EUR" : 563, "magic_enfant_CHF": 314 ,"magic_enfant_EUR" : 337,"bain_adulte_CHF": 290, "bain_adulte_EUR" : 312, "bain_enfant_CHF": 186 ,"bain_enfant_EUR" : 200},
        datetime(2026,10,6,12,0,0) : { "magic_adulte_CHF": 576, "magic_adulte_EUR" : 614, "magic_enfant_CHF": 314 ,"magic_enfant_EUR" : 337,"bain_adulte_CHF": 301, "bain_adulte_EUR" : 320, "bain_enfant_CHF": 197 ,"bain_enfant_EUR" : 209},
        datetime(2026,11,3,12,0,0) : { "magic_adulte_CHF": 786, "magic_adulte_EUR" : 0, "magic_enfant_CHF": 366 ,"magic_enfant_EUR" : 0,"bain_adulte_CHF": 311, "bain_adulte_EUR" : 0, "bain_enfant_CHF": 207 ,"bain_enfant_EUR" : 0},
        datetime(2026,12,8,12,0,0) : { "magic_adulte_CHF": 944, "magic_adulte_EUR" : 0, "magic_enfant_CHF": 419 ,"magic_enfant_EUR" : 0,"bain_adulte_CHF": 321, "bain_adulte_EUR" : 0, "bain_enfant_CHF": 217 ,"bain_enfant_EUR" : 0}}


def find_price_by_date(date : datetime):
    date_threshold = max([key for key in prices.keys() if date>key])
    return prices[date_threshold]

def price_message(price : dict):
    message = ""
    if price["magic_adulte_CHF"] != 0 and price["magic_adulte_EUR"] != 0:
        message += f"Le Magic Pass est au prix de {price["magic_adulte_CHF"]}CHF/{price["magic_adulte_EUR"]}€ pour les adultes "
    elif price["magic_adulte_CHF"] != 0:
        message += f"Le Magic Pass est au prix de {price["magic_adulte_CHF"]}CHF pour les adultes "
    else :
        return "Le prix du Magic Pass n'est pas définit pour ce jour"
    
    if price["magic_enfant_CHF"] != 0 and price["magic_enfant_EUR"] != 0:
        message += f"et de {price["magic_enfant_CHF"]}CHF/{price["magic_enfant_EUR"]}€ pour les enfants. "
    elif price["magic_enfant_CHF"] != 0:
        message += f"et de {price["magic_enfant_CHF"]}CHF pour les enfants. "
    else :
        return message

    if price["bain_adulte_CHF"] != 0 and price["bain_adulte_EUR"] != 0:
        message += f"L'option bain au prix de {price["bain_adulte_CHF"]}CHF/{price["bain_adulte_EUR"]}€ "
    elif price["bain_adulte_CHF"] != 0:
        message += f"L'option bain au prix de {price["bain_adulte_CHF"]}CHF "
    else :
        return message

    if price["bain_enfant_CHF"] != 0 and price["bain_enfant_EUR"] != 0:
        message += f"et de {price["bain_enfant_CHF"]}CHF/{price["bain_enfant_EUR"]}€ pour les enfants."
    elif price["bain_adulte_CHF"] != 0:
        message += f"et de {price["bain_enfant_CHF"]}CHF pour les enfants."
    return message

date= datetime(2026,11,9,11,0,0)
date = datetime.now()
today_price = find_price_by_date(date)
print(today_price)
print(price_message(today_price))
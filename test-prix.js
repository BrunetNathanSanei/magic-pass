
const prices = {
    '2026-09-08T12:00:00': { "magic_adulte_CHF": 524, "magic_adulte_EUR" : 563, "magic_enfant_CHF": 314 ,"magic_enfant_EUR" : 337,"bain_adulte_CHF": 290, "bain_adulte_EUR" : 312, "bain_enfant_CHF": 186 ,"bain_enfant_EUR" : 200},
    '2026-10-06T12:00:00': { "magic_adulte_CHF": 576, "magic_adulte_EUR" : 614, "magic_enfant_CHF": 314 ,"magic_enfant_EUR" : 337,"bain_adulte_CHF": 301, "bain_adulte_EUR" : 320, "bain_enfant_CHF": 197 ,"bain_enfant_EUR" : 209},
    '2026-11-03T12:00:00': { "magic_adulte_CHF": 786, "magic_adulte_EUR" : 0, "magic_enfant_CHF": 366 ,"magic_enfant_EUR" : 0,"bain_adulte_CHF": 311, "bain_adulte_EUR" : 0, "bain_enfant_CHF": 207 ,"bain_enfant_EUR" : 0},
    '2026-12-08T12:00:00': { "magic_adulte_CHF": 944, "magic_adulte_EUR" : 0, "magic_enfant_CHF": 419 ,"magic_enfant_EUR" : 0,"bain_adulte_CHF": 321, "bain_adulte_EUR" : 0, "bain_enfant_CHF": 217 ,"bain_enfant_EUR" : 0}
};

function findPriceByDate(date) {
    const threshold = Object.keys(prices)
        .map(key => ({
            date: new Date(key),
            key: key
        }))
        .filter(item => date > item.date)
        .reduce((max, item) => 
            !max || item.date > max.date ? item : max,
            null
        );

    return threshold ? prices[threshold.key] : null;
}

function priceMessage(price) {
    let message = "";

    if (price.magic_adulte_CHF !== 0 && price.magic_adulte_EUR !== 0) {
        message += `Le Magic Pass est au prix de ${price.magic_adulte_CHF}CHF/${price.magic_adulte_EUR}€ pour les adultes `;
    } else if (price.magic_adulte_CHF !== 0) {
        message += `Le Magic Pass est au prix de ${price.magic_adulte_CHF}CHF pour les adultes `;
    } else {
        return "Le prix du Magic Pass n'est pas définit pour ce jour";
    }

    if (price.magic_enfant_CHF !== 0 && price.magic_enfant_EUR !== 0) {
        message += `et de ${price.magic_enfant_CHF}CHF/${price.magic_enfant_EUR}€ pour les enfants. `;
    } else if (price.magic_enfant_CHF !== 0) {
        message += `et de ${price.magic_enfant_CHF}CHF pour les enfants. `;
    } else {
        return message;
    }

    if (price.bain_adulte_CHF !== 0 && price.bain_adulte_EUR !== 0) {
        message += `L'option bain au prix de ${price.bain_adulte_CHF}CHF/${price.bain_adulte_EUR}€ `;
    } else if (price.bain_adulte_CHF !== 0) {
        message += `L'option bain au prix de ${price.bain_adulte_CHF}CHF `;
    } else {
        return message;
    }

    if (price.bain_enfant_CHF !== 0 && price.bain_enfant_EUR !== 0) {
        message += `et de ${price.bain_enfant_CHF}CHF/${price.bain_enfant_EUR}€ pour les enfants.`;
    } else if (price.bain_enfant_CHF !== 0) {
        message += `et de ${price.bain_enfant_CHF}CHF pour les enfants.`;
    }

    return message;
}

const now = new Date();
const price = (findPriceByDate(now));

const message = priceMessage(price)
console.log(message)
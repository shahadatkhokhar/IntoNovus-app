const functions = require('firebase-functions');

let currentEvent = {
    'The First one': {
        'Key Topic':'What we are',
        description:'this is where a lot of text will go',
        time:'00:00 AM IST',
        Venue:'A good place to be'
    }
}

let events = {
    'The First one': {
        'Key Topic':'What we are',
        description:'this is where a lot of text will go',
        time:'00:00 AM IST',
        Venue:'A good place to be'
    }
}

exports.eventsfunc = functions.https.onCall((data,context) => {
    return event;
});

exports.currentEventfunc = functions.https.onRequest((data,context) => {
    return currentEvent;
});
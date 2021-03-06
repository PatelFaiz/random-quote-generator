var quotes = [
    'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    'That which does not kill us makes us stronger.',
    'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
    'We must not allow other people’s limited perceptions to define us.',
    'Do what you can, with what you have, where you are.',
    'Be yourself; everyone else is already taken.',
    'This above all: to thine own self be true.',
    'If you cannot do great things, do small things in a great way.',
    'If opportunity doesn’t knock, build a door.',
    'Wise men speak because they have something to say; fools because they have to say something.', 
];

var author = ['-Mahatma Gandhi', '-Friedrich Nietzsche', '-Bernard M. Baruch', '-Virginia Satir', '-Theodore Roosevelt',
    '-Oscar Wilde', '-William Shakespeare', '-Napoleon Hill','-Milton Berle', '-Plato'
];

function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quote-display').innerHTML = quotes[randomNumber];
    document.getElementById('quote-author').innerHTML = author[randomNumber];
}
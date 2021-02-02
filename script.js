
const quotes = [
    {
        name: 'APJ Abdul Kalam',
        quote: 'If you fail, never give up because Fail means First Attempt In Learning.'
    },
    {
        name: 'Mother Teresa',
        quote: 'Be faithful in small things because it is in them that your strength lies.' },{
        name: 'Abraham Lincoln',
        quote: 'Whatever you are, be a good one.'
    },

    {
        name: 'Swami Vivekananda',
        quote: 'The world is the great gymnasium where we come to make ourselves strong.'
    } , {
        name: 'Kalpana Chawla',
        quote: 'You must enjoy the journey because whether or not you get there, you must have fun on the way.'
    }
] 

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener("click", displayQuote);
function displayQuote() {
    let number = Math.floor(Math.random()* quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;

}

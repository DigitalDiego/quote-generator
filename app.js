const quote = document.getElementById('quote');
const person = document.getElementById('person');
const btn = document.getElementById('btn');
const quotes = [
    {quote:"When something is important enough, you do it even it the odds are not in your favor.", person:"Elon Musk"},
    {quote:"With the new day comes new strength and new thoughts.", person:"Eleanor Roosevelt"},
    {quote:"Start where you are. Use what you have. Do what you can.", person:"Arthur Ashe"},
    {quote:"It always seems impossible until it's done.", person:"Nelson Manela"},
    {quote:"Ever tried. Evere failed. No matter. Try again. Fail again. Fail better.", person:"Samuel Beckett"},
    {quote:"Only I can change my life. No one can do it for me.", person:"Carol Burnett"},
    {quote:"Don't watch the clock; do what it does. Keep going.", person:"Sam Levenson"},
    {quote:"If you can dream it, you can do it.", person:"Walt Disney"},
    {quote:"Aim for the moon. If you miss, you may hit a star.", person:"W. Clement Stone"},
    {quote:"Quality is not an act, it is a habit.", person:"Aritotle"},
]

const generateQuote = () => {
    const i = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[i].quote;
    person.innerHTML = quotes[i].person;
    setInterval(() => {
        const i = Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[i].quote;
        person.innerHTML = quotes[i].person;
    }, 5000)
}
generateQuote();
btn.addEventListener('click', generateQuote);
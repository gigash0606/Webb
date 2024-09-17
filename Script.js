const button = document.getElementById('clickButton');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

const quotes = [
    { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "~ Alan Watts" },
    { text: "Life is not a problem to be solved, but a mystery to be lived.", author: "~ Alan Watts" },
    { text: "The best way to predict the future is to invent it.", author: "~ Alan Kay" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "~ Franklin D. Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "~ Theodore Roosevelt" },
    { text: "The journey of a thousand miles begins with one step.", author: "~ Lao Tzu" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "~ Ralph Waldo Emerson" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "~ Chinese Proverb" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "~ Steve Jobs" },
    { text: "The only impossible journey is the one you never begin.", author: "~ Tony Robbins" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "~ Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "~ Sam Levenson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "~ C.S. Lewis" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "~ Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "~ Confucius" },
    { text: "Act as if what you do makes a difference. It does.", author: "~ William James" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "~ Henry David Thoreau" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "~ John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "~ Thomas Jefferson" },
    { text: "Success is not in what you have, but who you are.", author: "~ Bo Bennett" }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

button.addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote.text;
    authorElement.textContent = randomQuote.author;
});

// Particle animation
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.animation = `float ${Math.random() * 15 + 5}s infinite alternate`;
    document.body.appendChild(particle);
}

setInterval(createParticle, 200);

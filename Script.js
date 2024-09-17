const button = document.getElementById('clickButton');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

const quotes = [ { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "~ Alan Watts" },
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
    { text: "Success is not in what you have, but who you are.", author: "~ Bo Bennett" },
    { text: "The way to get started is to quit talking and begin doing.", author: "~ Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "~ Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "~ Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "~ Vince Lombardi" },
    { text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.", author: "~ Steve Jobs" },
    { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "~ Rob Siltanen" },
    { text: "We may encounter many defeats but we must not be defeated.", author: "~ Maya Angelou" },
    { text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "~ Johann Wolfgang Von Goethe" },
    { text: "Imagine your life is perfect in every respect; what would it look like?", author: "~ Brian Tracy" },
    { text: "We generate fears while we sit. We overcome them by action.", author: "~ Dr. Henry Link" },
    { text: "Whether you think you can or think you can't, you're right.", author: "~ Henry Ford" },
    { text: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "~ Helen Keller" },
    { text: "The man who has confidence in himself gains the confidence of others.", author: "~ Hasidic Proverb" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "~ Franklin D. Roosevelt" },
    { text: "Creativity is intelligence having fun.", author: "~ Albert Einstein" },
    { text: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.", author: "~ Don Zimmer" },
    { text: "Do what you can with all you have, wherever you are.", author: "~ Theodore Roosevelt" },
    { text: "Develop an 'Attitude of Gratitude'. Say thank you to everyone you meet for everything they do for you.", author: "~ Brian Tracy" },
    { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "~ Alan Watts" },
    { text: "Life is not a problem to be solved, but a mystery to be lived.", author: "~ Alan Watts" },
    { text: "The best way to predict the future is to invent it.", author: "~ Alan Kay" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "~ Franklin D. Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "~ Theodore Roosevelt" },
    { text: "The journey of a thousand miles begins with one step.", author: "~ Lao Tzu" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "~ Ralph Waldo Emerson" }
]; // Replace with your quotes

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

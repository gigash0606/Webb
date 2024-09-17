const button = document.getElementById('clickButton');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

const quotes = [
    // Add your quotes here
    { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "~ Alan Watts" },
    // ... more quotes
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

// Particle animation (optional)
setInterval(() => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.animation = `float ${Math.random() * 15 + 5}s infinite alternate`;
    document.body.appendChild(particle);
}, 200);

const quotes = [
  "Believe in yourself and all that you are.",
  "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
  "You are capable of amazing things.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your future is created by what you do today, not tomorrow.",
  "Small steps every day lead to big results.",
  "Push yourself, because no one else is going to do it for you.",
  "Stay positive, work hard, make it happen.",
  "Opportunities don't happen. You create them.",
  "Keep learning, keep growing, keep moving forward."
];

const quoteText = document.getElementById("quote-text");
const quoteButton = document.getElementById("new-quote-btn");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.style.animation = "none"; // Reset
  quoteText.offsetHeight;             // Reflow trick
  quoteText.textContent = quotes[randomIndex];
  quoteText.style.animation = "fadeIn 0.8s ease"; // Restart animation
}


document.addEventListener("DOMContentLoaded", () => {
  showRandomQuote();                          // Show quote on load
  quoteButton.addEventListener("click", showRandomQuote); // Click
  setInterval(showRandomQuote, 10000);        // Auto every 10s
});

function updateShareLinks(quote) {
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(quote)}`;
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com&quote=${encodeURIComponent(quote)}`;

  document.getElementById("whatsapp-share").href = whatsappURL;
  document.getElementById("twitter-share").href = twitterURL;
  document.getElementById("facebook-share").href = facebookURL;
}

// Update this inside your showRandomQuote function:
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  quoteText.style.animation = "none";
  quoteText.offsetHeight;
  quoteText.textContent = selectedQuote;
  quoteText.style.animation = "fadeIn 0.8s ease";
  updateShareLinks(selectedQuote);
}

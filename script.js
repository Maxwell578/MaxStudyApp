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

function updateShareLinks(quote) {
  const encodedQuote = encodeURIComponent(quote);
  document.getElementById("whatsapp-share").href = `https://wa.me/?text=${encodedQuote}`;
  document.getElementById("twitter-share").href = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
  document.getElementById("facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodedQuote}`;
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Fade out then fade in animation
  quoteText.style.animation = "none";     // Reset animation
  quoteText.offsetHeight;                  // Trigger reflow
  quoteText.textContent = selectedQuote;  // Update quote text
  quoteText.style.animation = "fadeIn 0.8s ease"; // Restart animation

  updateShareLinks(selectedQuote);
}

document.addEventListener("DOMContentLoaded", () => {
  showRandomQuote(); // Show on page load

  quoteButton.addEventListener("click", showRandomQuote); // On button click

  setInterval(showRandomQuote, 10000); // Every 10 seconds
});

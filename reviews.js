(async function () {
  const panel = document.querySelector('#review-panel');
  try {
    const response = await fetch('/api/reviews');
    if (!response.ok) return;
    const reviews = await response.json();
    if (!Array.isArray(reviews) || !reviews.length) return;
    let index = 0;
    function show() {
      const review = reviews[index];
      panel.querySelector('blockquote').textContent = review.text;
      panel.querySelector('.review-author').textContent = review.author;
      const date = new Intl.DateTimeFormat('fr-CA', { dateStyle: 'long' }).format(new Date(review.date));
      panel.querySelector('.review-details').textContent = review.rating + '/5 · ' + date + ' · Google Maps';
      panel.querySelector('output').textContent = (index + 1) + ' / ' + reviews.length;
    }
    panel.querySelectorAll('button').forEach(button => {
      button.hidden = reviews.length < 2;
      button.addEventListener('click', () => {
        index = (index + Number(button.dataset.step) + reviews.length) % reviews.length;
        show();
      });
    });
    show();
    panel.hidden = false;
  } catch { /* Le lien Google Maps reste disponible. */ }
})();

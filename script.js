/*
  script.js
  ----------
  Handles interactivity on the digital bouquet page. When the polar bear is
  clicked, hearts are generated and rise up the screen. Each heart is
  positioned randomly and removed after its animation completes.
*/

document.addEventListener('DOMContentLoaded', () => {
  const bearImg = document.querySelector('.bear img');
  if (bearImg) {
    bearImg.addEventListener('click', () => {
      // Create multiple hearts on each click
      for (let i = 0; i < 20; i++) {
        createHeart();
      }
    });
  }
});

/**
 * Create a single heart element and animate it upwards. Hearts use the
 * 'heart' CSS class for their animation and styling. Once the animation
 * completes (5s), the element is removed from the DOM.
 */
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = 12 + Math.random() * 20 + 'px';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
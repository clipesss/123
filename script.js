document.addEventListener('DOMContentLoaded', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const buttons = document.querySelectorAll('.cta');
  buttons.forEach(btn => {
    if (isMobile) {
      btn.setAttribute('href', 'tel:+375333636898');
    }
  });
});

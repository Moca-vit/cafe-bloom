window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 2px 16px rgba(61, 43, 31, 0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
hamburger.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// ページ上部ボタンの表示/非表示
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('is-visible', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

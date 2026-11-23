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

// スクロール時の処理（ヘッダーの影・ページ上部ボタン）
// リスナーを1つにまとめ、requestAnimationFrameで1フレーム1回に間引く
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 0);
  scrollTopBtn.classList.toggle('is-visible', y > 300);
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

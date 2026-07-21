// 共通の処理を行う関数
const applyScrollEffect = (className) => {
  const elements = document.getElementsByClassName(className);
  if (!elements.length) return;

  const scrollY = window.pageYOffset;
  const windowH = window.innerHeight;
  const showTiming = 200; // 表示するタイミング

  // クラスがついている全要素をチェック
  Array.from(elements).forEach((elem) => {
    const elemRect = elem.getBoundingClientRect();
    const elemY = scrollY + elemRect.top;

    if (scrollY > elemY - windowH + showTiming) {
      elem.classList.add('is-show');
    }
  });
};

// 読み込み後の時差実行
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => applyScrollEffect('scroll-right'), 800);
  setTimeout(() => applyScrollEffect('scroll-top'), 1500);
  setTimeout(() => applyScrollEffect('scroll-up-first'), 3000);
});

// スクロール時の実行
window.addEventListener('scroll', () => {
  applyScrollEffect('scroll-up');
});
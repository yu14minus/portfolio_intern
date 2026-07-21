$(function () {
  // スライダー
  const mySwiper = new Swiper('#works .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    // 無限ループ
    loop: true,
    loopAdditionalSlides: 1,
    // 自動再生
    speed: 1500,
    autoplay: {
    delay: 3500, // 3.5秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    pagination: {
      el: '#works .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#works .swiper-button-next',
      prevEl: '#works .swiper-button-prev',
    },
    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 60,
      }
    },
  });

  // スライドの動画
  $(".play-btn").on("click", function(){
    const $btn = $(this);
    const video = $btn.closest(".work-imgcontainer").find("video");

    if($btn.hasClass("playActive")){
      video.get(0).pause();
    } else {
      video.get(0).play();
    }

    video.on("playing", function(){
      $btn.addClass("playActive");
    });
    video.on("pause",function(){
      $btn.removeClass("playActive");
    });
    video.on("ended",function(){
      $btn.removeClass("playActive");
    });
  });


  // ポップアップ
  const clickBtns = document.querySelectorAll('.work-iteminfo');
  const popupWrappers = document.querySelectorAll('.popup-wrapper');

  // 開く処理
  clickBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.dataset.target;
      const targetPopup = document.querySelector(targetId);

      if (targetPopup) {
        // クラスをつけて表示
        targetPopup.classList.add('show');
        // 背景スクロールを禁止
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // 閉じる処理
  popupWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', e => {
      if (e.target === wrapper || e.target.classList.contains('popup-close')) {
        // クラスを外して非表示
        wrapper.classList.remove('show');
        // 背景スクロール禁止を解除
        document.body.style.overflow = '';
      }
    });
  });
  // ポップアップの動画
  $(".popup-play-btn").on("click", function(){
    const $btn = $(this);
    const video = $btn.closest(".popup-imgcontainer").find("video");

    if($btn.hasClass("playActive")){
      video.get(0).pause();
    } else {
      video.get(0).play();
    }

    video.on("playing", function(){
      $btn.addClass("playActive");
    });
    video.on("pause",function(){
      $btn.removeClass("playActive");
    });
    video.on("ended",function(){
      $btn.removeClass("playActive");
    });
  });
});
$(function () {

  /* TOP-Pageボタン制御 */
  $('.page-top').hide();  // TOP-Pageボタン非表示

  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {    // スクロールが100に達したらボタン表示
      $('.page-top').fadeIn();
    } else {
      $('.page-top').fadeOut();
    }
  });

  $('.page-top').click(function () {      // TOP-Pageボタンクリックされた時
    $('body,html').animate({ scrollTop: 0 }, 500);  // TOPへスクロール
    return false;
  });
});


//ハンバーガーメニュー

$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
});




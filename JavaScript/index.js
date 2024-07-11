$(document).ready(() => {
  function toggleSidebar() {
      $(".button").toggleClass("active");
      $(".sidebar").toggleClass("show");
      $(".sidebar-item").toggleClass("active");
  }
  $(".button").on("click tap", () => {
      toggleSidebar();
  });
  $(document).keyup((e) => {
      if (e.keyCode === 27) {
          toggleSidebar();
      }
  });
});


setTimeout(() => {
  document.querySelector(".loader-first").classList.add("loader")
}, 1000);


setTimeout(() => {
  document.querySelector(".loader-first").remove();
}, 2500);

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '40px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-120px' //下から-50pxの位置に
        }, 350); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});
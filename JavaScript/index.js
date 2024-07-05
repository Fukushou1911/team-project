$(document).ready(function() {
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $(".sidebar").toggleClass("show");
    $(".sidebar-item").toggleClass("active");
  }
  $(".button").on("click tap", function() {
    toggleSidebar();
  });
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });
});

$(function() {
  // ローダー終了
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  // ローディング表示
  function show_load() {
    $('.loader .looping-rhombuses-spinner').fadeIn(400);
  }
  // ローディング非表示
  function hide_load() {
    $('.loader .looping-rhombuses-spinner').fadeOut(400);
  }
  // テキスト表示
  function show_txt() {
    $('.loader .txt').fadeIn(400);
  }

  // タイマー処理
  $(window).on('load', function() {
    // 処理①: ローディング表示
    setTimeout(function() {
      show_load();
    }, 800);
    // 処理②: ローディング非表示
    setTimeout(function() {
      hide_load();
    }, 1000);
    // 処理③: テキスト表示
    setTimeout(function() {
      show_txt();
    }, 1500);
    // 処理④: ローダー終了
    setTimeout(function() {
      end_loader();
    }, 2500);
  });
});

// $(function(){
//   function end_loader() {
//     $('#loader03').fadeOut(800);
//   }
//   function show_load() {
//     $('#loader03 .looping-rhombuses-spinner').fadeIn(400);
//   }
//   function hide_load() {
//     $('#loader03 .looping-rhombuses-spinner').fadeOut(400);
//   }
//   function show_txt() {
//     $('#loader03 .txt').fadeIn(400);
//   }
 
//   $(window).on('load', function () {
//   setTimeout(function () {
//     show_load();
//   }, 800)
//   setTimeout(function () {
//     hide_load();
//   }, 3500)
//   setTimeout(function () {
//     show_txt();
//   }, 4000)
//   setTimeout(function () {
//     end_loader();
//   }, 5000)
//   })
// })

// const slideDown = function(el) {
//  el.style.height = 'auto';
//  let h = el.offsetHeight;
//  el.animate({
//  height: [ 0, h + 'px' ]
//  }, {
//  duration: 300,
//  });
//  el.style.height = 'auto';
//  el.setAttribute('aria-hidden', 'false');
// };

// const slideUp = function(el) {
//  let h = el.offsetHeight;
//  el.style.height = h + 'px';
//  el.animate({
//  height: [ h + 'px', 0]
//  }, {
//  duration: 300,
//  });
//  el.style.height = 0;
//  el.setAttribute('aria-hidden', 'true'); 
// };
// let activeIndex = null;
// const accordions = document.querySelectorAll('.include-accordion');
// accordions.forEach(function (accordion) {
//  const accordionBtns = accordion.querySelectorAll('.accordionBtn');
//  accordionBtns.forEach( function(accordionBtn, index) {
//  accordionBtn.addEventListener('click', function(e) {
//  activeIndex = index;
//  e.currentTarget.parentNode.classList.toggle('active');
//  accordionBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false'); 
//  const content = e.currentTarget.nextElementSibling;
//  if (e.currentTarget.parentNode.classList.contains('active')) {
//  slideDown(content);
//  }else{
//  slideUp(content);
//  }
//  accordionBtns.forEach( function(accordionBtn, index) {
//  if (activeIndex !== index) {
//  e.currentTarget.parentNode.classList.remove('active');
//  e.currentTarget.setAttribute('aria-expanded', 'false');
//  const openedContent = e.currentTarget.nextElementSibling;
//  slideUp(openedContent);
//  }
//  });

//  let container = accordion.closest('.scroll-control');
//  if (e.currentTarget.parentNode.classList.contains('active') == false && container) {
//  container.classList.remove('active')
//  }else if (container !== null){
//  container.classList.add('active')
//  }
//  });
//  });
// });
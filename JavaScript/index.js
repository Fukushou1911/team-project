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
    if ($(this).scrollTop() > 100) {  
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '40px' 
        }, 300); 
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-120px' 
        }, 350);
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); 
    return false;
  });
});

const slideContainer = document.querySelector('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const slides = document.querySelectorAll('.slide > div');
const totalSlides = slides.length;
const slideWidth = 100 / totalSlides;
slideContainer.style.width = `${totalSlides * 100}%`;
slides.forEach((slide) => {
  slide.style.width = `${slideWidth}%`;
});
let count = 0;
let autoPlayInterval;

function updateSlidePosition() {
  slideContainer.style.transform = `translateX(-${count * slideWidth}%)`;
}

function updateIndicatorColors() {
  const lists = document.querySelectorAll('.list');
  lists.forEach((list, i) => {
    list.style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
  });
}

function nextClick() {
  count++;
  if (count >= totalSlides) {
    count = 0;
  }
  updateSlidePosition();
  updateIndicatorColors();
}

function prevClick() {
  count--;
  if (count < 0) {
    count = totalSlides - 1;
  }
  updateSlidePosition();
  updateIndicatorColors();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 5000);
}

function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

next.addEventListener('click', () => {
  nextClick();
  resetAutoPlayInterval();
});

prev.addEventListener('click', () => {
  prevClick();
  resetAutoPlayInterval();
});

indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(indicator.children).indexOf(event.target);
    setActiveSlide(index);
  }
});

function setActiveSlide(index) {
  count = index;
  updateSlidePosition();
  updateIndicatorColors();
  resetAutoPlayInterval()
}
updateIndicatorColors();
startAutoPlay();
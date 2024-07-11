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
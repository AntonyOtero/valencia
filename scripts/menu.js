$(".menu-toggle a").on("click", e => {
  $(".menu").toggleClass("is-open");
  $(".menu-toggle img").toggleClass("is-hidden");
});
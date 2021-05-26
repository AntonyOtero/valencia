$(".menu-toggle a").on("click", e => {
  $("body").toggleClass("menu-open");
  $(".menu").toggleClass("is-open");
  $(".menu-toggle img").toggleClass("is-hidden");
});
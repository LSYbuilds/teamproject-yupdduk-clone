$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();
    var target = $($(this).attr("href"));
    $("html, body").animate({ scrollTop: target.offset().top }, 500);
  });

  $(".nav-area").hover(
    function () {
      $(".sub-menu").slideDown(120);
    },
    function () {
      $(".sub-menu").slideUp(120);
    }
  );
  $(".mobile-nav-call").on("click", function () {
    $(".mobile-nav-warp").fadeIn(300);
    $(".mobile-nav-warp > .mobile-nav-menu").animate({ right: "0px" }, 350);
  });
  $(".mobile-nav-bg").on("click", function () {
    $(".mobile-nav-warp").fadeOut(300);
    $(".mobile-nav-warp > .mobile-nav-menu").animate({ right: "-300px" }, 350);
  });
  let mnl = $(".mobile-nav-list > li");
  let mnlf = $(".mobile-nav-list > li > a");
  let mll = $(".mobile-lnb-list");
  mnl.on("click", function () {
    let mnls = $(this).index();
    mll.eq(mnls).slideToggle(300);
  });
  let scroll_top = $(".scroll-top-btn");
  scroll_top.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

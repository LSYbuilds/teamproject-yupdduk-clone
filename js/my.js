$(document).ready(function () {
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
  let mll = $(".mobile-lnb-list");
  mnl.on("click", function () {
    let mnls = $(this).index();
    mll.eq(mnls).slideToggle(300);
  });
});

$(document).ready(function () {
  // function openPopup() {
  //   window.open("./page/login.html", "popup", "width=500,height=500");
  // }
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

  $(window).resize(function () {
    if (window.innerWidth > 1200) {
      $(".mobile-nav-warp").hide();
    }
  });

  let mnl = $(".mobile-nav-list > li");
  let mnlf = $(".mobile-nav-list > li > a");
  let mll = $(".mobile-lnb-list");
  mnl.on("click", function () {
    let mnls = $(this).index();
    if (mll.is(":hidden")) {
      mnl.not(mll.eq(mnls)).children(mnlf).removeClass("mobile-font-color");
      mnl.eq(mnls).children(mnlf).addClass("mobile-font-color");
      mll.not(mll.eq(mnls)).slideUp(300);
      mll.eq(mnls).slideToggle(300);
    }
  });
  let scroll_top = $(".scroll-top-btn");
  scroll_top.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

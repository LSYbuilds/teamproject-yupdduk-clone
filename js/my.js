$(document).ready(function () {
  // function openPopup() {
  //   window.open("./page/login.html", "popup", "width=500,height=500");
  // }
  slidemenu();
  mobilemenu();
  rezise();
  popup();

  function slidemenu() {
    $(".nav-area").hover(
      function () {
        $(".sub-menu").stop().slideDown(120);
      },
      function () {
        $(".sub-menu").stop().slideUp(120);
      }
    );
  }

  function mobilemenu() {
    $(".mobile-nav-call").on("click", function () {
      $(".mobile-nav-warp").fadeIn(300);
      $(".mobile-nav-warp > .mobile-nav-menu").animate({ right: "0px" }, 350);
    });
    $(".mobile-nav-bg").on("click", function () {
      $(".mobile-nav-warp").fadeOut(300);
      $(".mobile-nav-warp > .mobile-nav-menu").animate(
        { right: "-300px" },
        350
      );
    });
  }

  function rezise() {
    $(window).resize(function () {
      window.innerWidth > 1200 ? $(".mobile-nav-warp").hide : null;
    });
  }

  // 만약 저게 안된다면 이걸 써라
  // function rezise() {
  //   $(window).resize(function () {
  //     if (window.innerWidth > 1200) {
  //       $(".mobile-nav-warp").hide();
  //     }
  //   });
  // }
  function mobilemenuList() {}
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

function popup() {
  $(".popup-close").on("click", function () {
    $(".popup_notice").fadeOut(300);
  });

  // function makeNoticeList() {
  //   let noticeHtml = ``;
  //   for (let i = 0; i < noticeData.notice_total; i++) {
  //     let obj = noticeData[`notice_1${i + 1}`];
  //     let temp = `
  //     <li>
  //       <span class="notice-notice-list">${obj.date}</span>
  //       ${obj.text}
  //     </li>
  //     `;
  //     noticeHtml += temp;
  //   }
  //   let noticeWrapper = document.querySelector("notice-notice > li");
  //   noticeWrapper.innerHTML = noticeHtml;
  // }
}

// let mobilemenuList = () => {
//   let mnl = document.querySelectorAll(".mobile-nav-list > li");
//   mnl.forEach((item) => {
//     item.addEventListener("click", () => {

//     })
//   })
// }

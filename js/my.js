$(document).ready(function () {
  $(".nav-area").hover(
    function () {
      $(".sub-menu").slideDown(120);
    },
    function () {
      $(".sub-menu").slideUp(120);
    }
  );

  // function header()
  // {
  //   $(".nav").hover(
  //     function()
  //     {
  //       alert("호버됨");
  //     },
  //     function()
  //     {
  //       alert("호버끔");
  //     }
  //   );
  // }
});



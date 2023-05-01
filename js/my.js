$(document).ready(function () {
  $(".nav-area").hover(
    function()
    {
      $('.sub-menu').slideDown(300);
    },
    function()
    {
      $('.sub-menu').slideUp(300);
    });

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



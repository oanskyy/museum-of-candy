$(function () { 
  $(document).scroll( () => { 
    var $nav = $("#main-navbar"); 
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  })
})

  
//   $(function () {
//     $(document).scroll(function () {
//         var $nav = $("#main-navbar");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });
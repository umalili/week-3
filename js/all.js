$(document).ready(function () {
    $(".menuBtn").click(function (e) {
      e.preventDefault();
      $(".menu").toggleClass("active");
    });
  });
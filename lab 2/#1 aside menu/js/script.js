$(document).ready(function () {
  $("aside").hover(
    function () {
      $(this).animate({ left: "0px" });
    },
    function () {
      $(this).animate({ left: "-128px" });
    }
  );

  $("nav ul li h3").click(function () {
    $("nav ul li ul").animate({
      padding: "0",
      height: "0",
    });

    $(this).parents().children("ul").animate({
      padding: "5px 10px;",
      height: "172px",
    });
  });
});

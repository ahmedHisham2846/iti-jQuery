$(document).ready(function () {
  $(".small-img").hover(
    function (e) {
      $(this).mousemove(function (x) {
        var imgX = x.pageX + 10;
        if (screen.width < x.pageX + 580) {
          $(".big-img").css("left", `${imgX - 500}px`);
        } else {
          $(".big-img").css("left", `${imgX}px`);
        }

        $(".big-img").css("top", `${x.pageY + 10}px`);
        $(".big-img").attr("src", this.src);
      });
    },
    function () {
      $(".big-img").attr("src", "");
    }
  );
});

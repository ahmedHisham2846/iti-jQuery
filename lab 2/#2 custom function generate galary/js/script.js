$(document).ready(function () {
  $.fn.generateSlider = function (imgInformations) {
    this.append(
      "<div class='container'><h2>Gallery</h2><div class='images-box'></div></div>"
    );

    var imagesBox = this.find(".images-box");
    imagesBox.css({
      textAlign: "center",
    });

    for (var i = 0; i < imgInformations.length; i++) {
      imagesBox.append(`<img src='${imgInformations[i].path}' alt='${i}' />`);
    }
    
    imagesBox
      .find("img")
      .css({
        width: "200px",
        padding: "3px",
        backgroundColor: "#f6f6f6",
        border: "1px solid #ccc",
        margin: "5px",
        cursor: "pointer",
      })
      .click((e) => {
        var clickedImg = e.target;

        this.append(
          "<div class='popup-overlay'></div><div class='popup-box'></div>"
        )
          .find(".popup-overlay")
          .css({
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: "1000",
          })
          .parent()
          .find(".popup-box")
          .css({
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "20px",
            zIndex: "1001",
          })
          .append(`<img src='${clickedImg.src}' alt='${clickedImg.alt}' />`)
          .find("img")
          .css({ maxWidth: "100%" })
          .parent()
          .append("<span class='close-button'>X</span>")
          .find(".close-button")
          .css({
            position: "absolute",
            top: "-15px",
            right: "-15px",
            backgroundColor: "var(--main-Color)",
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            textAlign: "center",
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: "Arial, Tahoma",
            borderRadius: "50%",
          })
          .click(() => {
            this.find(".popup-box").remove();
            this.find(".popup-overlay").remove();
          })
          .parent()
          .append(
            "<div><span class='left'><</span><span class='right'>></span></div>"
          )
          .find(".left")
          .css(nextAndPrevious)
          .click(() => {
            var imgIndex = this.find(".popup-box").find("img")[0].alt;
            this.find(".popup-box")
              .find("img")
              .fadeOut(3000, () => {
                imgIndex =
                  imgIndex == 0 ? imgInformations.length - 1 : imgIndex - 1;

                  this.find(".popup-box").find("img")[0].src =
                  imgInformations[imgIndex].path;
                this.find(".popup-box").find("img")[0].alt = imgIndex;
                this.find(".popup-box").find("img").fadeIn(3000);
              });
          })
          .parent()
          .find(".right")
          .click(() => {
            var imgIndex = this.find(".popup-box").find("img")[0].alt;
            this.find(".popup-box")
              .find("img")
              .fadeOut(3000, () => {
                imgIndex =
                  imgIndex >= imgInformations.length - 1 ? 0 : Number(imgIndex) + 1;

                this.find(".popup-box").find("img")[0].src =
                  imgInformations[imgIndex].path;
                this.find(".popup-box").find("img")[0].alt = imgIndex;
                this.find(".popup-box").find("img").fadeIn(3000);
              });
          })
          .css(nextAndPrevious)
          .parent()
          .css({
            marginTop: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          });
      });

    var nextAndPrevious = {
      color: "#fff",
      backgroundColor: "#000",
      padding: "5px 20px",
      borderRadius: "10px",
      cursor: "pointer",
    };

    this.css({
      paddingTop: "50px",
      paddingBottom: "50px",
      backgroundColor: "#f5f5f5",
    })
      .children(".container")
      .children("h2")
      .css({
        fontWeight: "bold",
        fontSize: "30px",
        color: "var(--main-Color)",
        margin: "0 0 50px",
        textAlign: "center",
      });
  };

  var images = [
    {
      path: "./images/L1.jpg",
      alt: "",
    },
    {
      path: "./images/L2.jpg",
      alt: "",
    },
    {
      path: "./images/L3.jpg",
      alt: "",
    },
    {
      path: "./images/L4.jpg",
      alt: "",
    },
    {
      path: "./images/L10.jpg",
      alt: "",
    },
    {
      path: "./images/L9.jpg",
      alt: "",
    },
    {
      path: "./images/L8.jpg",
      alt: "",
    },
    {
      path: "./images/L7.jpg",
      alt: "",
    },
    {
      path: "./images/L6.jpg",
      alt: "",
    },
  ];

  $(".gallery").generateSlider(images);
});

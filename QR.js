let imgBox = document.getElementById("imgBox");
let QRimg = document.getElementById("QRimg");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("myButton");
let generate = () => {
  if (qrText.value.length > 0) {
    //user must input a text to generate QR
    QRimg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value; //api will generate a QRcode
    imgBox.classList.add("show"); //class "show" is added and qr is shown
  } else {
    //when no input text is provided then shaking animation is enabled by adding class "error" and class "show" is removed
    imgBox.classList.remove("show");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000); //setTimeout is used to remove class "error" so that the animation is again shown when the user clicks on the QR code without any input text
  }
};
qrText.addEventListener("keydown", function (event) {
  //to input text the enter key press feature is also added
  if (event.key === "Enter") {
    btn.click();
  }
});

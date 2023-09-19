const changeColorButton = document.getElementById("changeColorButton");

function changeBackgroundColor() {
  const userConfirmed = confirm("Click OK for change background color");
  if (userConfirmed) {
    document.body.style.transition = "background-color 2s";
    document.body.style.backgroundColor = "black";
  }
}
changeColorButton.addEventListener("click", changeBackgroundColor);
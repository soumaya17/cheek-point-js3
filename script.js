// creat  DOMContentLoaded event.

document.addEventListener("DOMContentLoaded", function (event) {
  //   change-color-btn elements
  var changeColorBtn = document.getElementById("change-color-btn");
  console.log(changeColorBtn);

  //     color-box element

  var changeColorBox = document.getElementById("color-box");
  console.log(changeColorBox);

  // getRandomColor() function creation
  function getRandomColor() {
    var hexadecimal = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    var color = "#";
    for (let i = 0; i < 6; i++) {
      var randomPosition = Math.floor(Math.random() * hexadecimal.length);
      color += hexadecimal[randomPosition];
    }
    return color;
  }
  //   add Add an event listener to the change-color-btn element
  changeColorBtn.addEventListener("click", function () {
    changeColorBox.style.backgroundColor = getRandomColor();
  });
});

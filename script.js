const squares = document.querySelectorAll(".square");

squares.forEach(current => {
  current.addEventListener("mouseover", () => {
    // first make all coffee
    squares.forEach(square => {
      square.style.backgroundColor = "#6F4E37"; // coffee
    });

    current.style.backgroundColor = "#E6E6FA"; // lavender
  });

  current.addEventListener("mouseout", () => {
    // reset all to lavender
    squares.forEach(square => {
      square.style.backgroundColor = "#E6E6FA";
    });
  });
});

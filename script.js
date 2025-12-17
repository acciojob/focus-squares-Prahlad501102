//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach(current => {
  current.addEventListener("mouseenter", () => {
    squares.forEach(square => {
      if (square !== current) {
        square.style.backgroundColor = "#6F4E37"; // coffee
      }
    });
  });

  current.addEventListener("mouseleave", () => {
    squares.forEach(square => {
      square.style.backgroundColor = "#E6E6FA"; // lavender
    });
  });
});

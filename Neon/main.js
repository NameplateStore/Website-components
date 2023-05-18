function updateHeading() {
  var input = document.getElementById("myInput");
  var heading = document.getElementById("myHeading");
  heading.textContent = input.value || "Yourname";
}
// Add event listener to set default value in h1 tag when page loads
window.addEventListener("load", function () {
  var heading = document.getElementById("myHeading");
  var input = document.getElementById("myInput");
  heading.textContent = input.value || "Yourname";
});

//Change color

var currentColor = "neon-red";

function changeNeonColor(color) {
  var heading = document.getElementById("myHeading");

  // Remove existing neon color class
  heading.classList.remove(currentColor);

  // Add the appropriate neon color class based on the button clicked
  if (color === "red") {
    heading.classList.add("neon-red");
    currentColor = "neon-red";
  } else if (color === "pink") {
    heading.classList.add("neon-pink");
    currentColor = "neon-pink";
  } else if (color === "yellow") {
    heading.classList.add("neon-yellow");
    currentColor = "neon-yellow";
  } else if (color === "blue") {
    heading.classList.add("neon-blue");
    currentColor = "neon-blue";
  } else if (color === "skyblue") {
    heading.classList.add("neon-skyblue");
    currentColor = "neon-skyblue";
  } else if (color === "green") {
    heading.classList.add("neon-green");
    currentColor = "neon-green";
  }
}

// JavaScript function to change the font family

window.onload = function() {
    var defaultFont = "Vanilla Macchiato";
    var text = document.getElementById("myHeading");
    text.style.fontFamily = defaultFont;
  };
  
  function changeFont(button) {
    var font = button.getAttribute("data-value");
    var text = document.getElementById("myHeading");
    var inputText = document.getElementById("myInput");
    inputText.style.fontFamily = font;
    text.style.fontFamily = font;
  }
  
  

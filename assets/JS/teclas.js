let colorGlobal = "";

document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (event.key === "a") {
    colorGlobal = "pink";
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (event.key === "s") {
    colorGlobal = "orange";
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (event.key === "d") {
    colorGlobal = "skyblue";
    keyDiv.style.backgroundColor = colorGlobal;
  } else if (event.key === "q") {
    createColorDiv("purple");
  } else if (event.key === "w") {
    createColorDiv("gray");
  } else if (event.key === "e") {
    createColorDiv("brown");
  }
});

function createColorDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.className = "color-box";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}

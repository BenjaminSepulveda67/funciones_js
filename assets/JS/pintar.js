const pintar = (element, color = "green") => {
  element.style.backgroundColor = color;
};

const ele1 = document.getElementById("col1");
const ele2 = document.getElementById("col2");

pintar(ele2, "yellow");

ele1.addEventListener("click", () => pintar(ele1, "yellow"));

ele2.addEventListener("click", () => pintar(ele2, "green"));
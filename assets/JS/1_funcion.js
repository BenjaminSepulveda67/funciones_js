const example = function (a, b, c) {
  return a + b + c;
};

function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    const result = example(num1, num2, num3);
    document.getElementById("result").textContent = `La suma es: ${result}`;
  } else {
    document.getElementById("result").textContent =
      "Por favor, ingresar números en todas las casillas.";
  }
}
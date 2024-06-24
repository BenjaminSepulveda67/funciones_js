let suma = (a, b) => a + b;

document.getElementById("calculateButton").addEventListener("click", () => {
  const result = suma(5, 3);
  document.getElementById("result").textContent = result;
});

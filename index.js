const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        let expression = display.value;
        expression = expression.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");
        expression = expression
          .replace(/sin\(/g, "Math.sin(")
          .replace(/cos\(/g, "Math.cos(")
          .replace(/tan\(/g, "Math.tan(");
        display.value = eval(expression);
      } catch (error) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operation = document.querySelector(".operation-btn");
const results = document.getElementById("result");

// The operation passed in html onClick function then converting num1 and num2 value to Number datatype and used switch case to do the operations 
const calculate = (operation) => {
  let result;
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  switch (operation) {
    case "add":
      result = n1 + n2;
      break;
    case "subtract":
      result = n1 - n2;
      break;
    case "multiply":
      result = n1 * n2;
      break;
    case "divide":
      result = n1 / n2;
      break;
  }
  results.innerHTML = result;
};

// For Clear the input Field a clearAll function is used
const clearAll = () => {
  num1.value = null;
  num2.value = null;
  results.innerHTML = "Result will appear here";
};


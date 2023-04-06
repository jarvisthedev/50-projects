const container = document.querySelector(".container");
const dispOutput1 = document.querySelector(".disp--output1");
const dispOutput2 = document.querySelector(".disp--output2");

function deleteHelper_func() {
  if (dispOutput2.textContent.length > 0) {
    let inputvalue = dispOutput2.textContent.split("");

    inputvalue.pop();
    return inputvalue.join("");
  }
}

function lastDotHelper_func(value_in) {
  let digitsarr = [];
  let join_state = "";
  for (let i = value_in.length; i > 0; i--) {
    if (value_in[i] === "/") {
      digitsarr = value_in.split("/");
      join_state = "/";
      break;
    } else if (value_in[i] === "x") {
      digitsarr = value_in.split("x");
      join_state = "x";
      break;
    } else if (value_in[i] === "+") {
      digitsarr = value_in.split("+");
      join_state = "+";
      break;
    } else if (value_in[i] === "-") {
      digitsarr = value_in.split("-");
      join_state = "-";
      break;
    } else if (
      !value_in.includes("/") &&
      !value_in.includes("x") &&
      !value_in.includes("+") &&
      !value_in.includes("-")
    ) {
      digitsarr.push(value_in);
      break;
    }
  }

  let add_dot = digitsarr.splice(-1)[0];
  if (!add_dot.includes(".")) add_dot += ".";

  digitsarr.push(add_dot);
  value_in = digitsarr.join(join_state);

  return value_in;
}

function calculateBodmas(expression) {
  // Remove all whitespace from the expression
  expression = expression.replace(/\s/g, "");

  // Evaluate expressions inside brackets first
  while (/\([^()]+\)/.test(expression)) {
    expression = expression.replace(/\([^()]+\)/g, (match) => {
      return calculateBodmas(match.slice(1, -1));
    });
  }

  // Evaluate division and multiplication from left to right
  expression = expression.replace(
    /(\d+(\.\d+)?)([*/])(\d+(\.\d+)?)/g,
    (match, left, leftDecimal, operator, right, rightDecimal) => {
      left = parseFloat(left + (leftDecimal || ""));
      right = parseFloat(right + (rightDecimal || ""));
      return operator === "*" ? left * right : left / right;
    }
  );

  // Evaluate addition and subtraction from left to right
  expression = expression.replace(
    /(\d+(\.\d+)?)([+\-])(\d+(\.\d+)?)/g,
    (match, left, leftDecimal, operator, right, rightDecimal) => {
      left = parseFloat(left + (leftDecimal || ""));
      right = parseFloat(right + (rightDecimal || ""));
      return operator === "+" ? left + right : left - right;
    }
  );

  // Return the final result
  return parseFloat(expression);
}

let num = "0";
let operation = "+";
container.addEventListener("click", function (e) {
  // Delete functionality
  if (e.target.classList.contains("delete")) {
    dispOutput2.textContent = deleteHelper_func();
  }

  // Appending the numbers to user
  if (e.target.classList.contains("num")) {
    num = e.target.textContent;
    dispOutput2.textContent += num;
  }

  // Decimal point notation
  if (e.target.classList.contains("dot")) {
    let dispvalue_dot = dispOutput2.textContent;
    dispOutput2.textContent = lastDotHelper_func(dispvalue_dot);
  }

  // Operation sign i.e /, x, -, +
  if (e.target.classList.contains("sign")) {
    let dispvalue_sign = dispOutput2.textContent;
    let lastval = dispvalue_sign.split("").pop();
    let signval = e.target.textContent;
    // console.log(lastval, signval);

    // GUARD CLAUSE TO PREVENT MANIPULATIVE MATH ERROS
    if (
      ((lastval === "/" || dispvalue_sign.length === 0) &&
        (signval === "x" || signval === "/")) ||
      ((lastval === "x" || dispvalue_sign.length === 0) &&
        (signval === "x" || signval === "/")) ||
      (lastval === "+" && signval === "+") ||
      (lastval === "-" && signval === "+")
    ) {
      return;
    } else if (lastval === "-" && signval === "-") {
      dispOutput2.textContent = deleteHelper_func() + signval;
    } else if (lastval === "+" && signval === "-") {
      dispOutput2.textContent = deleteHelper_func() + signval;
    } else {
      dispOutput2.textContent += e.target.textContent;
    }
  }

  // Equals to functionality
  if (e.target.classList.contains("equal")) {
    dispOutput1.textContent = dispOutput2.textContent;
    dispOutput2.textContent = calculateBodmas(dispOutput2.textContent);
  }
});

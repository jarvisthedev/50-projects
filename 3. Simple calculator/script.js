{
  /* <div class="basic-calc">
<div class="disp output">
     <span class="disp--output1">1 * 2</span>
     <span class="disp--output2">2</span>
</div>
<span class="sign divide">/</span>
<span class="sign multi">x</span>
<span class="sign delete">d</span>
<span class="num">7</span>
<span class="num">8</span>
<span class="num">9</span>
<span class="sign sub">-</span>
<span class="num">4</span>
<span class="num">5</span>
<span class="num">6</span>
<span class="sign add">+</span>
<span class="num">1</span>
<span class="num">2</span>
<span class="num">3</span>
<span class="sign equal">=</span>
<span class="num zero">0</span>
<span class="sign dot">.</span>
</div> */
}

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
  // 1.8 + .3 - 5 x .4
  if (e.target.classList.contains("dot")) {
    if (!dispOutput2.textContent.split("").includes("."))
      dispOutput2.textContent += ".";
  }

  // Operation sign i.e /, x, -, +
  if (e.target.classList.contains("sign")) {
    let dispvalue_sign = dispOutput2.textContent;
    let lastval = dispvalue_sign.split("").pop();
    let signval = e.target.textContent;
    console.log(lastval, signval);

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
    // dispOutput2.textContent.split()
    dispOutput2.textContent = "";
  }
});

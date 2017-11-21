$(document).ready(function() {
  var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length - 9, 9));
      if (number.length > 10) {
        number = "";
        totaldiv.text("Err");
      }
    }
  };

  var inputNumberStr = "";
  var resultNumberStr = "";
  var inputNumber = 0;
  var resultNumber = 0;
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text(resultNumber);

  function doBinaryCalc(num1, num2, op) {
    switch (op) {
      case "+":
        return num2 + num1;
      case "-":
        return num2 - num1;
      case "*":
        return num2 * num1;
      case "/":
        return num2 / num1;
      default:
        console.log(op + " not defined.");
        return new Error();
    }
  }
  $("#numbers > a").not("#clear").click(function() {
    inputNumberStr += $(this).text();
    inputNumber = parseFloat(inputNumberStr);
    if (operator.length !== 0) {
      resultNumber = doBinaryCalc(inputNumber, resultNumber, operator);
    } else {
      resultNumber = inputNumber;
    }
    console.log(resultNumber);
    totaldiv.text(inputNumber);
    testNumLength(inputNumberStr);
  });
  $("#operators > a").not("#equals").click(function() {
    operator = $(this).text();
    inputNumber = resultNumber;
    console.log(inputNumber);
    inputNumberStr = "";
    totaldiv.text(resultNumberStr);
  });
  $("#clear").click(function() {
    inputNumberStr = "";
    resultNumberStr = "";
    inputNumber = 0;
    resultNumber = 0;
    totaldiv.text(resultNumberStr);
  });
  $("#equals").click(function() {
    totaldiv.text(resultNumber.toFixed(3));
    testNumLength(resultNumber);
    inputNumber = 0;
    inputNumberStr = "";
  });
  $("#percentage").click(function() {
    resultNumber = inputNumber / 100;
    inputNumberStr = "";
    inputNumber = 0;
    totaldiv.text(resultNumber);
  });
});

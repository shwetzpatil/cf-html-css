$(document).ready(function() {
  var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length - 9, 9));
      if (number.length > 15) {
        number = "";
        totaldiv.text("Err");
      }
    }
  };
  var expressionstr = "";
  var inputNumberStr = "";
  var resultNumberStr = "";
  var inputNumber = 0;
  var resultNumber = 0;
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text(resultNumber);
  $("#numbers > a").not("#clear").click(function() {
    inputNumberStr += $(this).text();
    inputNumber = parseFloat(inputNumberStr);
    expressionstr += inputNumberStr;
    totaldiv.text(expressionstr);
    testNumLength(inputNumberStr);
  });
  $("#operators > a").not("#equals").click(function() {
    operator = $(this).text();
    expressionstr += operator;
    resultNumber = inputNumber;
    inputNumberStr = "";
    inputNumber = 0;
    totaldiv.text(expressionstr);
  });
  $("#clear").click(function() {
    inputNumberStr = "";
    resultNumberStr = "";
    expressionstr = "";
    inputNumber = 0;
    resultNumber = 0;
    totaldiv.text(expressionstr);
  });
  $("#equals").click(function() {
    // if (operator === "+") {
    //   number = parseFloat(number) + parseFloat(newnumber);
    // } else if (operator === "-") {
    //   number = parseFloat(newnumber) - parseFloat(number);
    // } else if (operator === "/") {
    //   number = parseFloat(newnumber) / parseFloat(number);
    // } else if (operator === "*") {
    //   number = parseFloat(newnumber) * parseFloat(number);
    // }
    // totaldiv.text(number.toFixed(3));
    // testNumLength(number);
    // number = "";
    // newnumber = "";

    // var operator;
    switch (operator) {
      case "+":
        resultNumber = resultNumber + inputNumber;
        break;
      case "-":
        resultNumber = resultNumber - inputNumber;
        break;
      case "*":
        resultNumber = resultNumber * inputNumber;
        break;
      case "/":
        resultNumber = resultNumber / inputNumber;
        break;

      default:
        resultNumber = inputNumber;
        break;
    }
    totaldiv.text(resultNumber.toFixed(3));
    testNumLength(resultNumber);
  });
});

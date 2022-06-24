var firstNumber = parseFloat (prompt("Enter a number"));
var secondNumber = parseFloat (prompt("Enter another number"));
var operator = prompt('Enter operator ( either +, -, * , % or / ): ');


if (operator == '+') {
    
    alert("The sum of the numbers is" +(firstNumber+secondNumber))
}
else if (operator == '-') {
    alert("The difference of the two numbers is" +(firstNumber-secondNumber))
}
else if (operator == '*') {
    alert("The Product of the two numbers is" +(firstNumber*secondNumber))
}
else  if(operator == '/') {
    alert("The Quotient of the two numbers is" +(firstNumber/secondNumber))
}
else  if(operator == '%') {
    alert("The percentage of the number is" +(secondNumber*100/firstNumber))
}


function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    const operator = prompt('Enter operator ( either +, -, * or / ): ');
    let result;

    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else {
        console.log("Invalid operator");
        return;
    }

    console.log(result);
}

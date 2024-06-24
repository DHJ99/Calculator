function calc(){

    let num1;
    let num2;

    num1= new Number(document.getElementById("num1"));
    num2= new Number(document.getElementById("num2"));

    let op=document.getElementById("op");
    let lbloutput=document.getElementById("output");

    console.log(num1+num2);

    switch(op){
        case "+":
            lbloutput.innerHTML=num1+num2;
            break;
        case "-":
            lbloutput.innerHTML=num1-num2;
            break;
        case "/":
            lbloutput.innerHTML=num1/num2;
            break;
        case "*":
            lbloutput.innerHTML=num1*num2;
            break;
    }

    console.log(typeof num1);
    console.log(typeof num2); 

}
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

function add_number(){
    let sum = parseInt(num1.value) + parseInt(num2.value);
    alert(sum);
}

function div_number(){
    let sum = parseInt(num1.value) / parseInt(num2.value);
    alert(sum);
}

function mul_number(){
    let sum = parseInt(num1.value) * parseInt(num2.value);
    alert(sum);
}

function min_number(){
    let sum = parseInt(num1.value) - parseInt(num2.value);
    alert(sum);
}
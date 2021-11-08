let n1 = document.getElementById('num1');
let n2 = document.getElementById('num2');
let res = document.getElementById('result');

document.getElementById('add').addEventListener("click", function() {
    res.value = 
    parseInt(n1.value)+parseInt(n2.value);
});

document.getElementById('minus').addEventListener("click", function() {
    res.value = 
    parseInt(n1.value)-parseInt(n2.value);
});

document.getElementById('divide').addEventListener("click", function() {
    res.value = 
    parseInt(n1.value)/parseInt(n2.value);
});

document.getElementById('multi').addEventListener("click", function() {
    res.value = 
    parseInt(n1.value)*parseInt(n2.value);
});

       let number = document.getElementById('num');
       let increment = document.getElementById('increase');
       let decrement = document.getElementById('decrease');
       
       let integer = 0;
       increment.addEventListener('click',function(){
           integer += 1;
        num.innerHTML = integer;
       })
         decrement.addEventListener('click',function(){
             integer -= 1;
             num.innerHTML = integer;
         })
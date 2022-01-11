
        const minimum = (...inp) =>{
            let min = inp[0];
            for(let i = 0; i < inp.length; i++){
                if(a[i] < min){
                    min = inp[i];
                }
            }
            return min;
        }

        
        let n = minimum(4, 5, 6, 4, 5, 6, 6, 4, 4);
        console.log(n);
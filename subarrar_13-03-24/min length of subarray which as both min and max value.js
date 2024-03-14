let array =[1,2,3,1,3,4,6,4,6,3,1];
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
for(let i=0; i<array.length; i++){
    if(array[i]<min){
        min = array[i];
    }
}
console.log(min)
for(let i =0; i<array.length; i++){
    if(array[i]>max){
        max = array[i];
    }
}
console.log(max);
let cal ;
let minlength = Number.MAX_VALUE;
for(let l=0; l<array.length-1; l++){
    if(array[l]==min){
        for(let r = l+1; r<array.length;r++){
            if(array[r]==max){
                cal = r-l+1
            }
            if(cal<minlength){
                minlength =cal;
            }
        }
    }
}
for(let l =0; l<array.length-1; l++){
    if(array[l]==max){
        for(let r =l+1; r<array.length; r++){
            if(array[r]==max){
                cal = r-l+1
            }
            if(cal<minlength){
                minlength=cal;
            }
        }
    }
}
console.log(minlength);
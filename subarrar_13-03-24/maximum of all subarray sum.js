let array =[4,-1,3,-3];
let cumarray = [];
for(let i = 0; i<array.length; i++){
    if(i==0){
        cumarray.push(array[i]);
        
    }
    else {
        cumarray.push(cumarray[i-1]+array[i])
    }
    
    
}
let sum = 0;
let max = Number.MIN_VALUE
for(let l =0; l<array.length; l++){
    for(let r =l; r<array.length; r++){
        sum =0;
        if(l==0){
            sum = sum + cumarray[r];
        }
        else{
            sum =sum + cumarray[r]-cumarray[l-1]
        }
        if(sum>max){
            max =sum;
        }
    }
}
console.log(max);
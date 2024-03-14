let array =[4,-1,1,6,5];
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
for(let l =0; l<array.length; l++){
    for(let r =l; r<array.length; r++){
        if(l==0){
            sum = sum + cumarray[r];
        }
        else{
            sum =sum + cumarray[r]-cumarray[l-1]
        }
    }
}
console.log(sum);
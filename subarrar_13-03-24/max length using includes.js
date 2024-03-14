let array =[1,2,3,1,3,4,6,4];
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
for(let i=0; i<array.length; i++){
    if(array[i]<min){
        min = array[i];
    }
}
for(let i =0; i<array.length; i++){
    if(array[i]>max){
        max = array[i];
    }
}
console.log(min);
console.log(max);
let maxlength = Number.MIN_VALUE;
let cal;
let subarr = [];
for(let i =0; i<array.length; i++){
    for(let j=i; j<array.length; j++){
        for(let k=i; k<=j;k++){
            subarr.push(array[k]);
        }
       if( subarr.includes(max)){
        if(subarr.includes(min)){
         cal =j-i+1   
           }
       }
       if(cal>maxlength){
        maxlength=cal;
       
       }
        subarr =[];
    }
}
console.log(maxlength);
let array =[4,-1,1,6,5];
let sum = 0;
for(let l=0; l<array.length; l++){
    for(let r = 0; r<array.length;r++){
        for(let k = l; k<=r ; k++){
            sum = sum + array[k];
        }
    }
}
console.log(sum);
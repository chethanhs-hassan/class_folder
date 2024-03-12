let arr = [7,9,5,6,11];
let subarr = [];
for(let i =0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        for(let k=i; k<=j;k++){
            subarr.push(arr[k]);
        }
        console.log(subarr)
        subarr =[];
    }
}
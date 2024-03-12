let arr =[5,7,6,1,-1,0,5,2];
let max = arr[arr.length-1];
let cn =1;
for(let i = arr.length-2;i>=0;i--){
    if(arr[i]>max){
        cn++
        max = arr[i];
    }
}
console.log(cn,max);
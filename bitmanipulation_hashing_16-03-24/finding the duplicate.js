let arr = [2,2,3,1,3,4,5,6,6,2];
let output =[];
for(let i =0; i<arr.length-1;i++){
    if(output.includes(arr[i])){
        continue;
    }
    for(let j = i+1; j<arr.length;j++){
        if(arr[i]==arr[j]){
            output.push(arr[i]);
            break;
        }
    }
}
console.log(output)
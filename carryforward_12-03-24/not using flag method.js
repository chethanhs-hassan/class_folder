let arr = [5,7,6,1,-1,0,5,2];
let leader ;
let cn = 0;
for(let i = 0; i<arr.length;i++){
    leader = arr[i];
    for(let j =i+1; j<arr.length; j++){
        if(arr[i]<=arr[j]){
            leader =arr[j];
            break;
        }
    }
    if(arr[i]==leader){
        cn++;
    }
}
console.log(cn);
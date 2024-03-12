let arr = [5,7,6,1,-1,0,5,2];
let flag = true;
let cn = 0;
for(let i = 0; i<arr.length;i++){
    flag = true;
    for(let j =i+1; j<arr.length; j++){
        if(arr[i]<=arr[j]){
            flag = false;
            break;
        }
    }
    if(flag==true){
        cn++;
    }
}
console.log(cn);
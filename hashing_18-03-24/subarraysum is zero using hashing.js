let arr =[4,-3,-1,8];
let cumarr =[];
for(let i =0;i<arr.length;i++){
    if(i==0){
        cumarr.push(arr[i]);
    }
    else{
        cumarr.push(cumarr[i-1]+arr[i]);
    }
}
console.log(cumarr)
let obj =new Map();
for(let j=0;j< cumarr.length;j++){
    if(obj.has(cumarr[j])){
        obj[cumarr[j]]++
    }
    else{
        obj[cumarr[j]]=1;
    }
}
console.log(obj)
if(obj.size<cumarr.length || obj.has(0)){
    console.log("true");
}
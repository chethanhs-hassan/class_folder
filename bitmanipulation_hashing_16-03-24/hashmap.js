let arr =[2,2,1,5,6,7,6,2];
let obj ={};
for(let i =0;i<arr.length;i++){
    if(arr[i] in obj){
        obj[arr[i]]++
    }
    else{
        obj[arr[i]]=1;
    }
}
console.log(obj);
for(let i in obj){
    if(obj[i]>1){
        console.log(i);
    }
}
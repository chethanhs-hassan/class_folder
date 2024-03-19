let arr = [3,3,4,2,2,5];
let hashmap = new Map();
for(let i =0; i<arr.length; i++){
    if(hashmap.has(arr[i])){
        hashmap.set(arr[i],hashmap.get(arr[i])+1);
    }
    else{
        hashmap.set(arr[i],1);
    }
    
}
for(let j=0; j<arr.length;j++){
    if(hashmap.get(arr[j])==1){
        console.log(arr[j])
        break;
    }
}
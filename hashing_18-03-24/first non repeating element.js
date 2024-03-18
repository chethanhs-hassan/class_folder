let arr =[3,3,4,2,2,5];
let nr;
for(let i =0; i<arr.length;i++){
    let flag = true;
    nr = arr[i];
    for(let j =0; j<arr.length; j++){
        if(i==j){
            continue;
        }
        if(nr == arr[j]){
            flag=false;
            break;
        }
    }
    if(flag==true){
        console.log(nr);
        break;
    }
}
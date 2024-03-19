let arr =[2,4,3,8,9,4,9,4,10];
let op =[];
for(let i =0; i<arr.length-2;i++){
    let numbers= new Set();
    for(let j =i ; j<i+3; j++){
        numbers.add(arr[j]);
    }
    op.push(numbers.size);

}
console.log(op);
let array = [1,3,3,1,4,4,5,6,5];
let output = 0;
for (let i = 0; i<array.length; i++){
    output = output^array[i];
}
console.log(output)
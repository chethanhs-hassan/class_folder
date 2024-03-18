let N =20;
let CN =0;
let i =0;
let j =1;
while(i<=16){
    if((N & j)!=0 ){
        CN++;
    }
    i++;
    j=j<<1;
}
console.log(CN);
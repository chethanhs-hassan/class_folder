function countSetBits(n)
{
  var count = 0;
  while (n>0)
  {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
console.log(countSetBits(22));
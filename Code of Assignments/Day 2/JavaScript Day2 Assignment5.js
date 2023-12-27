function countPrimes(num){
    let count=0
    let primeCount=0;
    let i,j
    for(j=2;j<=num;j++)
    {
    for( i=2;i<=j;i++)
    {
      if(j%i==0)
      count++
    }
  
    if(count==2){
      primeCount++;
    }
    count=0
  
  
  
    }
    return primeCount;
  }
  
  console.log(countPrimes(50));
function printFibonacci(n=10) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  printFibonacci()
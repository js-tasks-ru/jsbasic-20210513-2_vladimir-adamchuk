function factorial(n) {
  let d = 1;
  while(n > 0) {
    d = d * n;
    n--;
  }
  return d;
}

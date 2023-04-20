
  // without class
  function* fibonacci() {
    let current = 0;
    let next = 1;
  
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  const fib = fibonacci();
  let n = 7
  for (let i = 0; i < n; i++) {
    console.log(fib.next().value);
  }
  
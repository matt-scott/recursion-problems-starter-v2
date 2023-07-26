/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

function fibonacci(n) {
  if (n < 2){
      return 1;
  } else {
      return fibonacci(n-2) + fibonacci(n-1);
  }
}

function fibonacci (n, sequence = [0, 1]) {
  debugger

  if (n >= sequence.length) {
      fibonacci(n - 1, sequence);
  }

  let lastIndex = sequence.length - 1;
  let secondLastIndex = sequence.length - 2;
  sequence.push(sequence[lastIndex] + sequence[secondLastIndex]);

  return sequence[n];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}

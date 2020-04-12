// for prime number operation with WebWorkers, check out https://github.com/ronakjethwa/javascript-webworkers

// print prime until N
let primeRequirement = prompt("Prime until when?", "");
let primeNumbers = [];

nextPrime: for (let i = 2; i <= primeRequirement; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue nextPrime;
    }
  }
  primeNumbers.push(i);
}

console.log(primeNumbers);

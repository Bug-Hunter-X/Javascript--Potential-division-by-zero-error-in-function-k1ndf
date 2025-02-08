function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This handles the case where either a or b is 0
  }
  return a / b; // Potential for division by zero if b is 0
}

console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0, 2)); // Output: 0
console.log(foo(5, 2)); // Output: 2.5
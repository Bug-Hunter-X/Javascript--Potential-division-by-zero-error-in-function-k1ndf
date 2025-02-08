function foo(a, b) {
  if (a === 0 || b === 0) {
    if(b === 0 && a != 0){
        return Infinity; // handle the case where b is zero and a is not zero
    }else{
        return 0; // handle the case where either a or b is 0
    }
  }
  return a / b;
}

console.log(foo(10, 0)); // Output: Infinity
console.log(foo(0, 2)); // Output: 0
console.log(foo(5, 2)); // Output: 2.5
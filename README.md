# Javascript: Potential division by zero error in function
This repository contains a Javascript function with a potential division by zero error. The function `foo` takes two arguments `a` and `b` and returns `a/b`.  However, it does not correctly handle the case where `b` is 0, leading to `Infinity` being returned or a runtime error depending on the Javascript environment.

## Bug
The bug lies in the fact that the check `if (a === 0 || b === 0)` does not prevent division by zero in all cases. If `a` is non-zero and `b` is 0, the division will still occur.

## Solution
The solution involves adding more robust check for division by zero before performing the division operation, or use of try-catch block to handle the runtime error if the division by zero is not handled properly.
/* 
Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:

-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
  const reducedFn = (x) => functions.reduceRight((acc, curFn) => curFn(acc), x);

  return reducedFn;
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4));

/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(array, i = 0) {
  debugger
  let flag = true;

  if (i <= array.length - 2) {
      if (array[i] > array[i + 1]) {
          flag = false;
          return flag;
      }

      i++;
      flag = isSorted(array,i);
  }

  return flag;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}

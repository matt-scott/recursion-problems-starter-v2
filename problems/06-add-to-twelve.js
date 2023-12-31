/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

function addToTwelve (array) {
  let i = array.length;
  let rtnVal;

  if (array[0] + array[1] === 12) {
      rtnVal = true;
  }
  else {
      if (i >= 2) {
          rtnVal = addToTwelve(array.slice(1));
      }
      else {
          rtnVal = false;
      }
  }

  return rtnVal;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}

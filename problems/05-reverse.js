/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse (string) {
  debugger
  let newString = ('');

  if (string.length > 0) {
      endLetter = (string.charAt(string.length - 1))
      endLetterRemoved = string.slice(0,string.length - 1)
      newString = endLetter + reverse(endLetterRemoved);
  }

  return newString;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

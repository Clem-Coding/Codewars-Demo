// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My solution :

function breakCamelCase(string) {
  return string.replace(/[A-Z]/g, " " + "$&");
}

// For a more concise solution, instead of using " " + "$&", we could simply use " $&",
//  or alternatively : (/([A-Z])/g," $1") , where $1 refers to the first captured group

// module.exports = breakCamelCase;

export default breakCamelCase;

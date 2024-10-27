//Description :

//Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized
//(known as Upper Camel Case, also often referred to as Pascal case).
//The next words should be always capitalized.

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// My solution :

function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, (match, char) => char.toUpperCase());
}

//// We could also use (_, c) instead of (match, char) to indicate that 'match' is ignored.
// The underscore (_) is a common convention in JavaScript to signal that the parameter is not important and can be ignored.

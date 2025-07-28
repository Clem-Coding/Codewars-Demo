// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My solution :

function generateHashtag(str) {
  const trimmed = str.trim();
  if (!trimmed) return false;

  const words = trimmed.split(" ").filter((w) => w.length > 0);
  const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

  const result = "#" + capitalizedWords.join("");
  return result.length <= 140 ? result : false;
}

export default generateHashtag;

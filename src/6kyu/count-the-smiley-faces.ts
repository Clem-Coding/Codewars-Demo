/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
- Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
- A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
- Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

// My solution :

export function countSmileys(arr: string[]): number {
  let count = 0;
  const validPairOfEyes = [":", ";"];
  const validNoses = ["-", "~"];
  const validMouths = [")", "D"];

  arr.forEach((smiley) => {
    if (smiley.length === 2) {
      if (validPairOfEyes.includes(smiley[0]) && validMouths.includes(smiley[smiley.length - 1])) {
        count++;
      }
    } else if (smiley.length === 3) {
      if (
        validPairOfEyes.includes(smiley[0]) &&
        validNoses.includes(smiley[1]) &&
        validMouths.includes(smiley[smiley.length - 1])
      ) {
        count++;
      }
    }
  });
  return count;
}

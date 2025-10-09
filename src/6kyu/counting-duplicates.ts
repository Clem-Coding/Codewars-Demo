// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that
// occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// My Solution :

export function duplicateCount(text: string): number {
  interface CharCounts {
    [key: string]: number;
  }
  const charCounts = text
    .split("")
    .map((item) => item.toUpperCase())
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as CharCounts);

  return Object.keys(charCounts).filter((key) => charCounts[key] > 1).length;
}

// One of the rare kata where none of the community solutions look alike!

// I liked the solution below because it takes advantage of Set(), which already handles unique values,
// I discovered Set's properties like size, very handy

export function duplicateCount(text: string): number {
  return new Set(
    text
      .toLowerCase()
      .split("")
      .filter((ch, i, arr) => arr.indexOf(ch) !== i)
  ).size;
}

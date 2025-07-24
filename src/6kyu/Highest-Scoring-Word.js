// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My Solution :

function high(x) {
  words = x.split(" ");
  let wordsScores = [];
  for (let i = 0; i < words.length; i++) {
    wordScore = 0;
    for (let j = 0; j < words[i].length; j++) {
      let letter = words[i][j].toLowerCase();
      let letterScore = letter.charCodeAt() - 96;
      wordScore += letterScore;
    }
    wordsScores.push({ word: words[i], score: wordScore });
  }

  let maxWord = wordsScores.reduce((max, current) => {
    return current.score > max.score ? current : max;
  });
  return maxWord.word;
}

export default high;

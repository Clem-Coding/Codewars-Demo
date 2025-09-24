<?php

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

// Three 1's => 1000 points
// Three 6's => 600 points
// Three 5's => 500 points
// Three 4's => 400 points
// Three 3's => 300 points
// Three 2's => 200 points
// One 1 => 100 points
// One 5 => 50 point

// Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

// Throw Score
// --------- ------------------
// 5 1 3 4 1 250: 50 (for the 5) + 2 * 100 (for the 1s)
// 1 1 1 3 1 1100: 1000 (for three 1s) + 100 (for the other 1)
// 2 4 4 5 4 450: 400 (for three 4s) + 50 (for the 5)

// Note: your solution must not modify the input array.


// My Solution :

class GreedIsGood
{
    function score($dice)
    {
        $count = 0;
        $diceCount = array_count_values($dice);

        if (($diceCount[1] ?? 0) >= 3) {
            $count += 1000;
            $count += ($diceCount[5] ?? 0) * 50;
            $count += (($diceCount[1] ?? 0) - 3) * 100;
        } else {
            if (
                ($diceCount[2] ?? 0) >= 3 ||
                ($diceCount[3] ?? 0) >= 3 ||
                ($diceCount[4] ?? 0) >= 3 ||
                ($diceCount[5] ?? 0) >= 3 ||
                ($diceCount[6] ?? 0) >= 3
            ) {
                foreach ([2, 3, 4, 5, 6] as $key) {
                    if (($diceCount[$key] ?? 0) >= 3) {
                        $count += $key * 100;

                        if (($diceCount[5] ?? 0) >= 3) {
                            $count += (($diceCount[5] ?? 0) - 3) * 50;
                        } else {
                            $count += ($diceCount[5] ?? 0) * 50;
                        }

                        $count += ($diceCount[1] ?? 0) * 100;
                    }
                }
            } else {
                $count += ($diceCount[5] ?? 0) * 50;
                $count += ($diceCount[1] ?? 0) * 100;
            }
        }

        return $count;
    }
}

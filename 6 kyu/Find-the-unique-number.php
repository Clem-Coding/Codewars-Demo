<?php

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


// My solution : 

function find_uniq($a)
{
    $counts = [];

    foreach ($a as $value) {
        $key = (string)$value;
        if (isset($counts[$key])) {
            $counts[$key]++;
        } else {
            $counts[$key] = 1;
        }
    }

    foreach ($counts as $number => $occurrence) {
        if ($occurrence === 1) {
            return +$number;
        }
    }
}


// The difficulty of this challenge was that it didn’t just check if the solution was correct but also tested performance.
// My solution is correct but can be improved for very large arrays because it requires two passes and extra memory to count all values.

// I saw this solution in the community and found it interesting because it improves performance by quickly identifying 
// the majority value using only the first three elements :

function find_uniq($a)
{
    $first = $a[0];
    $second = $a[1];
    $third = $a[2];

    $major = ($first === $second || $first === $third) ? $first : $second;

    foreach ($a as $num) {
        if ($num !== $major) {
            return $num;
        }
    }
}

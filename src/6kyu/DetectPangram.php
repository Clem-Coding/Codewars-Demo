<?php

class DetectPangram 
{

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// My solution :

    public function detect_pangram(string $str): bool 
    {

        $count = 0;
        $alphabet = range('a', 'z');
        foreach ($alphabet as $letter) {
            if (stripos($str, $letter) !== false) {
                $count++;
            }
        }
        return $count === 26;
    }

}



// Works fine but not efficient: scans the entire string once per letter (O(26 × n)).
// stripos() restarts each search from the beginning, causing redundant rescans.
// Slight improvement here by exiting early once all letters are found (but still not optimal for very long strings) :

function detect_pangram($string)
{
    $count = 0;
    $alphabet = range('a', 'z');
    foreach ($alphabet as $letter) {
        if (stripos($string, $letter) !== false) {
            $count++;
            if ($count === 26) {
                return true; // Early exit if all letters found
            }
        }
    }
    return false;
}



<?php

class ShortestWord
{

    // Simple, given a string of words, return the length of the shortest word(s).
    // String will never be empty and you do not need to account for different data types.

    // My first easy-to-read solution :

    public function findShort($str)
    {
        $words = explode(" ", $str);
        $lengths = array_map('strlen', $words);
        $shortest = min($lengths);

        return $shortest;
    }
}


    // My second concise solution:

    // public function findShort(string $str): int
    // {
    //     return min(array_map('strlen', explode(" ", $str)));
    // }
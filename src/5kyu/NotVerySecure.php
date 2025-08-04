<?php

// In this example you have to validate if a user input string is alphanumeric. 
//The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

//     At least one character ("" is not valid)
//     Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
//     No whitespaces / underscore


// My Solution :


class AlphanumericValidator
{
    function alphanumeric(string $s): bool
    {
        return preg_match("/^[a-z0-9]+$/i", $s);
    }
}


// I wanted to solve this kata with what I already knew using preg_match and regex,
// but I discovered through the community responses this native PHP function ctype_alnum() (https://www.php.net/manual/en/function.ctype-alnum.php)
// wich checks if all of the characters in the provided string are alphanumeric — really easy and practical!

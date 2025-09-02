<?php



class CreatePhoneNumber
{

    // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers 
    // in the form of a phone number.

    // Example :
    // createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // => returns "(123) 456-7890"

    // The returned format must be correct in order to complete this challenge.

    // Don't forget the space after the closing parentheses!


    // My solution :


    public function createPhoneNumber(array $numbersArray): string
    {
        $firstSegment = implode(array_slice($numbersArray, 0, 3));
        $secondSegment = implode(array_slice($numbersArray, 3, 3));
        $thirdSegment = implode(array_slice($numbersArray, -4));

        return "($firstSegment) $secondSegment-$thirdSegment";
    }
}


// While looking at community solutions, I saw that using clear variable names
// like areaCode, prefix, and lineNumber would make the phone constructor easier to read.


function createPhoneNumber(array $numbersArray): string
{
    $areaCode   = implode(array_slice($numbersArray, 0, 3));
    $prefix     = implode(array_slice($numbersArray, 3, 3));
    $lineNumber = implode(array_slice($numbersArray, -4));

    return "($areaCode) $prefix-$lineNumber";
}


// I also discovered vsprintf(), PHP function that formats strings using an array of values,
// with this very concise and performant solution:

function createPhoneNumber(array $numbersArray): string
{
    return vsprintf("(%d%d%d) %d%d%d-%d%d%d%d", $numbersArray);
}

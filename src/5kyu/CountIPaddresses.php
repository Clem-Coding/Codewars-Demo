<?php

// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

// My solution :

class CountIPaddresses
{
    public static function ipsBetween(string $start, string $end): int
    {
        $startLong = ip2long($start);
        $endLong = ip2long($end);
        return $endLong - $startLong;
    }
}


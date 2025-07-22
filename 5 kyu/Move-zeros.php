<?php

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// My Solution :


function moveZeros(array $items): array
{
    $zeros = [];
    foreach ($items as $key => $item) {
        if ($item === 0 || $item === 0.0) {
            unset($items[$key]);
            $zeros[] = 0;
        }
    }
    return array_merge($items, $zeros);
}

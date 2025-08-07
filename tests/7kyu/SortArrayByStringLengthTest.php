<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class SortArrayByStringLengthTest extends TestCase
{

    public function testSortByLength()
    {
        $kata = new SortArrayByStringLength();
        $this->assertEquals(["I", "To", "Beg", "Life"], $kata->sortByLength(["Beg", "Life", "I", "To"]));
        $this->assertEquals(["", "Pizza", "Brains", "Moderately"], $kata->sortByLength(["", "Moderately", "Brains", "Pizza"]));
        $this->assertEquals(["Short", "Longer", "Longest"], $kata->sortByLength(["Longer", "Longest", "Short"]));
    }
}

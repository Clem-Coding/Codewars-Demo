<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class SumWithoutHighestAndLowestNumberTest extends TestCase
{
    public function testSumWithoutHighestAndLowestNumber()
    {
        $kata = new SumWithoutHighestAndLowestNumber();
        $this->assertSame(6, $kata->sumArray([1, 1, 11, 2, 3]));
        $this->assertSame(16, $kata->sumArray([6, 2, 1, 8, 10]));
    }
}

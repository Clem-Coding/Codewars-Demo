<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class FindTheUniqueNumberTest extends TestCase
{
    public function testFindUnique() 
    {
        $finder = new FindTheUniqueNumber();

        $this->assertSame(2,$finder->find_uniq([1, 1, 1, 2, 1, 1]));
        $this->assertSame(0.55, $finder->find_uniq([0, 0, 0.55, 0, 0]));
        $this->assertSame(1, $finder->find_uniq([0, 1, 0]));
    }
}
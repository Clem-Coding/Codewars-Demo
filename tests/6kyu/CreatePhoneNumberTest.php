<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class CreatePhoneNumberTest extends TestCase
{
    public function testBasicTests()
    {
        $kata = new CreatePhoneNumber();

        $this->assertSame('(123) 456-7890', $kata->createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
        $this->assertSame('(111) 111-1111', $kata->createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
    }
}

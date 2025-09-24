

<?php

use PHPUnit\Framework\TestCase;

// PHPUnit Test Examples:
// TODO: Replace examples and use TDD development by writing your own tests

class GreedIsGoodTest extends TestCase
{

    private $kata;

    protected function setUp(): void
    {
        $this->kata = new GreedIsGood();
    }
    public function testValueShouldBeZero()
    {
        $this->assertSame(0, $this->kata->score([2, 3, 4, 6, 2]), "Incorrect answer for dice = [2, 3, 4, 6, 2]");
    }

    public function testTiplets()
    {
        $this->assertSame(400, $this->kata->score([4, 4, 4, 3, 3]), "Incorrect answer for dice = [4, 4, 4, 3, 3]");
    }

    public function testMixed()
    {
        $this->assertSame(450, $this->kata->score([2, 4, 4, 5, 4]), "Incorrect answer for dice = [2, 4, 4, 5, 4]");
    }


    // add by myself
    public function testMixedTripletsAndSingles()
    {
        $this->assertSame(1100, $this->kata->score([1, 1, 1, 5, 5]), "Incorrect answer for dice = [1,1,1,5,5]");
    }
}

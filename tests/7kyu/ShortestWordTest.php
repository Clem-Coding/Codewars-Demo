<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

class ShortestWordTest extends TestCase
{

    private function doTest(string $s, int $expected)
    {
        $shortestWord = new ShortestWord();
        $this->assertSame(
            $expected,
            $shortestWord->findShort($s),
            "Incorrect answer for findShort(\"$s\")"
        );
    }


    public function testSample()
    {
        $this->doTest("bitcoin take over the world maybe who knows perhaps", 3);
        $this->doTest("turns out random test cases are easier than writing out basic ones", 3);
        $this->doTest("Let's travel abroad shall we", 2);
    }
}

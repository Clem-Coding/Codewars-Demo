<?php

use PHPUnit\Framework\TestCase;


class NotVerySecureTest extends TestCase
{
    public function testAlphanumeric()
    {
        $validator = new AlphanumericValidator();

        $this->doTest($validator, 'Mazinkaiser', true);
        $this->doTest($validator, 'hello world_', false);
        $this->doTest($validator, 'PassW0rd', true);
        $this->doTest($validator, '     ', false);
    }

    private function doTest(AlphanumericValidator $validator, string $inp, bool $exp)
    {
        $msg = "Input = " . json_encode($inp);
        $res = $validator->alphanumeric($inp);
        $this->assertSame($exp, $res, $msg);
    }
}

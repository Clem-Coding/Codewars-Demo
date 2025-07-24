<?php

use PHPUnit\Framework\TestCase;

class CountIPaddressesTest extends TestCase 
{
    public function testCountIPAddresses()
    {
        $this->assertSame(1, CountIPaddresses::ipsBetween("150.0.0.0", "150.0.0.1"));
        $this->assertSame(50, CountIPaddresses::ipsBetween("10.0.0.0", "10.0.0.50"));
        $this->assertSame(246, CountIPaddresses::ipsBetween("20.0.0.10", "20.0.1.0"));
    }
}

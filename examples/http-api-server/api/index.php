<?php
error_reporting(E_ALL);
require_once 'vendor/restler.php';
use Luracast\Restler\Restler;

$r = new Restler();
$r->addAPIClass('Say'); // repeat for more
$r->handle(); //serve the response
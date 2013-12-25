<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$loader = require_once 'restler/vendor/autoload.php';
$loader->setUseIncludePath(true);
use Luracast\Restler\Restler;

$r = new Restler();
$r->addAPIClass('Say'); // repeat for more
$r->addAPIClass('Check'); // repeat for more
$r->handle(); //serve the response